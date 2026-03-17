import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import lottie from 'lottie-web';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit, AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initLottieAnimations();
      this.initScrollAnimation();
      this.initHamburgerMenu();
    }
  }

  private initLottieAnimations(): void {
    const bmContainer = document.getElementById('bm');
    if (bmContainer) {
      lottie.loadAnimation({
        container: bmContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/bm.json'
      });
    }

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

  private initScrollAnimation(): void {
    const triangle = document.getElementById('dashed-path') as unknown as SVGPathElement;
    const triangle2 = document.getElementById('dashed-path2') as unknown as SVGPathElement;

    if (triangle && triangle2) {
      const length = triangle.getTotalLength();
      const length2 = triangle2.getTotalLength();

      triangle.style.strokeDasharray = String(length);
      triangle2.style.strokeDasharray = String(length2);
      triangle.style.strokeDashoffset = String(length);
      triangle2.style.strokeDashoffset = String(length2);

      window.addEventListener('scroll', () => {
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / 
          (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const draw = length * scrollpercent;
        triangle.style.strokeDashoffset = String(1 + length - draw);
        triangle2.style.strokeDashoffset = String(1 + length2 - draw);
      });
    }
  }

  private initHamburgerMenu(): void {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const overlay = document.querySelector('.overlay');
    const card = document.querySelector('.card');
    const introText = document.querySelector('.introText');
    const navbarLinks = document.querySelector('.navbar-links');
    const friendPic = document.querySelector('.friendPic');

    if (hamburgerMenu && overlay && navbarLinks) {
      hamburgerMenu.addEventListener('click', () => {
        overlay.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        navbarLinks.classList.toggle('active');
        card?.classList.toggle('hide');
        introText?.classList.toggle('hide');
        friendPic?.classList.toggle('hide');
      });
    }
  }
}
