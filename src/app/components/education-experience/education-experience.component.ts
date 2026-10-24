import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

export type TimelineType = 'all' | 'work' | 'edu';

interface TimelineItem {
  id: string;
  category: 'work' | 'edu';
  badgeKey: string;
  periodKey: string;
  titleKey: string;
  orgKey: string;
  locationKey: string;
  descKey?: string;
  pointsKeys?: string[];
  tech: string[];
  icon: string;
}

@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section id="education" class="edu-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">{{ 'sect.edu' | translate }}</h2>
          <p class="section-subtitle">{{ 'sect.edu.subtitle' | translate }}</p>
        </div>

        <!-- Filter Controls -->
        <div class="filter-wrapper" data-aos="fade-up" data-aos-delay="100">
          <div class="filter-pills">
            <button 
              type="button"
              class="filter-pill" 
              [class.active]="activeFilter() === 'all'"
              (click)="setFilter('all')">
              <i class="fa-solid fa-layer-group"></i>
              <span>{{ 'timeline.filter.all' | translate }}</span>
              <span class="count-badge">5</span>
            </button>
            <button 
              type="button"
              class="filter-pill" 
              [class.active]="activeFilter() === 'work'"
              (click)="setFilter('work')">
              <i class="fa-solid fa-briefcase"></i>
              <span>{{ 'timeline.filter.work' | translate }}</span>
              <span class="count-badge">2</span>
            </button>
            <button 
              type="button"
              class="filter-pill" 
              [class.active]="activeFilter() === 'edu'"
              (click)="setFilter('edu')">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>{{ 'timeline.filter.edu' | translate }}</span>
              <span class="count-badge">3</span>
            </button>
          </div>
        </div>

        <!-- Timeline Container -->
        <div class="timeline-container">
          <div 
            *ngFor="let item of filteredItems(); let i = index; let isLast = last"
            class="timeline-card"
            [class.work-card]="item.category === 'work'"
            [class.edu-card]="item.category === 'edu'"
            data-aos="fade-up"
            [attr.data-aos-delay]="(i * 100) + 150">
            
            <!-- Left Marker -->
            <div class="timeline-marker">
              <div class="marker-dot" [class.edu]="item.category === 'edu'">
                <i [class]="item.icon"></i>
              </div>
              <div class="marker-line" *ngIf="!isLast"></div>
            </div>

            <!-- Card Content Body -->
            <div class="timeline-body">
              <div class="body-header">
                <div class="header-tags">
                  <span class="category-tag" [class.edu]="item.category === 'edu'">
                    {{ (item.category === 'work' ? 'timeline.filter.work' : 'timeline.filter.edu') | translate }}
                  </span>
                  <span class="type-badge">{{ item.badgeKey | translate }}</span>
                </div>

                <span class="timeline-period">
                  <i class="fa-regular fa-calendar-days"></i>
                  {{ item.periodKey | translate }}
                </span>
              </div>

              <h3 class="timeline-title">{{ item.titleKey | translate }}</h3>

              <div class="timeline-meta">
                <span class="meta-org">
                  <i class="fa-solid fa-building-columns" *ngIf="item.category === 'edu'"></i>
                  <i class="fa-solid fa-building" *ngIf="item.category === 'work'"></i>
                  {{ item.orgKey | translate }}
                </span>
                <span class="meta-location">
                  <i class="fa-solid fa-location-dot"></i>
                  {{ item.locationKey | translate }}
                </span>
              </div>

              <!-- General Description -->
              <p class="timeline-desc" *ngIf="item.descKey">
                {{ item.descKey | translate }}
              </p>

              <!-- Detailed Bullet Points (CV tasks) -->
              <ul class="task-list" *ngIf="item.pointsKeys && item.pointsKeys.length > 0">
                <li *ngFor="let pt of item.pointsKeys">
                  <i class="fa-solid fa-circle-check check-icon"></i>
                  <span>{{ pt | translate }}</span>
                </li>
              </ul>

              <!-- Tech Stack Tags -->
              <div class="timeline-tech">
                <span *ngFor="let t of item.tech" class="tech-tag">
                  {{ t }}
                </span>
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
      padding: var(--section-spacing) 0;
    }

    .section-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .section-subtitle {
      color: var(--text-muted);
      font-size: 1.05rem;
      max-width: 650px;
      margin: 0.75rem auto 0;
      line-height: 1.6;
    }

    /* Filter Pills */
    .filter-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 3.5rem;
    }

    .filter-pills {
      display: inline-flex;
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      padding: 0.35rem;
      border-radius: 999px;
      gap: 0.35rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    }

    .filter-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.25rem;
      border: none;
      background: transparent;
      color: var(--text-muted);
      font-family: inherit;
      font-size: 0.875rem;
      font-weight: 600;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.25s ease;

      .count-badge {
        font-size: 0.75rem;
        background: rgba(0, 0, 0, 0.06);
        padding: 0.15rem 0.5rem;
        border-radius: 999px;
      }

      &:hover {
        color: var(--text-color);
      }

      &.active {
        background: var(--bg-color);
        color: var(--primary-color);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

        .count-badge {
          background: rgba(37, 99, 235, 0.12);
          color: var(--primary-color);
        }
      }
    }

    /* Timeline Structure */
    .timeline-container {
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .timeline-card {
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 1.75rem;
      position: relative;
    }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;

      .marker-dot {
        width: 52px;
        height: 52px;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: #ffffff;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
        z-index: 2;
        transition: transform 0.3s ease;

        &.edu {
          background: linear-gradient(135deg, #059669, #10b981);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.35);
        }
      }

      .marker-line {
        width: 2px;
        flex-grow: 1;
        background: linear-gradient(to bottom, var(--primary-color), var(--border-color));
        margin-top: 1rem;
        opacity: 0.4;
      }
    }

    .timeline-body {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 1.5rem;
      padding: 2rem 2.25rem;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary-color);
        transform: translateY(-3px);
        box-shadow: 0 14px 40px rgba(37, 99, 235, 0.08);

        .marker-dot {
          transform: scale(1.08);
        }
      }
    }

    .body-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.85rem;
      flex-wrap: wrap;
      gap: 0.75rem;

      .header-tags {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .category-tag {
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        padding: 0.25rem 0.75rem;
        border-radius: 999px;
        background: rgba(37, 99, 235, 0.12);
        color: var(--primary-color);

        &.edu {
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        }
      }

      .type-badge {
        font-size: 0.72rem;
        font-weight: 600;
        padding: 0.25rem 0.65rem;
        border-radius: 999px;
        background: var(--bg-color);
        color: var(--text-muted);
        border: 1px solid var(--border-color);
      }

      .timeline-period {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-muted);
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
      }
    }

    .timeline-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 0.4rem;
      line-height: 1.3;
    }

    .timeline-meta {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;
      font-size: 0.925rem;
      margin-bottom: 1.15rem;

      .meta-org {
        color: var(--primary-color);
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }

      .meta-location {
        color: var(--text-muted);
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }
    }

    .timeline-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 1.25rem;
    }

    /* Task Bullet Points */
    .task-list {
      list-style: none;
      padding: 0;
      margin: 0 0 1.35rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;
        color: var(--text-color);
        font-size: 0.925rem;
        line-height: 1.6;

        .check-icon {
          color: var(--primary-color);
          font-size: 0.85rem;
          margin-top: 0.3rem;
          flex-shrink: 0;
        }
      }
    }

    /* Tech Stack Tags */
    .timeline-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      padding-top: 0.85rem;
      border-top: 1px dashed var(--border-color);

      .tech-tag {
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        font-size: 0.775rem;
        font-weight: 600;
        padding: 0.3rem 0.75rem;
        border-radius: 8px;
        transition: all 0.2s ease;

        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
      }
    }

    /* Responsive */
    @media (max-width: 680px) {
      .section-header {
        margin-bottom: 1.75rem;
      }

      .filter-wrapper {
        margin-bottom: 2.25rem;
      }

      .filter-pills {
        width: 100%;
        display: flex;
        gap: 0.25rem;
        padding: 0.25rem;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }

      .filter-pill {
        flex: 1;
        justify-content: center;
        padding: 0.5rem 0.45rem;
        font-size: 0.76rem;
        gap: 0.3rem;
        white-space: nowrap;

        .count-badge {
          padding: 0.1rem 0.35rem;
          font-size: 0.68rem;
        }
      }

      .timeline-card {
        grid-template-columns: 1fr;
        gap: 0.75rem;
      }

      .timeline-marker {
        flex-direction: row;
        align-items: center;
        .marker-line { display: none; }
        .marker-dot {
          width: 42px;
          height: 42px;
          font-size: 1rem;
          border-radius: 12px;
        }
      }

      .timeline-body {
        padding: 1.35rem 1.15rem;
        border-radius: 1.25rem;
      }

      .body-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .timeline-title {
        font-size: 1.15rem;
      }

      .timeline-meta {
        font-size: 0.85rem;
        gap: 0.75rem;
      }

      .task-list li {
        font-size: 0.875rem;
      }

      .timeline-tech .tech-tag {
        font-size: 0.72rem;
        padding: 0.25rem 0.55rem;
      }
    }
  `]
})
export class EducationExperienceComponent {
  activeFilter = signal<TimelineType>('all');

  items: TimelineItem[] = [
    // 1. Experience: SSMTM (04/2026 – 09/2026)
    {
      id: 'exp-ssmtm',
      category: 'work',
      badgeKey: 'timeline.badge.intern',
      periodKey: 'exp.ssmtm.period',
      titleKey: 'exp.ssmtm.role',
      orgKey: 'exp.ssmtm.company',
      locationKey: 'exp.ssmtm.location',
      descKey: 'exp.ssmtm.desc',
      pointsKeys: ['exp.ssmtm.p1', 'exp.ssmtm.p2', 'exp.ssmtm.p3'],
      tech: ['React.js', 'Node.js', 'MySQL', 'REST API', 'Git'],
      icon: 'fa-solid fa-briefcase'
    },
    // 2. Education: Bachelor Data Science (2026 – Present)
    {
      id: 'edu-bachelor',
      category: 'edu',
      badgeKey: 'timeline.badge.degree',
      periodKey: 'edu.bachelor.period',
      titleKey: 'edu.bachelor.degree',
      orgKey: 'edu.bachelor.school',
      locationKey: 'edu.bachelor.location',
      descKey: 'edu.bachelor.desc',
      tech: ['Data Science', 'Python', 'Machine Learning', 'Data Analysis', 'SQL'],
      icon: 'fa-solid fa-graduation-cap'
    },
    // 3. Experience: Insight Solutions (06/2025 – 08/2025)
    {
      id: 'exp-insight',
      category: 'work',
      badgeKey: 'timeline.badge.intern',
      periodKey: 'exp.insight.period',
      titleKey: 'exp.insight.role',
      orgKey: 'exp.insight.company',
      locationKey: 'exp.insight.location',
      descKey: 'exp.insight.desc',
      pointsKeys: ['exp.insight.p1', 'exp.insight.p2', 'exp.insight.p3'],
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Odoo', 'REST API', 'Reporting'],
      icon: 'fa-solid fa-briefcase'
    },
    // 4. Education: BTS Full Stack Web Development (09/2024 – 06/2026)
    {
      id: 'edu-bts',
      category: 'edu',
      badgeKey: 'timeline.badge.bts',
      periodKey: 'edu.bts.period',
      titleKey: 'edu.bts.degree',
      orgKey: 'edu.bts.school',
      locationKey: 'edu.bts.location',
      descKey: 'edu.bts.desc',
      tech: ['React.js', 'Angular', 'Node.js', 'PHP / Laravel', 'Java', 'MySQL', 'PostgreSQL', 'UML'],
      icon: 'fa-solid fa-graduation-cap'
    },
    // 5. Education: Baccalaureate STE (2023 – 2024)
    {
      id: 'edu-bac',
      category: 'edu',
      badgeKey: 'timeline.badge.bac',
      periodKey: 'edu.bac.period',
      titleKey: 'edu.bac.degree',
      orgKey: 'edu.bac.school',
      locationKey: 'edu.bac.location',
      descKey: 'edu.bac.desc',
      tech: ['Algorithms', 'Electronics', 'Electrical Systems', 'Industrial Computing'],
      icon: 'fa-solid fa-award'
    }
  ];

  filteredItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.items;
    return this.items.filter(item => item.category === filter);
  });

  setFilter(filter: TimelineType) {
    this.activeFilter.set(filter);
  }
}
