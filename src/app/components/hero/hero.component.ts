import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AppTranslatePipe],
  template: `
    <section class="hero-section" id="home">
      <div class="container hero-content">
        <div class="hero-text">
          <span class="greeting" data-aos="fade-up" data-aos-delay="100">{{ 'hero.greeting' | translate }}</span>
          <h1 data-aos="fade-up" data-aos-delay="200">Zakariae OUKHAMOU</h1>
          <h2 class="role" data-aos="fade-up" data-aos-delay="300">{{ 'hero.role' | translate }}</h2>
          <p class="description" data-aos="fade-up" data-aos-delay="400">
            Building performant, secure, and beautiful web experiences.
            Specialized in <span class="highlight">Angular</span> & <span class="highlight">React.js</span>.
          </p>
          <div class="cta-buttons" data-aos="fade-up" data-aos-delay="500">
            <a href="assets/cv/CV.pdf" download class="btn btn-primary" aria-label="Download CV">
              <i class="fa-solid fa-file"></i> {{ 'hero.cv' | translate }}
            </a>
            <a href="#projects" class="btn btn-outline">{{ 'hero.btn.projects' | translate }}</a>
          </div>
        </div>
        
        <div class="hero-image-container" data-aos="zoom-in" data-aos-duration="1000">
          <div class="hero-blob"></div>
          <div class="hero-decoration-items">
            <div class="item code-snippet">
              <pre><code>&lt;code&gt;</code></pre>
            </div>
          </div>
          <!-- Using the original image setup if available, or the new one if preferred. 
               The user mentioned "blob-shape" vs "hero-blob". I will revert to hero-blob structure. -->
          <!-- Note: The previous view showed an img tag was added inside visual-content. 
               The original (step 182/188) didn't show an img tag inside hero-image-container in the snippet 
               but step 205 (about) has one. 
               Let's check step 188 again. It had NO img tag in hero-image-container, just the blob and decoration items? 
               Wait, step 17 says "Add animations to Hero... zoom-in on profile image". 
               Let's look at the implementation in step 239. I added an img tag. 
               If the original design relied on background or CSS for the image, I might have broken it.
               However, step 203 (About) has an image. 
               Let's look at the Styles in Step 239. 
               .hero-blob has a background gradient. 
               There is no styling for an <img> inside .hero-image-container in Step 239's styles! 
               So adding the <img> tag might be wrong if it wasn't there, OR I should keep it if the user wants it. 
               BUT, the user said "make it like it was". 
               Let's enter the file content from step 188 (mostly).
               Step 188 template:
                <div class="hero-image-container fade-in" style="--delay: 0.6s">
                  <div class="hero-blob"></div>
                  <div class="hero-decoration-items">...</div>
                </div>
               It seems there was NO <img> tag in the hero in step 188. 
               I will restore THAT structure. -->
        </div>
      </div>
      
      <div class="scroll-indicator fade-in" style="--delay: 0.8s">
        <div class="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: 100px; /* Accounts for navbar */
      background: radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 90% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 4rem;
      width: 100%;
    }

    .hero-text {
      z-index: 2;

      .greeting {
        color: var(--primary-color);
        font-weight: 600;
        font-size: clamp(1rem, 2vw, 1.25rem);
        display: block;
        margin-bottom: 0.75rem;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      h1 {
        font-size: var(--font-h1);
        margin-bottom: 0.5rem;
        line-height: 1.1;
        background: linear-gradient(to right, var(--text-color) 30%, var(--primary-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .role {
        font-size: var(--font-h2);
        color: var(--secondary-color);
        margin-bottom: 2rem;
        font-weight: 600;
      }

      .description {
        font-size: var(--font-body);
        color: var(--text-muted);
        margin-bottom: 3rem;
        line-height: 1.8;
        max-width: 540px;

        .highlight {
          color: var(--text-color);
          font-weight: 600;
          position: relative;
          &::after {
            content: ''; position: absolute; bottom: 2px; left: 0; width: 100%; height: 4px;
            background: var(--primary-color); opacity: 0.1; z-index: -1;
          }
        }
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    .hero-image-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      .hero-blob {
        width: 400px;
        height: 400px;
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        filter: blur(60px);
        opacity: 0.15;
        animation: blobFloat 10s infinite alternate;
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.6;
      font-size: 0.8rem;
      font-weight: 500;
      
      /* Hide on very short screens to avoid overlap */
      @media (max-height: 600px) {
        display: none;
      }

      .mouse {
        width: 20px;
        height: 35px;
        border: 2px solid var(--text-color);
        border-radius: 10px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: var(--primary-color);
          border-radius: 2px;
          animation: mouseScroll 2s infinite;
        }
      }
    }

    /* Animations */
    .slide-up {
      opacity: 0;
      transform: translateY(30px);
      animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      animation-delay: var(--delay);
    }

    .fade-in {
      opacity: 0;
      animation: fadeIn 1s ease-out forwards;
      animation-delay: var(--delay);
    }

    @keyframes slideUp {
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes blobFloat {
      from { transform: rotate(0deg) scale(1); }
      to { transform: rotate(20deg) scale(1.1); }
    }

    @keyframes mouseScroll {
      0% { top: 5px; opacity: 1; }
      100% { top: 20px; opacity: 0; }
    }

    @media (max-width: 992px) {
      .hero-section {
        padding-top: 80px;
        align-items: center;
        text-align: center;
      }
      
      .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      
      .hero-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .description { 
          margin-left: auto; 
          margin-right: auto; 
        }
      }
      
      .cta-buttons { 
        justify-content: center; 
        width: 100%;
      }
      
      .hero-image-container { 
        order: -1; 
        
        .hero-blob { 
          width: 280px; 
          height: 280px; 
        }
      }
    }

    @media (max-width: 480px) {
      .hero-image-container .hero-blob {
        width: 220px;
        height: 220px;
      }
      
      .cta-buttons {
        gap: 1rem;
      }
    }
  `]
})
export class HeroComponent { }
