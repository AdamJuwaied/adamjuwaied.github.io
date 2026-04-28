import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

// =====================================================================
// GPU-accelerated dust particle system using Three.js
//
// Architecture:
//   - ALL 6000 particles in ONE draw call (instanced Points geometry)
//   - Position, drift, flicker, spread computed in vertex shader
//   - DOF bokeh + gold palette in fragment shader
//   - Vignette rendered as fullscreen post-process quad
//   - Fluid sim stays CPU-side, uploaded as tiny DataTexture (50x50)
//   - mix-blend-mode: screen via CSS on the canvas
//
// This replaces:
//   - 3 Canvas2D contexts (dust + vignette + relief)
//   - Per-particle drawImage loop (6000 calls/frame)
//   - Per-particle JS opacity/position calculations
//   - Canvas2D gradient vignette compositing
// =====================================================================

// -- Layer constants matching original --
const LAYER_FAR = 0;
const LAYER_MID = 1;
const LAYER_NEAR = 2;

const GOLD_PALETTE_RGB = [
  [0.937, 0.620, 0.180], // #EF9E2E — warm amber gold
  [0.878, 0.545, 0.130], // #E08B21 — deep amber
  [0.965, 0.690, 0.235], // #F6B03C — bright amber gold
  [0.827, 0.498, 0.110], // #D37F1C — rich amber
  [0.910, 0.588, 0.165], // #E8962A — medium amber
  [0.984, 0.745, 0.298], // #FBBE4C — light amber gold
  [0.780, 0.455, 0.094], // #C77418 — copper gold
  [0.925, 0.635, 0.200], // #ECA233 — classic amber
  [0.859, 0.525, 0.125], // #DB8620 — golden amber
  [0.949, 0.710, 0.267], // #F2B544 — warm gold highlight
];

// ===================== SHADERS =====================

const PARTICLE_VERTEX = /* glsl */ `
  // Per-particle attributes (set once at init, read-only on GPU)
  attribute float aBaseX;
  attribute float aBaseY;
  attribute float aBaseOpacity;
  attribute float aSize;
  attribute float aLayer;       // 0=FAR, 1=MID, 2=NEAR
  attribute float aDepth;       // 0..1 camera depth
  attribute float aFlickerSpeed;
  attribute float aFlickerPhase;
  attribute float aColorIndex;
  attribute float aHash;        // deterministic hash for spread

  // Dynamic per-particle attributes (updated from JS each frame)
  attribute float aPosX;
  attribute float aPosY;
  attribute float aOpacity;

  // Uniforms
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uDpr;

  // Varyings to fragment
  varying float vOpacity;
  varying float vDepth;
  varying float vColorIndex;
  varying float vSize;

  void main() {
    // Convert pixel coords to NDC (-1..1)
    float ndcX = (aPosX / uResolution.x) * 2.0 - 1.0;
    float ndcY = 1.0 - (aPosY / uResolution.y) * 2.0;

    gl_Position = vec4(ndcX, ndcY, 0.0, 1.0);

    // Point size in device pixels — layer-based DOF sizing
    float basePx = aSize;
    float dofMul;
    if (aDepth > 0.65) {
      dofMul = 2.8; // NEAR bokeh
    } else if (aDepth > 0.25) {
      dofMul = 2.2; // MID focused
    } else {
      dofMul = 2.0; // FAR sharp
    }

    // Bottom blur: particles in bottom 20% grow larger
    float bottomRatio = aPosY / uResolution.y;
    float bottomBlur = bottomRatio > 0.80 ? (bottomRatio - 0.80) / 0.20 : 0.0;
    dofMul *= (1.0 + bottomBlur * 1.2);

    gl_PointSize = max(1.0, basePx * dofMul * uDpr);

    // Pass to fragment
    vOpacity = aOpacity;
    vDepth = aDepth;
    vColorIndex = aColorIndex;
    vSize = aSize;
  }
`;

const PARTICLE_FRAGMENT = /* glsl */ `
  precision mediump float;

  varying float vOpacity;
  varying float vDepth;
  varying float vColorIndex;
  varying float vSize;

  uniform vec3 uPalette[10];

  void main() {
    if (vOpacity < 0.003) discard;

    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv) * 2.0; // 0 at center, 1 at edge

    // DOF-based alpha profile
    float alpha;
    if (vDepth > 0.65) {
      // NEAR: very soft bokeh glow
      float inner = smoothstep(0.0, 0.18, dist);
      float outer = 1.0 - smoothstep(0.18, 1.0, dist);
      alpha = mix(1.0, 0.0, smoothstep(0.0, 1.0, dist * dist));
    } else if (vDepth > 0.25) {
      // MID: crisp with tight soft edge
      alpha = 1.0 - smoothstep(0.55, 1.0, dist);
    } else {
      // FAR: solid dot, sharp
      alpha = 1.0 - smoothstep(0.65, 1.0, dist);
    }

    if (alpha < 0.003) discard;

    // Color from palette
    int ci = int(vColorIndex);
    vec3 color = uPalette[0];
    // Manual palette lookup (WebGL1 compat — no dynamic indexing)
    if (ci == 1) color = uPalette[1];
    else if (ci == 2) color = uPalette[2];
    else if (ci == 3) color = uPalette[3];
    else if (ci == 4) color = uPalette[4];
    else if (ci == 5) color = uPalette[5];
    else if (ci == 6) color = uPalette[6];
    else if (ci == 7) color = uPalette[7];
    else if (ci == 8) color = uPalette[8];
    else if (ci == 9) color = uPalette[9];

    // Premultiplied alpha output (matches Canvas2D SrcOver compositing)
    float a = alpha * vOpacity;
    gl_FragColor = vec4(color * a, a);
  }
`;

const VIGNETTE_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const VIGNETTE_FRAGMENT = /* glsl */ `
  precision mediump float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform float uScrollField;
  uniform vec2 uCursor;
  uniform float uCursorStrength;

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;

    // -- Main radial vignette (center-weighted, elliptical) --
    vec2 center = vec2(0.5, 0.42);
    vec2 diff = uv - center;
    diff.x *= aspect;
    float vigR = length(diff) / (max(aspect, 1.0) * 0.85);

    float mainVig = smoothstep(0.18, 1.0, vigR);
    mainVig = mainVig * mainVig * 0.94; // max darkness

    // -- Bottom gradient --
    float botVig = smoothstep(0.55, 1.0, uv.y) * 0.65;

    // -- Corner darkening --
    float tlDist = length(uv * vec2(aspect, 1.0)) / (max(aspect, 1.0) * 0.35);
    float tlVig = (1.0 - smoothstep(0.0, 1.0, tlDist)) * 0.70;

    float blDist = length((uv - vec2(0.0, 1.0)) * vec2(aspect, 1.0)) / (max(aspect, 1.0) * 0.30);
    float blVig = (1.0 - smoothstep(0.0, 1.0, blDist)) * 0.60;

    float brDist = length((uv - vec2(1.0, 1.0)) * vec2(aspect, 1.0)) / (max(aspect, 1.0) * 0.30);
    float brVig = (1.0 - smoothstep(0.0, 1.0, brDist)) * 0.56;

    // -- Left edge --
    float leVig = (1.0 - smoothstep(0.0, 0.18, uv.x)) * 0.38;

    // Combine base vignette
    float darkness = max(mainVig, max(botVig, max(tlVig, max(blVig, max(brVig, leVig)))));

    // -- Scroll-driven deepening --
    if (uScrollField > 0.05) {
      float darkPhase = uScrollField > 0.65 ? 1.0 : (uScrollField - 0.05) / 0.6;
      float darkenAlpha = darkPhase * 0.75;

      float edgeProg = uScrollField < 0.25 ? 0.0 : (uScrollField > 0.7 ? 1.0 : (uScrollField - 0.25) / 0.45);
      float clearR = edgeProg > 0.0
        ? (0.15 + (1.0 - edgeProg) * 0.25)
        : 0.4 * (1.0 - darkPhase);

      vec2 scrollDiff = uv - vec2(0.5, 0.5);
      scrollDiff.x *= aspect;
      float scrollDist = length(scrollDiff) / (max(aspect, 1.0) * 0.9);

      float scrollVig = smoothstep(clearR, 1.0, scrollDist) * darkenAlpha;
      darkness = max(darkness, scrollVig);

      if (darkPhase > 0.4) {
        float deepAlpha = (darkPhase - 0.4) / 0.6 * 0.5;
        darkness = max(darkness, deepAlpha);
      }
    }

    // -- Cursor brightening (erase vignette around cursor) --
    if (uCursorStrength > 0.005) {
      vec2 cursorUV = uCursor / uResolution;
      cursorUV.y = 1.0 - cursorUV.y;
      vec2 cursorDiff = uv - cursorUV;
      cursorDiff.x *= aspect;
      float cursorR = 220.0 / uResolution.y;
      float cursorDist = length(cursorDiff) / cursorR;
      float cursorMask = (1.0 - smoothstep(0.0, 1.0, cursorDist)) * uCursorStrength * 0.55;
      darkness -= cursorMask;
    }

    darkness = clamp(darkness, 0.0, 1.0);

    gl_FragColor = vec4(0.0, 0.0, 0.0, darkness);
  }
`;

