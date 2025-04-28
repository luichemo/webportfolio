import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any, private router: Router) {}

  activeLink: string = 'home';
  showMenu: boolean = true;
  showMenu2: boolean = false;

  sections: string[] = ['home', 'about', 'projects', 'contact'];  // Put your sections IDs here

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveLinkOnScroll();
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.showMenu = window.innerWidth > 1304;
    }
  }

  ngOnInit() {
    this.onResize();
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenu2 = !this.showMenu2;
  }

  scroll(target: any) {
    document.querySelector(`#${target}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.setActive(target);
  }

  updateActiveLinkOnScroll() {
    for (let sectionId of this.sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeLink = sectionId;
          break;
        }
      }
    }
  }
}
