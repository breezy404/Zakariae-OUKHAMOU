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
  <div class="about-image" data-aos="fade-right" data-aos-duration="1000">
    <div class="image-wrapper">
      <img src="assets/images/Wha.jpg" alt="Zakariae OUKHAMOU Profile Picture" loading="lazy" width="280" height="280">
    </div>
  </div>

          <div class="about-text" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <p class="lead">{{ 'about.text1' | translate }}</p>
            <p>{{ 'about.text2' | translate }}</p>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Exp.</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Projects</span>
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
      grid-template-columns: 0.8fr 1.2fr;
      gap: 4rem;
      align-items: center;
      max-width: 1000px;
      margin: 0 auto;
    }

      .about-image {
        display: flex;
        justify-content: center;
        
        .image-wrapper {
          width: 280px;
          height: 280px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1.8rem;
          }

          &::after {
            content: '';
            position: absolute;
            inset: -15px;
            border: 2px solid var(--primary-color);
            border-radius: 2.5rem;
            opacity: 0.2;
            z-index: -1;
          }

          .placeholder-avatar {
            font-size: 5rem;
            font-weight: 800;
            color: white;
            letter-spacing: -2px;
          }
        }
      }

      .about-text {
        p {
          margin-bottom: 1.5rem;
          color: var(--text-muted);
          font-size: 1.05rem;
          
          &.lead {
            font-size: 1.25rem;
            font-weight: 500;
            color: var(--text-color);
            line-height: 1.6;
          }
        }
      }

    .about-stats {
      display: flex;
      gap: 3rem;
      margin-top: 2.5rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);

      .stat-item {
        display: flex;
        flex-direction: column;
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }

    @media (max-width: 992px) {
      .about-grid {
        gap: 3rem;
        grid-template-columns: 1fr 1fr;
      }
      .image-wrapper { width: 240px; height: 240px; }
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .about-image { margin-bottom: 1rem; }
      
      .about-stats { 
        justify-content: center; 
        gap: 2rem;
        flex-wrap: wrap; 
      }
      
      .about-image .image-wrapper { width: 220px; height: 220px; }
    }
  `]
})
export class AboutComponent { }