@Component({
  selector: 'app-dust-particles-gl',
  standalone: true,
  template: `<canvas #vigCanvas class="vig-gl"></canvas><canvas #glCanvas data-dust class="dust-gl"></canvas>`,
  styles: [`
    :host {
      display: block;
      position: fixed;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      /* Force GPU compositing layer — prevents iOS fixed-position jank during scroll */
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      /* will-change toggled via JS in onDirectScroll() — only active during scroll */
    }
    .vig-gl {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
    }
    .dust-gl {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
      mix-blend-mode: normal;
      z-index: auto;
    }
    /* Mobile: hide WebGL vignette canvas, use CSS vignette instead */
    @media (max-width: 1023px) and (hover: none) {
      .vig-gl {
        display: none !important;
      }
    }
  `],
})
export class DustParticlesGL implements OnInit, OnDestroy {
  @ViewChild('glCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('vigCanvas', { static: true }) vigCanvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() lockTouch = false;
  @Input() scrollProgress = 0;

  private isBrowser: boolean;
  private readonly hostEl = inject(ElementRef<HTMLElement>);
  private willChangeTimer: ReturnType<typeof setTimeout> | null = null;
  private renderer!: THREE.WebGLRenderer;
  private vigRenderer!: THREE.WebGLRenderer | null; // null on mobile (CSS vignette instead)
  private scene!: THREE.Scene;
  private camera!: THREE.OrthographicCamera;

  // Particle system
  private particleGeometry!: THREE.BufferGeometry;
  private particleMaterial!: THREE.ShaderMaterial;
  private particlePoints!: THREE.Points;

  // Vignette
  private vignetteScene!: THREE.Scene;
  private vignetteCamera!: THREE.OrthographicCamera;
  private vignetteMaterial!: THREE.ShaderMaterial;

  // -- Particle SoA data (CPU-side, identical structure to original) --
  private pPosX!: Float32Array;
  private pPosY!: Float32Array;
  private pVX!: Float32Array;
  private pVY!: Float32Array;
  private pBaseX!: Float32Array;    // current "home" (drifts with liquid displacement)
  private pBaseY!: Float32Array;
  private pBirthX!: Float32Array;   // original birth position (never changes)
  private pBirthY!: Float32Array;
  private pSize!: Float32Array;
  private pOpacity!: Float32Array;
  private pBaseOpacity!: Float32Array;
  private pFlickerSpeed!: Float32Array;
  private pFlickerPhase!: Float32Array;
  private pT!: Float32Array;     // bezier T for flow particles
  private pSpeed!: Float32Array;  // flow speed
  private pScatter!: Float32Array;
  private pRate!: Float32Array;   // cooldown or return rate
  private pDepth!: Float32Array;
  private pLayer!: Uint8Array;
  private pKind!: Uint8Array;     // 0=settled, 1=flow
  private pColor!: Uint8Array;
  private pActive!: Uint8Array;
  private pCount = 0;

  // Viewport
  private width = 0;
  private height = 0;
  private dpr = 1;
  private time = 0;
  private frameCount = 0;
  private isMobile = false;
  private animationId: number | null = null;

  // Mouse
  private mouseX = -9999;
  private mouseY = -9999;
  private prevMouseX = -9999;
  private prevMouseY = -9999;
  private mouseVx = 0;
  private mouseVy = 0;
  private mouseActive = false;
  private mouseLastMoveTime = 0;

  // Cursor smoothing for vignette
  private cursorSmoothedX = -9999;
  private cursorSmoothedY = -9999;
  private cursorStrength = 0;

  // Scroll
  private smoothScrollProgress = 0;
  private globalScrollField = 0;
  private lastScrollChangeTime = 0;
  private prevScrollInput = 0;
  private isScrolling = false;
  // Direct scroll progress — computed from window.scrollY, bypasses Angular input delay
  private directScrollProgress = 0;
  // Scroll velocity tracking — drives particle displacement force
  private scrollVelocity = 0;
  private prevScrollY = 0;
  private smoothScrollVelocity = 0;

  private mobileFrameSkip = 0; // throttle: render every Nth frame on mobile
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private isRestartScheduled = false;

  // CSS vignette element for mobile (replaces WebGL vignette canvas)
  private cssVignetteEl: HTMLElement | null = null;

  // Fluid energy tracking — lets fluid dissipate naturally after mouse stops
  private fluidHasEnergy = false;

  // Home slot reassignment for ball-pit behavior
  // Each settled particle springs toward pBaseX/pBaseY (its "home").
  // pHomeSlot maps each particle to a birth-position index.
  // When the user stops interacting, slots are reassigned so displaced
  // particles target the nearest available formation position — like a ball pit.
  private pHomeSlot!: Uint16Array;
  private homeReassignNeeded = false;
  private wasInteracting = false;
  private lastInteractionTime = 0;

  // Bezier control points (cached)
  private bp0x = 0; private bp0y = 0;
  private bp1x = 0; private bp1y = 0;
  private bp2x = 0; private bp2y = 0;
  private bp3x = 0; private bp3y = 0;

  // -- Stable Fluids grid --
  private FLUID_N = 48;
  private readonly FLUID_DT = 0.016;
  private readonly FLUID_VISC = 20;
  private readonly FLUID_FORCE = 0.15;
  private readonly FLUID_CURSOR_PX = 70;
  private fluidVx!: Float32Array;
  private fluidVy!: Float32Array;
  private fluidVx0!: Float32Array;
  private fluidVy0!: Float32Array;

  // Bound event handlers
  private boundResize!: () => void;
  private boundMouseMove!: (e: MouseEvent) => void;
  private boundMouseLeave!: () => void;
  private boundTouchMove!: (e: TouchEvent) => void;
  private boundTouchEnd!: () => void;
  private boundDirectScroll!: () => void;

  private get flowCount(): number {
    if (this.isMobile) return 0;
    if (this.width < 768) return 200;
    return 500;
  }
  private get settledCount(): number {
    if (this.isMobile) return 40;
    if (this.width < 768) return 2200;
    return 5500;
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.isMobile = window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
    if (this.isMobile) this.FLUID_N = 16;
    if (this.isMobile) this.lastScrollChangeTime = performance.now();

    this.dpr = Math.min(window.devicePixelRatio, this.isMobile ? 0.5 : 1.5);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.initThree();
    this.initFluidGrid();
    this.initParticles();
    if (!this.isMobile) {
      this.initVignette();
    } else {
      this.vigRenderer = null;
      this.initCssVignette();
    }



    this.boundResize = this.onResize.bind(this);
    this.boundMouseMove = this.onMouseMove.bind(this);
    this.boundMouseLeave = this.onMouseLeave.bind(this);
    this.boundTouchMove = this.onTouchMove.bind(this);
    this.boundTouchEnd = this.onTouchEnd.bind(this);
    this.boundDirectScroll = this.onDirectScroll.bind(this);

    window.addEventListener('resize', this.boundResize);
    window.addEventListener('mousemove', this.boundMouseMove);
    window.addEventListener('mouseleave', this.boundMouseLeave);
    window.addEventListener('touchmove', this.boundTouchMove, { passive: true });
    window.addEventListener('touchend', this.boundTouchEnd);
    // Direct scroll listener — bypasses Angular input chain for zero-delay scroll tracking
    window.addEventListener('scroll', this.boundDirectScroll, { passive: true });

    this.animate(0);
  }

  ngOnDestroy(): void {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
    window.removeEventListener('resize', this.boundResize);
    window.removeEventListener('mousemove', this.boundMouseMove);
    window.removeEventListener('mouseleave', this.boundMouseLeave);
    window.removeEventListener('touchmove', this.boundTouchMove);
    window.removeEventListener('touchend', this.boundTouchEnd);
    window.removeEventListener('scroll', this.boundDirectScroll);

    this.renderer?.dispose();
    this.vigRenderer?.dispose();
    this.particleGeometry?.dispose();
    this.particleMaterial?.dispose();
    this.vignetteMaterial?.dispose();
    this.cssVignetteEl?.remove();
  }

  private restartRaf(): void {
    // Guard against double-invoke: onDirectScroll and onTouchMove can both fire
    // in the same event-loop tick with animationId === null.
    if (this.animationId === null && !this.isRestartScheduled) {
      this.isRestartScheduled = true;
      requestAnimationFrame((t) => {
        this.isRestartScheduled = false;
        if (this.animationId === null) this.animate(t);
      });
    }
  }

  // ===================== THREE.JS SETUP =====================

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(this.width, this.height);
    this.renderer.autoClear = false;

    // Vignette renderer — desktop only (mobile uses CSS vignette)
    if (!this.isMobile) {
      const vigCanvas = this.vigCanvasRef.nativeElement;
      this.vigRenderer = new THREE.WebGLRenderer({
        canvas: vigCanvas,
        alpha: true,
        antialias: false,
        premultipliedAlpha: true,
        powerPreference: 'high-performance',
      });
      this.vigRenderer.setPixelRatio(this.dpr);
      this.vigRenderer.setSize(this.width, this.height);
    }

    // Particle scene: orthographic, maps pixels to clip space
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  }

