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
  /** 0 = top of scroll, 1 = fully scrolled through transition */
  protected readonly scrollProgress = signal(0);

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
      // Total scroll distance for the transition: 3 viewport heights
      const totalDistance = window.innerHeight * 3;
      const progress = Math.min(1, Math.max(0, scrollY / totalDistance));
      this.scrollProgress.set(progress);

      // Dispatch custom event for dust-particles to consume
      window.dispatchEvent(new CustomEvent('homepage-scroll', { detail: { progress } }));
    });
  }
}
