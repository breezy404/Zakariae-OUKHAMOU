import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

export type ProjectCategory = 'all' | 'angular' | 'react' | 'laravel';

interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  highlights: string[];
  liveLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ 'sect.projects' | translate }}</h2>

        <!-- Filter Tabs -->
        <div class="filter-tabs" data-aos="fade-up" data-aos-delay="100">
          <button 
            type="button"
            class="tab-btn" 
            [class.active]="selectedCategory() === 'all'"
            (click)="setCategory('all')">
            {{ 'projects.filter.all' | translate }}
          </button>
          <button 
            type="button"
            class="tab-btn" 
            [class.active]="selectedCategory() === 'angular'"
            (click)="setCategory('angular')">
            {{ 'projects.filter.angular' | translate }}
          </button>
          <button 
            type="button"
            class="tab-btn" 
            [class.active]="selectedCategory() === 'react'"
            (click)="setCategory('react')">
            {{ 'projects.filter.react' | translate }}
          </button>
          <button 
            type="button"
            class="tab-btn" 
            [class.active]="selectedCategory() === 'laravel'"
            (click)="setCategory('laravel')">
            {{ 'projects.filter.laravel' | translate }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div 
            class="project-card" 
            *ngFor="let project of filteredProjects(); let i = index" 
            data-aos="fade-up" 
            [attr.data-aos-delay]="100 + (i * 100)">
            
            <div class="browser-frame">
              <div class="browser-bar">
                <span class="browser-dot red"></span>
                <span class="browser-dot yellow"></span>
                <span class="browser-dot green"></span>
                <span class="browser-url">{{ getProjectDomain(project) }}</span>
              </div>

              <div class="project-image-box">
                <img 
                  [src]="project.image" 
                  [alt]="project.titleKey | translate" 
                  loading="lazy">
                
                <div class="image-overlay">
                  <div class="overlay-actions">
                    <a 
                      *ngIf="project.githubLink" 
                      [href]="project.githubLink" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="overlay-btn" 
                      title="View GitHub Repository"
                      aria-label="View Source Code on GitHub">
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a 
                      *ngIf="project.liveLink" 
                      [href]="project.liveLink" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="overlay-btn" 
                      title="Live Preview"
                      aria-label="View Live Project">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-body">
              <h3 class="project-title">{{ project.titleKey | translate }}</h3>
              <p class="project-description">{{ project.descKey | translate }}</p>

              <div class="project-highlights">
                <span class="highlight-chip" *ngFor="let hl of project.highlights">
                  <i class="fa-solid fa-check"></i> {{ hl }}
                </span>
              </div>

              <div class="tech-stack">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>

              <div class="card-footer">
                <a 
                  *ngIf="project.liveLink" 
                  [href]="project.liveLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm">
                  <i class="fa-solid fa-eye"></i>
                  <span>{{ 'projects.viewLive' | translate }}</span>
                </a>
                <a 
                  *ngIf="project.githubLink" 
                  [href]="project.githubLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-outline btn-sm">
                  <i class="fa-brands fa-github"></i>
                  <span>{{ 'projects.viewCode' | translate }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      background-color: var(--card-bg);
      position: relative;
    }

    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 3.5rem;
      flex-wrap: wrap;

      .tab-btn {
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        padding: 0.6rem 1.35rem;
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        &.active {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border-color: transparent;
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.3);
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
      gap: 2.5rem;
    }

    .project-card {
      background: var(--bg-color);
      border-radius: 1.5rem;
      border: 1px solid var(--border-color);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);

      &:hover {
        transform: translateY(-8px);
        border-color: var(--primary-color);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

        .image-overlay { opacity: 1; }
        .project-image-box img { transform: scale(1.06); }
      }
    }

    .browser-frame {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--border-color);
      background: var(--card-bg);
    }

    .browser-bar {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0.65rem 1rem;
      border-bottom: 1px solid var(--border-color);

      .browser-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        &.red { background: #ef4444; }
        &.yellow { background: #f59e0b; }
        &.green { background: #10b981; }
      }

      .browser-url {
        margin-left: 0.75rem;
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--text-muted);
        background: var(--bg-color);
        padding: 0.15rem 0.6rem;
        border-radius: 4px;
        border: 1px solid var(--border-color);
      }
    }

    .project-image-box {
      height: 220px;
      position: relative;
      overflow: hidden;
      background: #0f172a;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .image-overlay {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;

        .overlay-actions {
          display: flex;
          gap: 1rem;
        }

        .overlay-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          transition: transform 0.25s ease, background-color 0.25s;

          &:hover {
            transform: scale(1.12);
            background: var(--primary-color);
            color: white;
          }
        }
      }
    }

    .project-body {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .project-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-color);
        margin-bottom: 0.75rem;
        line-height: 1.3;
      }

      .project-description {
        color: var(--text-muted);
        font-size: 0.925rem;
        line-height: 1.65;
        margin-bottom: 1.25rem;
      }
    }

    .project-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.25rem;

      .highlight-chip {
        font-size: 0.75rem;
        background: rgba(37, 99, 235, 0.08);
        color: var(--primary-color);
        padding: 0.25rem 0.6rem;
        border-radius: 6px;
        font-weight: 600;

        i { font-size: 0.7rem; }
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: auto;
      margin-bottom: 1.5rem;

      .tech-tag {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        padding: 0.3rem 0.7rem;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }

    .card-footer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--border-color);
      margin-top: auto;

      .btn {
        flex: 1;
        min-width: 120px;
        font-size: 0.85rem;
      }
    }

    @media (max-width: 576px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      .card-footer {
        flex-direction: column;
      }
      .project-image-box {
        height: 190px;
      }
    }
  `]
})
export class ProjectsComponent {
  selectedCategory = signal<ProjectCategory>('all');

  projects: Project[] = [
    {
      id: 'commercial-dashboard',
      titleKey: 'project.com.title',
      descKey: 'project.com.desc',
      image: 'assets/images/com.PNG',
      category: 'angular',
      technologies: ['Angular 17', 'Spring Boot', 'JWT Security', 'Chart.js', 'PostgreSQL'],
      highlights: ['Real-time KPI Metrics', 'Role-Based Access (RBAC)', 'RESTful Endpoints'],
      githubLink: 'https://github.com/breezy404/Marrakech-Horizon'
    },
    {
      id: 'event-booking',
      titleKey: 'project.events.title',
      descKey: 'project.events.desc',
      image: 'assets/images/events.jpg',
      category: 'angular',
      technologies: ['Angular', 'Spring Boot / Java', 'MySQL', 'Stripe Integration'],
      highlights: ['Interactive Seat Selector', 'Secure Checkout', 'E-Ticket Generator'],
      githubLink: 'https://github.com/breezy404'
    },
    {
      id: 'chgouri-car',
      titleKey: 'project.chgouri.title',
      descKey: 'project.chgouri.desc',
      image: 'assets/images/ChgouriCar.jpg',
      category: 'react',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Bootstrap'],
      highlights: ['Online Vehicle Booking', 'Fleet Availability System', 'Reservation Management'],
      liveLink: 'https://www.chgouricar.com',
      githubLink: 'https://github.com/breezy404/CHGOURI-CAR.git'
    },
    {
      id: 'oulad-lkhir',
      titleKey: 'project.charity.title',
      descKey: 'project.charity.desc',
      image: 'assets/images/oulad-lkhir.jpg',
      category: 'laravel',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Blade'],
      highlights: ['Donation Campaign Tracking', 'Volunteer Portal', 'Impact Reports'],
      githubLink: 'https://github.com/breezy404/oulad-lkhir'
    }
  ];

  filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.projects;
    return this.projects.filter(p => p.category === cat);
  });

  setCategory(category: ProjectCategory) {
    this.selectedCategory.set(category);
  }

  getProjectDomain(project: Project): string {
    if (project.liveLink) {
      try {
        return new URL(project.liveLink).hostname;
      } catch {
        return project.id + '.app';
      }
    }
    return project.id + '.app';
  }
}
