"use strict";
(self["webpackChunkzakaria_portfolio"] = self["webpackChunkzakaria_portfolio"] || []).push([["src_app_components_about_about_component_ts"],{

/***/ 2905:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/translate.pipe */ 7314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 27,
      vars: 9,
      consts: [["id", "about", 1, "about-section"], [1, "container"], ["data-aos", "fade-up", 1, "section-title"], [1, "about-grid"], ["data-aos", "fade-right", "data-aos-duration", "1000", 1, "about-image"], [1, "image-wrapper"], ["src", "assets/images/Wha.jpg", "alt", "Zakariae OUKHAMOU Profile Picture", "loading", "lazy", "width", "280", "height", "280"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "about-text"], [1, "lead"], [1, "about-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "2+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Years Exp.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10)(23, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "10+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "sect.about"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 5, "about.text1"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 7, "about.text2"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_0__.AppTranslatePipe],
      styles: [".about-section[_ngcontent-%COMP%] {\n  background-color: var(--card-bg);\n  position: relative;\n  overflow: hidden;\n}\n\n.about-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.8fr 1.2fr;\n  gap: 4rem;\n  align-items: center;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.about-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.about-image[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n  border-radius: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.about-image[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 1.8rem;\n}\n.about-image[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: -15px;\n  border: 2px solid var(--primary-color);\n  border-radius: 2.5rem;\n  opacity: 0.2;\n  z-index: -1;\n}\n.about-image[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .placeholder-avatar[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 800;\n  color: white;\n  letter-spacing: -2px;\n}\n\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: var(--text-muted);\n  font-size: 1.05rem;\n}\n.about-text[_ngcontent-%COMP%]   p.lead[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: var(--text-color);\n  line-height: 1.6;\n}\n\n.about-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n  margin-top: 2.5rem;\n  padding-top: 2rem;\n  border-top: 1px solid var(--border-color);\n}\n.about-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.about-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary-color);\n}\n.about-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n@media (max-width: 992px) {\n  .about-grid[_ngcontent-%COMP%] {\n    gap: 3rem;\n    grid-template-columns: 1fr 1fr;\n  }\n  .image-wrapper[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 240px;\n  }\n}\n@media (max-width: 768px) {\n  .about-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .about-image[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .about-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 2rem;\n    flex-wrap: wrap;\n  }\n  .about-image[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 220px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQVI7QUFFUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUZBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBQVY7QUFFVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUFaO0FBR1U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRFo7QUFJVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUZaOztBQVFRO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBTFY7QUFPVTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBTFo7O0FBVUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQVBOO0FBU007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFQUjtBQVNRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFQVjtBQVVRO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVJWOztBQWFJO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsOEJBQUE7RUFWTjtFQVlJO0lBQWlCLFlBQUE7SUFBYyxhQUFBO0VBUm5DO0FBQ0Y7QUFVSTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxrQkFBQTtFQVJOO0VBV0k7SUFBZSxtQkFBQTtFQVJuQjtFQVVJO0lBQ0UsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtFQVJOO0VBV0k7SUFBOEIsWUFBQTtJQUFjLGFBQUE7RUFQaEQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5hYm91dC1zZWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuYWJvdXQtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjhmciAxLjJmcjtcbiAgICAgIGdhcDogNHJlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgICAgLmFib3V0LWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICAuaW1hZ2Utd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvciksIHZhcigtLXNlY29uZGFyeS1jb2xvcikpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS44cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaW5zZXQ6IC0xNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGxhY2Vob2xkZXItYXZhdGFyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFib3V0LXRleHQge1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICAmLmxlYWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAuYWJvdXQtc3RhdHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogM3JlbTtcbiAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIC5zdGF0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBcbiAgICAgICAgLnN0YXQtbnVtYmVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAuYWJvdXQtZ3JpZCB7XG4gICAgICAgIGdhcDogM3JlbTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgfVxuICAgICAgLmltYWdlLXdyYXBwZXIgeyB3aWR0aDogMjQwcHg7IGhlaWdodDogMjQwcHg7IH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5hYm91dC1ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmFib3V0LWltYWdlIHsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuICAgICAgXG4gICAgICAuYWJvdXQtc3RhdHMgeyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDsgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC5hYm91dC1pbWFnZSAuaW1hZ2Utd3JhcHBlciB7IHdpZHRoOiAyMjBweDsgaGVpZ2h0OiAyMjBweDsgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_about_about_component_ts.js.map