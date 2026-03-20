import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  // Anchor — where the particle "belongs" (its home position)
  ax: number;
  ay: number;
  // Velocity from mouse displacement
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  color: string;
  flickerSpeed: number;
  flickerPhase: number;
  layer: 'far' | 'mid' | 'near';
  // For flowing particles: position on bezier (0→1)
  t: number;
  speed: number;
  // Perpendicular scatter offset (fixed per particle)
  scatter: number;
  // Return-to-anchor smoothness (0–1, higher = faster return)
  returnRate: number;
  // Is this a "settled" bottom particle or a "flowing" stream particle?
  kind: 'settled' | 'flow';
}

const GOLD_PALETTE = [
  '#d4a04a', '#c9873b', '#db9443', '#e8a94f',
  '#b87a34', '#f0be6a', '#a86e2d', '#dba255',
  '#c48839', '#e0ad5e',
];

@Component({
  selector: 'app-dust-particles',
  standalone: true,
  template: `<canvas #canvas class="dust-canvas"></canvas>`,
  styles: [`
    :host {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 2;
      pointer-events: none;
    }
    .dust-canvas {
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: auto;
      cursor: default;
    }
  `],
})
export class DustParticles implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private isBrowser: boolean;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number | null = null;
  private dpr = 1;
  private width = 0;
  private height = 0;
  private time = 0;

  // Mouse state
  private mouseX = -9999;
  private mouseY = -9999;
  private prevMouseX = -9999;
  private prevMouseY = -9999;
  private mouseVx = 0;
  private mouseVy = 0;
  private mouseActive = false;
  private mouseLastMoveTime = 0;

  // LiquidEther-style parameters
  private readonly CURSOR_SIZE = 100;    // cursorSize
  private readonly MOUSE_FORCE = 25;     // mouseForce
  private readonly VISCOSITY = 30;       // viscous — thick, syrupy resistance
  // Derived: viscous damping per frame (higher viscosity = particles coast longer)
  private readonly VISCOUS_DAMPING = 1 - (1 / (1 + this.VISCOSITY * 0.12)); // ~0.78

  // LiquidEther visual trail — recent mouse positions for the fluid glow
  private trail: { x: number; y: number; age: number; vx: number; vy: number }[] = [];
  private readonly TRAIL_MAX_LENGTH = 24;
  private readonly ETHER_OPACITY = 0.06; // low opacity — subtle viscous glow

  private boundResize = this.onResize.bind(this);
  private boundMouseMove = this.onMouseMove.bind(this);
  private boundMouseLeave = this.onMouseLeave.bind(this);
  private boundTouchMove = this.onTouchMove.bind(this);
  private boundTouchEnd = this.onTouchEnd.bind(this);

  // Particle counts
  private get flowCount(): number {
    if (this.width < 480) return 180;
    if (this.width < 768) return 320;
    return 500;
  }
  private get settledCount(): number {
    if (this.width < 480) return 600;
    if (this.width < 768) return 1000;
    return 1600;
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;
    this.dpr = Math.min(window.devicePixelRatio, 2);
    this.onResize();

    window.addEventListener('resize', this.boundResize);
    canvas.addEventListener('mousemove', this.boundMouseMove);
    canvas.addEventListener('mouseleave', this.boundMouseLeave);
    canvas.addEventListener('touchmove', this.boundTouchMove, { passive: true });
    canvas.addEventListener('touchend', this.boundTouchEnd);

    // Create settled bottom particles
    for (let i = 0; i < this.settledCount; i++) {
      this.particles.push(this.createSettledParticle());
    }
    // Create flowing stream particles (seeded across the path)
    for (let i = 0; i < this.flowCount; i++) {
      this.particles.push(this.createFlowParticle(Math.random()));
    }

    this.animate(0);
  }

  ngOnDestroy(): void {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.boundResize);
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.removeEventListener('mousemove', this.boundMouseMove);
      canvas.removeEventListener('mouseleave', this.boundMouseLeave);
      canvas.removeEventListener('touchmove', this.boundTouchMove);
      canvas.removeEventListener('touchend', this.boundTouchEnd);
    }
  }

  private onResize(): void {
    const canvas = this.canvasRef.nativeElement;
    this.dpr = Math.min(window.devicePixelRatio, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = this.width * this.dpr;
    canvas.height = this.height * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  private onMouseMove(e: MouseEvent): void {
    this.prevMouseX = this.mouseX;
    this.prevMouseY = this.mouseY;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.mouseActive = true;
    this.mouseLastMoveTime = performance.now();
  }

  private onMouseLeave(): void {
    this.mouseActive = false;
  }

  private onTouchMove(e: TouchEvent): void {
    if (e.touches.length > 0) {
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;
      this.mouseX = e.touches[0].clientX;
      this.mouseY = e.touches[0].clientY;
      this.mouseActive = true;
      this.mouseLastMoveTime = performance.now();
    }
  }

  private onTouchEnd(): void {
    this.mouseActive = false;
  }

  // ── Flow path: inverted funnel from top-right, curving down to bottom ──
  // Cubic bezier: narrow at top-right, sweeps left-and-down through center,
  // then fans out wide across the bottom
  private getFlowPosition(t: number): { x: number; y: number } {
    const w = this.width;
    const h = this.height;

    const p0x = w * 1.02, p0y = h * -0.03;   // Source: top-right, just off screen
    const p1x = w * 0.82, p1y = h * 0.28;    // Pull down, staying right
    const p2x = w * 0.62, p2y = h * 0.65;    // Gentle leftward sweep, still right of center
    const p3x = w * 0.55, p3y = h * 1.06;    // End: just right of center-bottom

    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;

    return {
      x: mt3 * p0x + 3 * mt2 * t * p1x + 3 * mt * t2 * p2x + t3 * p3x,
      y: mt3 * p0y + 3 * mt2 * t * p1y + 3 * mt * t2 * p2y + t3 * p3y,
    };
  }

  private getFlowTangent(t: number): { tx: number; ty: number } {
    const w = this.width;
    const h = this.height;

    const p0x = w * 1.02, p0y = h * -0.03;
    const p1x = w * 0.82, p1y = h * 0.28;
    const p2x = w * 0.62, p2y = h * 0.65;
    const p3x = w * 0.55, p3y = h * 1.06;

    const mt = 1 - t;
    // Derivative of cubic bezier
    const tx = 3 * mt * mt * (p1x - p0x) + 6 * mt * t * (p2x - p1x) + 3 * t * t * (p3x - p2x);
    const ty = 3 * mt * mt * (p1y - p0y) + 6 * mt * t * (p2y - p1y) + 3 * t * t * (p3y - p2y);
    const len = Math.sqrt(tx * tx + ty * ty) || 1;

    return { tx: tx / len, ty: ty / len };
  }

  // ── Settled bottom particles — dense cloud filling bottom ~45% ──
  private createSettledParticle(): Particle {
    const x = Math.random() * this.width;
    // Power curve: dense at very bottom, thinning toward ~45% up
    const verticalRange = 0.45; // covers bottom 45% of screen
    const y = this.height * (1 - verticalRange * Math.pow(Math.random(), 2.2));

    // Particles higher up are more sparse and fainter
    const heightRatio = (this.height - y) / (this.height * verticalRange); // 0 at bottom, 1 at top of range

    const roll = Math.random();
    let layer: 'far' | 'mid' | 'near';
    if (roll < 0.65) layer = 'far';
    else if (roll < 0.92) layer = 'mid';
    else layer = 'near';

    let size: number;
    let baseOpacity: number;

    if (layer === 'near') {
      size = 2.5 + Math.random() * 4;
      baseOpacity = (0.02 + Math.random() * 0.045) * (1 - heightRatio * 0.5);
    } else if (layer === 'mid') {
      size = 1.2 + Math.random() * 2.2;
      baseOpacity = (0.15 + Math.random() * 0.3) * (1 - heightRatio * 0.4);
    } else {
      const sizeRoll = Math.random();
      if (sizeRoll < 0.5) size = 0.3 + Math.random() * 0.5;
      else if (sizeRoll < 0.8) size = 0.8 + Math.random() * 0.7;
      else if (sizeRoll < 0.95) size = 1.4 + Math.random() * 0.8;
      else size = 2.0 + Math.random() * 1.0;

      const rawOpacity = size > 1.8
        ? 0.35 + Math.random() * 0.45
        : size > 1.0
          ? 0.2 + Math.random() * 0.3
          : 0.06 + Math.random() * 0.2;
      baseOpacity = rawOpacity * (1 - heightRatio * 0.6);
    }

    return {
      x, y, ax: x, ay: y,
      vx: 0, vy: 0,
      size,
      opacity: baseOpacity * Math.random(),
      baseOpacity,
      color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
      flickerSpeed: layer === 'near' ? 0.3 + Math.random() * 0.6 : 0.8 + Math.random() * 2.5,
      flickerPhase: Math.random() * Math.PI * 2,
      layer,
      t: 0, speed: 0, scatter: 0,
      returnRate: layer === 'near' ? 0.015 + Math.random() * 0.015 : 0.03 + Math.random() * 0.03,
      kind: 'settled',
    };
  }

  // ── Flow stream particles ──
  private createFlowParticle(initialT: number): Particle {
    const t = initialT;
    const tangent = this.getFlowTangent(Math.max(0.01, Math.min(0.99, t)));
    const perpX = -tangent.ty;
    const perpY = tangent.tx;

    // Inverted funnel: narrow at top (t≈0), wide at bottom (t≈1)
    const funnelWidth = 0.06 + t * 0.55; // 6% → 61% of min dimension
    const baseSpread = Math.min(this.width, this.height) * funnelWidth;
    const scatter = (Math.random() - 0.5) * 2 * baseSpread;

    const pos = this.getFlowPosition(t);
    const x = pos.x + perpX * scatter;
    const y = pos.y + perpY * scatter;

    let layer: 'far' | 'mid' | 'near';
    const roll = Math.random();
    if (roll < 0.40) layer = 'far';
    else if (roll < 0.85) layer = 'mid';
    else layer = 'near';

    let size: number;
    if (layer === 'near') {
      size = 3 + Math.random() * 6;
    } else if (layer === 'mid') {
      size = 1.0 + Math.random() * 2.5;
    } else {
      size = 0.3 + Math.random() * 1.0;
    }

    let baseOpacity: number;
    if (layer === 'near') {
      baseOpacity = 0.025 + Math.random() * 0.055;
    } else if (layer === 'mid') {
      baseOpacity = 0.18 + Math.random() * 0.38;
    } else {
      baseOpacity = 0.08 + Math.random() * 0.3;
    }

    let speed: number;
    if (layer === 'near') speed = 0.000025 + Math.random() * 0.00004;
    else if (layer === 'mid') speed = 0.00006 + Math.random() * 0.0001;
    else speed = 0.00004 + Math.random() * 0.00008;

    return {
      x, y, ax: x, ay: y,
      vx: 0, vy: 0,
      size,
      opacity: baseOpacity * Math.random(),
      baseOpacity,
      color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
      flickerSpeed: layer === 'near' ? 0.3 + Math.random() * 0.5 : 0.8 + Math.random() * 2.0,
      flickerPhase: Math.random() * Math.PI * 2,
      layer,
      t,
      speed,
      scatter,
      returnRate: layer === 'near'
        ? 0.015 + Math.random() * 0.015
        : 0.03 + Math.random() * 0.04,
      kind: 'flow',
    };
  }

  private animate = (timestamp: number): void => {
    this.time = timestamp * 0.001;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    this.drawBottomGlow(ctx);

    // ── Update and draw LiquidEther viscous trail ──
    this.updateTrail();
    this.drawEtherTrail(ctx);

    // Smooth mouse velocity
    if (this.mouseActive) {
      this.mouseVx = (this.mouseX - this.prevMouseX) * 0.6 + this.mouseVx * 0.4;
      this.mouseVy = (this.mouseY - this.prevMouseY) * 0.6 + this.mouseVy * 0.4;
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;
    } else {
      this.mouseVx *= 0.92;
      this.mouseVy *= 0.92;
    }

    for (const p of this.particles) {
      // ── Update anchor position ──
      if (p.kind === 'flow') {
        p.t += p.speed;
        if (p.t > 1.06) {
          // Recycle to start
          p.t = -0.04 - Math.random() * 0.03;
          p.vx = 0;
          p.vy = 0;
          p.opacity = 0;
        }

        const clampedT = Math.max(0.01, Math.min(0.99, p.t));
        const pos = this.getFlowPosition(clampedT);
        const tangent = this.getFlowTangent(clampedT);
        const perpX = -tangent.ty;
        const perpY = tangent.tx;

        // Inverted funnel width at this t
        const funnelWidth = 0.06 + clampedT * 0.55;
        const spread = Math.min(this.width, this.height) * funnelWidth;
        // Keep the same scatter ratio but scale with the funnel
        const scatterNorm = p.scatter / (Math.min(this.width, this.height) * 0.61 || 1);
        const currentScatter = scatterNorm * spread;

        const targetAx = pos.x + perpX * currentScatter;
        const targetAy = pos.y + perpY * currentScatter;

        // Move anchor smoothly toward target
        p.ax += (targetAx - p.ax) * 0.06;
        p.ay += (targetAy - p.ay) * 0.06;
      }
      // Settled particles: anchor never moves (already set at creation)

      // ── Viscous damping (LiquidEther-style: thick fluid, particles coast) ──
      p.vx *= this.VISCOUS_DAMPING;
      p.vy *= this.VISCOUS_DAMPING;

      // Slow viscous return to anchor — like thick fluid oozing back
      const viscousReturn = p.returnRate * 0.35;
      p.x += (p.ax - p.x) * viscousReturn;
      p.y += (p.ay - p.y) * viscousReturn;
      p.x += p.vx;
      p.y += p.vy;

      // ── LiquidEther viscous mouse physics ──
      // mouseForce=25, cursorSize=100, viscous=30, isViscous=true
      // Force is primarily DIRECTIONAL (dragging fluid), not radial push
      const mouseSpeed = Math.sqrt(this.mouseVx * this.mouseVx + this.mouseVy * this.mouseVy);
      const timeSinceMove = performance.now() - this.mouseLastMoveTime;
      // Viscous fluid: effect lingers longer (~600ms decay)
      const moveStrength = Math.min(mouseSpeed * 0.08, 1) * Math.max(0, 1 - timeSinceMove / 600);

      if (moveStrength > 0.003) {
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const distSq = dx * dx + dy * dy;
        const radius = this.CURSOR_SIZE * (p.layer === 'near' ? 1.3 : 1.0);

        if (distSq < radius * radius) {
          const dist = Math.sqrt(distSq) || 0.01;
          // Smooth cubic falloff — no visible hard edge
          const t = dist / radius;
          const falloff = (1 - t) * (1 - t) * (1 - t);

          // 1) Directional viscous drag — push particles in mouse's travel direction
          //    Like dragging your hand through thick fluid, pulling it along
          const dragForce = this.MOUSE_FORCE * falloff * moveStrength * 0.018;
          p.vx += this.mouseVx * dragForce;
          p.vy += this.mouseVy * dragForce;

          // 2) Gentle radial displacement — fluid parts around the cursor
          const nx = dx / dist;
          const ny = dy / dist;
          const radialForce = falloff * moveStrength * 4;
          p.vx += nx * radialForce;
          p.vy += ny * radialForce;

          // 3) Side-flow: particles flow around the obstruction (Bernoulli effect)
          if (mouseSpeed > 1) {
            const mdx = this.mouseVx / mouseSpeed;
            const mdy = this.mouseVy / mouseSpeed;
            const sideNx = -mdy;
            const sideNy = mdx;
            const sideSign = (dx * sideNx + dy * sideNy) >= 0 ? 1 : -1;
            const sideForce = falloff * moveStrength * 2.5;
            p.vx += sideNx * sideSign * sideForce;
            p.vy += sideNy * sideSign * sideForce;
          }

          // 4) Wake suction — particles behind cursor pulled gently into wake
          if (mouseSpeed > 1) {
            const mdx = this.mouseVx / mouseSpeed;
            const mdy = this.mouseVy / mouseSpeed;
            const behind = -(dx * mdx + dy * mdy); // positive = behind cursor
            if (behind > 0) {
              const wakePull = falloff * moveStrength * 1.2 * Math.min(behind / radius, 1);
              p.vx += mdx * wakePull;
              p.vy += mdy * wakePull;
            }
          }
        }
      }

      // Subtle ambient drift
      const wave = p.layer === 'near' ? 0.005 : 0.012;
      p.x += Math.sin(this.time * 0.25 + p.flickerPhase) * wave;
      p.y += Math.cos(this.time * 0.18 + p.flickerPhase * 1.3) * wave * 0.5;

      // ── Opacity ──
      let envelope = 1;
      if (p.kind === 'flow') {
        if (p.t < 0) envelope = 0;
        else if (p.t < 0.07) envelope = p.t / 0.07;
        else if (p.t > 0.93) envelope = (1 - p.t) / 0.07;
      }
      envelope = Math.max(0, Math.min(1, envelope));

      // Displaced particles fade slightly (dust thins when pushed apart)
      const vel = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const displaceFade = 1 - Math.min(vel * 0.04, 0.35);

      const flicker = 0.65 + 0.35 * Math.sin(this.time * p.flickerSpeed + p.flickerPhase);
      p.opacity += (p.baseOpacity * envelope * flicker * displaceFade - p.opacity) * 0.08;
    }

    // Draw back-to-front: far → mid → near
    for (const layer of ['far', 'mid', 'near'] as const) {
      for (const p of this.particles) {
        if (p.layer !== layer || p.opacity < 0.004) continue;
        this.drawParticle(ctx, p);
      }
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  private updateTrail(): void {
    const mouseSpeed = Math.sqrt(this.mouseVx * this.mouseVx + this.mouseVy * this.mouseVy);
    const timeSinceMove = performance.now() - this.mouseLastMoveTime;

    // Add new trail point when mouse is moving
    if (mouseSpeed > 0.5 && timeSinceMove < 200) {
      this.trail.unshift({
        x: this.mouseX,
        y: this.mouseY,
        age: 0,
        vx: this.mouseVx,
        vy: this.mouseVy,
      });
      if (this.trail.length > this.TRAIL_MAX_LENGTH) {
        this.trail.pop();
      }
    }

    // Age all trail points and remove old ones
    for (let i = this.trail.length - 1; i >= 0; i--) {
      this.trail[i].age += 0.025;
      if (this.trail[i].age >= 1) {
        this.trail.splice(i, 1);
      }
    }
  }

  private drawEtherTrail(ctx: CanvasRenderingContext2D): void {
    if (this.trail.length < 2) return;

    ctx.save();

    // Draw viscous fluid blobs along the trail
    for (let i = 0; i < this.trail.length; i++) {
      const pt = this.trail[i];
      const life = 1 - pt.age; // 1 = fresh, 0 = faded
      if (life <= 0) continue;

      // Size grows slightly as it ages (fluid spreading), shrinks at very end
      const speed = Math.sqrt(pt.vx * pt.vx + pt.vy * pt.vy);
      const baseSize = 30 + Math.min(speed * 1.5, 40);
      const size = baseSize * (0.6 + 0.4 * life);

      // Opacity: peaks early then fades out smoothly
      const fadeIn = Math.min(life / 0.3, 1); // quick fade-in
      const fadeOut = life * life; // smooth quadratic fade-out
      const alpha = this.ETHER_OPACITY * fadeIn * fadeOut;

      if (alpha < 0.002) continue;

      // Warm gold radial gradient — viscous fluid glow
      const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, size);
      g.addColorStop(0, `rgba(219, 148, 67, ${alpha * 1.2})`);
      g.addColorStop(0.3, `rgba(212, 160, 74, ${alpha})`);
      g.addColorStop(0.6, `rgba(200, 136, 57, ${alpha * 0.5})`);
      g.addColorStop(1, 'transparent');

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw a connecting fluid ribbon between trail points for continuity
    if (this.trail.length >= 3) {
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineWidth = 18;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 0; i < this.trail.length - 1; i++) {
        const a = this.trail[i];
        const b = this.trail[i + 1];
        const lifeA = 1 - a.age;
        const lifeB = 1 - b.age;
        const avgLife = (lifeA + lifeB) * 0.5;
        const alpha = this.ETHER_OPACITY * 0.4 * avgLife * avgLife;

        if (alpha < 0.001) continue;

        ctx.strokeStyle = `rgba(219, 162, 74, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = 'source-over';
    }

    ctx.restore();
  }

  private drawBottomGlow(ctx: CanvasRenderingContext2D): void {
    const grad = ctx.createLinearGradient(0, this.height * 0.65, 0, this.height);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.3, 'rgba(160, 100, 40, 0.015)');
    grad.addColorStop(0.55, 'rgba(180, 115, 50, 0.035)');
    grad.addColorStop(0.8, 'rgba(175, 110, 45, 0.06)');
    grad.addColorStop(1, 'rgba(170, 105, 40, 0.08)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, this.height * 0.65, this.width, this.height * 0.35);
  }

  private drawParticle(ctx: CanvasRenderingContext2D, p: Particle): void {
    ctx.save();
    ctx.globalAlpha = p.opacity;

    if (p.layer === 'near') {
      // Large bokeh orbs — soft out-of-focus circles
      const r = p.size;
      const g = ctx.createRadialGradient(p.x, p.y, r * 0.2, p.x, p.y, r);
      g.addColorStop(0, p.color + '30');
      g.addColorStop(0.45, p.color + '1a');
      g.addColorStop(0.75, p.color + '08');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.size > 2.0) {
      // Medium-large: bright warm core with soft glow halo
      const haloR = p.size * 2.8;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
      g.addColorStop(0, '#ffe8c8');
      g.addColorStop(0.08, p.color);
      g.addColorStop(0.25, p.color + 'bb');
      g.addColorStop(0.5, p.color + '44');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.size > 1.0) {
      // Medium: soft glow dot
      const glowR = p.size * 2.2;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
      g.addColorStop(0, p.color);
      g.addColorStop(0.3, p.color + 'aa');
      g.addColorStop(0.65, p.color + '33');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.size > 0.5) {
      // Small: subtle glow
      const glowR = p.size * 1.8;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
      g.addColorStop(0, p.color);
      g.addColorStop(0.5, p.color + '66');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Tiny: simple dot for performance
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}
