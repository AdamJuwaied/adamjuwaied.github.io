import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

interface Particle {
  el: HTMLElement;
  x: number;
  y: number;
  baseY: number;
  size: number;
  blur: number;
  opacity: number;
  driftSpeed: number;
  driftRange: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

@Component({
  selector: 'app-index',
  imports: [CommonModule],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index implements AfterViewInit, OnDestroy {
  @ViewChild('arabicPattern') arabicPatternRef!: ElementRef<HTMLElement>;
  @ViewChild('particlesContainer') particlesRef!: ElementRef<HTMLElement>;

  private isBrowser: boolean;
  private particles: Particle[] = [];
  private animFrameId: number | null = null;
  private startTime = 0;

  // Particle colors from the spec
  private readonly PARTICLE_COLORS = [
    'rgba(215, 154, 99, 0.45)',   // warm gold
    'rgba(165, 120, 210, 0.22)',  // soft purple
    'rgba(255, 220, 180, 0.25)', // pale gold
    'rgba(201, 138, 90, 0.35)',   // amber
    'rgba(215, 154, 99, 0.30)',   // gold dimmer
    'rgba(140, 90, 160, 0.18)',   // muted violet
  ];

  // Arabic pattern rotations for natural variation
  private readonly ROTATIONS = [-8, 0, 6, -4, 3, -6, 2, 0, 5, -3];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private renderer: Renderer2
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.buildArabicPattern();
    this.createParticles();
    this.startTime = performance.now();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  // ===== ARABIC PATTERN =====
  private buildArabicPattern(): void {
    const container = this.arabicPatternRef?.nativeElement;
    if (!container) return;

    // Calculate how many cells we need to fill the viewport
    const cols = 12;
    const cellHeight = 70; // approximate row height in px
    const rows = Math.ceil(window.innerHeight / cellHeight) + 4;
    const totalCells = cols * rows;

    for (let i = 0; i < totalCells; i++) {
      const span = this.renderer.createElement('span');
      const text = this.renderer.createText('أدم');
      this.renderer.appendChild(span, text);

      // Vary rotation for natural look
      const rotation = this.ROTATIONS[i % this.ROTATIONS.length];
      this.renderer.setStyle(span, 'transform', `rotate(${rotation}deg)`);

      // Slight opacity variation per cell
      const opacityVariation = 0.06 + Math.random() * 0.08; // 0.06 to 0.14
      this.renderer.setStyle(span, 'opacity', opacityVariation.toString());

      // Slight size variation
      const fontSize = 28 + Math.random() * 14; // 28px to 42px
      this.renderer.setStyle(span, 'font-size', `${fontSize}px`);

      this.renderer.appendChild(container, span);
    }
  }

  // ===== PARTICLES =====
  private createParticles(): void {
    const container = this.particlesRef?.nativeElement;
    if (!container) return;

    const count = 140;

    for (let i = 0; i < count; i++) {
      const el = this.renderer.createElement('div');
      this.renderer.addClass(el, 'particle');

      // Random x across full width
      const x = Math.random() * 100;

      // y biased toward bottom 25% of screen
      // Use a power curve so most cluster at the bottom
      const rawY = Math.random();
      const y = 100 - (rawY * rawY * 28); // 72% to 100% of viewport height

      const size = 1 + Math.random() * 3.5; // 1px to 4.5px
      const blur = Math.random() < 0.4 ? (0.5 + Math.random() * 2) : 0; // 40% are blurred
      const color = this.PARTICLE_COLORS[Math.floor(Math.random() * this.PARTICLE_COLORS.length)];
      const opacity = 0.3 + Math.random() * 0.7;

      this.renderer.setStyle(el, 'left', `${x}%`);
      this.renderer.setStyle(el, 'top', `${y}%`);
      this.renderer.setStyle(el, 'width', `${size}px`);
      this.renderer.setStyle(el, 'height', `${size}px`);
      this.renderer.setStyle(el, 'background', color);
      this.renderer.setStyle(el, 'opacity', opacity.toString());

      if (blur > 0) {
        this.renderer.setStyle(el, 'filter', `blur(${blur}px)`);
      }

      // Some particles get a glow
      if (Math.random() < 0.3) {
        const glowSize = size * 3;
        this.renderer.setStyle(el, 'box-shadow', `0 0 ${glowSize}px ${glowSize / 2}px ${color}`);
      }

      this.renderer.appendChild(container, el);

      this.particles.push({
        el,
        x,
        y,
        baseY: y,
        size,
        blur,
        opacity,
        driftSpeed: 0.3 + Math.random() * 0.7,      // how fast it drifts up
        driftRange: 8 + Math.random() * 17,           // 8px to 25px upward drift
        twinkleSpeed: 1.5 + Math.random() * 3,        // twinkle frequency
        twinklePhase: Math.random() * Math.PI * 2,     // random start phase
        color,
      });
    }
  }

  // ===== ANIMATION LOOP =====
  private animate = (): void => {
    this.animFrameId = requestAnimationFrame(this.animate);

    const elapsed = (performance.now() - this.startTime) / 1000; // seconds

    for (const p of this.particles) {
      // Gentle upward drift (sinusoidal)
      const driftY = Math.sin(elapsed * p.driftSpeed) * p.driftRange;
      const newY = p.baseY - (driftY + p.driftRange) * 0.03; // subtle

      // Opacity twinkle
      const twinkle = 0.5 + 0.5 * Math.sin(elapsed * p.twinkleSpeed + p.twinklePhase);
      const newOpacity = p.opacity * (0.6 + twinkle * 0.4);

      p.el.style.top = `${newY}%`;
      p.el.style.opacity = newOpacity.toString();
    }
  };
}
