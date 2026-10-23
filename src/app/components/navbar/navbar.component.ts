import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <header class="navbar" [class.scrolled]="isScrolled">
      <div class="container navbar-content">
        <a href="#home" class="logo-link" aria-label="Zakariae OUKHAMOU Homepage">
          <div class="logo-badge">
            <span class="logo-code">&lt;</span>
            <span class="logo-text">ZO</span>
            <span class="logo-code">/&gt;</span>
          </div>
          <span class="logo-name">Zakariae<span class="dot">.</span></span>
        </a>

        <button 
          class="menu-toggle" 
          (click)="toggleMenu()" 
          [attr.aria-expanded]="isMenuOpen" 
          aria-label="Toggle navigation menu"
          type="button">
          <span [class.open]="isMenuOpen"></span>
          <span [class.open]="isMenuOpen"></span>
          <span [class.open]="isMenuOpen"></span>
        </button>

        <nav class="nav-links" [class.active]="isMenuOpen" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><a href="#about" (click)="closeMenu()" [class.active]="activeSection === 'about'">{{ 'nav.about' | translate }}</a></li>
            <li><a href="#skills" (click)="closeMenu()" [class.active]="activeSection === 'skills'">{{ 'nav.skills' | translate }}</a></li>
            <li><a href="#projects" (click)="closeMenu()" [class.active]="activeSection === 'projects'">{{ 'nav.projects' | translate }}</a></li>
            <li><a href="#education" (click)="closeMenu()" [class.active]="activeSection === 'education'">{{ 'nav.education' | translate }}</a></li>
            <li><a href="#contact" (click)="closeMenu()" [class.active]="activeSection === 'contact'">{{ 'nav.contact' | translate }}</a></li>
          </ul>

          <div class="nav-actions">
            <a [attr.href]="cvUrl()" download class="btn btn-outline btn-sm cv-btn" aria-label="Download CV">
              <i class="fa-solid fa-file-arrow-down"></i>
              <span>{{ 'nav.cv' | translate }}</span>
            </a>

            <button 
              type="button" 
              class="icon-btn theme-toggle" 
              (click)="toggleTheme()" 
              [title]="isDarkMode ? 'Light Mode' : 'Dark Mode'"
              aria-label="Toggle dark/light mode">
              <i class="fa-solid" [class.fa-sun]="isDarkMode" [class.fa-moon]="!isDarkMode"></i>
            </button>

            <button 
              type="button" 
              class="icon-btn lang-toggle" 
              (click)="toggleLang()" 
              title="Switch Language (EN/FR)"
              aria-label="Toggle language">
              <span class="lang-text">{{ currentLang().toUpperCase() }}</span>
            </button>
          </div>
        </nav>
      </div>
      <div class="mobile-backdrop" *ngIf="isMenuOpen" (click)="closeMenu()"></div>
    </header>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 1.25rem 0;
      background: transparent;

      &.scrolled {
        background: var(--navbar-bg);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border-color);
      }
    }

    .navbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      text-decoration: none;
      color: var(--text-color);
      font-weight: 700;
      font-size: 1.25rem;
      z-index: 1002;

      .logo-badge {
        width: 42px;
        height: 42px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: monospace;
        font-weight: 800;
        font-size: 0.95rem;
        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
        transition: transform 0.3s ease;

        .logo-code { opacity: 0.8; font-size: 0.8rem; }
        .logo-text { font-weight: 900; margin: 0 1px; }
      }

      .logo-name {
        letter-spacing: -0.5px;
        .dot { color: var(--primary-color); }
      }

      &:hover .logo-badge {
        transform: scale(1.08) rotate(2deg);
      }
    }

    .nav-links {
      display: flex;
      gap: 2.25rem;
      align-items: center;
    }

    .nav-list {
      display: flex;
      list-style: none;
      gap: 1.75rem;
      align-items: center;
      margin: 0;
      padding: 0;

      a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.25s ease;
        position: relative;
        padding: 0.5rem 0.25rem;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          transition: width 0.3s ease;
        }

        &:hover, &.active {
          color: var(--primary-color);
          &::after { width: 100%; }
        }
      }
    }

    .nav-actions {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      padding-left: 1.5rem;
      border-left: 1px solid var(--border-color);
    }

    .cv-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      border-radius: 0.65rem;
    }

    .icon-btn {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      color: var(--text-color);
      transition: all 0.25s ease;
      font-size: 0.95rem;

      &:hover {
        background: var(--bg-color);
        border-color: var(--primary-color);
        color: var(--primary-color);
        transform: translateY(-2px);
      }

      .lang-text {
        font-weight: 800;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
      z-index: 1002;
      padding: 0.5rem;
      border: none;
      background: transparent;
      border-radius: 8px;

      span {
        display: block;
        width: 26px;
        height: 2.5px;
        background-color: var(--text-color);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 2px;

        &.open:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
        &.open:nth-child(2) { opacity: 0; transform: translateX(-8px); }
        &.open:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }
      }
    }

    .mobile-backdrop {
      display: none;
    }

    @media (max-width: 1024px) {
      .menu-toggle {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: min(85vw, 360px);
        background: var(--bg-color);
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: 6rem 2rem 2.5rem;
        box-shadow: -10px 0 35px rgba(0, 0, 0, 0.15);
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1001;
        overflow-y: auto;
        border-left: 1px solid var(--border-color);

        &.active {
          right: 0;
        }
      }

      .nav-list {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        width: 100%;

        li { width: 100%; }

        a {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-color);
        }
      }

      .nav-actions {
        border-left: none;
        padding-left: 0;
        margin-top: 2rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--border-color);
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: flex-start;

        .cv-btn {
          width: 100%;
          justify-content: center;
          padding: 0.85rem;
          font-size: 1rem;
        }
      }

      .mobile-backdrop {
        display: block;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 1000;
      }
    }
  `]
})
export class NavbarComponent {
  private translationService = inject(TranslationService);

  isScrolled = false;
  isMenuOpen = false;
  isDarkMode = false;
  activeSection = '';

  cvUrl = this.translationService.cvUrl;

  get currentLang() {
    return this.translationService.currentLang;
  }

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 20;
      }, { passive: true });

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
      }

      if (typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        }, { threshold: 0.4 });

        setTimeout(() => {
          ['home', 'about', 'skills', 'projects', 'education', 'contact'].forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
          });
        }, 600);
      }
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleLang() {
    const nextLang = this.currentLang() === 'en' ? 'fr' : 'en';
    this.translationService.setLanguage(nextLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }
}
