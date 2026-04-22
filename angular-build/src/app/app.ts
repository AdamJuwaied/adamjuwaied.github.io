import { Component, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './components/header/header';
import { LightRays } from './components/light-rays/light-rays';
import { DustParticlesGL } from './components/dust-particles-gl/dust-particles-gl';

interface PatternItem {
  leftPx: number;
  topPx: number;
  widthPx: number;
  heightPx: number;
  opacity: number;
  rotationDeg: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LightRays, DustParticlesGL],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly patternItems = signal<PatternItem[]>([]);
  protected readonly isHomePage = signal(true);
  protected readonly isContactPage = signal(false);
  protected readonly homeScrollProgress = signal(0);
  protected readonly isMobileDevice = signal(false);

  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object, private router: Router) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.updatePatternGrid();
      this.isMobileDevice.set(
        window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024)
      );

      // Listen for scroll progress from homepage
      window.addEventListener('homepage-scroll', ((e: CustomEvent) => {
        this.homeScrollProgress.set(e.detail.progress);
      }) as EventListener);
    }

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.isHomePage.set(e.urlAfterRedirects === '/' || e.urlAfterRedirects === '');
        this.isContactPage.set(e.urlAfterRedirects === '/contact');
        // Reset scroll progress when navigating away
        if (e.urlAfterRedirects !== '/' && e.urlAfterRedirects !== '') {
          this.homeScrollProgress.set(0);
        }
      });
  }

  @HostListener('window:resize')
  protected updatePatternGrid(): void {
    if (!this.isBrowser) {
      return;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tileHeight = Math.max(48, Math.min(viewportWidth * 0.048, 64));
    const tileWidth = tileHeight * 1.28;
    const stepX = tileWidth * 1.52;
    const stepY = tileHeight * 1.34;
    const columns = Math.ceil((viewportWidth + stepX) / stepX) + 1;
    const rows = Math.ceil((viewportHeight + stepY) / stepY) + 1;
    const patternItems: PatternItem[] = [];

    for (let row = 0; row < rows; row++) {
      const rowOffset = row % 2 === 0 ? 0 : stepX * 0.48;

      for (let column = -1; column < columns; column++) {
        const index = row * columns + column + 1;
        const rotationCycle = [-8, -4, 3, 7, 1, -6, 5];

        patternItems.push({
          leftPx: column * stepX + rowOffset - tileWidth * 0.16,
          topPx: row * stepY - tileHeight * 0.14,
          widthPx: tileWidth,
          heightPx: tileHeight,
          opacity: [0.14, 0.09, 0.12, 0.07, 0.10][index % 5],
          rotationDeg: rotationCycle[index % rotationCycle.length],
        });
      }
    }

    this.patternItems.set(patternItems);
  }
}
