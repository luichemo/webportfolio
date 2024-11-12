import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  activeLink: string = 'home';
  showMenu: boolean = true;

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.showMenu = window.innerWidth > 1304;
    }
  }

  ngOnInit() {
    this.onResize();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
