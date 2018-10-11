(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _gallery_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/slider/slider.component */ "./src/app/gallery/slider/slider.component.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"],
                _offer_offer_component__WEBPACK_IMPORTED_MODULE_6__["OfferComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _gallery_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRouting"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_10__["NgxGalleryModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'glowna',
        component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__["MainpageComponent"]
    },
    {
        path: 'oferta',
        component: _offer_offer_component__WEBPACK_IMPORTED_MODULE_3__["OfferComponent"]
    },
    {
        path: 'galeria',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]
    },
    {
        path: 'kontakt',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: '',
        redirectTo: 'glowna',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'glowna',
        pathMatch: 'full'
    },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // imports: [RouterModule.forRoot(appRoutes)],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"content\">\n  <div class=\"content__tape tape\">\n    <ul class=\"container tape__contact-informations\">\n      <li class=\"tape__one-information\">\n        <span class=\"tape__icon\"><i class=\"fa fa-map-marker\"></i></span>\n        <a class=\"tape__one-information__link\" href=\"https://goo.gl/maps/xQaFMwnSfRQ2\">{{address}}</a>\n      </li>\n      <li class=\"tape__one-information\">\n        <span class=\"tape__icon\"><i class=\"fa fa-phone\"></i></span>{{phone}}</li>\n      <li class=\"tape__one-information\">\n        <span class=\"tape__icon\"><i class=\"fa fa-at\"></i></span>{{mail}}</li>\n      <li class=\"tape__one-information\">\n        <span class=\"tape__icon\"><i class=\"fa fa-facebook-f\"></i></span>\n        <a class=\"tape__one-information__link\" href=\"https://www.facebook.com\">{{facebook}}</a>\n      </li>\n    </ul>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background: url('auto-back.jpg');\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 2rem;\n  position: relative;\n  overflow: hidden;\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0; }\n  @media (max-width: 768px) {\n    .content {\n      height: calc(100vh - 56px); } }\n  .content:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, black 80%, black 100%); }\n  .content .tape {\n    margin-top: 10rem;\n    position: relative;\n    z-index: 1;\n    color: #cecece;\n    padding: 10px 0;\n    background-color: rgba(240, 180, 70, 0.4);\n    transition: 1s;\n    -webkit-animation: slide-tape 2s forwards;\n            animation: slide-tape 2s forwards; }\n  @media (max-height: 500px) {\n      .content .tape {\n        -webkit-animation-fill-mode: none;\n                animation-fill-mode: none;\n        height: 100vh;\n        width: 100vw;\n        margin-top: 0;\n        border: 0 !important; } }\n  .content .tape__contact-informations {\n      height: 100%;\n      line-height: 1;\n      display: flex;\n      padding: 12vh 0;\n      flex-direction: column;\n      justify-content: center;\n      padding-left: 25%; }\n  @media (max-width: 576px) {\n        .content .tape__contact-informations {\n          padding-left: 10%; } }\n  .content .tape__contact-informations li:nth-child(1) {\n        -webkit-animation: fade-in-right 2s;\n                animation: fade-in-right 2s;\n        -webkit-animation-delay: 1.2s;\n                animation-delay: 1.2s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        opacity: 0; }\n  .content .tape__contact-informations li:nth-child(2) {\n        -webkit-animation: fade-in-right 2s;\n                animation: fade-in-right 2s;\n        -webkit-animation-delay: 1.4s;\n                animation-delay: 1.4s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        opacity: 0; }\n  .content .tape__contact-informations li:nth-child(3) {\n        -webkit-animation: fade-in-right 2s;\n                animation: fade-in-right 2s;\n        -webkit-animation-delay: 1.6s;\n                animation-delay: 1.6s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        opacity: 0; }\n  .content .tape__contact-informations li:nth-child(4) {\n        -webkit-animation: fade-in-right 2s;\n                animation: fade-in-right 2s;\n        -webkit-animation-delay: 1.8s;\n                animation-delay: 1.8s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        opacity: 0; }\n  .content .tape__one-information {\n      padding: 6px 0;\n      padding-left: 30px;\n      position: relative;\n      overflow: hidden;\n      white-space: nowrap; }\n  .content .tape__one-information__link {\n        text-decoration: none;\n        color: #cecece;\n        transition: all .25s ease-out; }\n  @media (min-width: 768px) {\n          .content .tape__one-information__link:hover {\n            opacity: .7; } }\n  .content .tape__icon {\n      display: block;\n      width: 30px;\n      left: 0;\n      top: 30%;\n      position: absolute;\n      text-align: center;\n      font-size: 1.8rem;\n      -webkit-animation: appear 2s;\n              animation: appear 2s;\n      -webkit-animation-delay: 3.5s;\n              animation-delay: 3.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      opacity: 0; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(mainService) {
        this.mainService = mainService;
        this.contactPath = this.mainService.description.contact;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.address = this.contactPath.location;
        this.phone = this.contactPath.telephone;
        this.mail = this.contactPath.mail;
        this.facebook = this.contactPath.facebook;
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"gallery gallery__content\">\n  <ul class=\"gallery__menu\" [ngClass]=\"{ 'active-dot-menu': !isOpenPreview }\">\n    <label *ngFor=\"let dot of sections; index as i; let first = first\" class=\"gallery__menu__li-dot\">\n      <input class=\"gallery__menu__radio\" type=\"radio\" [checked]=\"first\" name=\"scrollife\" (click)=\"goToSection(i)\"><span\n        class=\"gallery__menu__dot\"></span>\n    </label>\n  </ul>\n  <section *ngFor=\"let post of posts; index as i; let first = first\" class=\"section section-{{i}}\">\n    <div class=\"section__slider-wrap\">\n      <app-slider [post]=\"posts[i]\" *ngIf=\"posts[i].isActive\" class=\"section__slider-content\" (previewTask)=\"previewPhoto($event)\"></app-slider>\n      <div class=\"loader\" *ngIf=\"!posts[i].isActive\">Loading...</div>\n    </div>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery, .gallery .section {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.gallery {\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  flex-wrap: wrap;\n  overflow: auto;\n  position: relative;\n  background: #464646; }\n\n@media (min-width: 768px) {\n    .gallery {\n      background: url('tools4.jpg');\n      background-position: center;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-attachment: fixed; }\n      .gallery:after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: rgba(40, 40, 40, 0.85); } }\n\n.gallery .active-dot-menu {\n    z-index: 2000; }\n\n.gallery__menu {\n    position: fixed;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n@media (max-width: 768px) {\n      .gallery__menu {\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%); } }\n\n.gallery__menu__li-dot {\n      display: list-item;\n      padding: 12px 20px;\n      cursor: pointer; }\n\n.gallery__menu__radio {\n      display: none; }\n\n.gallery__menu__dot {\n      display: inline-block;\n      width: .5rem;\n      height: .5rem;\n      background-color: #cecece;\n      border-radius: 50%; }\n\n.gallery__menu__radio:checked + .gallery__menu__dot {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5);\n      background-color: white;\n      -webkit-animation: chacked 1s;\n              animation: chacked 1s; }\n\n.gallery .section {\n    height: 100vh;\n    width: 100vw;\n    transition: .6s;\n    z-index: 5;\n    overflow: hidden; }\n\n@media (max-width: 768px) {\n      .gallery .section {\n        height: calc(100vh - 56px); } }\n\n@media (max-width: 768px) and (orientation: landscape) {\n      .gallery .section {\n        align-items: flex-end; } }\n\n.gallery .section__slider-wrap {\n      width: 100%;\n      max-height: calc(100vh - 100px);\n      text-align: center;\n      margin-bottom: 10px;\n      z-index: 5; }\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_scrollify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-scrollify */ "./node_modules/jquery-scrollify/jquery.scrollify.js");
/* harmony import */ var jquery_scrollify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_scrollify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(mainService) {
        this.mainService = mainService;
        this.isOpenPreview = false;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.posts = this.mainService.posts;
    };
    GalleryComponent.prototype.ngAfterViewInit = function () {
        this.section = jquery__WEBPACK_IMPORTED_MODULE_1__('.section');
        this.sections = Array.from(this.section);
        jquery_scrollify__WEBPACK_IMPORTED_MODULE_2___default()(function () {
            jquery_scrollify__WEBPACK_IMPORTED_MODULE_2___default.a.scrollify({
                section: 'section',
            });
        });
        this.scrollDetect();
    };
    GalleryComponent.prototype.scrollDetect = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
            _this.sections.forEach(function (element, index) {
                if (element.offsetTop === jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop()) {
                    _this.sliderIsActive(index);
                    jquery__WEBPACK_IMPORTED_MODULE_1__('.gallery__menu__radio')[index].checked = true;
                }
            });
        });
    };
    GalleryComponent.prototype.sliderIsActive = function (indexLoop1) {
        var _this = this;
        this.sections.forEach(function (elementLoop2, indexLoop2) {
            _this.posts[indexLoop2].isActive = false;
        });
        this.posts[indexLoop1].isActive = true;
    };
    GalleryComponent.prototype.goToSection = function (i) {
        var scrolling = jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() * i;
        if (jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop() === scrolling) {
            return;
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: scrolling
        }, 500);
    };
    GalleryComponent.prototype.previewPhoto = function (sliderTask) {
        this.isOpenPreview = sliderTask;
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/gallery/slider/slider.component.html":
/*!******************************************************!*\
  !*** ./src/app/gallery/slider/slider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1 class=\"wrapper__title\">{{title}}</h1>\n  <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\" (previewOpen)=\"previewOpen()\" (previewClose)=\"previewClose()\"></ngx-gallery>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/slider/slider.component.scss":
/*!******************************************************!*\
  !*** ./src/app/gallery/slider/slider.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  padding-top: 100px; }\n  .wrapper__title {\n    height: 40px;\n    font-size: 2rem;\n    color: #cecece;\n    max-width: calc(100vw - 87px);\n    overflow: hidden;\n    margin: 0 auto; }\n  :host ::ng-deep ngx-gallery-action .ngx-gallery-close {\n  z-index: 9999 !important;\n  position: fixed;\n  top: 100px;\n  right: 20px; }\n  :host ::ng-deep .ngx-gallery-disabled {\n  transition: 1s !important;\n  opacity: 0 !important; }\n  :host ::ng-deep .ngx-gallery-preview-img {\n  max-height: unset !important;\n  margin-top: 100px !important;\n  height: calc(100vh - 100px) !important;\n  width: 100% !important;\n  -o-object-fit: contain;\n     object-fit: contain; }\n  :host ::ng-deep .ngx-gallery-arrow {\n  top: calc(50% + 50px) !important; }\n  :host ::ng-deep .ngx-gallery-preview-text,\n:host ::ng-deep .ngx-gallery-image-text {\n  font-size: 1.6rem !important; }\n  @media (max-width: 576px) {\n  :host ::ng-deep .ngx-gallery-thumbnails {\n    height: 50% !important; }\n  :host ::ng-deep ngx-gallery-image {\n    height: 50% !important; }\n  :host ::ng-deep .ngx-gallery-preview-img {\n    max-height: unset !important;\n    margin-top: 50% !important;\n    height: unset !important; }\n  :host ::ng-deep .ngx-gallery-arrow {\n    top: 50% !important; } }\n  @media (max-width: 768px) and (orientation: landscape) {\n  .wrapper {\n    margin-top: 56px;\n    padding-top: 0;\n    margin-left: auto;\n    margin-right: auto; }\n  :host ::ng-deep ngx-gallery-image {\n    height: 80% !important;\n    width: 80% !important;\n    -ms-grid-row-align: center;\n        align-self: center; }\n  :host ::ng-deep .ngx-gallery-thumbnails {\n    display: none !important; }\n  :host ::ng-deep .ngx-gallery-arrow {\n    display: none !important; } }\n"

/***/ }),