  // ===================== PARTICLES =====================

  private initParticles(): void {
    const total = this.settledCount + this.flowCount;
    this.pCount = total;

    // Allocate SoA arrays
    this.pPosX = new Float32Array(total);
    this.pPosY = new Float32Array(total);
    this.pVX = new Float32Array(total);
    this.pVY = new Float32Array(total);
    this.pBaseX = new Float32Array(total);
    this.pBaseY = new Float32Array(total);
    this.pBirthX = new Float32Array(total);
    this.pBirthY = new Float32Array(total);
    this.pSize = new Float32Array(total);
    this.pOpacity = new Float32Array(total);
    this.pBaseOpacity = new Float32Array(total);
    this.pFlickerSpeed = new Float32Array(total);
    this.pFlickerPhase = new Float32Array(total);
    this.pT = new Float32Array(total);
    this.pSpeed = new Float32Array(total);
    this.pScatter = new Float32Array(total);
    this.pRate = new Float32Array(total);
    this.pDepth = new Float32Array(total);
    this.pLayer = new Uint8Array(total);
    this.pKind = new Uint8Array(total);
    this.pColor = new Uint8Array(total);
    this.pActive = new Uint8Array(total);

    // Cache bezier
    this.cacheBezier();

    // Init particles
    let idx = 0;
    for (let i = 0; i < this.settledCount; i++, idx++) this.initSettledParticle(idx);
    for (let i = 0; i < this.flowCount; i++, idx++) this.initFlowParticle(idx, Math.random());

    // Init home slot identity mapping (particle i targets birth position i)
    this.pHomeSlot = new Uint16Array(this.settledCount);
    for (let i = 0; i < this.settledCount; i++) this.pHomeSlot[i] = i;

    // Build GPU geometry
    this.buildParticleGeometry();
  }

