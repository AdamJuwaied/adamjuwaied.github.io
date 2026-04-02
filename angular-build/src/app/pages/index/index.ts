import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index implements OnInit, OnDestroy {
  /**
   * Unified local progress: 0→1 over one scroll window (~1vh).
   * ALL reveal effects derive from this single timeline.
   */
  protected readonly scrollProgress = signal(0);
  /** Logo opacity: sub-range 0.00→0.35 of scrollProgress */
  protected readonly logoOpacity = signal(1);
  /** Logo vertical shift for parallax */
  protected readonly logoShift = signal(0);
  /** Text reveal opacity: sub-range 0.35→0.90 of scrollProgress */
  protected readonly textOpacity = signal(0);

  @ViewChild('scrollContainer', { static: true }) scrollContainerRef!: ElementRef<HTMLElement>;

  private isBrowser: boolean;
  private boundScroll!: () => void;
  private rafId: number | null = null;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.boundScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.boundScroll, { passive: true });
    // Initial read
    this.onScroll();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    window.removeEventListener('scroll', this.boundScroll);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }

  private onScroll(): void {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      const scrollY = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight;

      // === ONE shared local progress: 0→1 from first scroll ===
      // Transition starts immediately at scrollY=0, completes within ~1vh.
      const transitionDist = vh * 0.95;
      const localProgress = Math.min(1, Math.max(0, scrollY / transitionDist));
      this.scrollProgress.set(localProgress);

      // --- Staggered sub-ranges on the SAME 0→1 timeline ---
      // Logo fade: 0.00 → 0.35
      const logoFade = localProgress < 0.35 ? localProgress / 0.35 : 1;
      this.logoOpacity.set(1 - logoFade);
      this.logoShift.set(-50 - logoFade * 40);

      // Text reveal: 0.35 → 0.90
      const textFade = localProgress < 0.35 ? 0 : (localProgress > 0.90 ? 1 : (localProgress - 0.35) / 0.55);
      this.textOpacity.set(textFade);

      // Dispatch for dust-particles (uses the same localProgress)
      window.dispatchEvent(new CustomEvent('homepage-scroll', { detail: { progress: localProgress } }));
    });
  }
}