/***/ "./src/app/gallery/slider/slider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/gallery/slider/slider.component.ts ***!
  \****************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.isOpenPreview = false;
        this.previewTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.title = this.post.title;
        this.options(this.post.type);
        this.images(this.post.type);
    };
    SliderComponent.prototype.options = function (type) {
        this.galleryOptions = [
            {
                width: '900px',
                height: '600px',
                thumbnails: type ? true : false,
                imageArrows: type ? true : false,
                imageArrowsAutoHide: type ? true : false,
                previewInfinityMove: type ? true : false,
                imageAutoPlay: this.post.isAutoPlay ? true : false,
                thumbnailsArrowsAutoHide: true,
                imageAutoPlayPauseOnHover: true,
                previewAutoPlay: false,
                previewAutoPlayPauseOnHover: true,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                thumbnailsMoveSize: 4,
                imageDescription: true,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Slide,
            },
            {
                breakpoint: 1599,
                width: '600px',
                height: '400px',
            },
            {
                breakpoint: 768,
                width: 'calc(100vw - 87px)',
                height: 'calc(100vh - 140px)',
                imageAutoPlay: false,
                imageSwipe: true,
                imageArrowsAutoHide: false,
                thumbnailsArrowsAutoHide: false,
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                thumbnailsColumns: 4
            },
            {
                breakpoint: 576,
                imageArrows: false,
                thumbnailsSwipe: true,
                thumbnailsArrows: false,
                thumbnailsRemainingCount: true,
            }
        ];
    };
    SliderComponent.prototype.images = function (type) {
        var _this = this;
        this.galleryImages = [];
        if (type === 0) {
            this.galleryImages.push({
                small: this.post.sliders[0].photoSmall,
                medium: this.post.sliders[0].photo,
                big: this.post.sliders[0].photo,
                description: this.post.sliders[0].desctription,
            });
        }
        else if (type === 1) {
            this.post.sliders.forEach(function (element) {
                _this.galleryImages.push({
                    small: element.photoSmall,
                    medium: element.photo,
                    big: element.photo,
                    description: _this.post.sliders[0].desctription,
                });
            });
        }
        else if (type === 2) {
            this.post.sliders.forEach(function (element) {
                _this.galleryImages.push({
                    small: element.photoSmall,
                    medium: element.photo,
                    big: element.photo,
                    description: element.desctription,
                });
            });
        }
    };
    SliderComponent.prototype.previewOpen = function () {
        this.isOpenPreview = true;
        this.previewTask.emit(this.isOpenPreview);
    };
    SliderComponent.prototype.previewClose = function () {
        this.isOpenPreview = false;
        this.previewTask.emit(this.isOpenPreview);
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        this.galleryOptions = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "post", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "previewTask", void 0);
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/gallery/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/gallery/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var posts = __webpack_require__(/*! ../assets/options/posts.json */ "./src/assets/options/posts.json");
var descriptions = __webpack_require__(/*! ../assets/options/description.json */ "./src/assets/options/description.json");
var MainService = /** @class */ (function () {
    function MainService(router) {
        var _this = this;
        this.posts = posts;
        this.pathOfPhoto = 'assets/slides/';
        this.description = descriptions;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addPathToPhoto(this.pathOfPhoto);
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.wasGlowna = _this.checkPath('glowna');
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.isGlowna = _this.checkPath('glowna');
            }
        });
    }
    MainService.prototype.checkPath = function (path) {
        var piecesPath = window.location.href.split('/');
        var lastSegment = piecesPath[piecesPath.length - 1];
        if (lastSegment === path) {
            return true;
        }
        else {
            return false;
        }
    };
    MainService.prototype.sendVariable = function (variable) {
        this.subject.next(variable);
    };
    MainService.prototype.getVariable = function () {
        return this.subject.asObservable();
    };
    MainService.prototype.addPathToPhoto = function (path) {
        this.posts.forEach(function (slider) {
            slider.sliders.forEach(function (slide) {
                slide.photo = path + slide.photo;
                slide.photoSmall = path + slide.photoSmall;
            });
        });
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"main__content\">\n\n  <div class=\"main__container container\">\n    <div class=\"main__logo\">\n        <img class=\"main__logo__main\" src=\"assets/auto-serwis-only.png\" alt=\"logo\">\n        <img class=\"main__logo__signature\" src=\"assets/ks.png\" alt=\"logo\">\n    </div>\n    <button class=\"main__btn-text\" routerLink=\"/oferta\">\n      {{slogan}}\n    </button>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__container {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.main__content {\n  background: url('auto.jpg');\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  color: #cecece;\n  height: 100vh;\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0; }\n\n@media (max-width: 768px) {\n    .main__content {\n      height: calc(100vh - 56px); } }\n\n.main__container {\n  height: 100%;\n  flex-wrap: nowrap;\n  flex-direction: column;\n  position: relative; }\n\n.main__logo {\n  position: absolute;\n  top: 18%;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40vw;\n  min-width: 280px; }\n\n.main__logo__main {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.5s;\n            animation-delay: 1.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.main__logo__signature {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 2.5s;\n            animation-delay: 2.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.main__btn-text {\n  position: absolute;\n  bottom: 18%;\n  text-align: center;\n  font-size: 2rem;\n  padding: 2rem 3rem;\n  cursor: pointer;\n  background: none;\n  border: 0;\n  box-sizing: border-box;\n  box-shadow: inset 0 0 0 1px #cecece;\n  color: #cecece;\n  font-weight: 700;\n  vertical-align: middle;\n  transition: color 0.25s;\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0; }\n\n.main__btn-text::before, .main__btn-text::after {\n    box-sizing: inherit;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n.main__btn-text::before, .main__btn-text::after {\n    border: 1px solid transparent;\n    width: 0;\n    height: 0; }\n\n.main__btn-text::before {\n    top: 0;\n    left: 0; }\n\n.main__btn-text::after {\n    bottom: 0;\n    right: 0; }\n\n.main__btn-text:hover {\n    color: red; }\n\n.main__btn-text:hover::before, .main__btn-text:hover::after {\n    width: 100%;\n    height: 100%; }\n\n.main__btn-text:hover::before {\n    border-top-color: red;\n    border-right-color: red;\n    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s; }\n\n.main__btn-text:hover::after {\n    border-bottom-color: red;\n    border-left-color: red;\n    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s; }\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(mainService) {
        this.mainService = mainService;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        this.slogan = this.mainService.description.mainPage;
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.scss */ "./src/app/mainpage/mainpage.component.scss")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"menu\">\n  <nav class=\"menu__menu-container menu-container\">\n    <div [ngClass]=\"{ 'logo-hide': mainService.isGlowna }\" class=\"menu__logo\">\n      <a routerLink=\"/main\">\n        <picture>\n          <source class=\"menu__logo__image\" media=\"(min-width: 576px)\" srcset=\"assets/0.png\">\n          <img class=\"menu__logo__image\" src=\"assets/nakretka.png\" alt=\"logo\">\n        </picture>\n      </a>\n    </div>\n    <ul class=\"menu__list list\">\n      <li class=\"list__element\">\n        <a class=\"list__link\"  routerLink=\"/oferta\">Oferta</a>\n      </li>\n      <li class=\"list__element\">\n        <a class=\"list__link\" routerLink=\"/galeria\">Galeria</a>\n      </li>\n      <li class=\"list__element\">\n        <a class=\"list__link\" routerLink=\"/kontakt\">Kontakt</a>\n      </li>\n    </ul>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu .list__element {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.preloader {\n  -webkit-animation: preloader .6s;\n          animation: preloader .6s; }\n\n.menu {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  height: 100px; }\n\n.menu .logo-hide {\n    -webkit-transform: translateY(-80%);\n            transform: translateY(-80%);\n    opacity: 0; }\n\n.menu__logo {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    display: block;\n    transition: 1.5s; }\n\n.menu__logo__image {\n      height: 100%;\n      width: auto; }\n\n.menu__menu-container {\n    height: 100%;\n    display: flex;\n    justify-content: space-between; }\n\n.menu .list {\n    display: flex; }\n\n.menu .list li:nth-child(1) {\n      -webkit-animation: fade-in-right 2s;\n              animation: fade-in-right 2s;\n      -webkit-animation-delay: 0.2s;\n              animation-delay: 0.2s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      opacity: 0; }\n\n.menu .list li:nth-child(2) {\n      -webkit-animation: fade-in-right 2s;\n              animation: fade-in-right 2s;\n      -webkit-animation-delay: 0.4s;\n              animation-delay: 0.4s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      opacity: 0; }\n\n.menu .list li:nth-child(3) {\n      -webkit-animation: fade-in-right 2s;\n              animation: fade-in-right 2s;\n      -webkit-animation-delay: 0.6s;\n              animation-delay: 0.6s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      opacity: 0; }\n\n.menu .list__element {\n      padding-left: 3rem;\n      font-size: 1.5rem; }\n\n.menu .list__link {\n      text-decoration: none;\n      color: #cecece;\n      transition: all .25s ease-out; }\n\n@media (min-width: 768px) {\n        .menu .list__link:hover {\n          color: red; } }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(mainService) {
        var _this = this;
        this.mainService = mainService;
        this.subscription = this.mainService.getVariable().subscribe(function (message) {
            _this.message = message;
            _this.removeOfferAppearClass(_this.message);
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.removeOfferAppearClass = function (handler) {
        if (this.mainService.wasGlowna) {
            handler.nativeElement.classList.remove('offer__appear');
        }
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/offer/offer.component.html":
/*!********************************************!*\
  !*** ./src/app/offer/offer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article #offerAppear class=\"offer__content offer__appear\">\n  <div class=\"offer__container container\">\n    <h1 class=\"offer__title\">{{title}}</h1>\n    <ul class=\"offer__list\">\n      <li class=\"offer__list__element\" *ngFor=\"let offer of offers\">\n        <h2 class=\"offer__list__assortment\" (click)=\"expand($event)\">{{offer.assortment}}</h2>\n        <p class=\"offer__list__description\">{{offer.description}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"offer__cover-bottom\"></div>\n</article>\n\n\n"

/***/ }),

/***/ "./src/app/offer/offer.component.scss":
/*!********************************************!*\
  !*** ./src/app/offer/offer.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".offer__container {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n:host.preloader {\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0; }\n\n.offer__appear {\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0; }\n\n.offer__content {\n  padding-top: 100px;\n  background: url('auto.jpg');\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  color: #cecece;\n  height: calc(100vh - 100px);\n  transition: all 1s;\n  overflow: hidden; }\n\n@media (max-width: 768px) {\n    .offer__content {\n      height: calc(100vh - 156px); } }\n\n.offer__content:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.6);\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__cover-bottom {\n  height: 10vh;\n  width: 100vw;\n  z-index: 20;\n  position: fixed;\n  bottom: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 80%, black 100%); }\n\n.offer__container {\n  flex-wrap: nowrap;\n  flex-direction: column;\n  position: relative; }\n\n.offer__title {\n  position: relative;\n  z-index: 15;\n  line-height: 1.5;\n  font-size: 4rem;\n  margin-bottom: 4rem;\n  margin-top: 8rem;\n  text-align: center;\n  -webkit-animation: appear 2s;\n          animation: appear 2s;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0; }\n\n@media (max-width: 768px) {\n    .offer__title {\n      font-size: 2.6rem;\n      margin-bottom: 2rem; } }\n\n.offer__list {\n  z-index: 10;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-left: 15.5%;\n  align-items: baseline; }\n\n.offer__list__element {\n    flex: 0 0 50%;\n    position: relative;\n    top: 0;\n    left: 0;\n    text-align: left;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    transition: left 1s; }\n\n.offer__list__assortment {\n    display: inline-block;\n    position: relative;\n    top: 0;\n    font-size: 2.4rem;\n    cursor: pointer;\n    transition: color .25s ease-out; }\n\n.offer__list__assortment::after {\n      display: block;\n      content: \"\";\n      position: absolute;\n      border-bottom: 1px solid #656565;\n      width: 60%;\n      left: 10px;\n      bottom: -1.5rem; }\n\n@media (min-width: 768px) {\n      .offer__list__assortment:hover {\n        color: red; } }\n\n.offer__list__description {\n    transition: opacity 1s;\n    opacity: 0;\n    z-index: 0;\n    position: absolute; }\n\n.offer__list li:nth-child(1) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.1s;\n            animation-delay: 1.1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:nth-child(2) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.2s;\n            animation-delay: 1.2s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:nth-child(3) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.3s;\n            animation-delay: 1.3s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:nth-child(4) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.4s;\n            animation-delay: 1.4s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:nth-child(5) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.5s;\n            animation-delay: 1.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:nth-child(6) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.6s;\n            animation-delay: 1.6s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:nth-child(7) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.7s;\n            animation-delay: 1.7s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:nth-child(8) {\n    -webkit-animation: appear 2s;\n            animation: appear 2s;\n    -webkit-animation-delay: 1.8s;\n            animation-delay: 1.8s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0; }\n\n.offer__list li:last-child {\n    margin-bottom: 20vh; }\n\n@media (max-width: 768px) {\n  .offer__title {\n    margin-top: 0; }\n  .offer__list {\n    justify-content: center;\n    margin-left: 25%;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: calc(100vh - 200px); }\n    .offer__list__element {\n      flex: 0 0 50%; }\n    .offer__list__assortment {\n      display: inline-block;\n      font-size: 2.4rem; } }\n\n@media (max-width: 576px) {\n  .offer__list__element {\n    flex: 0 0 100%; } }\n\n.hidden .offer__list__element {\n  left: 200%;\n  transition: all 1s; }\n\n@media (max-width: 576px) {\n    .hidden .offer__list__element {\n      min-height: 3.1rem; } }\n\n.offer__list__element .active,\n.offer__list__element .active + p {\n  text-align: center;\n  margin-left: 0;\n  position: fixed;\n  left: 50%;\n  top: 44.5%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  opacity: 1;\n  transition: opacity 1s;\n  transition-delay: 1s;\n  z-index: 20;\n  opacity: 1;\n  -webkit-animation: flash 2s;\n          animation: flash 2s; }\n\n@media (max-width: 768px) {\n    .offer__list__element .active,\n    .offer__list__element .active + p {\n      width: 90vw;\n      max-width: 600px; } }\n\n.offer__list__element .active::after,\n  .offer__list__element .active + p::after {\n    border-bottom: 0px solid transparent; }\n\n.offer__list__element .active + p {\n  width: 90vw;\n  max-width: 600px;\n  top: 51%;\n  padding-top: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.8rem;\n  font-style: italic;\n  opacity: 1;\n  z-index: 20;\n  line-height: 1.5; }\n"

/***/ }),

