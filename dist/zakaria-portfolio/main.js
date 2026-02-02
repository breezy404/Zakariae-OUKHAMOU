"use strict";
(self["webpackChunkzakaria_portfolio"] = self["webpackChunkzakaria_portfolio"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hero/hero.component */ 9307);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _components_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scroll-to-top/scroll-to-top.component */ 273);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/seo.service */ 2251);








const AppComponent_Defer_5_DepsFn = () => [__webpack_require__.e(/*! import() */ "src_app_components_about_about_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/about/about.component */ 2905)).then(m => m.AboutComponent)];
const AppComponent_Defer_9_DepsFn = () => [__webpack_require__.e(/*! import() */ "src_app_components_skills_skills_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/skills/skills.component */ 1199)).then(m => m.SkillsComponent)];
const AppComponent_Defer_13_DepsFn = () => [__webpack_require__.e(/*! import() */ "src_app_components_projects_projects_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/projects/projects.component */ 3607)).then(m => m.ProjectsComponent)];
const AppComponent_Defer_17_DepsFn = () => [__webpack_require__.e(/*! import() */ "src_app_components_education-experience_education-experience_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/education-experience/education-experience.component */ 3357)).then(m => m.EducationExperienceComponent)];
const AppComponent_Defer_21_DepsFn = () => [__webpack_require__.e(/*! import() */ "src_app_components_contact_contact_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/contact/contact.component */ 1777)).then(m => m.ContactComponent)];
function AppComponent_Defer_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-about");
  }
}
function AppComponent_DeferPlaceholder_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_Defer_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-skills");
  }
}
function AppComponent_DeferPlaceholder_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_Defer_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-projects");
  }
}
function AppComponent_DeferPlaceholder_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_Defer_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-education-experience");
  }
}
function AppComponent_DeferPlaceholder_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_Defer_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-contact");
  }
}
function AppComponent_DeferPlaceholder_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(seoService) {
    this.seoService = seoService;
    this.title = 'zakaria-portfolio';
  }
  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Zakariae OUKHAMOU | Full-Stack Developer',
      description: 'Portfolio of Zakariae OUKHAMOU, a Full-Stack Developer specialized in Angular & Spring Boot.',
      image: 'assets/images/og-image.jpg'
    });
    aos__WEBPACK_IMPORTED_MODULE_4__.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
      disable: 'mobile'
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 0,
      consts: [[1, "container", 2, "padding", "4rem 0"], [1, "skeleton-loader"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-hero");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AppComponent_Defer_3_Template, 1, 0)(4, AppComponent_DeferPlaceholder_4_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefer"](5, 3, AppComponent_Defer_5_DepsFn, null, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdeferOnViewport"](0, -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AppComponent_Defer_7_Template, 1, 0)(8, AppComponent_DeferPlaceholder_8_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefer"](9, 7, AppComponent_Defer_9_DepsFn, null, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdeferOnViewport"](0, -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AppComponent_Defer_11_Template, 1, 0)(12, AppComponent_DeferPlaceholder_12_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefer"](13, 11, AppComponent_Defer_13_DepsFn, null, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdeferOnViewport"](0, -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AppComponent_Defer_15_Template, 1, 0)(16, AppComponent_DeferPlaceholder_16_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefer"](17, 15, AppComponent_Defer_17_DepsFn, null, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdeferOnViewport"](0, -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AppComponent_Defer_19_Template, 1, 0)(20, AppComponent_DeferPlaceholder_20_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefer"](21, 19, AppComponent_Defer_21_DepsFn, null, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdeferOnViewport"](0, -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-footer")(24, "app-scroll-to-top");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_3__.ScrollToTopComponent],
      styles: ["main[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);



const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)()]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [];

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/translate.pipe */ 7314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 15,
      consts: [[1, "footer"], [1, "container"], [1, "footer-grid"], [1, "footer-brand"], [1, "logo"], [1, "footer-nav"], ["href", "#about"], ["href", "#skills"], ["href", "#projects"], ["href", "#contact"], [1, "footer-social"], [1, "social-links"], ["href", "https://www.linkedin.com/in/zakariae-oukhamou-1b42a62b6/", "aria-label", "LinkedIn"], [1, "fa-brands", "fa-linkedin"], ["href", "https://github.com/breezy404", "aria-label", "GitHub"], [1, "fa-brands", "fa-github"], [1, "footer-bottom"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ZO.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul")(13, "li")(14, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10)(30, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Social");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11)(33, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16)(38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u00A9 2026 Zakariae OUKHAMOU. All Rights Reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "contact.subtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, "nav.about"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 9, "nav.skills"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 11, "nav.projects"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 13, "nav.contact"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.AppTranslatePipe],
      styles: [".footer[_ngcontent-%COMP%] {\n  background-color: var(--bg-color);\n  border-top: 1px solid var(--border-color);\n  padding: 5rem 0 2rem;\n  margin-top: 5rem;\n}\n\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 4rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 768px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n    text-align: center;\n  }\n}\n\n.footer-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--primary-color);\n  margin-bottom: 1.5rem;\n}\n.footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.6;\n  max-width: 300px;\n}\n@media (max-width: 768px) {\n  .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n\n.footer-nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer-social[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  color: var(--text-color);\n}\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--text-muted);\n  transition: color 0.3s;\n}\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .social-links[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-color);\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color);\n  transform: translateY(-3px);\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid var(--border-color);\n  text-align: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVNO0VBTkY7SUFPSSwwQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQUNOO0FBQ0Y7O0FBR007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRU07RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUNRO0VBSkY7SUFJNkIsY0FBQTtFQUdqQztBQUNGOztBQUNNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFFUjtBQUFNO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBRVI7QUFEUTtFQUNFLHNCQUFBO0FBR1Y7QUFGVTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUlaO0FBSFk7RUFBVSwyQkFBQTtBQU10Qjs7QUFBSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBR047QUFGTTtFQUhGO0lBRzZCLHVCQUFBO0VBTS9CO0FBQ0Y7QUFMTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQU9SO0FBTFE7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FBT1Y7O0FBRkk7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFLTjtBQUpNO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQU1SIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmZvb3RlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIHBhZGRpbmc6IDVyZW0gMCAycmVtO1xuICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XG4gICAgICBnYXA6IDRyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ2FwOiAzcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1icmFuZCB7XG4gICAgICAubG9nbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7IG1hcmdpbjogMCBhdXRvOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1uYXYsIC5mb290ZXItc29jaWFsIHtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgICAgICAgICAmOmhvdmVyIHsgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgIFxuICAgICAgYSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyLWJvdHRvbSB7XG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9307:
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/translate.pipe */ 7314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class HeroComponent {
  static {
    this.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 12,
      consts: [["id", "home", 1, "hero-section"], [1, "container", "hero-content"], [1, "hero-text"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "greeting"], ["data-aos", "fade-up", "data-aos-delay", "200"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "role"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "description"], [1, "highlight"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "cta-buttons"], ["href", "assets/cv/CV.pdf", "download", "", "aria-label", "Download CV", 1, "btn", "btn-primary"], [1, "fa-solid", "fa-file"], ["href", "#projects", 1, "btn", "btn-outline"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "hero-image-container"], [1, "hero-blob"], [1, "hero-decoration-items"], [1, "item", "code-snippet"], [1, "scroll-indicator", "fade-in", 2, "--delay", "0.8s"], [1, "mouse"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Zakariae OUKHAMOU");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Building performant, secure, and beautiful web experiences. Specialized in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Angular");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " & ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Spring Boot");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8)(20, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "pre")(32, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "<code>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Scroll Down");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "hero.greeting"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, "hero.role"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 8, "hero.cv"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 10, "hero.btn.projects"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.AppTranslatePipe],
      styles: [".hero-section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  padding-top: 100px; \n\n  background: radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  align-items: center;\n  gap: 4rem;\n  width: 100%;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.hero-text[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  display: block;\n  margin-bottom: 0.75rem;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--font-h1);\n  margin-bottom: 0.5rem;\n  line-height: 1.1;\n  background: linear-gradient(to right, var(--text-color) 30%, var(--primary-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-text[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: var(--font-h2);\n  color: var(--secondary-color);\n  margin-bottom: 2rem;\n  font-weight: 600;\n}\n.hero-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: var(--font-body);\n  color: var(--text-muted);\n  margin-bottom: 3rem;\n  line-height: 1.8;\n  max-width: 540px;\n}\n.hero-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 600;\n  position: relative;\n}\n.hero-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 2px;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: var(--primary-color);\n  opacity: 0.1;\n  z-index: -1;\n}\n\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n\n.hero-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.hero-image-container[_ngcontent-%COMP%]   .hero-blob[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));\n  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;\n  filter: blur(60px);\n  opacity: 0.15;\n  animation: _ngcontent-%COMP%_blobFloat 10s infinite alternate;\n}\n\n.scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  opacity: 0.6;\n  font-size: 0.8rem;\n  font-weight: 500;\n  \n\n}\n@media (max-height: 600px) {\n  .scroll-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.scroll-indicator[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border: 2px solid var(--text-color);\n  border-radius: 10px;\n  position: relative;\n}\n.scroll-indicator[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 4px;\n  height: 8px;\n  background: var(--primary-color);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_mouseScroll 2s infinite;\n}\n\n\n\n.slide-up[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(30px);\n  animation: _ngcontent-%COMP%_slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;\n  animation-delay: var(--delay);\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: fadeIn 1s ease-out forwards;\n  animation-delay: var(--delay);\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_blobFloat {\n  from {\n    transform: rotate(0deg) scale(1);\n  }\n  to {\n    transform: rotate(20deg) scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_mouseScroll {\n  0% {\n    top: 5px;\n    opacity: 1;\n  }\n  100% {\n    top: 20px;\n    opacity: 0;\n  }\n}\n@media (max-width: 992px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    align-items: center;\n    text-align: center;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .hero-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n  .hero-image-container[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .hero-image-container[_ngcontent-%COMP%]   .hero-blob[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-image-container[_ngcontent-%COMP%]   .hero-blob[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 220px;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUEsRUFBQSx3QkFBQTtFQUNBLDZLQUFBO0FBQU47O0FBSUk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRE47O0FBSUk7RUFDRSxVQUFBO0FBRE47QUFHTTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUlNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0ZBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBRlI7QUFLTTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNTTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1RO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSlY7QUFLVTtFQUNFLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsT0FBQTtFQUFTLFdBQUE7RUFBYSxXQUFBO0VBQ3BFLGdDQUFBO0VBQWtDLFlBQUE7RUFBYyxXQUFBO0FBSTVEOztBQUVJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ047O0FBRUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUNOO0FBQ007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdGQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtBQUNSOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnREFBQTtBQUROO0FBRU07RUFkRjtJQWVJLGFBQUE7RUFDTjtBQUNGO0FBQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFFVjs7QUFHSSxlQUFBO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwrREFBQTtFQUNBLDZCQUFBO0FBQU47O0FBR0k7RUFDRSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtBQUFOOztBQUdJO0VBQ0U7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUFFckI7QUFDRjtBQUFJO0VBQ0U7SUFBTyxnQ0FBQTtFQUdYO0VBRkk7SUFBSyxtQ0FBQTtFQUtUO0FBQ0Y7QUFISTtFQUNFO0lBQUssUUFBQTtJQUFVLFVBQUE7RUFPbkI7RUFOSTtJQUFPLFNBQUE7SUFBVyxVQUFBO0VBVXRCO0FBQ0Y7QUFSSTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBVU47RUFQSTtJQUNFLDBCQUFBO0lBQ0EsU0FBQTtFQVNOO0VBTkk7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQVFOO0VBTk07SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBUVI7RUFKSTtJQUNFLHVCQUFBO0lBQ0EsV0FBQTtFQU1OO0VBSEk7SUFDRSxTQUFBO0VBS047RUFITTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBS1I7QUFDRjtBQURJO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUdOO0VBQUk7SUFDRSxTQUFBO0VBRU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5oZXJvLXNlY3Rpb24ge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIEFjY291bnRzIGZvciBuYXZiYXIgKi9cbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDIwJSwgcmdiYSgzNywgOTksIDIzNSwgMC4wNSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDkwJSA4MCUsIHJnYmEoMTI0LCA1OCwgMjM3LCAwLjA1KSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICB9XG5cbiAgICAuaGVyby1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMmZyIDAuOGZyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHJlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5oZXJvLXRleHQge1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgLmdyZWV0aW5nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS4yNXJlbSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1oMSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LWNvbG9yKSAzMCUsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLnJvbGUge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtaDIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LWJvZHkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgIG1heC13aWR0aDogNTQwcHg7XG5cbiAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMnB4OyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgb3BhY2l0eTogMC4xOyB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3RhLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMS4yNXJlbTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAuaGVyby1pbWFnZS1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgIC5oZXJvLWJsb2Ige1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvciksIHZhcigtLXNlY29uZGFyeS1jb2xvcikpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2MCUgNDAlIDMwJSA3MCUgLyA2MCUgMzAlIDcwJSA0MCU7XG4gICAgICAgIGZpbHRlcjogYmx1cig2MHB4KTtcbiAgICAgICAgb3BhY2l0eTogMC4xNTtcbiAgICAgICAgYW5pbWF0aW9uOiBibG9iRmxvYXQgMTBzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Nyb2xsLWluZGljYXRvciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDJyZW07XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIFxuICAgICAgLyogSGlkZSBvbiB2ZXJ5IHNob3J0IHNjcmVlbnMgdG8gYXZvaWQgb3ZlcmxhcCAqL1xuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubW91c2Uge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBtb3VzZVNjcm9sbCAycyBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEFuaW1hdGlvbnMgKi9cbiAgICAuc2xpZGUtdXAge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjhzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKSBmb3J3YXJkcztcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZGVsYXkpO1xuICAgIH1cblxuICAgIC5mYWRlLWluIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZGVsYXkpO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gICAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmxvYkZsb2F0IHtcbiAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTsgfVxuICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZykgc2NhbGUoMS4xKTsgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgbW91c2VTY3JvbGwge1xuICAgICAgMCUgeyB0b3A6IDVweDsgb3BhY2l0eTogMTsgfVxuICAgICAgMTAwJSB7IHRvcDogMjBweDsgb3BhY2l0eTogMDsgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgLmhlcm8tc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5oZXJvLWNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ2FwOiAzcmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaGVyby10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7IFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jdGEtYnV0dG9ucyB7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaGVyby1pbWFnZS1jb250YWluZXIgeyBcbiAgICAgICAgb3JkZXI6IC0xOyBcbiAgICAgICAgXG4gICAgICAgIC5oZXJvLWJsb2IgeyBcbiAgICAgICAgICB3aWR0aDogMjgwcHg7IFxuICAgICAgICAgIGhlaWdodDogMjgwcHg7IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAuaGVyby1pbWFnZS1jb250YWluZXIgLmhlcm8tYmxvYiB7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmN0YS1idXR0b25zIHtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_translation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/translation.service */ 6845);
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/translate.pipe */ 7314);





class NavbarComponent {
  get currentLang() {
    return this.translationService.currentLang;
  }
  constructor() {
    this.translationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_translation_service__WEBPACK_IMPORTED_MODULE_0__.TranslationService);
    this.isScrolled = false;
    this.isMenuOpen = false;
    this.isDarkMode = false;
    this.activeSection = '';
    // Scroll listener for sticky effect
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 20;
    });
    // Theme persistence
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    // Intersection Observer for active section
    if (typeof IntersectionObserver !== 'undefined') {
      const options = {
        threshold: 0.5
      };
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);
      // Wait for view init or use setTimeout as a simplified approach for this standalone component
      setTimeout(() => {
        ['about', 'skills', 'projects', 'contact'].forEach(id => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
      }, 500);
    }
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  toggleLang() {
    const newLang = this.currentLang() === 'en' ? 'fr' : 'en';
    this.translationService.setLanguage(newLang);
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 39,
      vars: 40,
      consts: [[1, "navbar"], [1, "container", "navbar-content"], ["href", "#", 1, "logo"], ["aria-label", "Toggle navigation", 1, "menu-toggle", 3, "click"], [1, "nav-links"], ["href", "#about", 3, "click"], ["href", "#skills", 3, "click"], ["href", "#projects", 3, "click"], ["href", "#contact", 3, "click"], [1, "nav-cta-mobile"], ["href", "assets/cv/CV.pdf", "download", "", 1, "btn", "btn-primary", "btn-sm"], [1, "fa-solid", "fa-file"], [1, "actions"], ["href", "assets/cv/CV.pdf", "download", "", "aria-label", "Download CV", 1, "btn", "btn-outline", "btn-sm", "cv-btn-desktop"], [1, "icon-btn", "theme-toggle", 3, "click", "title"], ["title", "Switch Language", 1, "icon-btn", "lang-toggle", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ZO.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_4_listener() {
            return ctx.toggleMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span")(6, "span")(7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 4)(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_18_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li")(22, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_22_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 9)(26, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 12)(31, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_35_listener() {
            return ctx.toggleTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_37_listener() {
            return ctx.toggleLang();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("scrolled", ctx.isScrolled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeSection === "about");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 28, "nav.about"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeSection === "skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 30, "nav.skills"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeSection === "projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 32, "nav.projects"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeSection === "contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 34, "nav.contact"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 36, "nav.cv"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 38, "nav.cv"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.isDarkMode ? "Light Mode" : "Dark Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isDarkMode ? "\u2600\uFE0F" : "\uD83C\uDF19", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentLang().toUpperCase(), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_1__.AppTranslatePipe],
      styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 1.5rem 0;\n  background: transparent;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  background: var(--navbar-bg);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.navbar-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--primary-color);\n  text-decoration: none;\n  letter-spacing: -1px;\n  transition: transform 0.3s ease;\n  position: relative;\n  z-index: 1002;\n}\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2.5rem;\n  list-style: none;\n  align-items: center;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--text-color);\n  font-weight: 500;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  position: relative;\n  padding: 0.5rem 0;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--primary-color);\n  transition: width 0.3s ease;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after, .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.nav-links[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  margin-left: 1rem;\n  padding-left: 1.5rem;\n  border-left: 1px solid var(--border-color);\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.85rem;\n  border-radius: 0.5rem;\n}\n\n.nav-cta-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .nav-links[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    right: -100%;\n    height: 100vh;\n    width: 100%;\n    max-width: 100%;\n    background: var(--bg-color);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 1000;\n    padding: 2rem;\n    gap: 2.5rem;\n  }\n  .nav-links.active[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n  .nav-links[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    border-left: none;\n    margin-left: 0;\n    padding-left: 0;\n    flex-direction: row;\n    justify-content: center;\n    gap: 1.5rem;\n    margin-top: 1rem;\n  }\n  .nav-links[_ngcontent-%COMP%]   .cv-btn-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-links[_ngcontent-%COMP%]   .nav-cta-mobile[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 1rem;\n  }\n  .nav-links[_ngcontent-%COMP%]   .nav-cta-mobile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    padding: 0.75rem 2rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--border-color);\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  cursor: pointer;\n  color: var(--text-color);\n  transition: all 0.3s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--card-bg);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: translateY(-2px);\n}\n\n.lang-toggle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 6px;\n  cursor: pointer;\n  z-index: 1002;\n  padding: 0.5rem;\n  border-radius: 50%;\n  background: transparent;\n  transition: background 0.3s;\n}\n.menu-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--card-bg);\n}\n.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 2px;\n  background-color: var(--text-color);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 2px;\n}\n.menu-toggle[_ngcontent-%COMP%]   span.open[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(8px) rotate(45deg);\n  width: 28px;\n}\n.menu-toggle[_ngcontent-%COMP%]   span.open[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  transform: translateX(-10px);\n}\n.menu-toggle[_ngcontent-%COMP%]   span.open[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-8px) rotate(-45deg);\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQU47QUFFTTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQUFSOztBQUlJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUROO0FBR007RUFBVSxzQkFBQTtBQUFoQjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtBQUFWO0FBR1E7RUFDRSwyQkFBQTtBQURWO0FBRVU7RUFBVyxXQUFBO0FBQ3JCO0FBR007RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0FBRFI7O0FBS0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFGTjs7QUFLSTtFQUFrQixhQUFBO0FBRHRCOztBQUdJLG9DQUFBO0FBQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLDJCQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsbURBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUFBTjtFQUVNO0lBQVcsUUFBQTtFQUNqQjtFQUNNO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtFQUNSO0VBRU07SUFDRSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQUFSO0VBR007SUFBa0IsYUFBQTtFQUF4QjtFQUNNO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VBQ1I7RUFDUTtJQUNFLGlCQUFBO0lBQ0EscUJBQUE7RUFDVjtFQUlJO0lBQ0Usd0JBQUE7RUFGTjtBQUNGO0FBS0k7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUFITjtBQUtNO0VBQ0UsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFIUjs7QUFPSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKTjs7QUFPSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFKTjtBQU1NO0VBQVUsMEJBQUE7QUFIaEI7QUFLTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0FBSFI7QUFLUTtFQUFzQix3Q0FBQTtFQUEwQyxXQUFBO0FBRHhFO0FBRVE7RUFBc0IsVUFBQTtFQUFZLDRCQUFBO0FBRTFDO0FBRFE7RUFBc0IsMENBQUE7RUFBNEMsV0FBQTtBQUsxRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5uYXZiYXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmLnNjcm9sbGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmF2YmFyLWJnKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZiYXItY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxMDAyO1xuXG4gICAgICAmOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxuICAgIH1cblxuICAgIC5uYXYtbGlua3Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMi41cmVtO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciwgJi5hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAmOjphZnRlciB7IHdpZHRoOiAxMDAlOyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDAuNzVyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tc20ge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLm5hdi1jdGEtbW9iaWxlIHsgZGlzcGxheTogbm9uZTsgfVxuXG4gICAgLyogTW9iaWxlICYgVGFibGV0IE1lbnUgKDwgMTAyNHB4KSAqL1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIC5uYXYtbGlua3Mge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IC0xMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGdhcDogMi41cmVtO1xuXG4gICAgICAgICYuYWN0aXZlIHsgcmlnaHQ6IDA7IH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGdhcDogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY3YtYnRuLWRlc2t0b3AgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgICAgIC5uYXYtY3RhLW1vYmlsZSB7IFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5tZW51LXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbi1idG4ge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxhbmctdG9nZ2xlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgXG4gICAgLm1lbnUtdG9nZ2xlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB6LWluZGV4OiAxMDAyO1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gICAgICBcbiAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTsgfVxuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgICYub3BlbjpudGgtY2hpbGQoMSkgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpOyB3aWR0aDogMjhweDsgfVxuICAgICAgICAmLm9wZW46bnRoLWNoaWxkKDIpIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxuICAgICAgICAmLm9wZW46bnRoLWNoaWxkKDMpIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpOyB3aWR0aDogMjhweDsgfVxuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 273:
