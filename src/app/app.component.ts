import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationExperienceComponent } from './components/education-experience/education-experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { SeoService } from './services/seo.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationExperienceComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      
      @defer (on viewport) {
        <app-about></app-about>
      } @placeholder {
        <div class="container" style="padding: 4rem 0;"><div class="skeleton-loader"></div></div>
      }

      @defer (on viewport) {
        <app-skills></app-skills>
      } @placeholder {
        <div class="container" style="padding: 4rem 0;"><div class="skeleton-loader"></div></div>
      }

      @defer (on viewport) {
        <app-projects></app-projects>
      } @placeholder {
        <div class="container" style="padding: 4rem 0;"><div class="skeleton-loader"></div></div>
      }

      @defer (on viewport) {
        <app-education-experience></app-education-experience>
      } @placeholder {
        <div class="container" style="padding: 4rem 0;"><div class="skeleton-loader"></div></div>
      }

      @defer (on viewport) {
        <app-contact></app-contact>
      } @placeholder {
        <div class="container" style="padding: 4rem 0;"><div class="skeleton-loader"></div></div>
      }
    </main>
    <app-footer></app-footer>
    <app-scroll-to-top></app-scroll-to-top>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zakaria-portfolio';

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Zakariae OUKHAMOU | Full-Stack Developer',
      description: 'Portfolio of Zakariae OUKHAMOU, a Full-Stack Developer specialized in Angular & Spring Boot.',
      image: 'assets/images/og-image.jpg'
    });

    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
      disable: 'mobile'
    });
  }
}
