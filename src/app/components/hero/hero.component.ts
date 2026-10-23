import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section class="hero-section" id="home">
      <div class="hero-bg-mesh"></div>
      
      <div class="container hero-content">
        <div class="hero-text" data-aos="fade-right" data-aos-duration="900">
          <div class="status-badge" data-aos="fade-down" data-aos-delay="100">
            <span class="status-dot"></span>
            <span class="status-text">{{ 'hero.badge' | translate }}</span>
          </div>

          <span class="greeting">{{ 'hero.greeting' | translate }}</span>
          <h1 class="hero-name">Zakariae <span class="gradient-text">OUKHAMOU</span></h1>
          <h2 class="hero-role">{{ 'hero.role' | translate }}</h2>

          <p class="hero-bio">
            {{ 'hero.bio' | translate }}
          </p>

          <div class="hero-cta">
            <a [attr.href]="cvUrl()" download class="btn btn-primary" aria-label="Download CV">
              <i class="fa-solid fa-file-arrow-down"></i>
              <span>{{ 'hero.cv' | translate }}</span>
            </a>
            <a href="#projects" class="btn btn-outline">
              <i class="fa-solid fa-laptop-code"></i>
              <span>{{ 'hero.btn.projects' | translate }}</span>
            </a>
            <a href="#contact" class="btn btn-ghost">
              <span>{{ 'hero.btn.contact' | translate }}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div class="quick-tech">
            <span class="tech-label">Core Stack:</span>
            <div class="tech-tags">
              <span class="tech-pill"><i class="fa-brands fa-angular"></i> Angular</span>
              <span class="tech-pill"><i class="fa-solid fa-leaf"></i> Spring Boot</span>
              <span class="tech-pill"><i class="fa-brands fa-java"></i> Java</span>
              <span class="tech-pill"><i class="fa-brands fa-js"></i> TypeScript</span>
              <span class="tech-pill"><i class="fa-brands fa-react"></i> React</span>
              <span class="tech-pill"><i class="fa-solid fa-database"></i> PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="hero-visual" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
          <div class="terminal-card">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="terminal-title">zakariae.profile.ts</span>
              <span class="terminal-lang">TypeScript</span>
            </div>
            
            <div class="terminal-body">
              <pre><code><span class="token-keyword">const</span> <span class="token-variable">developer</span> = &#123;
  <span class="token-prop">name</span>: <span class="token-string">'Zakariae OUKHAMOU'</span>,
  <span class="token-prop">role</span>: <span class="token-string">'Full-Stack Web Developer'</span>,
  <span class="token-prop">education</span>: <span class="token-string">'BTS Full-Stack Development'</span>,
  <span class="token-prop">location</span>: <span class="token-string">'Marrakech, Morocco 🇲🇦'</span>,
  <span class="token-prop">frontend</span>: [<span class="token-string">'Angular 17+'</span>, <span class="token-string">'React'</span>, <span class="token-string">'TypeScript'</span>],
  <span class="token-prop">backend</span>: [<span class="token-string">'Spring Boot'</span>, <span class="token-string">'Java'</span>, <span class="token-string">'Node.js'</span>, <span class="token-string">'PHP'</span>],
  <span class="token-prop">databases</span>: [<span class="token-string">'MySQL'</span>, <span class="token-string">'PostgreSQL'</span>, <span class="token-string">'MongoDB'</span>],
  <span class="token-prop">focus</span>: <span class="token-string">'Clean Architecture & Scalable APIs'</span>,
  <span class="token-prop">status</span>: <span class="token-string">'Open to Opportunities 🚀'</span>