/***/ "./src/app/offer/offer.component.ts":
/*!******************************************!*\
  !*** ./src/app/offer/offer.component.ts ***!
  \******************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfferComponent = /** @class */ (function () {
    function OfferComponent(mainService) {
        this.mainService = mainService;
        this.offerHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OfferComponent.prototype.ngOnInit = function () {
        this.offerHandler.emit(this.offerAppear);
        this.sendMessage();
        this.title = this.mainService.description.offer.title;
        this.offers = this.mainService.description.offer.offers;
        this.interactiveOffers = this.mainService.description.offer.interactiveOffers;
    };
    OfferComponent.prototype.sendMessage = function () {
        this.mainService.sendVariable(this.offerAppear);
    };
    OfferComponent.prototype.expand = function (event) {
        if (this.interactiveOffers) {
            event.target.parentElement.parentElement.classList.toggle('hidden');
            event.target.classList.toggle('active');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OfferComponent.prototype, "offerHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('offerAppear'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OfferComponent.prototype, "offerAppear", void 0);
    OfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer',
            template: __webpack_require__(/*! ./offer.component.html */ "./src/app/offer/offer.component.html"),
            styles: [__webpack_require__(/*! ./offer.component.scss */ "./src/app/offer/offer.component.scss")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], OfferComponent);
    return OfferComponent;
}());



/***/ }),

