import { Component, AfterViewInit, OnDestroy, Input, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { gsap } from 'gsap';

// ── Helpers ──

function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e: MouseEvent | TouchEvent, rect: DOMRect): { x: number; y: number } {
  let clientX = 0, clientY = 0;
  if ('touches' in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ('clientX' in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function getMouseDistance(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

// ── ImageItem ──

class ImageItem {
  public DOM: { el: HTMLDivElement; inner: HTMLDivElement | null } = {
    el: null as unknown as HTMLDivElement,
    inner: null
  };
  public defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  public rect: DOMRect | null = null;
  private resizeHandler!: () => void;

  constructor(el: HTMLDivElement) {
    this.DOM.el = el;
    this.DOM.inner = el.querySelector('.content__img-inner');
    this.getRect();
    this.initEvents();
  }

  private initEvents() {
    this.resizeHandler = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resizeHandler);
  }

  private getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }

  destroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}

// ── Variant 2 Engine ──

class ImageTrailEngine {
  private container: HTMLDivElement;
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition = 0;
  private zIndexVal = 1;
  private activeImagesCount = 0;
  private isIdle = true;
  private threshold = 80;
  private mousePos = { x: 0, y: 0 };
  private lastMousePos = { x: 0, y: 0 };
  private cacheMousePos = { x: 0, y: 0 };
  private handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  private initRender: (ev: MouseEvent | TouchEvent) => void;
  private running = true;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map(
      img => new ImageItem(img as HTMLDivElement)
    );
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove);
    container.addEventListener('touchmove', this.handlePointerMove);

    this.initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  private render() {
    if (!this.running) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        {
          scale: 2.8,
          filter: 'brightness(250%)'
        },
        {
          duration: 0.4,
          ease: 'power1',
          scale: 1,
          filter: 'brightness(100%)'
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power2',
          opacity: 0,
          scale: 0.2
        },
        0.45
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }

  destroy() {
    this.running = false;
    this.container.removeEventListener('mousemove', this.handlePointerMove);
    this.container.removeEventListener('touchmove', this.handlePointerMove);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => {
      gsap.killTweensOf(img.DOM.el);
      img.destroy();
    });
  }
}

// ── Angular Component ──

@Component({
  selector: 'app-image-trail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-trail.html',
  styleUrl: './image-trail.scss'
})
export class ImageTrailComponent implements AfterViewInit, OnDestroy {
  @Input() items: string[] = [];
  @ViewChild('trailContainer', { static: false }) containerRef!: ElementRef<HTMLDivElement>;

  private isBrowser: boolean;
  private engine: ImageTrailEngine | null = null;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser || !this.containerRef?.nativeElement) return;
    this.engine = new ImageTrailEngine(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.engine?.destroy();
  }
}
