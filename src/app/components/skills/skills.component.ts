import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  titleKey: string;
  icon: string;
  skills: Skill[];
  tags: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ 'sect.skills' | translate }}</h2>

        <div class="skills-grid">
          <div 
            class="skill-category-card" 
            *ngFor="let cat of categories; let i = index" 
            data-aos="fade-up" 
            [attr.data-aos-delay]="100 + (i * 120)">
            
            <div class="category-header">
              <div class="category-icon">
                <i [class]="cat.icon"></i>
              </div>
              <h3>{{ cat.titleKey | translate }}</h3>
            </div>

            <div class="skills-list">
              <div class="skill-row" *ngFor="let skill of cat.skills">
                <div class="skill-info">
                  <span class="skill-name">
                    <i [class]="skill.icon" class="skill-icon"></i>
                    {{ skill.name }}
                  </span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-bar" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>

            <div class="category-tags">
              <span class="tag-chip" *ngFor="let tag of cat.tags">{{ tag }}</span>
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
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.25rem;
    }

    .skill-category-card {
      background: var(--card-bg);
      padding: 2.25rem;
      border-radius: 1.5rem;
      border: 1px solid var(--border-color);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-6px);
        border-color: var(--primary-color);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
      }
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;

      .category-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(124, 58, 237, 0.15));
        color: var(--primary-color);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
      }

      h3 {
        color: var(--text-color);
        margin-bottom: 0;
        font-size: 1.25rem;
        font-weight: 700;
      }
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin-bottom: 2rem;
    }

    .skill-row {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .skill-name {
        font-weight: 600;
        font-size: 0.925rem;
        color: var(--text-color);
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;

        .skill-icon {
          color: var(--primary-color);
          font-size: 1rem;
          width: 16px;
        }
      }

      .skill-level {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--primary-color);
      }
    }

    .progress-track {
      height: 7px;
      background: var(--border-color);
      border-radius: 10px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      border-radius: 10px;
      transition: width 1.2s cubic-bezier(0.1, 0.42, 0.41, 1);
    }

    .category-tags {
      margin-top: auto;
      padding-top: 1.25rem;
      border-top: 1px solid var(--border-color);
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .tag-chip {
      background: var(--bg-color);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.3rem 0.65rem;
      border-radius: 6px;
      transition: all 0.2s ease;

      &:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }
    }

    @media (max-width: 576px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
      .skill-category-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      titleKey: 'skills.frontend',
      icon: 'fa-solid fa-code',
      skills: [
        { name: 'Angular (17+)', level: 88, icon: 'fa-brands fa-angular' },
        { name: 'TypeScript & JavaScript', level: 90, icon: 'fa-brands fa-js' },
        { name: 'React.js', level: 82, icon: 'fa-brands fa-react' },
        { name: 'HTML5, SCSS & Responsive UI', level: 95, icon: 'fa-brands fa-css3-alt' }
      ],
      tags: ['RxJS', 'Standalone Components', 'Signals', 'Tailwind/SCSS', 'REST Integration']
    },
    {
      titleKey: 'skills.backend',
      icon: 'fa-solid fa-server',
      skills: [
        { name: 'Spring Boot (Java)', level: 85, icon: 'fa-solid fa-leaf' },
        { name: 'Java OOP & APIs', level: 85, icon: 'fa-brands fa-java' },
        { name: 'PHP / Laravel', level: 78, icon: 'fa-brands fa-php' },
        { name: 'Node.js & Express', level: 75, icon: 'fa-brands fa-node-js' }
      ],
      tags: ['Spring Security', 'JWT Auth', 'Hibernate / JPA', 'RESTful Architecture', 'Microservices']
    },
    {
      titleKey: 'skills.tools',
      icon: 'fa-solid fa-database',
      skills: [
        { name: 'MySQL & PostgreSQL', level: 88, icon: 'fa-solid fa-database' },
        { name: 'MongoDB (NoSQL)', level: 80, icon: 'fa-solid fa-server' },
        { name: 'Git & GitHub Workflow', level: 90, icon: 'fa-brands fa-git-alt' },
        { name: 'Postman & Docker basics', level: 82, icon: 'fa-solid fa-cube' }
      ],
      tags: ['UML Modeling', 'Database Design', 'CI/CD Basics', 'Postman Testing', 'Vercel / Netlify']
    }
  ];
}