/***/ "./src/assets/options/description.json":
/*!*********************************************!*\
  !*** ./src/assets/options/description.json ***!
  \*********************************************/
/*! exports provided: mainPage, offer, contact, default */
/***/ (function(module) {

module.exports = {"mainPage":"Przyjedź i napraw","offer":{"title":"Zachęcamy do zapoznania się z pełną ofertą:","interactiveOffers":true,"offers":[{"assortment":"Wymiana silnika","description":"Lorem ipsum, dolo sit elen. Sed ut perspiciatis unde omnis. Lorem ipsum, dolo sit elen. Sed ut perspiciatis unde omnis."},{"assortment":"Wymiana rozrządu","description":"At vero eos et accusamus et iusto odio dignissimos ducimus."},{"assortment":"Wymiana oleju","description":"Quaerat voluptatem. Ut enim ad minima veniam, quis nostrum."},{"assortment":"Wymiana łożysk piasty","description":"Exercitationem ullam corporis et accusamus et iusto. Benum eo."},{"assortment":"Wymiana akumulatorów","description":"Duis aute irure dolor in reprehenderit in voluptate velit esse."},{"assortment":"Diagnostyka komputerowa","description":"cillum dolore manfe on opla poplin sef perspiciatis unde omnis."},{"assortment":"Wymiana opon","description":"Corporis et accusamus et iusto. At vero eos et accusamus Yuol visuo den."},{"assortment":"i wiele innych...","description":"Przyjedź i zobacz ;)"}]},"contact":{"location":"Wojszki 107","telephone":"123 456 789","mail":"krzysztofsiemieniuk@gmail.com","facebook":"znajdź mnie na facebooku"}};

/***/ }),

