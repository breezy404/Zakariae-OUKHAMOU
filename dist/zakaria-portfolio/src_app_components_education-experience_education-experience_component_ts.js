"use strict";
(self["webpackChunkzakaria_portfolio"] = self["webpackChunkzakaria_portfolio"] || []).push([["src_app_components_education-experience_education-experience_component_ts"],{

/***/ 3357:
/*!***********************************************************************************!*\
  !*** ./src/app/components/education-experience/education-experience.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationExperienceComponent: () => (/* binding */ EducationExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class EducationExperienceComponent {
  static {
    this.ɵfac = function EducationExperienceComponent_Factory(t) {
      return new (t || EducationExperienceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationExperienceComponent,
      selectors: [["app-education-experience"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 0,
      consts: [["id", "education", 1, "edu-section"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], [1, "timeline"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "timeline-item"], [1, "timeline-dot"], [1, "timeline-content"], [1, "timeline-date"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "timeline-item"]],
      template: function EducationExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Education & Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BTS \u2013 Web Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2024 - 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Specialized training in full-stack web development, covering algorithms, database design, and modern frameworks.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Full-Stack Internship");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Summer 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Developed key modules for a commercial management application using Angular and Spring Boot. Collaborated with a senior team to implement best practices.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: [".edu-section[_ngcontent-%COMP%] {\n  background-color: var(--bg-color);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n  font-size: var(--font-h2);\n  color: var(--primary-color);\n}\n\n.timeline[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 20px; \n\n  top: 0;\n  height: 100%;\n  width: 2px;\n  background: var(--primary-color);\n  opacity: 0.2;\n}\n@media (min-width: 768px) {\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 3rem;\n  width: 100%;\n  \n\n}\n@media (min-width: 768px) {\n  .timeline-item[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .timeline-item[_ngcontent-%COMP%]:nth-child(odd) {\n    left: 0;\n    padding-right: 3rem;\n    text-align: right;\n  }\n  .timeline-item[_ngcontent-%COMP%]:nth-child(odd)   .timeline-dot[_ngcontent-%COMP%] {\n    right: -9px;\n    left: auto;\n  }\n  .timeline-item[_ngcontent-%COMP%]:nth-child(even) {\n    left: 50%;\n    padding-left: 3rem;\n  }\n  .timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-dot[_ngcontent-%COMP%] {\n    left: -9px;\n  }\n}\n@media (max-width: 767px) {\n  .timeline-item[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n  .timeline-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n    left: 11px;\n  }\n}\n\n.timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background: var(--primary-color);\n  border-radius: 50%;\n  border: 4px solid var(--bg-color);\n  z-index: 2;\n}\n\n.timeline-content[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  color: var(--secondary-color);\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: var(--text-color);\n  opacity: 0.7;\n  margin-bottom: 1rem;\n  font-weight: 500;\n}\n.timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24tZXhwZXJpZW5jZS9lZHVjYXRpb24tZXhwZXJpZW5jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBZSxpQ0FBQTtBQUNuQjs7QUFBSTtFQUFpQixrQkFBQTtFQUFvQixtQkFBQTtFQUFxQix5QkFBQTtFQUEyQiwyQkFBQTtBQU96Rjs7QUFMSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUU47QUFOTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUEsRUFBQSxxQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQVFSO0FBTE07RUFDRTtJQUFZLFNBQUE7SUFBVywyQkFBQTtFQVM3QjtBQUNGOztBQU5JO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFxQkEsa0JBQUE7QUFYTjtBQVJNO0VBTEY7SUFNSSxVQUFBO0VBV047RUFUTTtJQUNFLE9BQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBV1I7RUFUUTtJQUFnQixXQUFBO0lBQWEsVUFBQTtFQWFyQztFQVZNO0lBQ0UsU0FBQTtJQUNBLGtCQUFBO0VBWVI7RUFWUTtJQUFnQixVQUFBO0VBYXhCO0FBQ0Y7QUFUTTtFQXpCRjtJQTBCSSxrQkFBQTtFQVlOO0VBWE07SUFBZ0IsVUFBQTtFQWN0QjtBQUNGOztBQVhJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0FBY047O0FBWEk7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBY047QUFaTTtFQUFLLGlCQUFBO0VBQW1CLHFCQUFBO0VBQXVCLDZCQUFBO0FBaUJyRDtBQWhCTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFrQlI7QUFoQk07RUFBSSx3QkFBQTtFQUEwQixrQkFBQTtFQUFvQixnQkFBQTtBQXFCeEQiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZWR1LXNlY3Rpb24geyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7IH1cbiAgICAuc2VjdGlvbi10aXRsZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogM3JlbTsgZm9udC1zaXplOiB2YXIoLS1mb250LWgyKTsgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOyB9XG4gICAgXG4gICAgLnRpbWVsaW5lIHtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMjBweDsgLyogTW9iaWxlIGFsaWdubWVudCAqL1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgJjo6YmVmb3JlIHsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZWxpbmUtaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBcbiAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIFxuICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgXG4gICAgICAgICAgLnRpbWVsaW5lLWRvdCB7IHJpZ2h0OiAtOXB4OyBsZWZ0OiBhdXRvOyB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIC50aW1lbGluZS1kb3QgeyBsZWZ0OiAtOXB4OyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogTW9iaWxlIHN0eWxlcyAqL1xuICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAudGltZWxpbmUtZG90IHsgbGVmdDogMTFweDsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aW1lbGluZS1kb3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuXG4gICAgICBoMyB7IGZvbnQtc2l6ZTogMS4ycmVtOyBtYXJnaW4tYm90dG9tOiAwLjVyZW07IGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyB9XG4gICAgICAudGltZWxpbmUtZGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICBwIHsgY29sb3I6IHZhcigtLXRleHQtY29sb3IpOyBmb250LXNpemU6IDAuOTVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7IH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_education-experience_education-experience_component_ts.js.map