import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="edu-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Education & Experience</h2>
        <div class="timeline">
          
          <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>BTS – Web Development</h3>
              <span class="timeline-date">2024 - 2026</span>
              <p>Specialized training in full-stack web development, covering algorithms, database design, and modern frameworks.</p>
            </div>
          </div>

          <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>Full-Stack Internship</h3>
              <span class="timeline-date">Summer 2025</span>
              <p>Developed key modules for a commercial management application using Angular and Spring Boot. Collaborated with a senior team to implement best practices.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .edu-section { background-color: var(--bg-color); }
    .section-title { text-align: center; margin-bottom: 3rem; font-size: var(--font-h2); color: var(--primary-color); }
    
    .timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: 20px; /* Mobile alignment */
        top: 0;
        height: 100%;
        width: 2px;
        background: var(--primary-color);
        opacity: 0.2;
      }
      
      @media(min-width: 768px) {
        &::before { left: 50%; transform: translateX(-50%); }
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      width: 100%;
      
      @media(min-width: 768px) {
        width: 50%;
        
        &:nth-child(odd) {
          left: 0;
          padding-right: 3rem;
          text-align: right;
          
          .timeline-dot { right: -9px; left: auto; }
        }
        
        &:nth-child(even) {
          left: 50%;
          padding-left: 3rem;
          
          .timeline-dot { left: -9px; }
        }
      }

      /* Mobile styles */
      @media(max-width: 767px) {
        padding-left: 50px;
        .timeline-dot { left: 11px; }
      }
    }

    .timeline-dot {
      position: absolute;
      top: 0;
      width: 20px;
      height: 20px;
      background: var(--primary-color);
      border-radius: 50%;
      border: 4px solid var(--bg-color);
      z-index: 2;
    }

    .timeline-content {
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);

      h3 { font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--secondary-color); }
      .timeline-date {
        display: block;
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.7;
        margin-bottom: 1rem;
        font-weight: 500;
      }
      p { color: var(--text-color); font-size: 0.95rem; line-height: 1.6; }
    }
  `]
})
export class EducationExperienceComponent { }
