import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ 'sect.contact' | translate }}</h2>
        <div class="contact-card" data-aos="fade-up" data-aos-delay="200">
          <div class="contact-info">
            <h3>{{ 'contact.title' | translate }}</h3>
            <p>{{ 'contact.subtitle' | translate }}</p>
            
            <div class="info-items">
              <div class="info-item">
                <span class="icon">✉️</span>
                <div class="details">
                  <strong>{{ 'contact.email' | translate }}</strong>
                  <a href="mailto:zakriaoukhamou11@gmail.com">zakriaoukhamou11{{ '@' }}gmail.com</a>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://www.linkedin.com/in/zakariae-oukhamou-1b42a62b6/" class="social-icon" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>   
              </a>
              <a href="https://github.com/breezy404" class="social-icon" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/zakaria_ohm_/" class="social-icon" aria-label="instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <form class="contact-form" (submit)="onSubmit($event)">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required>
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary full-width">
              {{ 'contact.btn' | translate }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: var(--card-bg);
      position: relative;
    }
    
    .contact-card {
      background: var(--bg-color);
      border-radius: 2.5rem;
      padding: 4rem;
      border: 1px solid var(--border-color);
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 4rem;
      max-width: 1100px;
      margin: 0 auto;
      box-shadow: 0 20px 50px rgba(0,0,0,0.05);

      @media(max-width: 992px) {
        grid-template-columns: 1fr;
        padding: 3rem 2rem;
        gap: 3rem;
      }
    }

    .contact-info {
      h3 {
        font-size: var(--font-h2);
        margin-bottom: 1.25rem;
        color: var(--text-color);
        font-weight: 800;
        letter-spacing: -1px;
      }
      
      p {
        margin-bottom: 3rem;
        color: var(--text-muted);
        line-height: 1.8;
        font-size: 1.05rem;
      }
      
      .info-items {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        
        .icon {
          width: 50px;
          height: 50px;
          background: rgba(37, 99, 235, 0.1);
          color: var(--primary-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .details {
          display: flex;
          flex-direction: column;
          strong { font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
          a { color: var(--text-color); text-decoration: none; font-weight: 600; font-size: 1.1rem; transition: color 0.3s; &:hover { color: var(--primary-color); } }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1.25rem;
      
      .social-icon {
        width: 45px;
        height: 45px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
        text-decoration: none;
        transition: all 0.3s ease;
        font-weight: 700;
        text-transform: lowercase;
        
        &:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }
      }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
      @media(max-width: 576px) { grid-template-columns: 1fr; }
    }

    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.75rem;
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--text-color);
      }
      
      input, textarea {
        width: 100%;
        padding: 1rem 1.25rem;
        border: 2px solid var(--border-color);
        background: var(--bg-color);
        border-radius: 1rem;
        font-family: inherit;
        color: var(--text-color);
        transition: all 0.3s ease;
        font-size: 1rem;
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        &::placeholder { color: var(--text-muted); opacity: 0.5; }
      }
    }

    .full-width { width: 100%; padding: 1rem; }
  `]
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you for reaching out! This is a demo form.');
  }
}
