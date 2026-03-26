import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import lottie, { AnimationItem } from 'lottie-web';
import { VideoPlayer } from '../../components/video-player/video-player';
import { ImageTrailComponent } from '../../components/image-trail/image-trail';

interface NormalizedCircle {
  xN: number;
  yN: number;
  rN: number;
  vxN: number;
  vyN: number;
  color: string;
}

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

  @ViewChild('bgCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('timelineSpine', { static: false }) spineRef!: ElementRef<HTMLDivElement>;
  @ViewChild('treeContainer', { static: false }) treeRef!: ElementRef<HTMLDivElement>;

  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  private circleArray: NormalizedCircle[] = [];
  private resizeHandler: (() => void) | null = null;
  private mouseMoveHandler: ((e: MouseEvent) => void) | null = null;

  // Spine glow state
  private scrollHandler: (() => void) | null = null;
  private glowRafId: number | null = null;
  private glowIdleTimer: any = null;
  private glowState = {
    lastY: 0,
    anchorPos: 0,       // where the band started (last resting position)
    currentPos: 0,      // where the user is now on the spine
    direction: 1,       // +1 down, -1 up
    active: false,
  };

  private readonly BALL_COUNT = 20;
  private readonly RADIUS_MIN = 0.006;
  private readonly RADIUS_MAX = 0.016;
  private readonly BASE_VELOCITY = 0.0004;
  private readonly HEX_COLORS = ['#d4a04a', '#b87a34', '#c9873b', '#9e6e2a'];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initLottieAnimations();
    this.initBallsCanvas();
    this.initSpineGlow();
  }

  ngOnDestroy(): void {
    this.animations.forEach(anim => anim.destroy());
    this.animations = [];
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
      window.removeEventListener('orientationchange', this.resizeHandler);
    }
    if (this.mouseMoveHandler) {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
    }
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.glowRafId) cancelAnimationFrame(this.glowRafId);
    if (this.glowIdleTimer) clearTimeout(this.glowIdleTimer);
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

  // ── Spine Glow ──

  private treeDocTop = 0;
  private treeDocHeight = 1;

  private initSpineGlow(): void {
    const s = this.glowState;
    s.lastY = window.scrollY;

    this.cacheTreeRect();

    const pos = this.scrollYToSpine(window.scrollY, 1);
    s.anchorPos = pos;
    s.currentPos = pos;

    this.scrollHandler = () => {
      this.cacheTreeRect();          // keep position fresh on layout shifts
      const currentY = window.scrollY;
      const delta = currentY - s.lastY;
      s.lastY = currentY;
      if (delta === 0) return;

      const newDir = delta > 0 ? 1 : -1;
      const newPos = this.scrollYToSpine(currentY, newDir);

      // Direction change or fresh start → reset anchor to the NEW position
      // so the band starts at zero width from the new revealing edge
      if (!s.active || newDir !== s.direction) {
        s.anchorPos = newPos;
      }

      s.direction = newDir;
      s.currentPos = newPos;
      s.active = true;

      clearTimeout(this.glowIdleTimer);
      this.glowIdleTimer = setTimeout(() => { s.active = false; }, 120);

      if (!this.glowRafId) this.tickGlow();
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  /** Cache the tree element's document-space position. */
  private cacheTreeRect(): void {
    const tree = this.treeRef?.nativeElement;
    if (!tree) return;
    const rect = tree.getBoundingClientRect();
    this.treeDocTop = window.scrollY + rect.top;
    this.treeDocHeight = Math.max(1, rect.height);
  }

  /** Map scrollY → 0..1 on the spine using the revealing viewport edge.
   *  Down → bottom of viewport.  Up → top of viewport. */
  private scrollYToSpine(scrollY: number, direction: number): number {
    const edge = direction > 0
      ? scrollY + window.innerHeight   // scrolling down → bottom edge
      : scrollY;                        // scrolling up   → top edge
    return Math.max(0, Math.min(1, (edge - this.treeDocTop) / this.treeDocHeight));
  }

  private tickGlow = (): void => {
    const s = this.glowState;
    const tree = this.treeRef?.nativeElement;
    if (!tree) { this.glowRafId = null; return; }

    if (!s.active) {
      // Band shrinks: anchor slides toward current (the color retreats)
      s.anchorPos += (s.currentPos - s.anchorPos) * 0.06;

      // When band is negligibly small, clear and stop
      if (Math.abs(s.anchorPos - s.currentPos) < 0.002) {
        this.clearBandVars(tree);
        this.glowRafId = null;
        return;
      }
    }

    const bandStart = Math.min(s.anchorPos, s.currentPos);
    const bandEnd   = Math.max(s.anchorPos, s.currentPos);
    const downward  = s.direction > 0;

    this.applyBandVars(tree, bandStart, bandEnd, downward);
    this.glowRafId = requestAnimationFrame(this.tickGlow);
  };

  /** Hide all colored lines. */
  private clearBandVars(tree: HTMLElement): void {
    tree.style.setProperty('--bandTopPx', '-200px');
    tree.style.setProperty('--bandBottomPx', '-200px');
    tree.style.setProperty('--bandOpacity', '0');
  }

  /** Convert band 0..1 positions to viewport pixels and set CSS vars
   *  on the tree container so every line element picks up the color. */
  private applyBandVars(tree: HTMLElement, start: number, end: number, downward: boolean): void {
    const rect = tree.getBoundingClientRect();
    const topPx    = rect.top + start * rect.height;
    const bottomPx = rect.top + end   * rect.height;

    tree.style.setProperty('--bandTopPx',    `${topPx.toFixed(1)}px`);
    tree.style.setProperty('--bandBottomPx', `${bottomPx.toFixed(1)}px`);
    tree.style.setProperty('--bandOpacity',  '1');
    tree.style.setProperty('--leadColor',    downward ? '#d4a55a' : '#e8c07a');
    tree.style.setProperty('--trailColor',   downward ? '#e8c07a' : '#d4a55a');
  }

  // ── Balls Canvas ──

  private initBallsCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.setupCanvasSize(canvas);
    this.createCircles();

    this.mouseMoveHandler = (e: MouseEvent) => {
      // not used for movement, but could add interactivity later
    };
    document.addEventListener('mousemove', this.mouseMoveHandler);

    this.resizeHandler = () => this.setupCanvasSize(canvas);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('orientationchange', this.resizeHandler);

    this.animateBalls(canvas);
  }

  private setupCanvasSize(canvas: HTMLCanvasElement): void {
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    if (this.ctx) {
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  private createCircles(): void {
    this.circleArray = [];
    for (let i = 0; i < this.BALL_COUNT; i++) {
      const rN = this.RADIUS_MIN + Math.random() * (this.RADIUS_MAX - this.RADIUS_MIN);
      const xN = rN + Math.random() * (1 - 2 * rN);
      const yN = rN + Math.random() * (1 - 2 * rN);
      const angle = Math.random() * Math.PI * 2;
      const speed = this.BASE_VELOCITY * (0.5 + Math.random());
      this.circleArray.push({
        xN, yN, rN,
        vxN: Math.cos(angle) * speed,
        vyN: Math.sin(angle) * speed,
        color: this.HEX_COLORS[Math.floor(Math.random() * this.HEX_COLORS.length)]
      });
    }
  }

  private adjustBrightness(hex: string, amount: number): string {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    r = Math.max(0, Math.min(255, r + amount));
    g = Math.max(0, Math.min(255, g + amount));
    b = Math.max(0, Math.min(255, b + amount));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  private animateBalls = (canvas?: HTMLCanvasElement): void => {
    const c = canvas || this.canvasRef?.nativeElement;
    if (!c || !this.ctx) return;

    this.animationFrameId = requestAnimationFrame(() => this.animateBalls(c));

    const w = window.innerWidth;
    const h = window.innerHeight;
    const minDim = Math.min(w, h);

    this.ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < this.circleArray.length; i++) {
      const circle = this.circleArray[i];

      // Move — NO damping so balls keep floating forever
      circle.xN += circle.vxN;
      circle.yN += circle.vyN;

      const rPx = circle.rN * minDim;
      const xPx = circle.xN * w;
      const yPx = circle.yN * h;

      // Bounce off edges
      if (xPx - rPx < 0) { circle.vxN = Math.abs(circle.vxN); circle.xN = rPx / w; }
      else if (xPx + rPx > w) { circle.vxN = -Math.abs(circle.vxN); circle.xN = (w - rPx) / w; }
      if (yPx - rPx < 0) { circle.vyN = Math.abs(circle.vyN); circle.yN = rPx / h; }
      else if (yPx + rPx > h) { circle.vyN = -Math.abs(circle.vyN); circle.yN = (h - rPx) / h; }

      const fx = circle.xN * w;
      const fy = circle.yN * h;

      // Radial gradient for 3D shading
      const grad = this.ctx.createRadialGradient(
        fx - rPx * 0.3, fy - rPx * 0.3, rPx * 0.1,
        fx, fy, rPx
      );
      grad.addColorStop(0, this.adjustBrightness(circle.color, 40));
      grad.addColorStop(0.5, circle.color);
      grad.addColorStop(1, this.adjustBrightness(circle.color, -30));

      this.ctx.beginPath();
      this.ctx.arc(fx, fy, rPx, 0, Math.PI * 2);
      this.ctx.fillStyle = grad;
      this.ctx.fill();

      // Collision detection
      for (let j = i + 1; j < this.circleArray.length; j++) {
        const c2 = this.circleArray[j];
        const x1 = circle.xN * w, y1 = circle.yN * h, r1 = circle.rN * minDim;
        const x2 = c2.xN * w, y2 = c2.yN * h, r2 = c2.rN * minDim;
        const dx = x1 - x2, dy = y1 - y2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = r1 + r2;

        if (dist < minDist + 1 && dist > 0) {
          const angle = Math.atan2(dy, dx);
          const s1 = Math.sqrt(circle.vxN ** 2 + circle.vyN ** 2);
          const s2 = Math.sqrt(c2.vxN ** 2 + c2.vyN ** 2);
          const d1 = Math.atan2(circle.vyN, circle.vxN);
          const d2 = Math.atan2(c2.vyN, c2.vxN);

          circle.vxN = s2 * Math.cos(d2 - angle);
          circle.vyN = s2 * Math.sin(d2 - angle);
          c2.vxN = s1 * Math.cos(d1 - angle);
          c2.vyN = s1 * Math.sin(d1 - angle);

          const overlap = minDist - dist + 1;
          const sepX = Math.cos(angle) * overlap / 2;
          const sepY = Math.sin(angle) * overlap / 2;
          circle.xN += sepX / w; circle.yN += sepY / h;
          c2.xN -= sepX / w; c2.yN -= sepY / h;
        }
      }
    }
  };
}
