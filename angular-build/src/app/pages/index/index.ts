import {
  AfterViewInit,
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
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index implements OnInit, AfterViewInit, OnDestroy {
  protected readonly scrollProgress = signal(0);
  protected readonly logoOpacity = signal(1);
  protected readonly logoShift = signal(0);
  protected readonly textOpacity = signal(0);

  @ViewChild('scrollContainer', { static: true }) scrollContainerRef!: ElementRef<HTMLElement>;

  private isBrowser: boolean;
  private boundScroll!: () => void;
  private rafId: number | null = null;
  private revealObserver?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.boundScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.boundScroll, { passive: true });

    this.onScroll();
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.ic-reveal').forEach(el => {
      this.revealObserver!.observe(el);
    });
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    window.removeEventListener('scroll', this.boundScroll);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.revealObserver?.disconnect();
  }

  private onScroll(): void {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      const scrollY = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight;

      const transitionDist = vh * 0.22;
      const localProgress = Math.min(1, Math.max(0, scrollY / transitionDist));
      this.scrollProgress.set(localProgress);

      const logoFade = localProgress < 0.25 ? localProgress / 0.25 : 1;
      this.logoOpacity.set(1 - logoFade);
      this.logoShift.set(-50 - logoFade * 30);

      const textFade = localProgress < 0.25 ? 0 : (localProgress > 0.70 ? 1 : (localProgress - 0.25) / 0.45);
      this.textOpacity.set(textFade);

      window.dispatchEvent(new CustomEvent('homepage-scroll', { detail: { progress: localProgress } }));
    });
  }
}
