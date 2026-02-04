import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ 'sect.skills' | translate }}</h2>
        <div class="skills-grid">
          <!-- Frontend -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
            <div class="category-header">
              <span class="icon">💻</span>
              <h3>Frontend Development</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of frontendSkills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
            <div class="category-header">
              <span class="icon">⚙️</span>
              <h3>Backend Development</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of backendSkills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="300">
            <div class="category-header">
              <i class="fa-solid fa-database"></i>
              <h3>Tools & Databases</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of toolSkills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      background-color: var(--bg-color);
    }

    .skills-grid {
      display: grid;
      /* Adjusted minmax for better mobile fit (e.g. iPhone SE) */
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2.5rem;
    }

    .skill-category {
      background: var(--card-bg);
      padding: 2.5rem;
      border-radius: 1.5rem;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      }
      
      .category-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;

        .icon { font-size: 1.5rem; }
        
        h3 {
          color: var(--text-color);
          margin-bottom: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }
      }
    }

    .skill-item {
      margin-bottom: 1.5rem;
      &:last-child { margin-bottom: 0; }
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      
      .skill-name {
        font-weight: 500;
        font-size: 0.95rem;
        color: var(--text-color);
      }
      
      .skill-percentage {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--primary-color);
      }
    }

    .progress-bar {
      height: 6px;
      background: var(--border-color);
      border-radius: 10px;
      overflow: hidden;
    }

    .progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      border-radius: 10px;
      transition: width 1.5s cubic-bezier(0.1, 0.42, 0.41, 1);
    }
    
    @media (max-width: 480px) {
      .skill-category {
        padding: 1.5rem;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'NEXT.js/React.js', level: 80 }
  ];

  backendSkills = [
    { name: 'Java', level: 60 },
    { name: 'Python', level: 75 },
    { name: 'PHP / Laravel', level: 70 },
    { name: 'Node.js', level: 65 }
  ];

  toolSkills = [
    { name: 'MySQL / MongoDB', level: 100 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'PostgreSQL', level: 60 },
    { name: 'Postman', level: 85 }
  ];
}