/*!*********************************************************************!*\
  !*** ./src/app/components/scroll-to-top/scroll-to-top.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollToTopComponent: () => (/* binding */ ScrollToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ScrollToTopComponent {
  constructor() {
    this.isVisible = false;
  }
  onWindowScroll() {
    this.isVisible = window.scrollY > 400;
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static {
    this.ɵfac = function ScrollToTopComponent_Factory(t) {
      return new (t || ScrollToTopComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScrollToTopComponent,
      selectors: [["app-scroll-to-top"]],
      hostBindings: function ScrollToTopComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollToTopComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["aria-label", "Scroll to top", 1, "scroll-top", 3, "click"], [1, "icon"]],
      template: function ScrollToTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToTopComponent_Template_button_click_0_listener() {
            return ctx.scrollToTop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2191");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: [".scroll-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 50px;\n  height: 50px;\n  background: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 99;\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.scroll-top.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.scroll-top[_ngcontent-%COMP%]:hover {\n  background: var(--secondary-color);\n  transform: translateY(-5px);\n  box-shadow: 0 15px 30px rgba(124, 58, 237, 0.4);\n}\n.scroll-top[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n@media (max-width: 768px) {\n  .scroll-top[_ngcontent-%COMP%] {\n    bottom: 1.5rem;\n    right: 1.5rem;\n    width: 45px;\n    height: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwtdG8tdG9wL3Njcm9sbC10by10b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVNO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFBUjtBQUdNO0VBQ0Usa0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FBRFI7QUFJTTtFQUFXLHNCQUFBO0FBRGpCOztBQUlJO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBRE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5zY3JvbGwtdG9wIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMnJlbTtcbiAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgzNywgOTksIDIzNSwgMC4zKTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBcbiAgICAgICYudmlzaWJsZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgxMjQsIDU4LCAyMzcsIDAuNCk7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnNjcm9sbC10b3Age1xuICAgICAgICBib3R0b206IDEuNXJlbTtcbiAgICAgICAgcmlnaHQ6IDEuNXJlbTtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7314:
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTranslatePipe: () => (/* binding */ AppTranslatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_translation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/translation.service */ 6845);



class AppTranslatePipe {
  constructor() {
    this.translationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_translation_service__WEBPACK_IMPORTED_MODULE_0__.TranslationService);
  }
  transform(key) {
    return this.translationService.translate(key);
  }
  static {
    this.ɵfac = function AppTranslatePipe_Factory(t) {
      return new (t || AppTranslatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "translate",
      type: AppTranslatePipe,
      pure: false,
      standalone: true
    });
  }
}

/***/ }),

/***/ 2251:
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeoService: () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);


class SeoService {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
  }
  updateTitle(title) {
    this.titleService.setTitle(title);
  }
  updateMetaTags(config) {
    if (config.title) {
      this.updateTitle(config.title);
      this.metaService.updateTag({
        property: 'og:title',
        content: config.title
      });
      this.metaService.updateTag({
        property: 'twitter:title',
        content: config.title
      });
    }
    if (config.description) {
      this.metaService.updateTag({
        name: 'description',
        content: config.description
      });
      this.metaService.updateTag({
        property: 'og:description',
        content: config.description
      });
      this.metaService.updateTag({
        property: 'twitter:description',
        content: config.description
      });
    }
    if (config.image) {
      this.metaService.updateTag({
        property: 'og:image',
        content: config.image
      });
      this.metaService.updateTag({
        property: 'twitter:image',
        content: config.image
      });
    }
  }
  static {
    this.ɵfac = function SeoService_Factory(t) {
      return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SeoService,
      factory: SeoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6845:
/*!*************************************************!*\
  !*** ./src/app/services/translation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationService: () => (/* binding */ TranslationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class TranslationService {
  constructor() {
    this.currentLang = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('en');
    this.translations = {
      'nav.about': {
        en: 'About',
        fr: 'À propos'
      },
      'nav.skills': {
        en: 'Skills',
        fr: 'Compétences'
      },
      'nav.projects': {
        en: 'Projects',
        fr: 'Projets'
      },
      'nav.contact': {
        en: 'Contact',
        fr: 'Contact'
      },
      'hero.greeting': {
        en: 'Hello, I\'m',
        fr: 'Bonjour, je suis'
      },
      'hero.role': {
        en: 'Full-Stack Web Developer',
        fr: 'Développeur Web Full-Stack'
      },
      'hero.btn.projects': {
        en: 'View Projects',
        fr: 'Voir Projets'
      },
      'hero.btn.contact': {
        en: 'Contact Me',
        fr: 'Me Contacter'
      },
      'sect.about': {
        en: 'About Me',
        fr: 'À Propos de Moi'
      },
      'sect.skills': {
        en: 'Technical Skills',
        fr: 'Compétences Techniques'
      },
      'sect.projects': {
        en: 'Featured Projects',
        fr: 'Projets Réalisés'
      },
      'sect.edu': {
        en: 'Education & Experience',
        fr: 'Éducation & Expérience'
      },
      'sect.contact': {
        en: 'Get In Touch',
        fr: 'Contactez-moi'
      },
      'about.text1': {
        en: 'Full-stack web development student in Morocco, passionate about programming and modern technologies. Motivated, curious, and always ready to learn and improve.',
        fr: 'Étudiant en développement web full-stack au Maroc, passionné par la programmation et les technologies modernes. Motivé, curieux et toujours prêt à apprendre et progresser.'
      },
      'about.text2': {
        en: 'I build academic and practical web applications using Angular, React, Node.js, Java, PHP and SQL databases, focusing on clean structure and real-world functionality.',
        fr: 'Je développe des applications web académiques et pratiques avec Angular, React, Node.js, Java, PHP et les bases de données SQL, en mettant l’accent sur une structure propre et des fonctionnalités réelles.'
      },
      'projects.viewLive': {
        en: 'View Live',
        fr: 'Voir en direct'
      },
      'projects.viewCode': {
        en: 'View Code',
        fr: 'Voir Code'
      },
      'edu.bts': {
        en: 'BTS – Web Development Full-Stack',
        fr: 'BTS – Développement Web Full-Stack'
      },
      'edu.bts.period': {
        en: '2024 - 2026',
        fr: '2024 - 2026'
      },
      'edu.bts.desc': {
        en: 'Professional training in full-stack web development: programming, databases, frameworks and software projects.',
        fr: 'Formation professionnelle en développement web full-stack : programmation, bases de données, frameworks et projets logiciels.'
      },
      'exp.intern': {
        en: 'Full-Stack Internship',
        fr: 'Stage Full-Stack'
      },
      'exp.intern.period': {
        en: 'Jul 2025 – Aug 2025',
        fr: 'Juil 2025 – Août 2025'
      },
      'exp.intern.desc': {
        en: 'Contributed to a commercial monitoring web application using React, Node.js, PostgreSQL and Odoo.',
        fr: 'Participation au développement d’une application web de monitoring commercial avec React, Node.js, PostgreSQL et Odoo.'
      },
      'contact.title': {
        en: 'Let\'s Talk',
        fr: 'Parlons-en'
      },
      'contact.subtitle': {
        en: 'Open to internships and junior web developer opportunities. Feel free to contact me for collaboration or projects.',
        fr: 'Ouvert aux stages et opportunités de développeur web junior. N’hésitez pas à me contacter pour une collaboration ou un projet.'
      },
      'contact.email': {
        en: 'Email',
        fr: 'Email'
      },
      'nav.cv': {
        en: 'CV',
        fr: 'CV'
      },
      'hero.cv': {
        en: 'Download CV',
        fr: 'Télécharger CV'
      },
      'contact.btn': {
        en: 'Send Message',
        fr: 'Envoyer Message'
      }
    };
  }
  setLanguage(lang) {
    this.currentLang.set(lang);
    document.documentElement.lang = lang;
  }
  translate(key) {
    return this.translations[key]?.[this.currentLang()] || key;
  }
  static {
    this.ɵfac = function TranslationService_Factory(t) {
      return new (t || TranslationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TranslationService,
      factory: TranslationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map