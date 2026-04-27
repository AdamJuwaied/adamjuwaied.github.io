import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import lottie, { AnimationItem } from 'lottie-web';
import { VideoPlayer } from '../../components/video-player/video-player';
import { ImageTrailComponent } from '../../components/image-trail/image-trail';

@Component({
  selector: 'app-work',
  imports: [CommonModule, VideoPlayer, ImageTrailComponent],
  templateUrl: './work.html',
  styleUrl: './work.scss',
  host: { 'class': 'workPage' }
})
export class Work implements AfterViewInit, OnDestroy {
  private isBrowser: boolean;
  private animations: AnimationItem[] = [];

  spacePicItems: string[] = [
    'images/SpacePic2.jpg',
    'images/SpacePic3.png',
    'images/SpacePic4.png',
    'images/SpacePic5.png',
    'images/SpacePic6.png',
    'images/SpacePic7.png',
    'images/SpacePic8.png',
    'images/SpacePic9.png',
    'images/SpacePic10.png',
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private scrollObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initLottieAnimations();
    this.initScrollAnimations();
  }

  ngOnDestroy(): void {
    this.animations.forEach(anim => anim.destroy());
    this.animations = [];
    this.scrollObserver?.disconnect();
  }

  private initScrollAnimations(): void {
    // Add class when entering view, remove when leaving — bidirectional like mason-wong.
    // The -80px bottom margin means the trigger fires slightly before the element
    // reaches the very bottom of the viewport, so cards feel eager to appear.
    this.scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );

    document.querySelectorAll('.domain-marker, .project').forEach(el => {
      this.scrollObserver!.observe(el);
    });
  }

  private initLottieAnimations(): void {
    const lottieConfigs = [
      { id: 'balloon', path: 'json/weatherBalloon.json' },
      { id: 'augmented', path: 'json/AR.json' },
      { id: 'coding', path: 'json/coding.json' },
    ];
    for (const config of lottieConfigs) {
      const container = document.getElementById(config.id);
      if (container) {
        const anim = lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: config.path,
        });
        this.animations.push(anim);
      }
    }
  }
}
