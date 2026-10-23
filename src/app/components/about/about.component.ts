import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ 'sect.about' | translate }}</h2>

        <div class="about-grid">
          <div class="about-image-col" data-aos="fade-right" data-aos-duration="900">
            <div class="image-card">
              <div class="image-frame">
                <img 
                  src="assets/images/photo.jpeg" 
                  alt="Zakariae OUKHAMOU Profile Picture" 
                  loading="lazy" 
                  width="320" 
                  height="320">
              </div>
              
              <div class="experience-badge">
                <i class="fa-solid fa-code"></i>
                <div class="badge-text">
                  <strong>Full-Stack</strong>
                  <span>Developer</span>
                </div>
              </div>
            </div>
          </div>

          <div class="about-text-col" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <p class="lead">{{ 'about.text1' | translate }}</p>
            <p class="description">{{ 'about.text2' | translate }}</p>

            <div class="bento-stats">
              <div class="bento-card">
                <div class="bento-icon"><i class="fa-solid fa-calendar-check"></i></div>
                <div class="bento-data">
                  <span class="bento-number">2+</span>
                  <span class="bento-label">{{ 'about.stat.exp' | translate }}</span>
                </div>
              </div>

              <div class="bento-card">
                <div class="bento-icon"><i class="fa-solid fa-layer-group"></i></div>
                <div class="bento-data">
                  <span class="bento-number">10+</span>
                  <span class="bento-label">{{ 'about.stat.projects' | translate }}</span>
                </div>
              </div>

              <div class="bento-card">
                <div class="bento-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <div class="bento-data">
                  <span class="bento-highlight">Spring & Angular</span>
                  <span class="bento-label">{{ 'about.stat.code' | translate }}</span>
                </div>
              </div>

              <div class="bento-card">
                <div class="bento-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="bento-data">
                  <span class="bento-highlight">Marrakech, MA</span>
                  <span class="bento-label">{{ 'about.stat.location' | translate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background-color: var(--card-bg);
      position: relative;
      overflow: hidden;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 0.85fr 1.15fr;
      gap: clamp(2.5rem, 5vw, 4.5rem);
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
    }

    .about-image-col {
      display: flex;
      justify-content: center;
    }

    .image-card {
      position: relative;
      width: clamp(240px, 30vw, 320px);
      height: clamp(240px, 30vw, 320px);

      &::before {
        content: '';
        position: absolute;
        inset: -12px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        border-radius: 2rem;
        opacity: 0.35;
        filter: blur(12px);
        z-index: 0;
      }
    }

    .image-frame {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      border-radius: 1.75rem;
      overflow: hidden;
      border: 3px solid var(--border-color);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      background: var(--bg-color);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .experience-badge {
      position: absolute;
      bottom: -15px;
      right: -15px;
      z-index: 2;
      background: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 0.65rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.65rem;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

      i {
        font-size: 1.25rem;
        color: var(--primary-color);
      }

      .badge-text {
        display: flex;
        flex-direction: column;
        strong { font-size: 0.85rem; color: var(--text-color); line-height: 1.2; }
        span { font-size: 0.75rem; color: var(--text-muted); }
      }
    }

    .about-text-col {
      .lead {
        font-size: clamp(1.1rem, 2vw, 1.25rem);
        font-weight: 500;
        color: var(--text-color);
        line-height: 1.7;
        margin-bottom: 1.25rem;
      }

      .description {
        color: var(--text-muted);
        font-size: 1rem;
        line-height: 1.75;
        margin-bottom: 2rem;
      }
    }

    .bento-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }

    .bento-card {
      background: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 1.15rem;
      padding: 1.25rem 1.4rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary-color);
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
      }

      .bento-icon {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: rgba(37, 99, 235, 0.1);
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
        flex-shrink: 0;
      }

      .bento-data {
        display: flex;
        flex-direction: column;

        .bento-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          line-height: 1.1;
        }

        .bento-highlight {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-color);
          line-height: 1.2;
        }

        .bento-label {
          font-size: 0.775rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: 0.2rem;
        }
      }
    }

    @media (max-width: 992px) {
      .about-grid {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
      }

      .bento-stats {
        max-width: 500px;
        margin: 0 auto;
        text-align: left;
      }
    }

    @media (max-width: 576px) {
      .bento-stats {
        grid-template-columns: 1fr;
        gap: 0.85rem;
      }

      .experience-badge {
        bottom: -10px;
        right: 0;
      }
    }
  `]
})
export class AboutComponent { }
