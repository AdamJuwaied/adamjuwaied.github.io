import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import lottie from 'lottie-web';

interface ShimmerMote {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  opacity: number;
  flickerSpeed: number;
  flickerPhase: number;
  color: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit, OnDestroy {
  private isBrowser: boolean;
  private shimmerRaf: number | null = null;
  private parallaxRaf: number | null = null;
  private shimmerMotes: ShimmerMote[] = [];
  private resizeHandler: (() => void) | null = null;

  @ViewChild('shimmerCanvas', { static: false }) shimmerRef!: ElementRef<HTMLCanvasElement>;

  private readonly GOLD_COLORS = [
    'rgba(212, 165, 90,',
    'rgba(232, 192, 122,',
    'rgba(201, 135, 59,',
    'rgba(184, 122, 52,',
    'rgba(246, 176, 60,',
  ];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private el: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initLottieAnimations();
    this.initShimmer();
    this.initParallax();
  }

  ngOnDestroy(): void {
    if (this.shimmerRaf) cancelAnimationFrame(this.shimmerRaf);
    if (this.parallaxRaf) cancelAnimationFrame(this.parallaxRaf);
    if (this.resizeHandler) window.removeEventListener('resize', this.resizeHandler);
  }

  private initLottieAnimations(): void {
    const arrowsContainer = document.getElementById('arrows');
    if (arrowsContainer) {
      lottie.loadAnimation({
        container: arrowsContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/arrows.json'
      });
    }
  }

  // ── Parallax scroll effect ──
  // Hero bg + hobbies bg translate at reduced speed.
  // Gallery card images translate within their clipped frames.

  private initParallax(): void {
    const root = this.el.nativeElement as HTMLElement;
    const heroBg = root.querySelector('.about-hero__bg') as HTMLElement;
    const hobbiesBg = root.querySelector('.about-hobbies__bg') as HTMLElement;
    const cards = root.querySelectorAll('.parallax-card') as NodeListOf<HTMLElement>;

    const update = () => {
      const vh = window.innerHeight;

      // Hero background parallax
      if (heroBg) {
        const hero = heroBg.closest('.about-hero') as HTMLElement;
        if (hero) {
          const rect = hero.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < vh) {
            const progress = Math.max(0, -rect.top / rect.height);
            heroBg.style.transform = `translateY(${progress * rect.height * 0.3}px)`;
          }
        }
      }

      // Hobbies background parallax
      if (hobbiesBg) {
        const hobbies = hobbiesBg.closest('.about-hobbies') as HTMLElement;
        if (hobbies) {
          const rect = hobbies.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < vh) {
            const progress = (vh - rect.top) / (vh + rect.height);
            hobbiesBg.style.transform = `translateY(${(progress - 0.5) * rect.height * 0.2}px)`;
          }
        }
      }

      // Gallery card parallax
      cards.forEach((card: HTMLElement) => {
        const frame = card.querySelector('.parallax-card__frame') as HTMLElement;
        const img = frame?.querySelector('img') as HTMLImageElement;
        if (!frame || !img) return;

        const rect = frame.getBoundingClientRect();
        if (rect.bottom < -50 || rect.top > vh + 50) return;

        const speed = parseFloat(card.dataset['speed'] || '0.1');
        const progress = (vh - rect.top) / (vh + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const translateY = (clamped - 0.5) * rect.height * speed * 2;

        img.style.transform = `translateY(${translateY}px) scale(1.15)`;
      });

      this.parallaxRaf = requestAnimationFrame(update);
    };

    this.parallaxRaf = requestAnimationFrame(update);
  }

  // ── Gold shimmer canvas ──

  private initShimmer(): void {
    const canvas = this.shimmerRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const host = (canvas.closest('app-about') ?? canvas.parentElement) as HTMLElement;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = host.scrollWidth;
      const h = host.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    this.resizeHandler = resize;
    window.addEventListener('resize', this.resizeHandler);

    const count = Math.min(70, Math.floor(window.innerWidth / 20));
    const fullH = host.scrollHeight;
    const fullW = host.scrollWidth;
    this.shimmerMotes = [];
    for (let i = 0; i < count; i++) {
      this.shimmerMotes.push({
        x: Math.random() * fullW,
        y: Math.random() * fullH,
        r: 1 + Math.random() * 2.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -(0.08 + Math.random() * 0.25),
        opacity: 0.15 + Math.random() * 0.35,
        flickerSpeed: 0.5 + Math.random() * 2,
        flickerPhase: Math.random() * Math.PI * 2,
        color: this.GOLD_COLORS[Math.floor(Math.random() * this.GOLD_COLORS.length)],
      });
    }

    let t = 0;
    const animate = () => {
      t += 0.016;
      const w = host.scrollWidth;
      const h = host.scrollHeight;
      ctx.clearRect(0, 0, w, h);

      for (const m of this.shimmerMotes) {
        m.x += m.vx;
        m.y += m.vy;
        if (m.y < -10) m.y = h + 10;
        if (m.x < -10) m.x = w + 10;
        if (m.x > w + 10) m.x = -10;

        const flicker = 0.5 + 0.5 * Math.sin(t * m.flickerSpeed + m.flickerPhase);
        const alpha = m.opacity * flicker;

        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = m.color + alpha.toFixed(3) + ')';
        ctx.fill();

        if (m.r > 1.5) {
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = m.color + (alpha * 0.12).toFixed(3) + ')';
          ctx.fill();
        }
      }
      this.shimmerRaf = requestAnimationFrame(animate);
    };
    this.shimmerRaf = requestAnimationFrame(animate);
  }
}