  private buildParticleGeometry(): void {
    const n = this.pCount;
    this.particleGeometry = new THREE.BufferGeometry();

    // Static attributes (set once)
    const baseXAttr = new THREE.Float32BufferAttribute(this.pBaseX, 1);
    const baseYAttr = new THREE.Float32BufferAttribute(this.pBaseY, 1);
    const baseOpAttr = new THREE.Float32BufferAttribute(this.pBaseOpacity, 1);
    const sizeAttr = new THREE.Float32BufferAttribute(this.pSize, 1);
    const layerAttr = new THREE.Float32BufferAttribute(new Float32Array(this.pLayer), 1);
    const depthAttr = new THREE.Float32BufferAttribute(this.pDepth, 1);
    const flickSpeedAttr = new THREE.Float32BufferAttribute(this.pFlickerSpeed, 1);
    const flickPhaseAttr = new THREE.Float32BufferAttribute(this.pFlickerPhase, 1);
    const hashAttr = new THREE.Float32BufferAttribute(this.pFlickerPhase.map(p => p * 0.15915494), 1);

    // Color as float array
    const colorFloat = new Float32Array(n);
    for (let i = 0; i < n; i++) colorFloat[i] = this.pColor[i];
    const colorAttr = new THREE.Float32BufferAttribute(colorFloat, 1);

    this.particleGeometry.setAttribute('aBaseX', baseXAttr);
    this.particleGeometry.setAttribute('aBaseY', baseYAttr);
    this.particleGeometry.setAttribute('aBaseOpacity', baseOpAttr);
    this.particleGeometry.setAttribute('aSize', sizeAttr);
    this.particleGeometry.setAttribute('aLayer', layerAttr);
    this.particleGeometry.setAttribute('aDepth', depthAttr);
    this.particleGeometry.setAttribute('aFlickerSpeed', flickSpeedAttr);
    this.particleGeometry.setAttribute('aFlickerPhase', flickPhaseAttr);
    this.particleGeometry.setAttribute('aColorIndex', colorAttr);
    this.particleGeometry.setAttribute('aHash', hashAttr);

    // Dynamic attributes (updated every frame)
    // IMPORTANT: Use BufferAttribute directly, NOT Float32BufferAttribute.
    // Float32BufferAttribute copies the array internally, breaking live updates.
    const posXAttr = new THREE.BufferAttribute(this.pPosX, 1);
    posXAttr.setUsage(THREE.DynamicDrawUsage);
    const posYAttr = new THREE.BufferAttribute(this.pPosY, 1);
    posYAttr.setUsage(THREE.DynamicDrawUsage);
    const opacityAttr = new THREE.BufferAttribute(this.pOpacity, 1);
    opacityAttr.setUsage(THREE.DynamicDrawUsage);

    this.particleGeometry.setAttribute('aPosX', posXAttr);
    this.particleGeometry.setAttribute('aPosY', posYAttr);
    this.particleGeometry.setAttribute('aOpacity', opacityAttr);

    // Three.js requires a 'position' attribute for draw-count resolution
    const dummyPos = new Float32Array(n * 3);
    this.particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dummyPos, 3));

    // Build palette uniform
    const paletteVec3 = GOLD_PALETTE_RGB.map(c => new THREE.Vector3(c[0], c[1], c[2]));

    this.particleMaterial = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VERTEX,
      fragmentShader: PARTICLE_FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(this.width, this.height) },
        uDpr: { value: this.dpr },
        uPalette: { value: paletteVec3 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
    });

    this.particlePoints = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.particlePoints.frustumCulled = false;
    this.scene.add(this.particlePoints);
  }

  // ===================== VIGNETTE =====================

  private initVignette(): void {
    this.vignetteScene = new THREE.Scene();
    this.vignetteCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.vignetteMaterial = new THREE.ShaderMaterial({
      vertexShader: VIGNETTE_VERTEX,
      fragmentShader: VIGNETTE_FRAGMENT,
      uniforms: {
        uResolution: { value: new THREE.Vector2(this.width, this.height) },
        uScrollField: { value: 0 },
        uCursor: { value: new THREE.Vector2(-9999, -9999) },
        uCursorStrength: { value: 0 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const vigQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      this.vignetteMaterial,
    );
    vigQuad.frustumCulled = false;
    this.vignetteScene.add(vigQuad);
  }

  /** Mobile-only: CSS radial gradient vignette instead of WebGL canvas */
  private initCssVignette(): void {
    const el = document.createElement('div');
    el.style.cssText = `
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 85% 90% at 50% 42%,
        transparent 0%,
        rgba(0,0,0,0.15) 40%,
        rgba(0,0,0,0.55) 70%,
        rgba(0,0,0,0.85) 100%);
    `;
    this.cssVignetteEl = el;
    // Insert before the dust canvas so it renders behind particles
    const host = this.canvasRef.nativeElement.parentElement;
    if (host) host.insertBefore(el, host.firstChild);
  }

  // ===================== EVENT HANDLERS =====================

  private onResize(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio, this.isMobile ? 0.5 : 1.5);

    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(this.width, this.height);
    if (this.vigRenderer) {
      this.vigRenderer.setPixelRatio(this.dpr);
      this.vigRenderer.setSize(this.width, this.height);
    }

    // Update uniforms
    if (this.particleMaterial) {
      this.particleMaterial.uniforms['uResolution'].value.set(this.width, this.height);
      this.particleMaterial.uniforms['uDpr'].value = this.dpr;
    }
    if (this.vignetteMaterial) {
      this.vignetteMaterial.uniforms['uResolution'].value.set(this.width, this.height);
    }

    this.cacheBezier();

    if (this.fluidVx) {
      this.fluidVx.fill(0); this.fluidVy.fill(0);
      this.fluidVx0.fill(0); this.fluidVy0.fill(0);
    }
  }

  private onMouseMove(e: MouseEvent): void {
    const nx = e.clientX, ny = e.clientY;
    const dx = nx - this.mouseX, dy = ny - this.mouseY;
    // Only count as "active" if cursor actually moved >= 2px
    if (dx * dx + dy * dy >= 4) {
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;
      this.mouseX = nx;
      this.mouseY = ny;
      this.mouseActive = true;
      this.mouseLastMoveTime = performance.now();
    }
  }

  private onMouseLeave(): void { this.mouseActive = false; }

  private onTouchMove(e: TouchEvent): void {
    if (e.touches.length > 0) {
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;
      this.mouseX = e.touches[0].clientX;
      this.mouseY = e.touches[0].clientY;
      this.mouseActive = true;
      this.mouseLastMoveTime = performance.now();
    }
    if (this.isMobile) this.restartRaf();
  }

  private onTouchEnd(): void { this.mouseActive = false; }

  /** Direct scroll handler — reads scrollY without Angular input chain delay */
  private onDirectScroll(): void {
    const scrollY = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;
    const transitionDist = vh * 0.38;
    this.directScrollProgress = Math.min(1, Math.max(0, scrollY / transitionDist));
    // Track raw scroll velocity (px/event) for particle displacement force
    const delta = scrollY - this.prevScrollY;
    this.scrollVelocity = delta;
    this.prevScrollY = scrollY;
    // Pin will-change only during scroll, release it 500ms after scroll stops
    this.hostEl.nativeElement.style.willChange = 'transform';
    if (this.willChangeTimer) clearTimeout(this.willChangeTimer);
    this.willChangeTimer = setTimeout(() => {
      this.hostEl.nativeElement.style.willChange = 'auto';
      this.willChangeTimer = null;
    }, 500);
    if (this.isMobile) this.restartRaf();
  }

  // ===================== BEZIER HELPERS =====================

  private cacheBezier(): void {
    const w = this.width, h = this.height;
    this.bp0x = w * 1.02; this.bp0y = h * -0.03;
    this.bp1x = w * 0.82; this.bp1y = h * 0.28;
    this.bp2x = w * 0.62; this.bp2y = h * 0.65;
    this.bp3x = w * 0.55; this.bp3y = h * 1.06;
  }

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

  // ===================== PARTICLE INIT =====================

  private initSettledParticle(i: number): void {
    const w = this.width, h = this.height;
    const x = Math.random() * w;

    const nx = x / w;
    const bowlU = 4 * (nx - 0.5) * (nx - 0.5);

    const surfaceCenter = 0.78;
    const surfaceEdge = 0.48;
    const surfaceLine = surfaceCenter - bowlU * (surfaceCenter - surfaceEdge);

    const floorCenter = 1.08;
    const floorEdge = 1.02;
    const floor = floorCenter - bowlU * (floorCenter - floorEdge);

    const vSample = Math.pow(Math.random(), 1.8);
    const depthBias = 1 - vSample;

    const farWeight = 0.38 * (0.3 + depthBias * 1.7);
    const midWeight = 0.55;
    const nearWeight = 0.07 * (0.1 + (1 - depthBias) * 3.9);
    const totalW = farWeight + midWeight + nearWeight;
    const roll = Math.random() * totalW;
    let layer: number;
    if (roll < farWeight) layer = LAYER_FAR;
    else if (roll < farWeight + midWeight) layer = LAYER_MID;
    else layer = LAYER_NEAR;

    const edgeFade = 1 - Math.pow(bowlU, 0.8) * 0.35;

    let y: number;
    if (layer === LAYER_NEAR) {
      const nearSurface = surfaceLine + (floor - surfaceLine) * 0.35;
      y = h * (nearSurface + Math.pow(Math.random(), 0.6) * (floor - nearSurface));
    } else if (layer === LAYER_MID) {
      const t = Math.pow(Math.random(), 2.0);
      y = h * (floor - t * (floor - surfaceLine));
    } else {
      const farSurface = surfaceLine - 0.14;
      const t = Math.pow(Math.random(), 1.4);
      y = h * (floor - t * (floor - farSurface));
    }

    const yNorm = y / h;
    const bandRange = floor - surfaceLine;
    const posInBand = bandRange > 0.01 ? (yNorm - surfaceLine) / bandRange : 1;
    const surfaceFade = posInBand < 0.35 ? posInBand / 0.35 : 1;
    const bottomProximity = Math.max(0, (yNorm - 0.5) * 2);

    let size: number, baseOpacity: number;
    if (layer === LAYER_FAR) {
      size = 0.4 + Math.random() * 0.6;
      baseOpacity = (0.15 + Math.random() * 0.30) * (0.55 + bottomProximity * 0.45) * edgeFade * surfaceFade;
    } else if (layer === LAYER_MID) {
      size = 0.8 + Math.random() * 1.6;
      baseOpacity = (0.30 + Math.random() * 0.45) * (0.45 + bottomProximity * 0.55) * edgeFade * surfaceFade;
    } else {
      size = 3.0 + Math.random() * 4.0;
      baseOpacity = (0.04 + Math.random() * 0.08) * edgeFade;
    }

    const depth = layer === LAYER_FAR ? Math.random() * 0.30
      : layer === LAYER_MID ? 0.30 + Math.random() * 0.40
      : 0.70 + Math.random() * 0.30;

    const flickerSpeed = layer === LAYER_NEAR ? 0.15 + Math.random() * 0.30
      : layer === LAYER_MID ? 0.8 + Math.random() * 2.0
      : 1.2 + Math.random() * 2.5;

    this.pPosX[i] = x;
    this.pPosY[i] = y;
    this.pVX[i] = 0;
    this.pVY[i] = 0;
    this.pBaseX[i] = x;
    this.pBaseY[i] = y;
    this.pBirthX[i] = x;
    this.pBirthY[i] = y;
    this.pSize[i] = size;
    this.pOpacity[i] = baseOpacity * Math.random();
    this.pBaseOpacity[i] = baseOpacity;
    this.pFlickerSpeed[i] = flickerSpeed;
    this.pFlickerPhase[i] = Math.random() * Math.PI * 2;
    this.pT[i] = 0;
    this.pSpeed[i] = 0;
    this.pScatter[i] = 0;
    this.pRate[i] = 0;
    this.pDepth[i] = depth;
    this.pLayer[i] = layer;
    this.pKind[i] = 0; // SETTLED
    this.pColor[i] = Math.floor(Math.random() * GOLD_PALETTE_RGB.length);
    this.pActive[i] = 0;
  }

  private initFlowParticle(i: number, initialT: number): void {
    const w = this.width, h = this.height;
    const t = initialT;
    const ct = Math.max(0.01, Math.min(0.99, t));
    const tang = this.flowTangent(ct);
    const perpX = -tang.ty, perpY = tang.tx;
    const minDim = Math.min(w, h);

    const funnelWidth = 0.06 + ct * 0.55;
    const baseSpread = minDim * funnelWidth;
    const scatter = (Math.random() - 0.5) * 2 * baseSpread;

    const px = this.flowPosX(ct) + perpX * scatter;
    const py = this.flowPosY(ct) + perpY * scatter;

    const roll = Math.random();
    let layer: number;
    if (roll < 0.45) layer = LAYER_FAR;
    else if (roll < 0.82) layer = LAYER_MID;
    else layer = LAYER_NEAR;

    let size: number;
    if (layer === LAYER_NEAR) size = 1.0 + Math.random() * 1.5;
    else if (layer === LAYER_MID) size = 0.3 + Math.random() * 1.1;
    else size = 0.15 + Math.random() * 0.45;

    let baseOpacity: number;
    if (layer === LAYER_NEAR) baseOpacity = 0.03 + Math.random() * 0.07;
    else if (layer === LAYER_MID) baseOpacity = 0.20 + Math.random() * 0.40;
    else baseOpacity = 0.05 + Math.random() * 0.16;

    let speed: number;
    if (layer === LAYER_NEAR) speed = 0.00002 + Math.random() * 0.00003;
    else if (layer === LAYER_MID) speed = 0.00006 + Math.random() * 0.0001;
    else speed = 0.00003 + Math.random() * 0.00006;

    const flickerSpeed = layer === LAYER_NEAR ? 0.3 + Math.random() * 0.5 : 0.8 + Math.random() * 2.0;
    const returnRate = layer === LAYER_NEAR ? 0.015 + Math.random() * 0.015 : 0.03 + Math.random() * 0.04;

    this.pPosX[i] = px;
    this.pPosY[i] = py;
    this.pVX[i] = 0;
    this.pVY[i] = 0;
    this.pBaseX[i] = px;
    this.pBaseY[i] = py;
    this.pBirthX[i] = px;
    this.pBirthY[i] = py;
    this.pSize[i] = size;
    this.pOpacity[i] = baseOpacity * Math.random();
    this.pBaseOpacity[i] = baseOpacity;
    this.pFlickerSpeed[i] = flickerSpeed;
    this.pFlickerPhase[i] = Math.random() * Math.PI * 2;
    this.pT[i] = t;
    this.pSpeed[i] = speed;
    this.pScatter[i] = scatter;
    this.pRate[i] = returnRate;
    this.pDepth[i] = 0;
    this.pLayer[i] = layer;
    this.pKind[i] = 1; // FLOW
    this.pColor[i] = Math.floor(Math.random() * GOLD_PALETTE_RGB.length);
    this.pActive[i] = 0;
  }

  /**
   * Greedy nearest-neighbor reassignment of home slots.
   * For each particle, assigns it to the nearest unoccupied birth-position slot.
   * Particles closest to their current slot are processed first (they keep it),
   * so only displaced particles actually get reassigned.
   * Uses a spatial grid for O(N) average complexity.
   */
  /**
   * Swap-cascade home slot reassignment (ball-pit behavior).
   *
   * For each displaced particle, finds a nearby particle where swapping
   * their home slots reduces the total distance both need to travel.
   * Multiple passes propagate swaps outward like a cascade — the same
   * way balls shift in a ball pit when you scoop some out.
   */
  private reassignHomeSlots(): void {
    const n = this.settledCount;
    if (n === 0) return;
    const posX = this.pPosX, posY = this.pPosY;
    const bx = this.pBirthX, by = this.pBirthY;
    const hs = this.pHomeSlot;

    // Build spatial grid of particles indexed by current position
    const cellSize = 60;
    const cols = Math.ceil(this.width / cellSize) + 1;
    const rows = Math.ceil(this.height / cellSize) + 1;
    const gridLen = cols * rows;
    const grid: number[][] = new Array(gridLen);
    for (let k = 0; k < gridLen; k++) grid[k] = [];
    for (let i = 0; i < n; i++) {
      const gx = Math.max(0, Math.min(cols - 1, (posX[i] / cellSize) | 0));
      const gy = Math.max(0, Math.min(rows - 1, (posY[i] / cellSize) | 0));
      grid[gy * cols + gx].push(i);
    }

    // Pairwise swap passes: for each displaced particle, find the best
    // nearby swap partner that reduces total travel distance.
    // Multiple passes propagate swaps like a cascade (ball-pit effect).
    const displacedThresh = 100; // 10px squared
    const maxPasses = this.isMobile ? 2 : 5;
    for (let pass = 0; pass < maxPasses; pass++) {
      let swapCount = 0;
      for (let i = 0; i < n; i++) {
        const hi = hs[i];
        const dxi = posX[i] - bx[hi], dyi = posY[i] - by[hi];
        const d2i = dxi * dxi + dyi * dyi;
        if (d2i < displacedThresh) continue;

        const gx = Math.max(0, Math.min(cols - 1, (posX[i] / cellSize) | 0));
        const gy = Math.max(0, Math.min(rows - 1, (posY[i] / cellSize) | 0));

        let bestJ = -1, bestSaving = 0;
        for (let dy = -2; dy <= 2; dy++) {
          const ny = gy + dy;
          if (ny < 0 || ny >= rows) continue;
          for (let dx = -2; dx <= 2; dx++) {
            const nx = gx + dx;
            if (nx < 0 || nx >= cols) continue;
            const cell = grid[ny * cols + nx];
            for (let ci = 0; ci < cell.length; ci++) {
              const j = cell[ci];
              if (j === i) continue;
              const hj = hs[j];
              // Current total distance²
              const dxj = posX[j] - bx[hj], dyj = posY[j] - by[hj];
              const curTotal = d2i + dxj * dxj + dyj * dyj;
              // Swapped total distance²
              const sxi = posX[i] - bx[hj], syi = posY[i] - by[hj];
              const sxj = posX[j] - bx[hi], syj = posY[j] - by[hi];
              const swpTotal = sxi * sxi + syi * syi + sxj * sxj + syj * syj;
              const saving = curTotal - swpTotal;
              if (saving > bestSaving) {
                bestSaving = saving;
                bestJ = j;
              }
            }
          }
        }

        if (bestJ >= 0) {
          const tmp = hs[i];
          hs[i] = hs[bestJ];
          hs[bestJ] = tmp;
          swapCount++;
        }
      }
      if (swapCount === 0) break; // converged
    }

    // Snap base positions to new homes immediately.
    // Swaps minimize distance, so new homes are closer to current positions.
    for (let i = 0; i < n; i++) {
      this.pBaseX[i] = bx[hs[i]];
      this.pBaseY[i] = by[hs[i]];
    }
  }

  // ===================== ANIMATION LOOP =====================

  private animate = (timestamp: number): void => {
    this.animationId = requestAnimationFrame(this.animate);

    // Mobile frame throttle: render every 3rd frame normally, every frame during scroll.
    // During scroll we must update every frame so particles track scroll position.
    if (this.isMobile) {
      this.mobileFrameSkip++;
      if (!this.isScrolling && this.mobileFrameSkip % 3 !== 0) {
        return;
      }
    }

    if (this.isMobile) {
      const effectivelyIdle = this.directScrollProgress < 0.001
        && !this.mouseActive
        && !this.fluidHasEnergy
        && (performance.now() - this.lastScrollChangeTime) > 200;
      if (effectivelyIdle) {
        if (!this.idleTimer) {
          this.idleTimer = setTimeout(() => {
            if (this.animationId !== null) {
              cancelAnimationFrame(this.animationId);
              this.animationId = null;
            }
            this.idleTimer = null;
          }, 3000);
        }
      } else {
        if (this.idleTimer) {
          clearTimeout(this.idleTimer);
          this.idleTimer = null;
        }
      }
    }

    this.time = timestamp * 0.001;
    this.frameCount++;

    const now = performance.now();

    // Track scroll changes to detect active scrolling
    // Use directScrollProgress for instant detection (bypasses Angular input delay)
    const effectiveScroll = this.directScrollProgress > 0.001 ? this.directScrollProgress : this.scrollProgress;
    if (Math.abs(effectiveScroll - this.prevScrollInput) > 0.001) {
      this.lastScrollChangeTime = now;
      this.prevScrollInput = effectiveScroll;
    }
    const isScrolling = (now - this.lastScrollChangeTime) < 200;
    this.isScrolling = isScrolling;

    const w = this.width, h = this.height;

    // Smooth scroll — fast follow on all platforms to avoid visual lag
    const scrollLerp = this.isMobile ? 1.0 : 0.95;
    this.smoothScrollProgress += (effectiveScroll - this.smoothScrollProgress) * scrollLerp;
    const sp = this.smoothScrollProgress;

    // Hero bloom — reduced dead zone for faster response
    const particleRaw = sp < 0.02 ? 0 : (sp > 0.85 ? 1 : (sp - 0.02) / 0.83);
    const pri = 1 - particleRaw;
    const heroBloom = 1 - pri * pri * pri;
    this.globalScrollField = heroBloom;

    // Smooth scroll velocity for particle displacement (exponential decay)
    this.smoothScrollVelocity += (this.scrollVelocity - this.smoothScrollVelocity) * 0.3;
    this.scrollVelocity *= 0.5; // decay raw velocity between events

    // Cursor smoothing
    const cursorLerp = 0.35;
    const timeSinceMove = now - this.mouseLastMoveTime;
    if (this.cursorSmoothedX < -9000) {
      this.cursorSmoothedX = this.mouseX;
      this.cursorSmoothedY = this.mouseY;
    } else {
      this.cursorSmoothedX += (this.mouseX - this.cursorSmoothedX) * cursorLerp;
      this.cursorSmoothedY += (this.mouseY - this.cursorSmoothedY) * cursorLerp;
    }
    // Deactivate mouse if it hasn't moved for 150ms
    if (this.mouseActive && timeSinceMove > 150) {
      this.mouseActive = false;
    }
    const targetStrength = (this.mouseActive && timeSinceMove < 800) ? 1 : 0;
    this.cursorStrength += (targetStrength - this.cursorStrength) * 0.18;

    // Mouse velocity
    if (this.mouseActive) {
      this.mouseVx = (this.mouseX - this.prevMouseX) * 0.8 + this.mouseVx * 0.2;
      this.mouseVy = (this.mouseY - this.prevMouseY) * 0.8 + this.mouseVy * 0.2;
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;
    } else {
      this.mouseVx *= 0.88;
      this.mouseVy *= 0.88;
    }

    // Fluid sim: run while mouse is active OR while fluid still has energy OR during scroll
    // This lets the fluid dissipate naturally after the cursor stops,
    // giving particles that liquid coasting feel.
    const skipFluid = this.isMobile && this.isScrolling;
    if (!skipFluid && (this.mouseActive || this.fluidHasEnergy)) {
      this.fluidStep();

      // Check if fluid still has meaningful velocity
      let maxVel = 0;
      const sz = (this.FLUID_N + 2) * (this.FLUID_N + 2);
      // Sample every 4th cell for speed — don't scan entire grid
      for (let k = 0; k < sz; k += 4) {
        const v = this.fluidVx[k] * this.fluidVx[k] + this.fluidVy[k] * this.fluidVy[k];
        if (v > maxVel) maxVel = v;
      }
      this.fluidHasEnergy = maxVel > 0.00001;
      if (!this.fluidHasEnergy) {
        this.fluidVx.fill(0);
        this.fluidVy.fill(0);
      }
    }

    // Track interaction→idle transition for home slot reassignment
    const interacting = this.mouseActive || this.fluidHasEnergy;
    if (interacting) {
      this.lastInteractionTime = now;
      this.wasInteracting = true;
    } else if (this.wasInteracting) {
      this.wasInteracting = false;
      this.homeReassignNeeded = true;
    }

    // Run home slot reassignment once after interaction ends (ball-pit behavior).
    // Skip when in scroll-spread mode — reassigning homes there changes spread
    // targets and causes a visible sideways wiggle.
    if (this.homeReassignNeeded && !interacting && this.globalScrollField < 0.05) {
      const idleSec = (now - this.lastInteractionTime) * 0.001;
      if (idleSec > 0.25) {
        this.reassignHomeSlots();
        this.homeReassignNeeded = false;
      }
    }

    // Update particles (CPU-side physics)
    this.updateParticles();

    // Upload dynamic attributes to GPU
    const posXAttr = this.particleGeometry.getAttribute('aPosX') as THREE.BufferAttribute;
    const posYAttr = this.particleGeometry.getAttribute('aPosY') as THREE.BufferAttribute;
    const opAttr = this.particleGeometry.getAttribute('aOpacity') as THREE.BufferAttribute;
    posXAttr.needsUpdate = true;
    posYAttr.needsUpdate = true;
    opAttr.needsUpdate = true;

    // Update uniforms
    this.particleMaterial.uniforms['uTime'].value = this.time;
    if (this.vignetteMaterial) {
      this.vignetteMaterial.uniforms['uScrollField'].value = this.globalScrollField;
      this.vignetteMaterial.uniforms['uCursor'].value.set(this.cursorSmoothedX, this.cursorSmoothedY);
      this.vignetteMaterial.uniforms['uCursorStrength'].value = this.cursorStrength;
    }

    // Render particles to dust canvas
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    // Render vignette — desktop only (mobile uses CSS vignette)
    if (this.vigRenderer) {
      this.vigRenderer.render(this.vignetteScene, this.vignetteCamera);
    }

    // Update CSS vignette opacity on mobile based on scroll
    if (this.cssVignetteEl) {
      const scrollDarkening = this.globalScrollField * 0.4;
      this.cssVignetteEl.style.opacity = String(Math.min(1, 1 + scrollDarkening));
    }
  };

  // ===================== PARTICLE UPDATE (CPU) =====================
  // Identical physics to the Canvas2D version — just writes to flat arrays
  // that get uploaded as GPU attributes.

  private updateParticles(): void {
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

    const gField = this.globalScrollField;

    const opBoost = gField < 0.03 ? 0 : (gField > 0.6 ? 0.55 : gField / 0.6 * 0.55);

    const SPREAD_H_FAR = 0.40;
    const SPREAD_H_MID = 0.28;
    const SPREAD_H_NEAR = 0.12;

    const isScrolling = this.isScrolling;
    const isMobile = this.isMobile;
    const fluidActive = this.mouseActive || this.fluidHasEnergy;
    const settled = this.settledCount;
    // Scroll velocity displacement force — pushes particles like wind
    const scrollVel = this.smoothScrollVelocity;
    const absScrollVel = Math.abs(scrollVel);
    // === SETTLED ===
    // Spring-return toward assigned home slot (ball-pit: nearest formation slot).
    // Fluid coupling for cursor interaction. Scroll spread for parallax.
    for (let i = 0; i < settled; i++) {
      const layer = this.pLayer[i];
      const phase = this.pFlickerPhase[i];

      let px = this.pPosX[i];
      let py = this.pPosY[i];

      // --- Smoothly update base toward assigned home slot ---
      const homeIdx = this.pHomeSlot[i];
      const homeX = this.pBirthX[homeIdx];
      const homeY = this.pBirthY[homeIdx];
      const baseDx = homeX - this.pBaseX[i];
      const baseDy = homeY - this.pBaseY[i];
      if (baseDx * baseDx + baseDy * baseDy < 0.01) {
        this.pBaseX[i] = homeX;
        this.pBaseY[i] = homeY;
      } else {
        this.pBaseX[i] += baseDx * 0.04;
        this.pBaseY[i] += baseDy * 0.04;
      }

      // --- Scroll spread: formation targets ---
      const hash01 = phase * 0.15915494;
      const homeNormY = homeY / h;
      const zoneTop = layer === LAYER_FAR ? -0.02 : layer === LAYER_MID ? 0.05 : 0.40;
      const zoneBot = layer === LAYER_FAR ? 1.02 : layer === LAYER_MID ? 1.02 : 0.95;
      const spreadDestY = zoneTop + hash01 * (zoneBot - zoneTop);
      const targetY = (homeNormY + (spreadDestY - homeNormY) * gField) * h;

      const spreadH = layer === LAYER_FAR ? SPREAD_H_FAR
        : layer === LAYER_MID ? SPREAD_H_MID : SPREAD_H_NEAR;
      const centerOff = (homeX / w - 0.5);
      const targetX = homeX + centerOff * w * spreadH * gField;

      // During scroll, strong pull toward spread formation + scroll velocity push
      if (isScrolling && gField > 0.005 && gField < 0.98) {
        // Snap to spread formation — only during the expansion phase
        const snapStr = isMobile ? 0.80 : 0.45;
        px += (targetX - px) * snapStr;
        py += (targetY - py) * snapStr;
        // Dampen velocity during scroll snap
        this.pVX[i] *= 0.3;
        this.pVY[i] *= 0.3;
      }

      // Scroll velocity displacement — only during expansion phase, not after
      if (absScrollVel > 0.5 && gField < 0.95) {
        const parallaxMul = layer === LAYER_NEAR ? 1.8 : layer === LAYER_MID ? 1.0 : 0.4;
        const pushForce = scrollVel * parallaxMul * 0.15;
        this.pVY[i] += pushForce;
        // Slight horizontal scatter from scroll turbulence
        const scatter = (hash01 - 0.5) * absScrollVel * parallaxMul * 0.04;
        this.pVX[i] += scatter;
      }

      // On mobile during scroll, skip all physics — just write position and opacity.
      // This keeps JS work minimal so scroll compositor stays butter-smooth.
      if (isMobile && isScrolling) {
        this.pPosX[i] = px;
        this.pPosY[i] = py;
        // Quick opacity update without flicker/drift
        const targetOp = this.pBaseOpacity[i] * (gField > 0.01 ? (1 + opBoost) : 1);
        this.pOpacity[i] += (targetOp - this.pOpacity[i]) * 0.3;
        continue;
      }

      // Fluid coupling — only sample and apply when fluid is active
      let vx = this.pVX[i];
      let vy = this.pVY[i];
      if (fluidActive) {
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
        const coupling = layer === LAYER_NEAR ? 0.50 : layer === LAYER_MID ? 0.30 : 0.12;
        vx += flVx * fluidToPixel * coupling;
        vy += flVy * fluidToPixel * coupling;
      }

      // Spring return toward base position (fades during scroll to avoid fighting scroll spread)
      const returnK = layer === LAYER_NEAR ? 0.003 : layer === LAYER_MID ? 0.006 : 0.010;
      vx += (this.pBaseX[i] - px) * returnK * (1 - gField);
      vy += (this.pBaseY[i] - py) * returnK * (1 - gField);

      // Scroll spread: maintain formation via spring when scrolled.
      // When fluid is active (cursor moving), relax hold spring to match
      // hero-state spring strength so particles visibly respond to the cursor.
      // When idle, stiff spring snaps particles back to formation.
      if (gField > 0.03) {
        const holdK = (fluidActive ? 0.008 : 0.06) * gField;
        vx += (targetX - px) * holdK;
        vy += (targetY - py) * holdK;
      }

      // Boundary containment
      if (py < -h * 0.1) vy += 0.10;
      if (py > h * 1.08) vy -= 0.05;
      if (px < -w * 0.05) vx += 0.05;
      if (px > w * 1.05) vx -= 0.05;

      // Damping — tuned for scroll responsiveness without jiggle
      let damp = layer === LAYER_NEAR ? 0.92 : layer === LAYER_MID ? 0.90 : 0.86;
      // During scroll, allow scroll velocity force to carry through
      if (isScrolling && gField < 0.98) {
        damp = layer === LAYER_NEAR ? 0.88 : layer === LAYER_MID ? 0.85 : 0.80;
      } else if (!fluidActive) {
        // When idle, heavy damping to prevent spring overshoot
        damp = Math.min(damp, 0.65);
      }
      const spd2 = vx * vx + vy * vy;
      if (spd2 < 0.25) damp = 0.5; // critically damp near rest
      vx *= damp;
      vy *= damp;

      // Kill negligible velocity to fully stop
      if (vx * vx + vy * vy < 0.0001) {
        vx = 0;
        vy = 0;
        if (gField > 0.05 && !fluidActive) {
          // Snap to scroll-spread target to stop spring-driven creep
          const snapDx = targetX - px;
          const snapDy = targetY - py;
          if (snapDx * snapDx + snapDy * snapDy < 25.0) { // within 5px
            px = targetX;
            py = targetY;
          }
        } else {
          // Snap to base when very close to eliminate sub-pixel drift
          const snapDx = this.pBaseX[i] - px;
          const snapDy = this.pBaseY[i] - py;
          if (snapDx * snapDx + snapDy * snapDy < 1.0) {
            px = this.pBaseX[i];
            py = this.pBaseY[i];
          }
        }
      }

      // Hard velocity clamp — higher during scroll to allow scroll push
      const vMag2 = vx * vx + vy * vy;
      const maxV = isScrolling ? 14.0 : 6.0;
      if (vMag2 > maxV * maxV) {
        const sc = maxV / Math.sqrt(vMag2);
        vx *= sc;
        vy *= sc;
      }

      px += vx;
      py += vy;
      this.pVX[i] = vx;
      this.pVY[i] = vy;

      // Ambient drift — gentle organic float (position-based, no velocity)
      // Only when not scrolling so it doesn't fight scroll snap
      if (!isScrolling) {
        const driftScale = layer === LAYER_NEAR ? 0.55 : layer === LAYER_MID ? 0.28 : 0.10;
        const freqX = layer === LAYER_NEAR ? 0.05 : layer === LAYER_MID ? 0.07 : 0.09;
        const freqY = freqX * 0.72;
        px += Math.cos(time * freqX + phase) * driftScale * 0.08;
        py += Math.sin(time * freqY + phase * 1.3) * driftScale * 0.05;
      }

      this.pPosX[i] = px;
      this.pPosY[i] = py;

      // Opacity
      const flicker = 0.65 + 0.35 * Math.sin(time * this.pFlickerSpeed[i] + phase);
      let targetOp = this.pBaseOpacity[i] * flicker;

      if (gField > 0.01) {
        targetOp *= (1 + opBoost);

        if (gField > 0.4) {
          const edgeFrame = gField < 0.90 ? (gField - 0.4) / 0.50 : 1;
          const normCX = Math.abs(px / w - 0.5) * 2;
          const normCY = Math.abs(py / h - 0.5) * 2;
          const edgeness = normCX > normCY ? normCX : normCY;
          const centerFade = edgeness < 0.35 ? edgeness / 0.35 : 1;
          targetOp *= 1 - edgeFrame * (1 - centerFade) * 0.7;
        }
      }

      // Velocity-based opacity fade (smooth, always applied)
      const vel = Math.sqrt(vx * vx + vy * vy);
      const velFade = vel * 0.06;
      targetOp *= 1 - (velFade < 0.30 ? velFade : 0.30);

      this.pOpacity[i] += (targetOp - this.pOpacity[i]) * 0.12;
    }
    // === FLOW ===
    // Skip flow particles on mobile during scroll — only 20 anyway and not worth the cost
    if (isMobile && isScrolling) return;
    const flowEnd = this.pCount;
    for (let i = settled; i < flowEnd; i++) {
      const layer = this.pLayer[i];

      let t = this.pT[i];
      t += this.pSpeed[i];
      if (t > 1.06) {
        t = -0.04 - Math.random() * 0.03;
        this.pVX[i] = 0; this.pVY[i] = 0;
        this.pOpacity[i] = 0;
      }
      this.pT[i] = t;

      const ct = t < 0.01 ? 0.01 : t > 0.99 ? 0.99 : t;
      const fpx = this.flowPosX(ct);
      const fpy = this.flowPosY(ct);
      const tang = this.flowTangent(ct);
      const perpX = -tang.ty, perpY = tang.tx;

      const funnelWidth = 0.06 + ct * 0.55;
      const spread = minDim * funnelWidth;
      const scatterNorm = this.pScatter[i] / (minDim * 0.61 || 1);
      const currentScatter = scatterNorm * spread;

      const targetBx = fpx + perpX * currentScatter;
      const targetBy = fpy + perpY * currentScatter;

      this.pBaseX[i] += (targetBx - this.pBaseX[i]) * 0.06;
      this.pBaseY[i] += (targetBy - this.pBaseY[i]) * 0.06;

      let px = this.pPosX[i];
      let py = this.pPosY[i];
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

      const coupling = layer === LAYER_NEAR ? 0.45 : layer === LAYER_MID ? 0.25 : 0.10;
      let vx = this.pVX[i] + flVx * fluidToPixel * coupling;
      let vy = this.pVY[i] + flVy * fluidToPixel * coupling;

      const rr = this.pRate[i] * 0.3;
      vx += (this.pBaseX[i] - px) * rr;
      vy += (this.pBaseY[i] - py) * rr;

      const damp = layer === LAYER_NEAR ? 0.93 : layer === LAYER_MID ? 0.90 : 0.86;
      vx *= damp;
      vy *= damp;

      px += vx;
      py += vy;

      const phase = this.pFlickerPhase[i];
      const wave = layer === LAYER_NEAR ? 0.012 : layer === LAYER_MID ? 0.009 : 0.004;
      const ds = layer === LAYER_NEAR ? 0.25 : layer === LAYER_MID ? 0.17 : 0.08;
      px += Math.sin(time * ds + phase) * wave;
      py += Math.cos(time * (ds * 0.72) + phase * 1.3) * wave * 0.5;

      this.pVX[i] = vx;
      this.pVY[i] = vy;
      this.pPosX[i] = px;
      this.pPosY[i] = py;

      // Opacity
      let envelope = 1;
      if (t < 0) envelope = 0;
      else if (t < 0.07) envelope = t / 0.07;
      else if (t > 0.93) envelope = (1 - t) / 0.07;
      if (envelope < 0) envelope = 0;
      else if (envelope > 1) envelope = 1;

      const vel = Math.sqrt(vx * vx + vy * vy);
      const displaceFade = 1 - (vel * 0.04 < 0.35 ? vel * 0.04 : 0.35);
      const flicker = 0.65 + 0.35 * Math.sin(time * this.pFlickerSpeed[i] + phase);
      const targetOp = this.pBaseOpacity[i] * envelope * flicker * displaceFade;
      this.pOpacity[i] += (targetOp - this.pOpacity[i]) * 0.18;
    }
  }

  // ===================== STABLE FLUIDS =====================

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

    // Viscous energy dissipation — prevents velocity accumulation across frames
    const sz = (this.FLUID_N + 2) * (this.FLUID_N + 2);
    for (let k = 0; k < sz; k++) {
      this.fluidVx[k] *= 0.96;
      this.fluidVy[k] *= 0.96;
    }
  }

  private fluidAddForce(): void {
    const N = this.FLUID_N;
    const S = N + 2;
    const mx = this.mouseVx, my = this.mouseVy;
    const mouseSpeed = Math.sqrt(mx * mx + my * my);
    if (mouseSpeed < 0.5) return;

    const gi = (this.mouseX / this.width) * N;
    const gj = (this.mouseY / this.height) * N;
    const gridR = Math.max(3, this.FLUID_CURSOR_PX / Math.max(this.width, this.height) * N);

    // Clamp mouse velocity for viscous feel — prevents impulse spikes
    const clampedSpeed = Math.min(mouseSpeed, 20);
    const speedScale = clampedSpeed / mouseSpeed;
    const fx = mx * speedScale * this.FLUID_FORCE;
    const fy = my * speedScale * this.FLUID_FORCE;

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
      for (let ii = iMin; ii <= iMax; ii++) {
        const dx = ii - gi;
        const dist2 = dx * dx + dy2;
        if (dist2 > gridR2) continue;
        const d = 1 - Math.sqrt(dist2) * invR;
        const falloff = d * d;
        const idx = ii + base;
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
    const diffIters = this.isMobile ? 4 : 12;
    for (let k = 0; k < diffIters; k++) {
      for (let j = 1; j <= N; j++) {
        const base = S * j;
        for (let ii = 1; ii <= N; ii++) {
          const idx = ii + base;
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
      for (let ii = 1; ii <= N; ii++) {
        const idx = ii + base;
        let x = ii - dt0 * u[idx];
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
      for (let ii = 1; ii <= N; ii++) {
        const idx = ii + base;
        div[idx] = h5 * (u[idx + 1] - u[idx - 1] + v[idx + S] - v[idx - S]);
        p[idx] = 0;
      }
    }
    this.fluidSetBnd(0, div);
    this.fluidSetBnd(0, p);

    const projIters = this.isMobile ? 4 : 8;
    for (let k = 0; k < projIters; k++) {
      for (let j = 1; j <= N; j++) {
        const base = S * j;
        for (let ii = 1; ii <= N; ii++) {
          const idx = ii + base;
          p[idx] = (div[idx] + p[idx - 1] + p[idx + 1] + p[idx - S] + p[idx + S]) * 0.25;
        }
      }
      this.fluidSetBnd(0, p);
    }

    for (let j = 1; j <= N; j++) {
      const base = S * j;
      for (let ii = 1; ii <= N; ii++) {
        const idx = ii + base;
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
    for (let ii = 1; ii <= N; ii++) {
      const si = S * ii;
      x[si] = negX * x[1 + si];
      x[n1 + si] = negX * x[N + si];
      x[ii] = negY * x[ii + S];
      x[ii + S * n1] = negY * x[ii + S * N];
    }
    x[0] = 0.5 * (x[1] + x[S]);
    x[n1] = 0.5 * (x[N] + x[n1 + S]);
    x[S * n1] = 0.5 * (x[1 + S * n1] + x[S * N]);
    x[n1 + S * n1] = 0.5 * (x[N + S * n1] + x[n1 + S * N]);
  }
}
