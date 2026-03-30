import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// -- SoA (Structure of Arrays) particle storage --
// Contiguous Float32Arrays for hot-path fields -> cache-friendly, zero GC.
const enum F {
  X, Y, AX, AY, VX, VY,
  SIZE, OPACITY, BASE_OPACITY,
  FLICKER_SPEED, FLICKER_PHASE,
  T, SPEED, SCATTER, RETURN_RATE,
  DEPTH,
  _COUNT,
}
const enum LAYER { FAR = 0, MID = 1, NEAR = 2 }
const enum KIND { SETTLED = 0, FLOW = 1 }

const GOLD_PALETTE = [
  '#d4a04a', '#c9873b', '#db9443', '#e8a94f',
  '#b87a34', '#f0be6a', '#a86e2d', '#dba255',
  '#c48839', '#e0ad5e',
];

@Component({
  selector: 'app-dust-particles',
  standalone: true,
  template: `<canvas #vignetteCanvas class="vig"></canvas><canvas #canvas data-dust class="dust"></canvas>`,
  styles: [`
    :host {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 2;
      pointer-events: none;
    }
    .vig {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
      mix-blend-mode: multiply;
    }
    .dust {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
      mix-blend-mode: screen;
      z-index: auto;
    }
  `],
})
export class DustParticles implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('vignetteCanvas', { static: true }) vigCanvasRef!: ElementRef<HTMLCanvasElement>;

  /** When true, touchmove calls preventDefault to block page scrolling */
  @Input() lockTouch = false;

  /** Scroll progress from homepage: 0 = top, 1 = fully scrolled */
  @Input() scrollProgress = 0;

  private isBrowser: boolean;
  private ctx!: CanvasRenderingContext2D;
  private vigCtx!: CanvasRenderingContext2D;
  private reliefCanvas!: HTMLCanvasElement;
  private reliefCtx!: CanvasRenderingContext2D;
  private readonly RELIEF_SCALE = 0.25;

  // -- SoA particle data --
  private pFloat!: Float32Array;   // F._COUNT floats per particle
  private pLayer!: Uint8Array;     // LAYER enum
  private pKind!: Uint8Array;      // KIND enum
  private pColor!: Uint8Array;     // index into GOLD_PALETTE
  private pCount = 0;

  // Pre-computed spread targets (computed once at init, O(1) per frame)
  // 2 floats per particle: [targetX_norm, targetY_norm] in 0..1 range
  private pSpreadTarget!: Float32Array;
  // Original (home) anchor positions — stored once at init so we can reset
  private pOrigAnchorX!: Float32Array;
  private pOrigAnchorY!: Float32Array;
  // Pre-computed Chebyshev edgeness per particle (0=center, 1=edge)
  private pEdgeness!: Float32Array;

  // Current spread factor per-frame (0=home, 1=fully spread). Lerped smoothly.
  private anchorSpread = 0;
  // Inactivity reset: after 10s of no interaction, particles drift home
  private lastInteractionTime = 0;
  private readonly INACTIVITY_TIMEOUT = 10000; // ms
  private inactivityResetActive = false;

  private isMobile = false;

  // Layer bucket indices (pre-sorted, rebuilt only on particle creation)
  private farIdx!: Uint16Array;
  private midIdx!: Uint16Array;
  private nearIdx!: Uint16Array;
  private farCount = 0;
  private midCount = 0;
  private nearCount = 0;

  // Pre-rendered particle stamp canvases (per color x 3 tiers)
  // Eliminates createRadialGradient per particle per frame
  private stamps!: HTMLCanvasElement[][]; // [colorIdx][tier 0|1|2]
  private readonly STAMP_SIZES = [8, 16, 32, 48]; // px for tiers: fine, medium, large, bokeh

  private animationId: number | null = null;
  private dpr = 1;
  private width = 0;
  private height = 0;
  private time = 0;
  private frameCount = 0;

  // Mouse
  private mouseX = -9999;
  private mouseY = -9999;
  private prevMouseX = -9999;
  private prevMouseY = -9999;
  private mouseVx = 0;
  private mouseVy = 0;
  private mouseActive = false;
  private mouseLastMoveTime = 0;

  // -- Stable Fluids grid (smaller on mobile) --
  private FLUID_N = 48;
  private readonly FLUID_DT = 0.016;
  private readonly FLUID_VISC = 30;
  private readonly FLUID_FORCE = 0.08;
  private readonly FLUID_CURSOR_PX = 28;
  private fluidVx!: Float32Array;
  private fluidVy!: Float32Array;
  private fluidVx0!: Float32Array;
  private fluidVy0!: Float32Array;

  // Invisible mouse radius — smoothed position for vignette brightening
  private cursorSmoothedX = -9999;
  private cursorSmoothedY = -9999;
  private readonly CURSOR_RADIUS = 220;   // px radius of vignette-brighten area
  private cursorStrength = 0;              // 0→1 animated presence

  // Cached vignette gradients (rebuilt on resize, not every frame)
  private vigMain!: CanvasGradient;
  private vigBot!: CanvasGradient;
  private vigTL!: CanvasGradient;
  private vigBL!: CanvasGradient;
  private vigBR!: CanvasGradient;
  private vigLE!: CanvasGradient;

  // Cached bezier control points (rebuilt on resize)
  private bp0x = 0; private bp0y = 0;
  private bp1x = 0; private bp1y = 0;
  private bp2x = 0; private bp2y = 0;
  private bp3x = 0; private bp3y = 0;

  // Scroll-driven transition state (smoothed)
  private smoothScrollProgress = 0;

  private boundResize!: () => void;
  private boundMouseMove!: (e: MouseEvent) => void;
  private boundMouseLeave!: () => void;
  private boundTouchMove!: (e: TouchEvent) => void;
  private boundTouchEnd!: () => void;

  private get flowCount(): number {
    if (this.isMobile) return 60;
    if (this.width < 768) return 200;
    return 500;
  }
  private get settledCount(): number {
    if (this.isMobile) return 800;
    if (this.width < 768) return 2200;
    return 5500;
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    // Detect mobile early — affects particle counts + fluid grid
    this.isMobile = window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
    if (this.isMobile) {
      this.FLUID_N = 24; // smaller grid on mobile
    }

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    this.ctx = ctx;

    const vigCanvas = this.vigCanvasRef.nativeElement;
    const vigCtx = vigCanvas.getContext('2d', { alpha: true });
    if (!vigCtx) return;
    this.vigCtx = vigCtx;

    this.reliefCanvas = document.createElement('canvas');
    this.reliefCtx = this.reliefCanvas.getContext('2d', { alpha: true })!;

    // Pre-render particle stamps
    this.buildStamps();

    this.dpr = Math.min(window.devicePixelRatio, this.isMobile ? 1.0 : 1.5);
    this.onResize();
    this.initFluidGrid();

    this.boundResize = this.onResize.bind(this);
    this.boundMouseMove = this.onMouseMove.bind(this);
    this.boundMouseLeave = this.onMouseLeave.bind(this);
    this.boundTouchMove = this.onTouchMove.bind(this);
    this.boundTouchEnd = this.onTouchEnd.bind(this);

    window.addEventListener('resize', this.boundResize);
    window.addEventListener('mousemove', this.boundMouseMove);
    window.addEventListener('mouseleave', this.boundMouseLeave);
    window.addEventListener('touchmove', this.boundTouchMove, { passive: false });
    window.addEventListener('touchend', this.boundTouchEnd);

    // Allocate SoA arrays
    const total = this.settledCount + this.flowCount;
    this.pFloat = new Float32Array(total * F._COUNT);
    this.pLayer = new Uint8Array(total);
    this.pKind = new Uint8Array(total);
    this.pColor = new Uint8Array(total);
    this.pSpreadTarget = new Float32Array(total * 2);
    this.pOrigAnchorX = new Float32Array(total);
    this.pOrigAnchorY = new Float32Array(total);
    this.pEdgeness = new Float32Array(total);
    this.pCount = total;

    // Layer bucket index arrays
    this.farIdx = new Uint16Array(total);
    this.midIdx = new Uint16Array(total);
    this.nearIdx = new Uint16Array(total);

    let idx = 0;
    for (let i = 0; i < this.settledCount; i++, idx++) {
      this.initSettledParticle(idx);
    }
    for (let i = 0; i < this.flowCount; i++, idx++) {
      this.initFlowParticle(idx, Math.random());
    }

    this.rebuildLayerBuckets();
    this.storeOriginalAnchors();
    this.precomputeSpreadTargets();
    this.lastInteractionTime = performance.now();
    this.animate(0);
  }

  ngOnDestroy(): void {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.boundResize);
    window.removeEventListener('mousemove', this.boundMouseMove);
    window.removeEventListener('mouseleave', this.boundMouseLeave);
    window.removeEventListener('touchmove', this.boundTouchMove);
    window.removeEventListener('touchend', this.boundTouchEnd);
  }

  // -- Pre-render particle stamps --
  // 10 colors x 3 size tiers = 30 tiny offscreen canvases.
  // At draw time we just drawImage with globalAlpha -- no gradient creation.
  private buildStamps(): void {
    this.stamps = [];
    for (let ci = 0; ci < GOLD_PALETTE.length; ci++) {
      const color = GOLD_PALETTE[ci];
      const tier: HTMLCanvasElement[] = [];
      for (let ti = 0; ti < 4; ti++) {
        const sz = this.STAMP_SIZES[ti];
        const c = document.createElement('canvas');
        c.width = sz;
        c.height = sz;
        const cx = c.getContext('2d')!;
        const half = sz / 2;
        if (ti === 3) {
          // Bokeh: very soft diffused glow for depth-of-field blur
          const g = cx.createRadialGradient(half, half, 0, half, half, half);
          g.addColorStop(0, color);
          g.addColorStop(0.18, color);
          g.addColorStop(0.40, color + 'AA');
          g.addColorStop(0.65, color + '44');
          g.addColorStop(1, color + '00');
          cx.fillStyle = g;
          cx.fillRect(0, 0, sz, sz);
        } else if (ti === 2) {
          // Large: solid core + tight soft edge
          const outerR = half;
          const solidR = half * 0.62;
          const g = cx.createRadialGradient(half, half, 0, half, half, outerR);
          g.addColorStop(0, color);
          g.addColorStop(solidR / outerR, color);
          g.addColorStop(1, color + '00');
          cx.fillStyle = g;
          cx.fillRect(0, 0, sz, sz);
        } else if (ti === 1) {
          // Medium: mostly solid, slight soft edge
          const outerR = half;
          const g = cx.createRadialGradient(half, half, 0, half, half, outerR);
          g.addColorStop(0, color);
          g.addColorStop(0.72, color);
          g.addColorStop(1, color + '00');
          cx.fillStyle = g;
          cx.fillRect(0, 0, sz, sz);
        } else {
          // Fine: solid dot
          cx.fillStyle = color;
          cx.beginPath();
          cx.arc(half, half, half, 0, Math.PI * 2);
          cx.fill();
        }
        tier.push(c);
      }
      this.stamps.push(tier);
    }
  }

  private onResize(): void {
    const canvas = this.canvasRef.nativeElement;
    this.dpr = Math.min(window.devicePixelRatio, 1.5);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = this.width * this.dpr;
    canvas.height = this.height * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    const vc = this.vigCanvasRef?.nativeElement;
    if (vc) {
      vc.width = this.width * this.dpr;
      vc.height = this.height * this.dpr;
      this.vigCtx?.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }

    if (this.reliefCanvas) {
      this.reliefCanvas.width = Math.ceil(this.width * this.RELIEF_SCALE);
      this.reliefCanvas.height = Math.ceil(this.height * this.RELIEF_SCALE);
    }

    if (this.fluidVx) {
      this.fluidVx.fill(0); this.fluidVy.fill(0);
      this.fluidVx0.fill(0); this.fluidVy0.fill(0);
    }

    // Cache bezier control points
    const w = this.width, h = this.height;
    this.bp0x = w * 1.02; this.bp0y = h * -0.03;
    this.bp1x = w * 0.82; this.bp1y = h * 0.28;
    this.bp2x = w * 0.62; this.bp2y = h * 0.65;
    this.bp3x = w * 0.55; this.bp3y = h * 1.06;

    // Rebuild cached vignette gradients
    this.buildVignetteGradients();
  }

  private buildVignetteGradients(): void {
    const vc = this.vigCtx;
    if (!vc) return;
    const w = this.width, h = this.height;

    const cx = w * 0.5, cy = h * 0.42;
    const vigR = Math.max(w, h) * 0.85;
    this.vigMain = vc.createRadialGradient(cx, cy, vigR * 0.18, cx, cy, vigR);
    this.vigMain.addColorStop(0, 'rgba(0,0,0,0)');
    this.vigMain.addColorStop(0.35, 'rgba(0,0,0,0.28)');
    this.vigMain.addColorStop(0.55, 'rgba(0,0,0,0.58)');
    this.vigMain.addColorStop(0.75, 'rgba(0,0,0,0.82)');
    this.vigMain.addColorStop(1, 'rgba(0,0,0,0.94)');

    this.vigBot = vc.createLinearGradient(0, h * 0.55, 0, h);
    this.vigBot.addColorStop(0, 'rgba(0,0,0,0)');
    this.vigBot.addColorStop(0.25, 'rgba(0,0,0,0.20)');
    this.vigBot.addColorStop(0.55, 'rgba(0,0,0,0.42)');
    this.vigBot.addColorStop(1, 'rgba(0,0,0,0.65)');

    this.vigTL = vc.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h) * 0.35);
    this.vigTL.addColorStop(0, 'rgba(0,0,0,0.70)');
    this.vigTL.addColorStop(1, 'rgba(0,0,0,0)');

    this.vigBL = vc.createRadialGradient(0, h, 0, 0, h, Math.max(w, h) * 0.30);
    this.vigBL.addColorStop(0, 'rgba(0,0,0,0.60)');
    this.vigBL.addColorStop(1, 'rgba(0,0,0,0)');

    this.vigBR = vc.createRadialGradient(w, h, 0, w, h, Math.max(w, h) * 0.30);
    this.vigBR.addColorStop(0, 'rgba(0,0,0,0.56)');
    this.vigBR.addColorStop(1, 'rgba(0,0,0,0)');

    this.vigLE = vc.createLinearGradient(0, 0, w * 0.18, 0);
    this.vigLE.addColorStop(0, 'rgba(0,0,0,0.38)');
    this.vigLE.addColorStop(1, 'rgba(0,0,0,0)');
  }

  private onMouseMove(e: MouseEvent): void {
    this.prevMouseX = this.mouseX;
    this.prevMouseY = this.mouseY;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.mouseActive = true;
    this.mouseLastMoveTime = performance.now();
    this.lastInteractionTime = performance.now();
    this.inactivityResetActive = false;
  }

  private onMouseLeave(): void { this.mouseActive = false; }

  private onTouchMove(e: TouchEvent): void {
    if (this.lockTouch) {
      e.preventDefault();
    }
    if (e.touches.length > 0) {
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;
      this.mouseX = e.touches[0].clientX;
      this.mouseY = e.touches[0].clientY;
      this.mouseActive = true;
      this.mouseLastMoveTime = performance.now();
      this.lastInteractionTime = performance.now();
      this.inactivityResetActive = false;
    }
  }

  private onTouchEnd(): void { this.mouseActive = false; }

  // -- Bezier helpers (use cached control points) --
  private flowPosX(t: number): number {
    const mt = 1 - t, mt2 = mt * mt, mt3 = mt2 * mt, t2 = t * t, t3 = t2 * t;
    return mt3 * this.bp0x + 3 * mt2 * t * this.bp1x + 3 * mt * t2 * this.bp2x + t3 * this.bp3x;
  }
  private flowPosY(t: number): number {
    const mt = 1 - t, mt2 = mt * mt, mt3 = mt2 * mt, t2 = t * t, t3 = t2 * t;
    return mt3 * this.bp0y + 3 * mt2 * t * this.bp1y + 3 * mt * t2 * this.bp2y + t3 * this.bp3y;
  }
  private flowTangent(t: number): { tx: number; ty: number } {
    const mt = 1 - t;
    const tx = 3 * mt * mt * (this.bp1x - this.bp0x) + 6 * mt * t * (this.bp2x - this.bp1x) + 3 * t * t * (this.bp3x - this.bp2x);
    const ty = 3 * mt * mt * (this.bp1y - this.bp0y) + 6 * mt * t * (this.bp2y - this.bp1y) + 3 * t * t * (this.bp3y - this.bp2y);
    const len = Math.sqrt(tx * tx + ty * ty) || 1;
    return { tx: tx / len, ty: ty / len };
  }

  // -- Particle init (writes directly to SoA arrays) --
  //
  // Ground-plane depth model (reference: cinematic dust surface):
  //   Dense bright particles at the very bottom, exponentially thinning
  //   upward. Upper half of screen is nearly empty — just a few stray
  //   bokeh motes floating in the air above the surface.
  //
  //   FAR  — the distant receding surface. Tiny sharp specks clustered
  //          at the bottom, some reaching into the mid-zone as the
  //          "floor recedes into the distance."
  //   MID  — the bulk of the visible surface. Sharp/medium particles,
  //          heavy at the bottom, thinning sharply upward.
  //   NEAR — a handful of large soft bokeh floating just in front of
  //          the camera, lazily drifting above the surface.
  //
  private initSettledParticle(i: number): void {
    const o = i * F._COUNT;
    const w = this.width, h = this.height;

    // Horizontal spread — full width with slight center concentration
    const x = Math.random() * w;

    // ---- Vertical pre-sample ----
    // We need to know roughly WHERE the particle will sit vertically
    // before assigning its layer, so bigger blurry particles (NEAR) gravitate
    // toward the bottom and smaller sharp ones (FAR) toward the top.
    const nx = x / w;
    const bowlU = 4 * (nx - 0.5) * (nx - 0.5); // 0 at center, 1 at edges

    const surfaceCenter = 0.78;
    const surfaceEdge   = 0.48;
    const surfaceLine = surfaceCenter - bowlU * (surfaceCenter - surfaceEdge);

    const floorCenter = 1.08;
    const floorEdge   = 1.02;
    const floor = floorCenter - bowlU * (floorCenter - floorEdge);

    // Pre-sample a vertical position (0=surface, 1=floor)
    const vSample = Math.pow(Math.random(), 1.8); // bottom-heavy
    // depthBias: 0 at surface (top of band) → 1 at floor (bottom)
    // This biases layer selection so bottom = NEAR, top = FAR
    const depthBias = 1 - vSample; // 0=bottom, 1=top

    // ---- Layer assignment (depth-biased) ----
    // Base ratios: FAR 38% | MID 55% | NEAR 7%
    // depthBias shifts the odds: at bottom, NEAR chance ×4, FAR chance ×0.3
    //                            at top, FAR chance ×2, NEAR chance ×0.1
    const farWeight  = 0.38 * (0.3 + depthBias * 1.7);     // top-heavy: 0.3→2.0
    const midWeight  = 0.55;                                 // even throughout
    const nearWeight = 0.07 * (0.1 + (1 - depthBias) * 3.9); // bottom-heavy: 0.1→4.0
    const totalW = farWeight + midWeight + nearWeight;
    const roll = Math.random() * totalW;
    let layer: number;
    if (roll < farWeight) layer = LAYER.FAR;
    else if (roll < farWeight + midWeight) layer = LAYER.MID;
    else layer = LAYER.NEAR;

    // ---- Vertical placement ----
    //
    // U-SHAPED CURVE: The particle field forms a concave valley.
    //   - Left and right edges: particles rise HIGHER on screen
    //   - Center: particles dip DOWN to the bottom
    //   - Bottom-left and bottom-right corners: more void / sparse
    //

    // Corner softness: gentle fade at edges
    const edgeFade = 1 - Math.pow(bowlU, 0.8) * 0.35; // 1 center, 0.65 at edge

    let y: number;
    if (layer === LAYER.NEAR) {
      // Foreground bokeh — strongly biased to the very bottom
      const nearSurface = surfaceLine + (floor - surfaceLine) * 0.35;
      y = h * (nearSurface + Math.pow(Math.random(), 0.6) * (floor - nearSurface));
    } else if (layer === LAYER.MID) {
      // Main density — bottom-heavy but with a gentle tail upward
      const t = Math.pow(Math.random(), 2.0);
      y = h * (floor - t * (floor - surfaceLine));
    } else {
      // FAR — small sharp particles, allowed to reach higher up
      const farSurface = surfaceLine - 0.14;
      const t = Math.pow(Math.random(), 1.4);
      y = h * (floor - t * (floor - farSurface));
    }

    // ---- Surface fade: no hard line ----
    // Particles near the top of the band fade out smoothly.
    // surfaceProx: 0 = deep in the band (full opacity), 1 = at the surface edge
    const yNorm = y / h;
    const bandRange = floor - surfaceLine;
    const surfaceProx = bandRange > 0.01 ? Math.max(0, Math.min(1, (surfaceLine + bandRange * 0.05 - yNorm + surfaceLine) / (bandRange * 0.35))) : 1;
    // Remap: particles in the top ~35% of the band fade from 1→0
    const posInBand = bandRange > 0.01 ? (yNorm - surfaceLine) / bandRange : 1; // 0=surface, 1=floor
    const surfaceFade = posInBand < 0.35 ? posInBand / 0.35 : 1; // smooth 0→1 over top 35%

    // Bottom proximity for brightness boost
    const bottomProximity = Math.max(0, (yNorm - 0.5) * 2); // 0 at mid, 1 at bottom

    // ---- Size & opacity ----
    // DEPTH from visible size contrast. surfaceFade kills the hard line.
    let size: number, baseOpacity: number;
    if (layer === LAYER.FAR) {
      size = 0.4 + Math.random() * 0.6;
      baseOpacity = (0.15 + Math.random() * 0.30) * (0.55 + bottomProximity * 0.45) * edgeFade * surfaceFade;
    } else if (layer === LAYER.MID) {
      size = 0.8 + Math.random() * 1.6;
      baseOpacity = (0.30 + Math.random() * 0.45) * (0.45 + bottomProximity * 0.55) * edgeFade * surfaceFade;
    } else {
      size = 3.0 + Math.random() * 4.0;
      baseOpacity = (0.04 + Math.random() * 0.08) * edgeFade;
    }

    // Camera-depth value: FAR→0, MID→0.5, NEAR→1
    const depth = layer === LAYER.FAR  ? Math.random() * 0.30
               : layer === LAYER.MID  ? 0.30 + Math.random() * 0.40
               :                        0.70 + Math.random() * 0.30;

    const flickerSpeed = layer === LAYER.NEAR ? 0.15 + Math.random() * 0.30
      : layer === LAYER.MID ? 0.8 + Math.random() * 2.0
      : 1.2 + Math.random() * 2.5;

    const returnRate = layer === LAYER.NEAR ? 0.006 + Math.random() * 0.006
      : layer === LAYER.MID ? 0.025 + Math.random() * 0.025
      : 0.040 + Math.random() * 0.040;

    const pf = this.pFloat;
    pf[o + F.X] = x;
    pf[o + F.Y] = y;
    pf[o + F.AX] = x;
    pf[o + F.AY] = y;
    pf[o + F.VX] = 0;
    pf[o + F.VY] = 0;
    pf[o + F.SIZE] = size;
    pf[o + F.OPACITY] = baseOpacity * Math.random();
    pf[o + F.BASE_OPACITY] = baseOpacity;
    pf[o + F.FLICKER_SPEED] = flickerSpeed;
    pf[o + F.FLICKER_PHASE] = Math.random() * Math.PI * 2;
    pf[o + F.T] = 0;
    pf[o + F.SPEED] = 0;
    pf[o + F.SCATTER] = 0;
    pf[o + F.RETURN_RATE] = returnRate;
    pf[o + F.DEPTH] = depth;

    this.pLayer[i] = layer;
    this.pKind[i] = KIND.SETTLED;
    this.pColor[i] = Math.floor(Math.random() * GOLD_PALETTE.length);
  }

  private initFlowParticle(i: number, initialT: number): void {
    const o = i * F._COUNT;
    const w = this.width, h = this.height;
    const t = initialT;
    const ct = Math.max(0.01, Math.min(0.99, t));
    const tang = this.flowTangent(ct);
    const perpX = -tang.ty, perpY = tang.tx;

    const funnelWidth = 0.06 + ct * 0.55;
    const baseSpread = Math.min(w, h) * funnelWidth;
    const scatter = (Math.random() - 0.5) * 2 * baseSpread;

    const px = this.flowPosX(ct) + perpX * scatter;
    const py = this.flowPosY(ct) + perpY * scatter;

    const roll = Math.random();
    let layer: number;
    if (roll < 0.45) layer = LAYER.FAR;
    else if (roll < 0.82) layer = LAYER.MID;
    else layer = LAYER.NEAR;

    let size: number;
    if (layer === LAYER.NEAR) size = 1.0 + Math.random() * 1.5;
    else if (layer === LAYER.MID) size = 0.3 + Math.random() * 1.1;
    else size = 0.15 + Math.random() * 0.45;

    let baseOpacity: number;
    if (layer === LAYER.NEAR) baseOpacity = 0.03 + Math.random() * 0.07;
    else if (layer === LAYER.MID) baseOpacity = 0.20 + Math.random() * 0.40;
    else baseOpacity = 0.05 + Math.random() * 0.16;

    let speed: number;
    if (layer === LAYER.NEAR) speed = 0.00002 + Math.random() * 0.00003;
    else if (layer === LAYER.MID) speed = 0.00006 + Math.random() * 0.0001;
    else speed = 0.00003 + Math.random() * 0.00006;

    const flickerSpeed = layer === LAYER.NEAR ? 0.3 + Math.random() * 0.5 : 0.8 + Math.random() * 2.0;
    const returnRate = layer === LAYER.NEAR ? 0.015 + Math.random() * 0.015 : 0.03 + Math.random() * 0.04;

    const pf = this.pFloat;
    pf[o + F.X] = px;
    pf[o + F.Y] = py;
    pf[o + F.AX] = px;
    pf[o + F.AY] = py;
    pf[o + F.VX] = 0;
    pf[o + F.VY] = 0;
    pf[o + F.SIZE] = size;
    pf[o + F.OPACITY] = baseOpacity * Math.random();
    pf[o + F.BASE_OPACITY] = baseOpacity;
    pf[o + F.FLICKER_SPEED] = flickerSpeed;
    pf[o + F.FLICKER_PHASE] = Math.random() * Math.PI * 2;
    pf[o + F.T] = t;
    pf[o + F.SPEED] = speed;
    pf[o + F.SCATTER] = scatter;
    pf[o + F.RETURN_RATE] = returnRate;
    pf[o + F.DEPTH] = 0;

    this.pLayer[i] = layer;
    this.pKind[i] = KIND.FLOW;
    this.pColor[i] = Math.floor(Math.random() * GOLD_PALETTE.length);
  }

  private rebuildLayerBuckets(): void {
    let fi = 0, mi = 0, ni = 0;
    for (let i = 0; i < this.pCount; i++) {
      const l = this.pLayer[i];
      if (l === LAYER.FAR) this.farIdx[fi++] = i;
      else if (l === LAYER.MID) this.midIdx[mi++] = i;
      else this.nearIdx[ni++] = i;
    }
    this.farCount = fi;
    this.midCount = mi;
    this.nearCount = ni;
  }

  // -- Main animation loop --
  private animate = (timestamp: number): void => {
    this.time = timestamp * 0.001;
    this.frameCount++;
    const ctx = this.ctx;
    const w = this.width, h = this.height;
    ctx.clearRect(0, 0, w, h);

    // Smooth scroll progress — faster return to 0 for snappy scroll-back reset
    const prevSp = this.smoothScrollProgress;
    const scrollLerp = this.scrollProgress < this.smoothScrollProgress ? 0.18 : 0.12;
    this.smoothScrollProgress += (this.scrollProgress - this.smoothScrollProgress) * scrollLerp;
    const sp = this.smoothScrollProgress;

    // Detect scroll changes as interaction
    if (Math.abs(sp - prevSp) > 0.001) {
      this.lastInteractionTime = performance.now();
      this.inactivityResetActive = false;
    }

    // -- Anchor spread: smoothly transition particle anchors between home and spread --
    // Target spread: scroll determines where anchors should be (0=home, 1=spread)
    let targetSpread = sp < 0.005 ? 0 : (sp > 0.25 ? 1 : sp / 0.25);

    // Inactivity reset: after 10s of no interaction, drift anchors back to home
    const now = performance.now();
    if (now - this.lastInteractionTime > this.INACTIVITY_TIMEOUT) {
      this.inactivityResetActive = true;
    }
    if (this.inactivityResetActive) {
      targetSpread = 0;
    }

    // Smooth the anchor spread (fluid not jumpy)
    const spreadLerp = targetSpread < this.anchorSpread ? 0.025 : 0.04;
    this.anchorSpread += (targetSpread - this.anchorSpread) * spreadLerp;
    // Snap to exactly 0 or 1 when very close to avoid permanent micro-drift
    if (this.anchorSpread < 0.001) this.anchorSpread = 0;
    else if (this.anchorSpread > 0.999) this.anchorSpread = 1;

    // -- Update anchors for settled particles based on current spread --
    this.updateAnchors();

    // Smooth cursor position for invisible vignette brightening
    const lerpRate = 0.12;
    const timeSinceMove = now - this.mouseLastMoveTime;
    if (this.cursorSmoothedX < -9000) {
      this.cursorSmoothedX = this.mouseX;
      this.cursorSmoothedY = this.mouseY;
    } else {
      this.cursorSmoothedX += (this.mouseX - this.cursorSmoothedX) * lerpRate;
      this.cursorSmoothedY += (this.mouseY - this.cursorSmoothedY) * lerpRate;
    }
    // Fade cursor strength in/out
    const targetStrength = (this.mouseActive && timeSinceMove < 1200) ? 1 : 0;
    this.cursorStrength += (targetStrength - this.cursorStrength) * 0.08;

    // Mouse velocity
    if (this.mouseActive) {
      this.mouseVx = (this.mouseX - this.prevMouseX) * 0.6 + this.mouseVx * 0.4;
      this.mouseVy = (this.mouseY - this.prevMouseY) * 0.6 + this.mouseVy * 0.4;
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;
    } else {
      this.mouseVx *= 0.92;
      this.mouseVy *= 0.92;
    }

    // Fluid sim — always run so particles stay interactable
    if (!this.isMobile || this.mouseActive) {
      this.fluidStep();
    }

    // Update all particles (single pass)
    this.updateParticles();

    // Draw back-to-front (no spread lerp in draw — anchors handle it)
    this.drawBucket(ctx, this.farIdx, this.farCount);
    this.drawBucket(ctx, this.midIdx, this.midCount);
    this.drawBucket(ctx, this.nearIdx, this.nearCount);

    // Dynamic vignette (every 3rd frame on mobile, every 2nd on desktop)
    const vigInterval = this.isMobile ? 3 : 2;
    if (this.frameCount % vigInterval === 0) {
      this.drawDynamicVignette();
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  // -- Particle update (single pass, no object allocation) --
  private updateParticles(): void {
    const pf = this.pFloat;
    const pKind = this.pKind;
    const pLayer = this.pLayer;
    const n = this.pCount;
    const time = this.time;
    const w = this.width, h = this.height;
    const minDim = Math.min(w, h);
    const fluidToPixel = Math.max(w, h) / this.FLUID_N;

    const N = this.FLUID_N;
    const S = N + 2;
    const fvx = this.fluidVx;
    const fvy = this.fluidVy;
    const invW = N / w;
    const invH = N / h;

    // Scroll-driven displacement parameters
    const sp = this.smoothScrollProgress;
    const aSpread = this.anchorSpread;
    // Opacity boost for the transition (particles become more visible as they spread)
    const transitionOpacityBoost = aSpread < 0.03 ? 0 : (aSpread > 0.8 ? 0.5 : aSpread / 0.8 * 0.5);

    for (let i = 0; i < n; i++) {
      const o = i * F._COUNT;
      const kind = pKind[i];
      const layer = pLayer[i];

      // -- Update anchor for flow particles --
      if (kind === KIND.FLOW) {
        let t = pf[o + F.T];
        t += pf[o + F.SPEED];

        if (t > 1.06) {
          t = -0.04 - Math.random() * 0.03;
          pf[o + F.VX] = 0;
          pf[o + F.VY] = 0;
          pf[o + F.OPACITY] = 0;
        }
        pf[o + F.T] = t;

        const ct = t < 0.01 ? 0.01 : t > 0.99 ? 0.99 : t;
        const fpx = this.flowPosX(ct);
        const fpy = this.flowPosY(ct);
        const tang = this.flowTangent(ct);
        const perpX = -tang.ty, perpY = tang.tx;

        const funnelWidth = 0.06 + ct * 0.55;
        const spread = minDim * funnelWidth;
        const scatterNorm = pf[o + F.SCATTER] / (minDim * 0.61 || 1);
        const currentScatter = scatterNorm * spread;

        const targetAx = fpx + perpX * currentScatter;
        const targetAy = fpy + perpY * currentScatter;

        pf[o + F.AX] += (targetAx - pf[o + F.AX]) * 0.06;
        pf[o + F.AY] += (targetAy - pf[o + F.AY]) * 0.06;
      }

      // -- Inline fluid sampling (no object allocation) --
      let px = pf[o + F.X];
      let py = pf[o + F.Y];
      let gi = px * invW + 0.5;
      let gj = py * invH + 0.5;
      if (gi < 0.5) gi = 0.5; else if (gi > N + 0.5) gi = N + 0.5;
      if (gj < 0.5) gj = 0.5; else if (gj > N + 0.5) gj = N + 0.5;
      const i0 = gi | 0;
      const j0 = gj | 0;
      const s = gi - i0;
      const tt = gj - j0;
      const s1 = 1 - s;
      const t1 = 1 - tt;
      const idx00 = i0 + S * j0;
      const flVx = s1 * (t1 * fvx[idx00] + tt * fvx[idx00 + S]) + s * (t1 * fvx[idx00 + 1] + tt * fvx[idx00 + S + 1]);
      const flVy = s1 * (t1 * fvy[idx00] + tt * fvy[idx00 + S]) + s * (t1 * fvy[idx00 + 1] + tt * fvy[idx00 + S + 1]);

      const coupling = layer === LAYER.NEAR ? 0.35 : layer === LAYER.MID ? 0.20 : 0.08;
      let vx = pf[o + F.VX] + flVx * fluidToPixel * coupling;
      let vy = pf[o + F.VY] + flVy * fluidToPixel * coupling;

      // Soft containment / spring return to anchor
      if (kind === KIND.SETTLED) {
        const ax = pf[o + F.AX];
        const ay = pf[o + F.AY];
        const dx = px - ax;
        const dy = py - ay;
        // Spring force: always pulls toward anchor, strength scales with distance
        // Stronger pull = particles settle faster at new anchor after spread
        const rr = pf[o + F.RETURN_RATE];
        vx -= dx * rr;
        vy -= dy * rr;
      } else {
        const rr = pf[o + F.RETURN_RATE] * 0.3;
        vx += (pf[o + F.AX] - px) * rr;
        vy += (pf[o + F.AY] - py) * rr;
      }

      // Damping
      const damp = layer === LAYER.NEAR ? 0.96 : layer === LAYER.MID ? 0.94 : 0.90;
      vx *= damp;
      vy *= damp;

      px += vx;
      py += vy;

      // Ambient drift
      const phase = pf[o + F.FLICKER_PHASE];
      const wave = layer === LAYER.NEAR ? 0.012 : layer === LAYER.MID ? 0.009 : 0.004;
      const ds = layer === LAYER.NEAR ? 0.25 : layer === LAYER.MID ? 0.17 : 0.08;
      px += Math.sin(time * ds + phase) * wave;
      py += Math.cos(time * (ds * 0.72) + phase * 1.3) * wave * 0.5;

      pf[o + F.VX] = vx;
      pf[o + F.VY] = vy;
      pf[o + F.X] = px;
      pf[o + F.Y] = py;

      // -- Opacity --
      let envelope = 1;
      if (kind === KIND.FLOW) {
        const t = pf[o + F.T];
        if (t < 0) envelope = 0;
        else if (t < 0.07) envelope = t / 0.07;
        else if (t > 0.93) envelope = (1 - t) / 0.07;
        if (envelope < 0) envelope = 0;
        else if (envelope > 1) envelope = 1;
      }

      const vel = Math.sqrt(vx * vx + vy * vy);
      const displaceFade = 1 - (vel * 0.04 < 0.35 ? vel * 0.04 : 0.35);

      const flicker = 0.65 + 0.35 * Math.sin(time * pf[o + F.FLICKER_SPEED] + phase);
      let targetOp = pf[o + F.BASE_OPACITY] * envelope * flicker * displaceFade;

      // Spread-driven opacity modifiers
      if (aSpread > 0.01) {
        // Boost opacity during spread so particles are visible across the full viewport
        targetOp *= (1 + transitionOpacityBoost);

        // Center-clear: use pre-computed edgeness (O(1) lookup per particle)
        // edgeFrame ramps from 0→1 as spread goes from 0.5→1.0
        const edgeFrame = aSpread < 0.5 ? 0 : (aSpread > 0.95 ? 1 : (aSpread - 0.5) / 0.45);
        if (edgeFrame > 0) {
          const edgeness = this.pEdgeness[i];
          // Particles in inner 40% of screen fade out, outer ones stay
          const centerFade = edgeness < 0.40 ? edgeness / 0.40 : 1;
          targetOp *= 1 - edgeFrame * (1 - centerFade);
        }
      }

      pf[o + F.OPACITY] += (targetOp - pf[o + F.OPACITY]) * (aSpread < 0.02 ? 0.18 : 0.08);
    }
  }

  // -- Smoothly lerp particle anchors between home and spread positions --
  // This runs every frame but is O(n) only on the anchor arrays (cache-friendly).
  // The anchorSpread value is already smoothed in the animate loop.
  private updateAnchors(): void {
    const pf = this.pFloat;
    const pKind = this.pKind;
    const n = this.pCount;
    const spread = this.anchorSpread;
    const st = this.pSpreadTarget;
    const origX = this.pOrigAnchorX;
    const origY = this.pOrigAnchorY;
    const w = this.width, h = this.height;

    for (let i = 0; i < n; i++) {
      if (pKind[i] !== KIND.SETTLED) continue;
      const o = i * F._COUNT;
      // Lerp anchor between original home position and spread target
      const homeX = origX[i];
      const homeY = origY[i];
      const spreadX = st[i * 2] * w;
      const spreadY = st[i * 2 + 1] * h;
      pf[o + F.AX] = homeX + (spreadX - homeX) * spread;
      pf[o + F.AY] = homeY + (spreadY - homeY) * spread;
    }
  }

  // -- Store original anchor positions so we can reset after spread --
  private storeOriginalAnchors(): void {
    const pf = this.pFloat;
    const n = this.pCount;
    for (let i = 0; i < n; i++) {
      const o = i * F._COUNT;
      this.pOrigAnchorX[i] = pf[o + F.AX];
      this.pOrigAnchorY[i] = pf[o + F.AY];
    }
  }

  // -- Pre-compute spread targets + edgeness at init (O(n) once, O(1) per frame) --
  // This eliminates the per-frame updateScrollOffsets() O(n) loop.
  // Each particle gets a deterministic target position (normalized 0..1)
  // and a pre-computed Chebyshev edgeness for center-clear opacity.
  private precomputeSpreadTargets(): void {
    const n = this.pCount;
    const st = this.pSpreadTarget;
    const pe = this.pEdgeness;

    for (let i = 0; i < n; i++) {
      // Math.random() at init — truly uncorrelated X/Y, runs once so perf is fine
      const rx = Math.random();
      const ry = Math.random();

      // Slight overshoot beyond viewport so particles cover the very edges
      st[i * 2]     = rx * 1.06 - 0.03; // -0.03..1.03
      st[i * 2 + 1] = ry * 1.06 - 0.03;

      // Pre-compute Chebyshev distance from center for this target position
      // 0 = dead center, 1 = edge/corner
      const normX = Math.abs(rx - 0.5) * 2; // 0..1
      const normY = Math.abs(ry - 0.5) * 2; // 0..1
      pe[i] = normX > normY ? normX : normY;
    }
  }

  // -- Draw a bucket of particles using pre-rendered stamps --
  // Spread offsets and center-clear are computed inline here.
  // Since we must iterate all visible particles for Canvas2D drawImage
  // anyway, this adds zero extra loops. The scroll progress `sp` is
  // a single float → O(1) scroll cost per frame.
  private drawBucket(ctx: CanvasRenderingContext2D, indices: Uint16Array, count: number): void {
    const pf = this.pFloat;
    const pColor = this.pColor;
    const stamps = this.stamps;
    const w = this.width, h = this.height;

    for (let b = 0; b < count; b++) {
      const i = indices[b];
      const o = i * F._COUNT;
      const opacity = pf[o + F.OPACITY];
      if (opacity < 0.004) continue;

      const px = pf[o + F.X];
      const py = pf[o + F.Y];

      // Quick off-screen cull (wider margin for bokeh draw sizes)
      const sz = pf[o + F.SIZE];
      const margin = sz * 4;
      if (px < -margin || px > w + margin || py < -margin || py > h + margin) continue;

      const ci = pColor[i];
      const depth = pf[o + F.DEPTH];
      let tier: number, drawSize: number;

      // Camera DOF stamp selection: layer determines sharpness
      if (depth > 0.65) {
        // NEAR / foreground — large soft bokeh glow
        tier = 3;
        drawSize = sz * 2.8;
      } else if (depth > 0.25) {
        // MID / focal plane — crisp, in-focus
        if (sz > 1.4) {
          tier = 2;
          drawSize = sz * 2.2;
        } else if (sz > 0.7) {
          tier = 1;
          drawSize = sz * 2.2;
        } else {
          tier = 0;
          drawSize = sz * 2.4;
        }
      } else {
        // FAR / background — small sharp dots
        if (sz > 0.6) {
          tier = 1;
          drawSize = sz * 2.0;
        } else {
          tier = 0;
          drawSize = sz * 2.4;
        }
      }

      // Bottom blur: particles in bottom 20% progressively switch to
      // softer bokeh stamp and grow larger, dissolving the bottom edge.
      const bottomRatio = py / h;
      if (bottomRatio > 0.80) {
        const blur = (bottomRatio - 0.80) / 0.20; // 0→1 toward bottom
        tier = blur > 0.3 ? 3 : (tier < 2 ? 2 : tier); // shift to softer stamp
        drawSize *= (1 + blur * 1.2); // grow larger as they go down
      }

      ctx.globalAlpha = opacity;
      ctx.drawImage(stamps[ci][tier], px - drawSize * 0.5, py - drawSize * 0.5, drawSize, drawSize);
    }
    ctx.globalAlpha = 1;
  }



  // -- Dynamic vignette --
  private drawDynamicVignette(): void {
    const vc = this.vigCtx;
    if (!vc) return;
    const w = this.width, h = this.height;
    const rc = this.reliefCtx;
    const rw = this.reliefCanvas.width;
    const rh = this.reliefCanvas.height;
    const sp = this.smoothScrollProgress;

    // Downscale + blur + amplify relief (skip on mobile — expensive compositing)
    if (!this.isMobile) {
      rc.clearRect(0, 0, rw, rh);
      rc.filter = 'blur(6px)';
      rc.drawImage(this.canvasRef.nativeElement, 0, 0, rw, rh);
      rc.filter = 'none';

      // Amplify (3 passes)
      rc.globalCompositeOperation = 'lighter';
      rc.drawImage(this.reliefCanvas, 0, 0);
      rc.drawImage(this.reliefCanvas, 0, 0);
      rc.drawImage(this.reliefCanvas, 0, 0);
      rc.globalCompositeOperation = 'source-over';
    }

    // Paint vignette darkness using cached gradients
    vc.clearRect(0, 0, w, h);
    vc.globalCompositeOperation = 'source-over';
    vc.globalAlpha = 1;

    vc.fillStyle = this.vigMain;
    vc.fillRect(0, 0, w, h);
    vc.fillStyle = this.vigBot;
    vc.fillRect(0, 0, w, h);
    vc.fillStyle = this.vigTL;
    vc.fillRect(0, 0, w, h);
    vc.fillStyle = this.vigBL;
    vc.fillRect(0, 0, w, h);
    vc.fillStyle = this.vigBR;
    vc.fillRect(0, 0, w, h);
    vc.fillStyle = this.vigLE;
    vc.fillRect(0, 0, w, h);

    // Scroll-driven deepening: progressive darkness that feels atmospheric
    if (sp > 0.05) {
      // Darkness intensifies with scroll, max at ~0.7 progress
      const darkPhase = sp > 0.65 ? 1 : (sp - 0.05) / 0.6;
      const darkenAlpha = darkPhase * 0.75;

      // Central clearing — shrinks as edge-framing kicks in
      const edgeProg = sp < 0.25 ? 0 : (sp > 0.7 ? 1 : (sp - 0.25) / 0.45);
      const clearRadius = edgeProg > 0
        ? Math.max(w, h) * (0.15 + (1 - edgeProg) * 0.25)
        : Math.max(w, h) * 0.4 * (1 - darkPhase);

      const cx = w * 0.5, cy = h * 0.5;
      const outerR = Math.max(w, h) * 0.9;
      const gDark = vc.createRadialGradient(cx, cy, clearRadius, cx, cy, outerR);
      gDark.addColorStop(0, `rgba(0,0,0,0)`);
      gDark.addColorStop(0.3, `rgba(0,0,0,${darkenAlpha * 0.3})`);
      gDark.addColorStop(0.6, `rgba(0,0,0,${darkenAlpha * 0.65})`);
      gDark.addColorStop(1, `rgba(0,0,0,${darkenAlpha * 0.95})`);
      vc.fillStyle = gDark;
      vc.fillRect(0, 0, w, h);

      // Additional uniform darkness layer for deep scroll
      if (darkPhase > 0.4) {
        const deepAlpha = (darkPhase - 0.4) / 0.6 * 0.5;
        vc.fillStyle = `rgba(0,0,0,${deepAlpha})`;
        vc.fillRect(0, 0, w, h);
      }
    }

    // Erase darkness where particles exist (skip on mobile — expensive compositing)
    if (!this.isMobile) {
      vc.globalCompositeOperation = 'destination-out';
      vc.imageSmoothingEnabled = true;
      const reliefAlpha = sp > 0.1 ? Math.max(0.15, 1 - sp * 1.2) : 1;
      vc.globalAlpha = reliefAlpha;
      vc.drawImage(this.reliefCanvas, 0, 0, w, h);
      vc.globalAlpha = 1;
    }

    // Invisible mouse radius: erase vignette darkness around cursor
    if (this.cursorStrength > 0.005) {
      const cx = this.cursorSmoothedX;
      const cy = this.cursorSmoothedY;
      const r = this.CURSOR_RADIUS;
      const alpha = this.cursorStrength * 0.55; // max ~55% vignette removal
      const g = vc.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, `rgba(0,0,0,${alpha})`);
      g.addColorStop(0.4, `rgba(0,0,0,${alpha * 0.6})`);
      g.addColorStop(0.7, `rgba(0,0,0,${alpha * 0.2})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      vc.fillStyle = g;
      vc.beginPath();
      vc.arc(cx, cy, r, 0, Math.PI * 2);
      vc.fill();
    }

    vc.globalCompositeOperation = 'source-over';
    vc.globalAlpha = 1;
  }

  // =====================================
  // Stable Fluids (Stam 1999)
  // =====================================

  private initFluidGrid(): void {
    const size = (this.FLUID_N + 2) * (this.FLUID_N + 2);
    this.fluidVx = new Float32Array(size);
    this.fluidVy = new Float32Array(size);
    this.fluidVx0 = new Float32Array(size);
    this.fluidVy0 = new Float32Array(size);
  }

  private fluidStep(): void {
    const dt = this.FLUID_DT;
    const visc = this.FLUID_VISC;
    let tmp: Float32Array;

    this.fluidAddForce();

    tmp = this.fluidVx; this.fluidVx = this.fluidVx0; this.fluidVx0 = tmp;
    tmp = this.fluidVy; this.fluidVy = this.fluidVy0; this.fluidVy0 = tmp;
    this.fluidDiffuse(1, this.fluidVx, this.fluidVx0, visc, dt);
    this.fluidDiffuse(2, this.fluidVy, this.fluidVy0, visc, dt);

    this.fluidProject(this.fluidVx, this.fluidVy, this.fluidVx0, this.fluidVy0);

    tmp = this.fluidVx; this.fluidVx = this.fluidVx0; this.fluidVx0 = tmp;
    tmp = this.fluidVy; this.fluidVy = this.fluidVy0; this.fluidVy0 = tmp;
    this.fluidAdvect(1, this.fluidVx, this.fluidVx0, this.fluidVx0, this.fluidVy0, dt);
    this.fluidAdvect(2, this.fluidVy, this.fluidVy0, this.fluidVx0, this.fluidVy0, dt);

    this.fluidProject(this.fluidVx, this.fluidVy, this.fluidVx0, this.fluidVy0);
  }

  private fluidAddForce(): void {
    const N = this.FLUID_N;
    const S = N + 2;
    const mx = this.mouseVx, my = this.mouseVy;
    const mouseSpeed = Math.sqrt(mx * mx + my * my);
    if (mouseSpeed < 0.5) return;

    const gi = (this.mouseX / this.width) * N;
    const gj = (this.mouseY / this.height) * N;
    const gridR = Math.max(2, this.FLUID_CURSOR_PX / Math.max(this.width, this.height) * N);

    const fx = mx * this.FLUID_FORCE;
    const fy = my * this.FLUID_FORCE;

    const iMin = Math.max(1, gi - gridR | 0);
    const iMax = Math.min(N, Math.ceil(gi + gridR));
    const jMin = Math.max(1, gj - gridR | 0);
    const jMax = Math.min(N, Math.ceil(gj + gridR));
    const gridR2 = gridR * gridR;
    const invR = 1 / gridR;

    for (let j = jMin; j <= jMax; j++) {
      const dy = j - gj;
      const dy2 = dy * dy;
      const base = S * j;
      for (let i = iMin; i <= iMax; i++) {
        const dx = i - gi;
        const dist2 = dx * dx + dy2;
        if (dist2 > gridR2) continue;
        const d = 1 - Math.sqrt(dist2) * invR;
        const falloff = d * d;
        const idx = i + base;
        this.fluidVx[idx] += fx * falloff;
        this.fluidVy[idx] += fy * falloff;
      }
    }
  }

  private fluidDiffuse(b: number, x: Float32Array, x0: Float32Array, visc: number, dt: number): void {
    const N = this.FLUID_N;
    const S = N + 2;
    const a = visc * dt;
    const inv = 1 / (1 + 4 * a);
    for (let k = 0; k < 4; k++) {
      for (let j = 1; j <= N; j++) {
        const base = S * j;
        for (let i = 1; i <= N; i++) {
          const idx = i + base;
          x[idx] = (x0[idx] + a * (x[idx - 1] + x[idx + 1] + x[idx - S] + x[idx + S])) * inv;
        }
      }
      this.fluidSetBnd(b, x);
    }
  }

  private fluidAdvect(b: number, d: Float32Array, d0: Float32Array, u: Float32Array, v: Float32Array, dt: number): void {
    const N = this.FLUID_N;
    const S = N + 2;
    const dt0 = dt * N;
    const nHalf = N + 0.5;
    for (let j = 1; j <= N; j++) {
      const base = S * j;
      for (let i = 1; i <= N; i++) {
        const idx = i + base;
        let x = i - dt0 * u[idx];
        let y = j - dt0 * v[idx];
        if (x < 0.5) x = 0.5; else if (x > nHalf) x = nHalf;
        if (y < 0.5) y = 0.5; else if (y > nHalf) y = nHalf;
        const i0 = x | 0;
        const j0 = y | 0;
        const s1 = x - i0;
        const s0 = 1 - s1;
        const t1 = y - j0;
        const t0 = 1 - t1;
        const b00 = i0 + S * j0;
        const b01 = b00 + S;
        d[idx] = s0 * (t0 * d0[b00] + t1 * d0[b01]) + s1 * (t0 * d0[b00 + 1] + t1 * d0[b01 + 1]);
      }
    }
    this.fluidSetBnd(b, d);
  }

  private fluidProject(u: Float32Array, v: Float32Array, p: Float32Array, div: Float32Array): void {
    const N = this.FLUID_N;
    const S = N + 2;
    const h = 1.0 / N;
    const h5 = -0.5 * h;
    const n5 = 0.5 * N;

    for (let j = 1; j <= N; j++) {
      const base = S * j;
      for (let i = 1; i <= N; i++) {
        const idx = i + base;
        div[idx] = h5 * (u[idx + 1] - u[idx - 1] + v[idx + S] - v[idx - S]);
        p[idx] = 0;
      }
    }
    this.fluidSetBnd(0, div);
    this.fluidSetBnd(0, p);

    for (let k = 0; k < 4; k++) {
      for (let j = 1; j <= N; j++) {
        const base = S * j;
        for (let i = 1; i <= N; i++) {
          const idx = i + base;
          p[idx] = (div[idx] + p[idx - 1] + p[idx + 1] + p[idx - S] + p[idx + S]) * 0.25;
        }
      }
      this.fluidSetBnd(0, p);
    }

    for (let j = 1; j <= N; j++) {
      const base = S * j;
      for (let i = 1; i <= N; i++) {
        const idx = i + base;
        u[idx] -= n5 * (p[idx + 1] - p[idx - 1]);
        v[idx] -= n5 * (p[idx + S] - p[idx - S]);
      }
    }
    this.fluidSetBnd(1, u);
    this.fluidSetBnd(2, v);
  }

  private fluidSetBnd(b: number, x: Float32Array): void {
    const N = this.FLUID_N;
    const S = N + 2;
    const negX = b === 1 ? -1 : 1;
    const negY = b === 2 ? -1 : 1;
    const n1 = N + 1;
    for (let i = 1; i <= N; i++) {
      const si = S * i;
      x[si] = negX * x[1 + si];
      x[n1 + si] = negX * x[N + si];
      x[i] = negY * x[i + S];
      x[i + S * n1] = negY * x[i + S * N];
    }
    x[0] = 0.5 * (x[1] + x[S]);
    x[n1] = 0.5 * (x[N] + x[n1 + S]);
    x[S * n1] = 0.5 * (x[1 + S * n1] + x[S * N]);
    x[n1 + S * n1] = 0.5 * (x[N + S * n1] + x[n1 + S * N]);
  }
}
