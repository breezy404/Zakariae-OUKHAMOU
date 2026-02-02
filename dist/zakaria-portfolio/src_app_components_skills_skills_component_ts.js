"use strict";
(self["webpackChunkzakaria_portfolio"] = self["webpackChunkzakaria_portfolio"] || []).push([["src_app_components_skills_skills_component_ts"],{

/***/ 1199:
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/translate.pipe */ 7314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




function SkillsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", skill_r1.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r1.level, "%");
  }
}
function SkillsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", skill_r2.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r2.level, "%");
  }
}
function SkillsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", skill_r3.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", skill_r3.level, "%");
  }
}
class SkillsComponent {
  constructor() {
    this.frontendSkills = [{
      name: 'HTML5 & CSS3',
      level: 95
    }, {
      name: 'JavaScript (ES6+)',
      level: 90
    }, {
      name: 'Angular',
      level: 85
    }, {
      name: 'Tailwind CSS',
      level: 80
    }];
    this.backendSkills = [{
      name: 'Java',
      level: 80
    }, {
      name: 'Spring Boot',
      level: 75
    }, {
      name: 'PHP / Laravel',
      level: 70
    }, {
      name: 'Node.js',
      level: 65
    }];
    this.toolSkills = [{
      name: 'MySQL / MongoDB',
      level: 80
    }, {
      name: 'Git & GitHub',
      level: 90
    }, {
      name: 'Docker',
      level: 60
    }, {
      name: 'Postman',
      level: 85
    }];
  }
  static {
    this.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 6,
      consts: [["id", "skills", 1, "skills-section"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], [1, "skills-grid"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "skill-category"], [1, "category-header"], [1, "icon"], [1, "skills-list"], ["class", "skill-item", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "skill-category"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "skill-category"], [1, "fa-solid", "fa-database"], [1, "skill-item"], [1, "skill-info"], [1, "skill-name"], [1, "skill-percentage"], [1, "progress-bar"], [1, "progress"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\uD83D\uDCBB");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Frontend Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SkillsComponent_div_13_Template, 8, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div", 5)(16, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u2699\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Backend Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SkillsComponent_div_21_Template, 8, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10)(23, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Tools & Databases");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SkillsComponent_div_28_Template, 8, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "sect.skills"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.frontendSkills);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.backendSkills);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toolSkills);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.AppTranslatePipe],
      styles: [".skills-section[_ngcontent-%COMP%] {\n  background-color: var(--bg-color);\n}\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  \n\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2.5rem;\n}\n\n.skill-category[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 2.5rem;\n  border-radius: 1.5rem;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s ease;\n}\n.skill-category[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--primary-color);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.skill-category[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.skill-category[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.skill-category[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin-bottom: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n\n.skill-item[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.skill-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.skill-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.skill-info[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.95rem;\n  color: var(--text-color);\n}\n.skill-info[_ngcontent-%COMP%]   .skill-percentage[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--border-color);\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));\n  border-radius: 10px;\n  transition: width 1.5s cubic-bezier(0.1, 0.42, 0.41, 1);\n}\n\n@media (max-width: 480px) {\n  .skill-category[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .skills-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGlDQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSwyREFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQUFOO0FBRU07RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkNBQUE7QUFBUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRFI7QUFHUTtFQUFRLGlCQUFBO0FBQWhCO0FBRVE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFWOztBQUtJO0VBQ0UscUJBQUE7QUFGTjtBQUdNO0VBQWUsZ0JBQUE7QUFBckI7O0FBR0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUFOO0FBRU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFBUjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBRFI7O0FBS0k7RUFDRSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRk47O0FBS0k7RUFDRSxZQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FBRk47O0FBS0k7RUFDRTtJQUNFLGVBQUE7RUFGTjtFQUtJO0lBQ0UsMEJBQUE7SUFDQSxXQUFBO0VBSE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5za2lsbHMtc2VjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgfVxuXG4gICAgLnNraWxscy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAvKiBBZGp1c3RlZCBtaW5tYXggZm9yIGJldHRlciBtb2JpbGUgZml0IChlLmcuIGlQaG9uZSBTRSkgKi9cbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAyLjVyZW07XG4gICAgfVxuXG4gICAgLnNraWxsLWNhdGVnb3J5IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgcGFkZGluZzogMi41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jYXRlZ29yeS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICAgICAgLmljb24geyBmb250LXNpemU6IDEuNXJlbTsgfVxuICAgICAgICBcbiAgICAgICAgaDMge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNraWxsLWl0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgJjpsYXN0LWNoaWxkIHsgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAgIH1cblxuICAgIC5za2lsbC1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICBcbiAgICAgIC5za2lsbC1uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5za2lsbC1wZXJjZW50YWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWJhciB7XG4gICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBjdWJpYy1iZXppZXIoMC4xLCAwLjQyLCAwLjQxLCAxKTtcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAuc2tpbGwtY2F0ZWdvcnkge1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5za2lsbHMtZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBnYXA6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_skills_skills_component_ts.js.map