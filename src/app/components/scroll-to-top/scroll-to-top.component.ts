import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="scroll-top" [class.visible]="isVisible" (click)="scrollToTop()" aria-label="Scroll to top">
      <span class="icon">↑</span>
    </button>
  `,
  styles: [`
    .scroll-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 99;
      box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
      font-size: 1.5rem;
      font-weight: bold;
      
      &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      &:hover {
        background: var(--secondary-color);
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(124, 58, 237, 0.4);
      }

      &:active { transform: scale(0.95); }
    }

    @media (max-width: 768px) {
      .scroll-top {
        bottom: 1.5rem;
        right: 1.5rem;
        width: 45px;
        height: 45px;
      }
    }
  `]
})
export class ScrollToTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
