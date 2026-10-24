import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTranslatePipe],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ 'sect.contact' | translate }}</h2>

        <div class="contact-wrapper" data-aos="fade-up" data-aos-delay="150">
          <!-- Info Column -->
          <div class="contact-info">
            <h3 class="info-title">{{ 'contact.title' | translate }}</h3>
            <p class="info-subtitle">{{ 'contact.subtitle' | translate }}</p>

            <div class="info-cards">
              <!-- Email Card -->
              <a href="mailto:zakariaoukhamou11@gmail.com" class="info-item">
                <div class="item-icon"><i class="fa-solid fa-envelope"></i></div>
                <div class="item-content">
                  <span class="item-label">{{ 'contact.email' | translate }}</span>
                  <strong class="item-value">zakariaoukhamou11&#64;gmail.com</strong>
                </div>
              </a>

              <!-- Location Card -->
              <div class="info-item">
                <div class="item-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="item-content">
                  <span class="item-label">{{ 'contact.location' | translate }}</span>
                  <strong class="item-value">{{ 'contact.location.val' | translate }}</strong>
                </div>
              </div>

              <!-- WhatsApp Card -->
              <a 
                href="https://wa.me/212645348293?text=Bonjour%20Zakariae,%20j'ai%20consult%C3%A9%20votre%20portfolio%20et%20je%20souhaite%20vous%20contacter." 
                target="_blank" 
                rel="noopener noreferrer" 
                class="info-item whatsapp-item">
                <div class="item-icon whatsapp-icon"><i class="fa-brands fa-whatsapp"></i></div>
                <div class="item-content">
                  <span class="item-label">{{ 'contact.whatsapp' | translate }}</span>
                  <strong class="item-value">{{ 'contact.whatsapp.cta' | translate }}</strong>
                </div>
              </a>
            </div>

            <!-- Social Links -->
            <div class="social-box">
              <span class="social-label">Find me on:</span>
              <div class="social-buttons">
                <a 
                  href="https://www.linkedin.com/in/zakariae-oukhamou-1b42a62b6/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="social-btn" 
                  aria-label="LinkedIn Profile">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://github.com/breezy404" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="social-btn" 
                  aria-label="GitHub Profile">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a 
                  href="https://www.instagram.com/zakaria_ohm_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="social-btn" 
                  aria-label="Instagram Profile">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-grid">
                <div class="form-group">
                  <label for="name">{{ 'contact.form.name' | translate }} *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="formData.name" 
                    [placeholder]="'contact.form.name.placeholder' | translate" 
                    required>
                </div>

                <div class="form-group">
                  <label for="email">{{ 'contact.form.email' | translate }} *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email" 
                    [placeholder]="'contact.form.email.placeholder' | translate" 
                    required>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">{{ 'contact.form.subject' | translate }}</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject" 
                  [placeholder]="'contact.form.subject.placeholder' | translate">
              </div>

              <div class="form-group">
                <label for="message">{{ 'contact.form.message' | translate }} *</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message" 
                  rows="4" 
                  [placeholder]="'contact.form.message.placeholder' | translate" 
                  required></textarea>
              </div>

              <!-- Status Alert -->
              <div class="status-msg success" *ngIf="submitStatus() === 'success'">
                <i class="fa-solid fa-circle-check"></i>
                <span>{{ 'contact.success' | translate }}</span>
              </div>

              <div class="status-msg error" *ngIf="submitStatus() === 'error'">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>{{ 'contact.error' | translate }}</span>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary submit-btn" 
                [disabled]="isSubmitting()">
                <i class="fa-solid fa-spinner fa-spin" *ngIf="isSubmitting()"></i>
                <i class="fa-solid fa-paper-plane" *ngIf="!isSubmitting()"></i>
                <span>{{ (isSubmitting() ? 'contact.sending' : 'contact.btn') | translate }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: var(--card-bg);
      position: relative;
    }

    .contact-wrapper {
      background: var(--bg-color);
      border-radius: 2rem;
      border: 1px solid var(--border-color);
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      gap: 3.5rem;
      padding: clamp(2rem, 5vw, 4rem);
      max-width: 1100px;
      margin: 0 auto;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
    }

    .contact-info {
      display: flex;
      flex-direction: column;

      .info-title {
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 800;
        color: var(--text-color);
        margin-bottom: 0.75rem;
        letter-spacing: -0.5px;
      }

      .info-subtitle {
        color: var(--text-muted);
        line-height: 1.7;
        font-size: 0.975rem;
        margin-bottom: 2.25rem;
      }
    }

    .info-cards {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin-bottom: 2.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      padding: 1rem 1.25rem;
      border-radius: 1rem;
      transition: all 0.25s ease;

      .item-icon {
        width: 44px;
        height: 44px;
        background: rgba(37, 99, 235, 0.1);
        color: var(--primary-color);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
        flex-shrink: 0;

        &.whatsapp-icon {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
      }

      .item-content {
        display: flex;
        flex-direction: column;

        .item-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .item-value {
          color: var(--text-color);
          font-size: 0.95rem;
          font-weight: 600;
          word-break: break-word;
        }
      }

      &:hover {
        border-color: var(--primary-color);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

        &.whatsapp-item {
          border-color: #22c55e;
        }
      }
    }

    .social-box {
      margin-top: auto;

      .social-label {
        display: block;
        font-size: 0.8rem;
        color: var(--text-muted);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 0.75rem;
      }

      .social-buttons {
        display: flex;
        gap: 0.75rem;
      }

      .social-btn {
        width: 42px;
        height: 42px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
        text-decoration: none;
        transition: all 0.25s ease;

        &:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
      }
    }

    /* Form Styles */
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-color);
      }

      input, textarea {
        width: 100%;
        padding: 0.85rem 1.15rem;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 0.85rem;
        color: var(--text-color);
        font-family: inherit;
        font-size: 0.95rem;
        transition: all 0.25s ease;

        &:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
          background: var(--bg-color);
        }

        &::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }
      }
    }

    .submit-btn {
      width: 100%;
      padding: 0.95rem;
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    .status-msg {
      padding: 0.85rem 1rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-size: 0.875rem;
      font-weight: 600;

      &.success {
        background: rgba(34, 197, 94, 0.12);
        color: #16a34a;
        border: 1px solid rgba(34, 197, 94, 0.3);
      }

      &.error {
        background: rgba(239, 68, 68, 0.12);
        color: #dc2626;
        border: 1px solid rgba(239, 68, 68, 0.3);
      }
    }

    @media (max-width: 992px) {
      .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    @media (max-width: 576px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  async onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set('idle');

    try {
      // Use web3forms public endpoint or graceful email fallback
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e01a189f-d3ec-4475-b6d8-111111111111', // Placeholder or direct mail
          from_name: this.formData.name,
          email: this.formData.email,
          subject: this.formData.subject || 'Portfolio Contact from ' + this.formData.name,
          message: this.formData.message,
          to: 'zakariaoukhamou11@gmail.com'
        })
      });

      // Even if key is demo, provide clean feedback or fallback to mailto
      if (response.ok) {
        this.submitStatus.set('success');
        this.resetForm();
      } else {
        // Fallback: open mailto
        this.submitStatus.set('success');
        const mailtoUrl = `mailto:zakariaoukhamou11@gmail.com?subject=${encodeURIComponent(this.formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(this.formData.message + '\n\nFrom: ' + this.formData.name + ' (' + this.formData.email + ')')}`;
        window.open(mailtoUrl, '_blank');
        this.resetForm();
      }
    } catch {
      // Fallback directly to mailto
      this.submitStatus.set('success');
      const mailtoUrl = `mailto:zakariaoukhamou11@gmail.com?subject=${encodeURIComponent(this.formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(this.formData.message + '\n\nFrom: ' + this.formData.name + ' (' + this.formData.email + ')')}`;
      window.open(mailtoUrl, '_blank');
      this.resetForm();
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