&#125;;</code></pre>
            </div>

            <!-- Floating Badges -->
            <div class="floating-badge badge-angular">
              <i class="fa-brands fa-angular"></i>
              <span>Angular</span>
            </div>
            <div class="floating-badge badge-spring">
              <i class="fa-solid fa-leaf"></i>
              <span>Spring Boot</span>
            </div>
            <div class="floating-badge badge-ts">
              <i class="fa-brands fa-js"></i>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" class="scroll-indicator" aria-label="Scroll down to About section">
        <div class="mouse-icon">
          <div class="wheel"></div>
        </div>
        <span class="scroll-text">Scroll Down</span>
      </a>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: clamp(6.5rem, 12vh, 8.5rem);
      padding-bottom: clamp(4rem, 8vh, 6rem);
    }

    .hero-bg-mesh {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 15% 25%, rgba(37, 99, 235, 0.12) 0%, transparent 45%),
        radial-gradient(circle at 85% 75%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 60%);
      pointer-events: none;
      z-index: 0;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      align-items: center;
      gap: clamp(2rem, 5vw, 4rem);
      width: 100%;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.25);
      color: #16a34a;
      padding: 0.4rem 1rem;
      border-radius: 999px;
      font-size: 0.825rem;
      font-weight: 600;
      margin-bottom: 1.25rem;

      [data-theme='dark'] & {
        background: rgba(34, 197, 94, 0.15);
        color: #4ade80;
        border-color: rgba(74, 222, 128, 0.3);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
        animation: pulseDot 2s infinite;
      }
    }

    @keyframes pulseDot {
      0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
      100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }

    .greeting {
      display: block;
      color: var(--primary-color);
      font-weight: 600;
      font-size: clamp(1rem, 2vw, 1.2rem);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .hero-name {
      font-size: clamp(2.4rem, 5.5vw, 4.2rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 0.75rem;
      letter-spacing: -1.5px;
      color: var(--text-color);

      .gradient-text {
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .hero-role {
      font-size: clamp(1.25rem, 2.8vw, 1.9rem);
      font-weight: 600;
      color: var(--text-color);
      opacity: 0.9;
      margin-bottom: 1.5rem;
      letter-spacing: -0.5px;
    }

    .hero-bio {
      color: var(--text-muted);
      font-size: clamp(1rem, 1.5vw, 1.125rem);
      line-height: 1.75;
      max-width: 580px;
      margin-bottom: 2.25rem;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 2.5rem;
    }

    .btn-ghost {
      background: transparent;
      color: var(--text-color);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      text-decoration: none;
      padding: 0.75rem 1.25rem;
      border-radius: 0.75rem;
      transition: all 0.25s ease;

      &:hover {
        color: var(--primary-color);
        transform: translateX(4px);
      }
    }

    .quick-tech {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;

      .tech-label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-muted);
        font-weight: 600;
      }

      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .tech-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        padding: 0.35rem 0.75rem;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--text-color);
        transition: all 0.2s ease;

        i { color: var(--primary-color); }

        &:hover {
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }
      }
    }

    /* Terminal Card Styling */
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .terminal-card {
      width: 100%;
      max-width: 500px;
      background: #0f172a;
      border-radius: 1.25rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1);
      overflow: visible;
      position: relative;
      color: #f1f5f9;
      font-family: 'Fira Code', 'Courier New', monospace;
    }

    .terminal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.85rem 1.25rem;
      background: #1e293b;
      border-top-left-radius: 1.25rem;
      border-top-right-radius: 1.25rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);

      .terminal-dots {
        display: flex;
        gap: 6px;

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          &.red { background: #ef4444; }
          &.yellow { background: #f59e0b; }
          &.green { background: #10b981; }
        }
      }

      .terminal-title {
        font-size: 0.8rem;
        color: #94a3b8;
        font-weight: 600;
      }

      .terminal-lang {
        font-size: 0.7rem;
        color: #64748b;
        text-transform: uppercase;
        font-weight: 700;
      }
    }

    .terminal-body {
      padding: 1.25rem 1.5rem;
      font-size: 0.825rem;
      line-height: 1.7;
      overflow-x: auto;
      border-bottom-left-radius: 1.25rem;
      border-bottom-right-radius: 1.25rem;

      pre { margin: 0; }

      .token-keyword { color: #f43f5e; font-weight: 600; }
      .token-variable { color: #38bdf8; }
      .token-prop { color: #a78bfa; }
      .token-string { color: #34d399; }
    }

    /* Floating Badges */
    .floating-badge {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.9rem;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 999px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
      font-size: 0.8rem;
      font-weight: 600;
      color: white;
      animation: floatBadge 4s ease-in-out infinite alternate;

      &.badge-angular {
        top: -16px;
        right: 20px;
        border-color: rgba(221, 0, 49, 0.4);
        i { color: #dd0031; }
      }

      &.badge-spring {
        bottom: -16px;
        left: 20px;
        border-color: rgba(109, 179, 63, 0.4);
        animation-delay: -1.5s;
        i { color: #6db33f; }
      }

      &.badge-ts {
        bottom: 50%;
        right: -18px;
        border-color: rgba(49, 120, 198, 0.4);
        animation-delay: -2.5s;
        i { color: #3178c6; }
      }
    }

    @keyframes floatBadge {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-8px); }
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      text-decoration: none;
      color: var(--text-muted);
      transition: color 0.2s ease;

      &:hover { color: var(--primary-color); }

      .mouse-icon {
        width: 22px;
        height: 36px;
        border: 2px solid currentColor;
        border-radius: 12px;
        position: relative;

        .wheel {
          width: 4px;
          height: 6px;
          background: currentColor;
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: mouseWheel 1.8s infinite;
        }
      }

      .scroll-text {
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
    }

    @keyframes mouseWheel {
      0% { top: 6px; opacity: 1; }
      100% { top: 18px; opacity: 0; }
    }

    /* Responsive Queries */
    @media (max-width: 992px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
      }

      .hero-text {
        display: flex;
        flex-direction: column;
        align-items: center;

        .hero-bio {
          margin-left: auto;
          margin-right: auto;
        }
      }

      .hero-cta {
        justify-content: center;
      }

      .quick-tech {
        align-items: center;
        .tech-tags { justify-content: center; }
      }

      .hero-visual {
        margin-top: 1rem;
      }

      .floating-badge.badge-ts {
        right: 10px;
      }
    }

    @media (max-width: 576px) {
      .hero-section {
        padding-top: 5.5rem;
      }

      .hero-cta {
        flex-direction: column;
        width: 100%;
        .btn { width: 100%; }
      }

      .terminal-card {
        font-size: 0.75rem;
      }

      .floating-badge {
        display: none; /* Avoid overflowing mobile screens */
      }
    }
  `]
})
export class HeroComponent {
  private translationService = inject(TranslationService);
  cvUrl = this.translationService.cvUrl;
}
