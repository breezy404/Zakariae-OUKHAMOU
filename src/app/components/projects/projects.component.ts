import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
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
        <h2 class="section-title">{{ 'sect.projects' | translate }}</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects; let i = index" data-aos="zoom-in-up" [attr.data-aos-delay]="100 + (i * 100)">
            <div class="project-image">
              <div class="placeholder-img">{{ project.title[0] }}</div>
              <div class="project-overlay">
                <div class="overlay-links">
                  <a *ngIf="project.githubLink" [href]="project.githubLink" target="_blank" class="icon-link" title="Source Code">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a *ngIf="project.liveLink" [href]="project.liveLink" target="_blank" class="icon-link" title="Live Demo">
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="tech-stack">
                <span class="tech-chip" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              <div class="project-footer">
                <a *ngIf="project.liveLink" [href]="project.liveLink" target="_blank" class="btn btn-primary btn-sm">
                  {{ 'projects.viewLive' | translate }}
                </a>
                <a *ngIf="project.githubLink" [href]="project.githubLink" target="_blank" class="btn btn-outline btn-sm">
                  {{ 'projects.viewCode' | translate }}
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
    }
    
    .projects-grid {
      display: grid;
      /* Adjusted for better responsiveness */
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }

    .project-card {
      background: var(--bg-color);
      border-radius: 1.5rem;
      overflow: hidden;
      border: 1px solid var(--border-color);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        border-color: var(--primary-color);
        
        .project-overlay { opacity: 1; }
        .placeholder-img { transform: scale(1.1); }
      }
    }

    .project-image {
      height: 220px;
      position: relative;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      
      .placeholder-img {
        font-size: 5rem;
        font-weight: 800;
        color: var(--primary-color);
        opacity: 0.2;
        transition: transform 0.5s ease;
      }

      .project-overlay {
        position: absolute;
        inset: 0;
        background: rgba(37, 99, 235, 0.9);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 10;

        .overlay-links {
          display: flex;
          gap: 1.5rem;
          
          .icon-link {
            width: 50px;
            height: 50px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 1.25rem;
            transition: transform 0.3s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            
            &:hover { transform: scale(1.1); color: var(--primary-color); }
          }
        }
      }
    }

    .project-content {
      padding: 2rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      h3 {
        margin-bottom: 0.75rem;
        font-size: 1.4rem;
        color: var(--text-color);
      }
      
      p {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
      margin-top: auto;
    }

    .tech-chip {
      background: var(--card-bg);
      color: var(--text-color);
      padding: 0.35rem 0.85rem;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      border: 1px solid var(--border-color);
    }

    .project-footer {
      display: flex;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
      
      .btn { flex: 1; }
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      
      .project-card:hover {
        /* On touch devices, disable hover lift to confusing shift, or keep it subtle */
        transform: none;
      }
      
      /* Make overlay always visible or accessible via button? 
         For now, keeping hover/active behavior or relying on footer buttons */
    }
    
    @media (max-width: 480px) {
       .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-image {
        height: 180px;
      }
      
      .project-content {
        padding: 1.5rem;
      }
      
      .project-footer {
        flex-direction: column;
      }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Commercial Monitoring Dashboard',
      description: 'A comprehensive dashboard for business analytics, tracking sales performance and KPIs in real-time.',
      image: 'assets/com.PNG',
      technologies: ['Angular', 'Spring Boot', 'JWT', 'Chart.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Event & Ticket Reservation',
      description: 'Platform allows users to browse events, book tickets securely, and manage reservations via a user-friendly interface.',
      image: 'assets/events.jpg',
      technologies: ['Angular', 'Java', 'MySQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Travel Agency System',
      description: 'Management system for travel agencies to handle bookings, customers, and travel packages efficiently.',
      image: 'assets/travel.jpg',
      technologies: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
      githubLink: '#'
    },
    {
      title: 'Commercial Monitoring Dashboard',
      description: 'Robust authentication service providing secure login, registration, and role-based access control.',
      image: 'assets/auth.jpg',
      technologies: ['Spring Security', 'JWT', 'Angular'],
      githubLink: '#'
    }
  ];
}
