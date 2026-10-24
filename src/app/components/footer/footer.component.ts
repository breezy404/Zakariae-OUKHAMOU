import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#home" class="logo-link">
              <div class="logo-badge">
                <span class="logo-code">&lt;</span>
                <span class="logo-text">ZO</span>
                <span class="logo-code">/&gt;</span>
              </div>
              <span class="logo-name">Zakariae<span class="dot">.</span></span>
            </a>
            <p class="brand-desc">{{ 'hero.role' | translate }}</p>
            <p class="brand-sub">{{ 'contact.subtitle' | translate }}</p>
          </div>
          
          <div class="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">{{ 'nav.about' | translate }}</a></li>
              <li><a href="#skills">{{ 'nav.skills' | translate }}</a></li>
              <li><a href="#projects">{{ 'nav.projects' | translate }}</a></li>
              <li><a href="#education">{{ 'nav.education' | translate }}</a></li>
              <li><a href="#contact">{{ 'nav.contact' | translate }}</a></li>
            </ul>
          </div>
          
          <div class="footer-social">
            <h4>Connect</h4>
            <div class="social-links">
              <a 
                href="https://www.linkedin.com/in/zakariae-oukhamou-1b42a62b6/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com/breezy404" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a 
                href="https://www.instagram.com/zakaria_ohm_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/212645348293?text=Bonjour%20Zakariae" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <a [attr.href]="cvUrl()" download class="footer-cv-link">
              <i class="fa-solid fa-file-arrow-down"></i>
              {{ 'hero.cv' | translate }}
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© {{ currentYear }} Zakariae OUKHAMOU. Designed & Crafted with Angular 17.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--bg-color);
      border-top: 1px solid var(--border-color);
      padding: 4.5rem 0 2rem;
      margin-top: 4rem;
      position: relative;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3.5rem;
      margin-bottom: 3.5rem;

      @media(max-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }

      @media(max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
      }
    }

    .footer-brand {
      .logo-link {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        text-decoration: none;
        color: var(--text-color);
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 1rem;

        .logo-badge {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: monospace;
          font-weight: 800;
          font-size: 0.85rem;
        }

        .logo-name {
          letter-spacing: -0.5px;
          .dot { color: var(--primary-color); }
        }
      }

      .brand-desc {
        color: var(--primary-color);
        font-weight: 600;
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
      }

      .brand-sub {
        color: var(--text-muted);
        line-height: 1.6;
        font-size: 0.9rem;
        max-width: 360px;
        @media(max-width: 600px) { margin: 0 auto; }
      }
    }

    .footer-nav, .footer-social {
      h4 {
        font-size: 1.05rem;
        font-weight: 700;
        margin-bottom: 1.25rem;
        color: var(--text-color);
      }

      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        a {
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.925rem;
          transition: color 0.2s;
          &:hover { color: var(--primary-color); }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 0.65rem;
      margin-bottom: 1.25rem;
      @media(max-width: 600px) { justify-content: center; }

      a {
        width: 38px;
        height: 38px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
        text-decoration: none;
        transition: all 0.25s ease;

        &:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          transform: translateY(-3px);
        }
      }
    }

    .footer-cv-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--primary-color);
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        text-decoration: underline;
        transform: translateX(3px);
      }
    }

    .footer-bottom {
      padding-top: 1.75rem;
      border-top: 1px solid var(--border-color);
      text-align: center;

      p {
        font-size: 0.85rem;
        color: var(--text-muted);
      }
    }
  `]
})
export class FooterComponent {
  private translationService = inject(TranslationService);
  cvUrl = this.translationService.cvUrl;
  currentYear = new Date().getFullYear();
}
