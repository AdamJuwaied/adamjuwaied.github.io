import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  constructor(private router: Router) {
    // Close menu on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMenu();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }
}
