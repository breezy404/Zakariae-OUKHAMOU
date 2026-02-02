"use strict";
(self["webpackChunkzakaria_portfolio"] = self["webpackChunkzakaria_portfolio"] || []).push([["src_app_components_projects_projects_component_ts"],{

/***/ 3607:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/translate.pipe */ 7314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




function ProjectsComponent_div_6_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.githubLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_6_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.liveLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_6_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tech_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r2);
  }
}
function ProjectsComponent_div_6_a_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.liveLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "projects.viewLive"), " ");
  }
}
function ProjectsComponent_div_6_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.githubLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "projects.viewCode"), " ");
  }
}
function ProjectsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_6_a_6_Template, 2, 1, "a", 10)(7, ProjectsComponent_div_6_a_7_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProjectsComponent_div_6_span_14_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProjectsComponent_div_6_a_16_Template, 3, 4, "a", 16)(17, ProjectsComponent_div_6_a_17_Template, 3, 4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos-delay", 100 + i_r3 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.title[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.githubLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.liveLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.liveLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.githubLink);
  }
}
class ProjectsComponent {
  constructor() {
    this.projects = [{
      title: 'Commercial Monitoring Dashboard',
      description: 'A comprehensive dashboard for business analytics, tracking sales performance and KPIs in real-time.',
      image: 'assets/com.PNG',
      technologies: ['Angular', 'Spring Boot', 'JWT', 'Chart.js'],
      liveLink: '#',
      githubLink: '#'
    }, {
      title: 'Event & Ticket Reservation',
      description: 'Platform allows users to browse events, book tickets securely, and manage reservations via a user-friendly interface.',
      image: 'assets/events.jpg',
      technologies: ['Angular', 'Java', 'MySQL'],
      liveLink: '#',
      githubLink: '#'
    }, {
      title: 'Travel Agency System',
      description: 'Management system for travel agencies to handle bookings, customers, and travel packages efficiently.',
      image: 'assets/travel.jpg',
      technologies: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
      githubLink: '#'
    }, {
      title: 'Commercial Monitoring Dashboard',
      description: 'Robust authentication service providing secure login, registration, and role-based access control.',
      image: 'assets/auth.jpg',
      technologies: ['Spring Security', 'JWT', 'Angular'],
      githubLink: '#'
    }];
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 4,
      consts: [["id", "projects", 1, "projects-section"], [1, "container"], [1, "section-title"], [1, "projects-grid"], ["class", "project-card", "data-aos", "zoom-in-up", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in-up", 1, "project-card"], [1, "project-image"], [1, "placeholder-img"], [1, "project-overlay"], [1, "overlay-links"], ["target", "_blank", "class", "icon-link", "title", "Source Code", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "icon-link", "title", "Live Demo", 3, "href", 4, "ngIf"], [1, "project-content"], [1, "tech-stack"], ["class", "tech-chip", 4, "ngFor", "ngForOf"], [1, "project-footer"], ["target", "_blank", "class", "btn btn-primary btn-sm", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-outline btn-sm", 3, "href", 4, "ngIf"], ["target", "_blank", "title", "Source Code", 1, "icon-link", 3, "href"], [1, "fa-brands", "fa-github"], ["target", "_blank", "title", "Live Demo", 1, "icon-link", 3, "href"], [1, "fa-solid", "fa-link"], [1, "tech-chip"], ["target", "_blank", 1, "btn", "btn-primary", "btn-sm", 3, "href"], ["target", "_blank", 1, "btn", "btn-outline", "btn-sm", 3, "href"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_6_Template, 18, 9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "sect.projects"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.AppTranslatePipe],
      styles: [".projects-section[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n}\n\n.projects-grid[_ngcontent-%COMP%] {\n  display: grid;\n  \n\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 3rem;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  background: var(--bg-color);\n  border-radius: 1.5rem;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  border-color: var(--primary-color);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.project-card[_ngcontent-%COMP%]:hover   .placeholder-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.project-image[_ngcontent-%COMP%] {\n  height: 220px;\n  position: relative;\n  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.project-image[_ngcontent-%COMP%]   .placeholder-img[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 800;\n  color: var(--primary-color);\n  opacity: 0.2;\n  transition: transform 0.5s ease;\n}\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(37, 99, 235, 0.9);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  z-index: 10;\n}\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .overlay-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .overlay-links[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  font-size: 1.25rem;\n  transition: transform 0.3s ease;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.project-image[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .overlay-links[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: var(--primary-color);\n}\n\n.project-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.project-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  font-size: 1.4rem;\n  color: var(--text-color);\n}\n.project-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.tech-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n  margin-top: auto;\n}\n\n.tech-chip[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  color: var(--text-color);\n  padding: 0.35rem 0.85rem;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid var(--border-color);\n}\n\n.project-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-color);\n}\n.project-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n@media (max-width: 768px) {\n  .projects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 2rem;\n  }\n  .project-card[_ngcontent-%COMP%]:hover {\n    \n\n    transform: none;\n  }\n  \n\n\n}\n@media (max-width: 480px) {\n  .projects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .project-image[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .project-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .project-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxnQ0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQU47QUFFTTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtBQUFSO0FBRVE7RUFBbUIsVUFBQTtBQUMzQjtBQUFRO0VBQW1CLHFCQUFBO0FBRzNCOztBQUNJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRU47QUFBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUVSO0FBQ007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUNSO0FBRU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBQVI7QUFFUTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQVY7QUFFVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7QUFBWjtBQUVZO0VBQVUscUJBQUE7RUFBdUIsMkJBQUE7QUFFN0M7O0FBSUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUROO0FBR007RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFEUjtBQUlNO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUZSOztBQU1JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhOOztBQU1JO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFITjs7QUFNSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQUhOO0FBS007RUFBTyxPQUFBO0FBRmI7O0FBS0k7RUFDRTtJQUNFLDJEQUFBO0lBQ0EsU0FBQTtFQUZOO0VBS0k7SUFDRSwrRUFBQTtJQUNBLGVBQUE7RUFITjtFQU1JOzBFQUFBO0FBSE47QUFPSTtFQUNHO0lBQ0MsMEJBQUE7RUFMTjtFQVFJO0lBQ0UsYUFBQTtFQU5OO0VBU0k7SUFDRSxlQUFBO0VBUE47RUFVSTtJQUNFLHNCQUFBO0VBUk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5wcm9qZWN0cy1zZWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmcpO1xuICAgIH1cbiAgICBcbiAgICAucHJvamVjdHMtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgLyogQWRqdXN0ZWQgZm9yIGJldHRlciByZXNwb25zaXZlbmVzcyAqL1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICBnYXA6IDNyZW07XG4gICAgfVxuXG4gICAgLnByb2plY3QtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgIC5wcm9qZWN0LW92ZXJsYXkgeyBvcGFjaXR5OiAxOyB9XG4gICAgICAgIC5wbGFjZWhvbGRlci1pbWcgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvamVjdC1pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzNywgOTksIDIzNSwgMC4xKSwgcmdiYSgxMjQsIDU4LCAyMzcsIDAuMSkpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucGxhY2Vob2xkZXItaW1nIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnByb2plY3Qtb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuOSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuXG4gICAgICAgIC5vdmVybGF5LWxpbmtzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMS41cmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIC5pY29uLWxpbmsge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9qZWN0LWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50ZWNoLXN0YWNrIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIH1cblxuICAgIC50ZWNoLWNoaXAge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICBwYWRkaW5nOiAwLjM1cmVtIDAuODVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAucHJvamVjdC1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBcbiAgICAgIC5idG4geyBmbGV4OiAxOyB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnByb2plY3RzLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucHJvamVjdC1jYXJkOmhvdmVyIHtcbiAgICAgICAgLyogT24gdG91Y2ggZGV2aWNlcywgZGlzYWJsZSBob3ZlciBsaWZ0IHRvIGNvbmZ1c2luZyBzaGlmdCwgb3Iga2VlcCBpdCBzdWJ0bGUgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBNYWtlIG92ZXJsYXkgYWx3YXlzIHZpc2libGUgb3IgYWNjZXNzaWJsZSB2aWEgYnV0dG9uPyBcbiAgICAgICAgIEZvciBub3csIGtlZXBpbmcgaG92ZXIvYWN0aXZlIGJlaGF2aW9yIG9yIHJlbHlpbmcgb24gZm9vdGVyIGJ1dHRvbnMgKi9cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgLnByb2plY3RzLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnByb2plY3QtaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAucHJvamVjdC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucHJvamVjdC1mb290ZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_projects_projects_component_ts.js.map