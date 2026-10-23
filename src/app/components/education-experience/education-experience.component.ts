import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section id="education" class="edu-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ 'sect.edu' | translate }}</h2>

        <div class="timeline-container">
          <!-- Timeline Item 1: Internship -->
          <div class="timeline-card" data-aos="fade-up" data-aos-delay="100">
            <div class="timeline-marker">
              <div class="marker-dot"><i class="fa-solid fa-briefcase"></i></div>
              <div class="marker-line"></div>
            </div>

            <div class="timeline-body">
              <div class="body-header">
                <span class="timeline-tag work">Experience</span>
                <span class="timeline-period">
                  <i class="fa-regular fa-calendar"></i>
                  {{ 'exp.intern.period' | translate }}
                </span>
              </div>

              <h3 class="timeline-title">{{ 'exp.intern' | translate }}</h3>
              <h4 class="timeline-institution">{{ 'exp.intern.company' | translate }}</h4>
              
              <p class="timeline-desc">{{ 'exp.intern.desc' | translate }}</p>

              <div class="timeline-tech">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">Spring Boot</span>
                <span class="tech-tag">RESTful API</span>
                <span class="tech-tag">JWT</span>
                <span class="tech-tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          <!-- Timeline Item 2: BTS -->
          <div class="timeline-card" data-aos="fade-up" data-aos-delay="200">
            <div class="timeline-marker">
              <div class="marker-dot edu"><i class="fa-solid fa-graduation-cap"></i></div>
            </div>

            <div class="timeline-body">
              <div class="body-header">
                <span class="timeline-tag edu">Education</span>
                <span class="timeline-period">
                  <i class="fa-regular fa-calendar"></i>
                  {{ 'edu.bts.period' | translate }}
                </span>
              </div>

              <h3 class="timeline-title">{{ 'edu.bts' | translate }}</h3>
              <h4 class="timeline-institution">{{ 'edu.bts.school' | translate }}</h4>
              
              <p class="timeline-desc">{{ 'edu.bts.desc' | translate }}</p>

              <div class="timeline-tech">
                <span class="tech-tag">Java OOP</span>
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">Spring Boot</span>
                <span class="tech-tag">PHP / Laravel</span>
                <span class="tech-tag">Database Modeling (UML / SQL)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .edu-section {
      background-color: var(--bg-color);
      position: relative;
    }

    .timeline-container {
      max-width: 820px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .timeline-card {
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 1.5rem;
      position: relative;
    }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;

      .marker-dot {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
        z-index: 2;

        &.edu {
          background: linear-gradient(135deg, #10b981, #059669);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
        }
      }

      .marker-line {
        width: 2px;
        flex-grow: 1;
        background: linear-gradient(to bottom, var(--primary-color), rgba(37, 99, 235, 0.1));
        margin-top: 1rem;
      }
    }

    .timeline-body {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary-color);
        transform: translateX(4px);
      }
    }

    .body-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.5rem;

      .timeline-tag {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 0.25rem 0.75rem;
        border-radius: 999px;

        &.work {
          background: rgba(37, 99, 235, 0.1);
          color: var(--primary-color);
        }

        &.edu {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
      }

      .timeline-period {
        font-size: 0.825rem;
        color: var(--text-muted);
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }
    }

    .timeline-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 0.35rem;
    }

    .timeline-institution {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .timeline-desc {
      color: var(--text-muted);
      font-size: 0.925rem;
      line-height: 1.7;
      margin-bottom: 1.25rem;
    }

    .timeline-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;

      .tech-tag {
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.25rem 0.65rem;
        border-radius: 6px;
      }
    }

    @media (max-width: 576px) {
      .timeline-card {
        grid-template-columns: 1fr;
        gap: 0.75rem;
      }

      .timeline-marker {
        flex-direction: row;
        gap: 1rem;
        .marker-line { display: none; }
      }

      .timeline-body {
        padding: 1.25rem;
      }
    }
  `]
})
export class EducationExperienceComponent { }
