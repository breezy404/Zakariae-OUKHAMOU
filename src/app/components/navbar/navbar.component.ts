import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang } from '../../services/translation.service';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container navbar-content">
        <a href="#" class="logo">ZO.</a>
        
        <div class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen" aria-label="Toggle navigation">
          <span [class.open]="isMenuOpen"></span>
          <span [class.open]="isMenuOpen"></span>
          <span [class.open]="isMenuOpen"></span>
        </div>

        <ul class="nav-links" [class.active]="isMenuOpen">
          <li><a href="#about" (click)="closeMenu()" [class.active]="activeSection === 'about'">{{ 'nav.about' | translate }}</a></li>
          <li><a href="#skills" (click)="closeMenu()" [class.active]="activeSection === 'skills'">{{ 'nav.skills' | translate }}</a></li>
          <li><a href="#projects" (click)="closeMenu()" [class.active]="activeSection === 'projects'">{{ 'nav.projects' | translate }}</a></li>
          <li><a href="#contact" (click)="closeMenu()" [class.active]="activeSection === 'contact'">{{ 'nav.contact' | translate }}</a></li>
          
          <li class="nav-cta-mobile">
            <a href="assets/cv/CV.pdf" download class="btn btn-primary btn-sm">
              <i class="fa-solid fa-file"></i> {{ 'nav.cv' | translate }}
            </a>
          </li>

          <li class="actions">
            <a href="assets/cv/CV.pdf" download class="btn btn-outline btn-sm cv-btn-desktop" aria-label="Download CV">
              <i class="fa-solid fa-file"></i> {{ 'nav.cv' | translate }}
            </a>
            <button class="icon-btn theme-toggle" (click)="toggleTheme()" [title]="isDarkMode ? 'Light Mode' : 'Dark Mode'">
              {{ isDarkMode ? '☀️' : '🌙' }}
            </button>
            <button class="icon-btn lang-toggle" (click)="toggleLang()" title="Switch Language">
              {{ currentLang().toUpperCase() }}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 1.5rem 0;
      background: transparent;

      &.scrolled {
        background: var(--navbar-bg);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border-color);
      }
    }

    .navbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--primary-color);
      text-decoration: none;
      letter-spacing: -1px;
      transition: transform 0.3s ease;
      position: relative;
      z-index: 1002;

      &:hover { transform: scale(1.05); }
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      list-style: none;
      align-items: center;

      a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        position: relative;
        padding: 0.5rem 0;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: width 0.3s ease;
        }

        &:hover, &.active {
          color: var(--primary-color);
          &::after { width: 100%; }
        }
      }

      .actions {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        margin-left: 1rem;
        padding-left: 1.5rem;
        border-left: 1px solid var(--border-color);
      }
    }

    .btn-sm {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      border-radius: 0.5rem;
    }

    .nav-cta-mobile { display: none; }

    /* Mobile & Tablet Menu (< 1024px) */
    @media (max-width: 1024px) {
      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 100%;
        max-width: 100%;
        background: var(--bg-color);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        padding: 2rem;
        gap: 2.5rem;

        &.active { right: 0; }

        a {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .actions {
          border-left: none;
          margin-left: 0;
          padding-left: 0;
          flex-direction: row;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .cv-btn-desktop { display: none; }
        .nav-cta-mobile { 
          display: block; 
          margin-top: 1rem;
          
          .btn {
            font-size: 1.1rem;
            padding: 0.75rem 2rem;
          }
        }
      }
      
      .menu-toggle {
        display: flex !important;
      }
    }

    .icon-btn {
      background: transparent;
      border: 1px solid var(--border-color);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      color: var(--text-color);
      transition: all 0.3s ease;
      
      &:hover {
        background: var(--card-bg);
        border-color: var(--primary-color);
        color: var(--primary-color);
        transform: translateY(-2px);
      }
    }

    .lang-toggle {
      font-size: 0.9rem;
      font-weight: 700;
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
      z-index: 1002;
      padding: 0.5rem;
      border-radius: 50%;
      background: transparent;
      transition: background 0.3s;
      
      &:hover { background: var(--card-bg); }
      
      span {
        width: 26px;
        height: 2px;
        background-color: var(--text-color);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 2px;

        &.open:nth-child(1) { transform: translateY(8px) rotate(45deg); width: 28px; }
        &.open:nth-child(2) { opacity: 0; transform: translateX(-10px); }
        &.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); width: 28px; }
      }
    }
  `]
})
export class NavbarComponent {
  translationService = inject(TranslationService);

  isScrolled = false;
  isMenuOpen = false;
  isDarkMode = false;
  activeSection = '';

  get currentLang() {
    return this.translationService.currentLang;
  }

  constructor() {
    // Scroll listener for sticky effect
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 20;
    });

    // Theme persistence
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Intersection Observer for active section
    if (typeof IntersectionObserver !== 'undefined') {
      const options = { threshold: 0.5 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);

      // Wait for view init or use setTimeout as a simplified approach for this standalone component
      setTimeout(() => {
        ['about', 'skills', 'projects', 'contact'].forEach(id => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
      }, 500);
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleLang() {
    const newLang = this.currentLang() === 'en' ? 'fr' : 'en';
    this.translationService.setLanguage(newLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
