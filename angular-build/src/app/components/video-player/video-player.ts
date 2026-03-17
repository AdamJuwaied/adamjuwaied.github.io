import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.scss',
})
export class VideoPlayer implements AfterViewInit {
  @Input({ required: true }) src!: string;
  @Input() title = 'Video';

  @ViewChild('videoEl') videoRef!: ElementRef<HTMLVideoElement>;

  isPlaying = false;
  thumbnailReady = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    const video = this.videoRef?.nativeElement;
    if (!video) return;

    // Once metadata loads, seek to 1s for a good thumbnail frame
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = Math.min(1, video.duration * 0.1);
    });

    // Mark thumbnail ready once the seeked frame is painted
    video.addEventListener('seeked', () => {
      this.thumbnailReady = true;
    });
  }

  play(): void {
    const video = this.videoRef.nativeElement;
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