/***/ "./src/assets/options/posts.json":
/*!***************************************!*\
  !*** ./src/assets/options/posts.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = [{"isActive":true,"isAutoPlay":false,"type":0,"title":"Slider typ 0, jeden obraz i jeden post.","sliders":[{"photo":"0.jpg","photoSmall":"0.jpg","desctription":"Quisque pharetra velit venenatis iaculis faucibus. Morbi pretium, nisi ac tempus iaculis, dui lorem feugiat odio, sed luctus lacus velit vitae odio. Nunc egestas libero at facilisis pellentesque. Mauris placerat scelerisque maximus. Pellentesque sollicitudin bibendum velit, tempor vestibulum magna faucibus id. Curabitur egestas tincidunt turpis, ac dictum tellus posuere vitae."}]},{"isActive":false,"isAutoPlay":false,"type":0,"title":"Slider typ 0","sliders":[{"photo":"8.jpg","photoSmall":"8.jpg","desctription":"Pellentesque sollicitudin bibendum velit, tempor vestibulum magna faucibus id. Curabitur egestas tincidunt turpis, ac dictum tellus posuere vitae."}]},{"isActive":false,"isAutoPlay":true,"type":1,"title":"Slider typ 1, slider obrazow i jeden post. Plus auto-play.","sliders":[{"photo":"1.jpg","photoSmall":"1.jpg","desctription":"Phasellus quam dui, gravida ut ex sed, lobortis viverra sem. Phasellus tristique a nulla sed viverra. Mauris semper dui at metus imperdiet, quis condimentum massa auctor. Aenean ac eleifend ante, non blandit diam. Suspendisse ornare iaculis ultricies. Sed condimentum dolor et urna semper consectetur. Nulla rhoncus est velit. Morbi elit ipsum, consectetur sed venenatis at, posuere a purus. Cras sed consectetur massa. Sed aliquam mi fermentum, finibus diam eget, ullamcorper massa. Nunc non leo vel felis dignissim aliquet id non orci. Ut lacinia quis risus quis pharetra. Suspendisse urna elit, auctor et egestas eu, scelerisque volutpat risus. Aliquam quis arcu elit. Nulla vel felis neque. Nunc laoreet a est eu placerat."},{"photo":"2.jpg","photoSmall":"2.jpg","desctription":""},{"photo":"3.jpg","photoSmall":"3.jpg","desctription":""}]},{"isActive":false,"isAutoPlay":false,"type":2,"title":"Slider typ 2, slider obrazow i slider postow. Bez auto-play","sliders":[{"photo":"5.jpg","photoSmall":"5.jpg","desctription":"Donec auctor justo tellus. Vestibulum pulvinar egestas felis, quis maximus leo iaculis at. "},{"photo":"6.jpg","photoSmall":"6.jpg","desctription":"Suspendisse posuere lacus nec lectus feugiat, ac vestibulum ipsum viverra. Ut quis turpis euismod, commodo lorem nec, sodales sem. "},{"photo":"7.jpg","photoSmall":"7.jpg","desctription":"Nulla tempus fringilla ex, et finibus tortor bibendum a. Donec tempor iaculis suscipit. Donec viverra dapibus tempor."},{"photo":"8.jpg","photoSmall":"8.jpg","desctription":"Fusce massa est, tempus eu enim vitae, "},{"photo":"9.jpg","photoSmall":"9.jpg","desctription":"Vivamus maximus elit id enim "},{"photo":"4.jpg","photoSmall":"4.jpg","desctription":""}]}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dokumenty\Informatyka\GitAutoSerwis\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map