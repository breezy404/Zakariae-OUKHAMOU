import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">ZO.</div>
            <p>{{ 'contact.subtitle' | translate }}</p>
          </div>
          
          <div class="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">{{ 'nav.about' | translate }}</a></li>
              <li><a href="#skills">{{ 'nav.skills' | translate }}</a></li>
              <li><a href="#projects">{{ 'nav.projects' | translate }}</a></li>
              <li><a href="#contact">{{ 'nav.contact' | translate }}</a></li>
            </ul>
          </div>
          
          <div class="footer-social">
            <h4>Social</h4>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/zakariae-oukhamou-1b42a62b6/"  aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>   
              </a>
            
              
              <a href="https://github.com/breezy404" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2026 Zakariae OUKHAMOU. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--bg-color);
      border-top: 1px solid var(--border-color);
      padding: 5rem 0 2rem;
      margin-top: 5rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;

      @media(max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }
    }

    .footer-brand {
      .logo {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--primary-color);
        margin-bottom: 1.5rem;
      }
      p {
        color: var(--text-muted);
        line-height: 1.6;
        max-width: 300px;
        @media(max-width: 768px) { margin: 0 auto; }
      }
    }

    .footer-nav, .footer-social {
      h4 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-color);
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          margin-bottom: 0.75rem;
          a {
            text-decoration: none;
            color: var(--text-muted);
            transition: color 0.3s;
            &:hover { color: var(--primary-color); }
          }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;
      @media(max-width: 768px) { justify-content: center; }
      
      a {
        width: 40px;
        height: 40px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
        text-decoration: none;
        font-weight: 700;
        transition: all 0.3s ease;
        
        &:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          transform: translateY(-3px);
        }
      }
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
      text-align: center;
      p {
        font-size: 0.9rem;
        color: var(--text-muted);
      }
    }
  `]
})
export class FooterComponent { }
