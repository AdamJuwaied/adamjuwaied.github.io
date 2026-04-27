import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
  Inject,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.scss',
})
export class VideoPlayer implements AfterViewInit, OnDestroy {
  @Input({ required: true }) src!: string;
  @Input() title = 'Video';
  @Input() poster?: string;

  @ViewChild('videoEl') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('wrapper') wrapperRef!: ElementRef<HTMLDivElement>;

  isPlaying = false;
  thumbnailReady = false;
  private isBrowser: boolean;
  private observer?: IntersectionObserver;
  private videoLoaded = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    // Lazy-load: only set src when the wrapper enters (or is near) the viewport
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !this.videoLoaded) {
            this.loadVideo();
            this.observer?.disconnect();
          }
        }
      },
      { rootMargin: '200px' } // begin loading slightly before the element scrolls into view
    );

    this.observer.observe(this.wrapperRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private loadVideo(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;

    this.videoLoaded = true;
    video.preload = 'metadata';
    video.src = this.src;

    // Once metadata loads, seek to 1s for a good thumbnail frame
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = Math.min(1, video.duration * 0.1);
    });

    // Mark thumbnail ready once the seeked frame is painted
    video.addEventListener('seeked', () => {
      this.thumbnailReady = true;
    });

    video.load();
  }

  play(): void {
    const video = this.videoRef.nativeElement;
    // If play triggered before intersection (e.g. user scrolled fast), load now
    if (!this.videoLoaded) {
      this.loadVideo();
    }
    video.muted = false;
    video.controls = true;
    video.play();
    this.isPlaying = true;
  }

  onEnded(): void {
    this.isPlaying = false;
    const video = this.videoRef.nativeElement;
    video.controls = false;
    video.currentTime = Math.min(1, video.duration * 0.1);
  }
}
