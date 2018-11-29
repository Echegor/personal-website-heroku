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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { title: 'Home' } },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"], data: { title: 'Shop' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], data: { title: 'Contact' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar  class=\"mat-elevation-z6\"></app-navbar>\r\n<!--<app-page-title></app-page-title>-->\r\n<router-outlet id=\"top\"></router-outlet>\r\n<app-scrolltop class=\"mat-elevation-z5\" [ngx-scroll-to]=\"'top'\"></app-scrolltop>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\nmat-spinner {\n  position: fixed;\n  z-index: 99;\n  top: 50%;\n  left: 40%; }\n\napp-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  width: 100%; }\n\n.noSelect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */ }\n\napp-root > app-home,\napp-root > app-shop,\napp-root > app-contact {\n  overflow-y: auto; }\n\n@media (max-width: 720px) {\n  app-root > app-home,\n  app-root > app-shop,\n  app-root > app-contact {\n    overflow-y: visible; } }\n"

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
        this.title = 'Wine Reviews';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MainAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAppModule", function() { return MainAppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _wine_card_wine_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wine-card/wine-card.component */ "./src/app/wine-card/wine-card.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _wine_wine_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wine/wine.service */ "./src/app/wine/wine.service.ts");
/* harmony import */ var _webSearch_contextual_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./webSearch/contextual.service */ "./src/app/webSearch/contextual.service.ts");
/* harmony import */ var _directive_image_preload_directive_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directive/image-preload-directive.directive */ "./src/app/directive/image-preload-directive.directive.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page-title/page-title.component */ "./src/app/page-title/page-title.component.ts");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./avatar/avatar.component */ "./src/app/avatar/avatar.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var angular_typing_animation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-typing-animation */ "./node_modules/angular-typing-animation/index.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _scrolltop_scroll_top_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./scrolltop/scroll-top.component */ "./src/app/scrolltop/scroll-top.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var MainAppModule = /** @class */ (function () {
    /*TODO: Renamed this to avoid TSLint issue caused by including node_modules in project*/
    function MainAppModule() {
    }
    MainAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _wine_card_wine_card_component__WEBPACK_IMPORTED_MODULE_8__["WineCardComponent"],
                _directive_image_preload_directive_directive__WEBPACK_IMPORTED_MODULE_14__["ImagePreloadDirectiveDirective"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_15__["ShopComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_18__["PageTitleComponent"],
                _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__["AvatarComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_22__["EducationComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_23__["SkillsComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_24__["ExperienceComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_25__["PortfolioComponent"],
                _scrolltop_scroll_top_component__WEBPACK_IMPORTED_MODULE_26__["ScrollTopComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_20__["ScrollToModule"].forRoot(),
                angular_typing_animation__WEBPACK_IMPORTED_MODULE_21__["TypingAnimationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_28__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_29__["NguCarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"]
            ],
            providers: [_wine_wine_service__WEBPACK_IMPORTED_MODULE_12__["WineService"], _webSearch_contextual_service__WEBPACK_IMPORTED_MODULE_13__["ContextualService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
        /*TODO: Renamed this to avoid TSLint issue caused by including node_modules in project*/
    ], MainAppModule);
    return MainAppModule;
}());



/***/ }),

/***/ "./src/app/avatar/avatar.component.css":
/*!*********************************************!*\
  !*** ./src/app/avatar/avatar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  border-radius: 50%;\r\n  border: 5px solid gray;\r\n  box-shadow: 6px 0 15px -4px rgba(0, 0, 0, 0.8), -6px 0 8px -4px rgba(0, 0, 0, 0.8);\r\n  -moz-box-shadow: 6px 0 15px -4px rgba(0, 0, 0, 0.8), -6px 0 8px -4px rgba(0, 0, 0, 0.8);\r\n  -webkit-box-shadow: 6px 0 15px -4px rgba(0, 0, 0, 0.87), -6px 0 8px -4px rgba(0, 0, 0, 0.7);\r\n  -o-box-shadow: 6px 0 15px -4px rgba(0, 0, 0, 0.8), -6px 0 8px -4px rgba(0, 0, 0, 0.8);\r\n}\r\n"

/***/ }),

/***/ "./src/app/avatar/avatar.component.html":
/*!**********************************************!*\
  !*** ./src/app/avatar/avatar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/images/profile.jpg\" alt=\"Avatar\">\n"

/***/ }),

/***/ "./src/app/avatar/avatar.component.ts":
/*!********************************************!*\
  !*** ./src/app/avatar/avatar.component.ts ***!
  \********************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.css */ "./src/app/avatar/avatar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-background mat-elevation-z6\">\r\n  <div class=\"contact-header\">\r\n    <mat-card>\r\n      <h1 class=\"mat-h1\">\r\n        <mat-icon>contact_mail</mat-icon>\r\n        Contact\r\n      </h1>\r\n    </mat-card>\r\n  </div>\r\n  <mat-card class=\"stepper\">\r\n    <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\r\n      <mat-step [stepControl]=\"nameFormGroup\">\r\n        <form [formGroup]=\"nameFormGroup\">\r\n          <ng-template matStepLabel>Fill out your name</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Last name, First name\" formControlName=\"nameControl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"emailFormGroup\">\r\n        <form [formGroup]=\"emailFormGroup\">\r\n          <ng-template matStepLabel>Fill out your email address</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Email Address\" formControlName=\"emailControl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"subjectFormGroup\">\r\n        <form [formGroup]=\"subjectFormGroup\">\r\n          <ng-template matStepLabel>Enter your subject</ng-template>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Subject\" formControlName=\"subjectControl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"contentFormGroup\">\r\n        <form [formGroup]=\"contentFormGroup\">\r\n          <ng-template matStepLabel>Type email content</ng-template>\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Email content\" formControlName=\"contentControl\" required></textarea>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Send email</ng-template>\r\n        You are now done.\r\n        <div>\r\n          <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\r\n          <button mat-raised-button color=\"primary\" (click)=\"stepper.reset()\">Send</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </mat-card>\r\n</div>\r\n\r\n<!--TODO snackbar on send email. Preview of email on send-->\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-background {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%; }\n\n.stepper {\n  justify-content: center;\n  align-items: center; }\n\n.mat-form-field {\n  width: 75%; }\n\n.contact-header {\n  text-align: center;\n  margin: 8px;\n  justify-content: center;\n  display: flex; }\n\n.contact-header h1 {\n    font-size: 56px;\n    font-weight: 600;\n    line-height: 56px;\n    margin: 15px 5px; }\n\n.contact-header h2 {\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 28px;\n    margin: 15px 0 25px 0; }\n\n.contact-header mat-icon {\n    font-size: inherit;\n    padding-right: 1em; }\n\n.contact-header mat-card {\n    width: 85%;\n    padding: 0; }\n\n/**\r\n  * Rules for when the device is detected to be a small screen.\r\n  */\n\n@media (max-width: 720px) {\n  .contact-header mat-icon {\n    font-size: 32px;\n    padding-right: 10px; }\n  .contact-header h1 {\n    font-size: 32px; } }\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function ContactComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.nameFormGroup = this._formBuilder.group({
            nameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.emailFormGroup = this._formBuilder.group({
            emailControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
        });
        this.subjectFormGroup = this._formBuilder.group({
            subjectControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.contentFormGroup = this._formBuilder.group({
            contentControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ContactComponent.prototype.sendEmail = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data/winePage.ts":
/*!**********************************!*\
  !*** ./src/app/data/winePage.ts ***!
  \**********************************/
/*! exports provided: WinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinePage", function() { return WinePage; });
var WinePage = /** @class */ (function () {
    function WinePage() {
    }
    return WinePage;
}());



/***/ }),

/***/ "./src/app/directive/image-preload-directive.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/directive/image-preload-directive.directive.ts ***!
  \****************************************************************/
/*! exports provided: ImagePreloadDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreloadDirectiveDirective", function() { return ImagePreloadDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePreloadDirectiveDirective = /** @class */ (function () {
    function ImagePreloadDirectiveDirective() {
    }
    ImagePreloadDirectiveDirective.prototype.updateUrl = function () {
        this.src = this.default;
    };
    ImagePreloadDirectiveDirective.prototype.load = function () {
        this.className = 'image-loaded';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagePreloadDirectiveDirective.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagePreloadDirectiveDirective.prototype, "default", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ImagePreloadDirectiveDirective.prototype, "className", void 0);
    ImagePreloadDirectiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'img[default]',
            host: {
                '(error)': 'updateUrl()',
                '(load)': 'load()',
                '[src]': 'src'
            }
        })
    ], ImagePreloadDirectiveDirective);
    return ImagePreloadDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"education-background mat-elevation-z6\">\n  <div class=\"education-header\">\n    <mat-card>\n      <h1 class=\"mat-h1\">\n        <mat-icon>school</mat-icon>\n        Experience\n      </h1>\n    </mat-card>\n  </div>\n  <div class=\"timeline\">\n    <div class=\"timeline-section\" *ngFor=\"let card of cards\">\n      <div class=\"circle\">\n        <h6 class=\"mat-h6\">{{card.title.charAt(0)}}</h6>\n      </div>\n      <div class=\"timeline-content\">\n        <mat-card>\n          <mat-card-title>{{card.title}}</mat-card-title>\n          <mat-card-subtitle>{{card.subtitle}}</mat-card-subtitle>\n          <mat-card-content>{{card.content}}</mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n    <div class=\"circle endCircle\">\n      <mat-icon>done</mat-icon>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".education-background {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\nmat-card-title.mat-card-title {\n  margin-bottom: 4px; }\n\n.education-header {\n  text-align: center;\n  margin: 8px;\n  justify-content: center;\n  display: flex; }\n\n.education-header h1 {\n    font-size: 56px;\n    font-weight: 600;\n    line-height: 56px;\n    margin: 15px 5px; }\n\n.education-header h2 {\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 28px;\n    margin: 15px 0 25px 0; }\n\n.education-header mat-icon {\n    font-size: inherit;\n    padding-right: 1em; }\n\n.education-header mat-card {\n    width: 85%;\n    padding: 0; }\n\n.timeline::before {\n  content: '';\n  position: absolute;\n  top: 12px;\n  bottom: 23px;\n  left: 50%;\n  width: 4px;\n  opacity: 0.3;\n  height: 95%; }\n\n.timeline {\n  position: relative;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.timeline-section {\n  position: relative; }\n\n.timeline-section::after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n.timeline-section:first-child {\n  margin-top: 0; }\n\n.timeline-section:last-child {\n  margin-bottom: 0; }\n\n.timeline-section mat-card {\n  padding: 20px; }\n\n.timeline-section mat-card p {\n  margin-top: 13px;\n  text-align: left; }\n\n.timeline-section mat-card .modal-dot {\n  outline: 0;\n  font-size: 20px; }\n\n.timeline-section mat-card .modal-dot:hover, .timeline-section mat-card .modal-dot:focus {\n  margin: 0; }\n\n.timeline-section .circle h6 {\n  padding: 0;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);\n  text-align: center;\n  font-size: 30px;\n  margin-top: 26%; }\n\n.timeline-section .timeline-content::after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n.timeline-section:nth-child(even) .timeline-content {\n  float: right; }\n\n.timeline-section:nth-child(even) .timeline-content::before {\n  top: 25px;\n  left: auto;\n  right: 101%;\n  z-index: -2; }\n\n.timeline-section .timeline-content::before {\n  content: '';\n  width: 25%;\n  height: 4px;\n  position: absolute;\n  top: 26px;\n  left: 100%;\n  z-index: -2;\n  opacity: 0.4; }\n\n.circle {\n  width: 50px;\n  height: 50px;\n  left: 50%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 2;\n  margin-left: -24px;\n  -webkit-transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  border-radius: 100%;\n  text-align: center;\n  position: absolute;\n  top: 5px; }\n\n.endCircle {\n  bottom: 0;\n  top: auto; }\n\n.endCircle mat-icon {\n    font-weight: bold;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);\n    text-align: center;\n    font-size: 40px;\n    margin-right: 30%;\n    margin-top: 5%; }\n\n.timeline-section .timeline-content {\n  position: relative;\n  margin-right: 0;\n  z-index: 1;\n  margin-bottom: 5px;\n  width: 40%; }\n\n.timeline-section .timeline-content .timeline-title {\n  max-width: 100%;\n  font-weight: normal; }\n\n/**\r\n  * Rules for when the device is detected to be a small screen.\r\n  */\n\n@media (max-width: 720px) {\n  .timeline-section .timeline-content::before {\n    display: none; }\n  .circle {\n    left: auto;\n    right: 2%; }\n  .timeline-section .timeline-content {\n    width: 100%; }\n  .timeline-section:nth-child(even) .timeline-content {\n    float: none; }\n  .education-header mat-icon {\n    font-size: 32px;\n    padding-right: 10px; }\n  .education-header h1 {\n    font-size: 32px; }\n  .endCircle {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.cards = [
            {
                title: 'High School',
                subtitle: 'Science Park. May, 2011',
                content: 'The place where I fell in love with computer science. Before taking AP CS in high school, I ' +
                    'had no idea what I wanted to do with my life.'
            },
            // {
            //   title: 'Community College',
            //   subtitle: 'Essex County College<br>May, 2014',
            //   content: 'Accepted into the rigorous honors program. I took most of my general Ed. classes here. ' +
            //     'Graduated with a 3.9 GPA.'
            // },
            {
                title: 'College',
                subtitle: 'Rutgers University. May, 2017',
                content: 'Graduated with a bachelors in Computer Science. Suma Cum Laude. Computer Science I & II, ' +
                    'Computer Architecture, Advanced Data Structures, LinuxKernel Programming, Advanced Programming in Linux,' +
                    ' Operating Systems, Android Development, Database Design, Cryptography and Network Security, Design in ' +
                    'Software Engineering, Programming Language Concepts.'
            },
            {
                title: 'Internship',
                subtitle: 'Wakefern Food Corp. May, 2016',
                content: 'Wrote scripts to parse files. Wrote software to generate reports. Learned proprietary technology.'
            },
            {
                title: 'College Partnership',
                subtitle: 'Wakefern Food Corp. September, 2017',
                content: 'Worked on Cashier\'s register GUI. Worked on the payment flow. Added remote access API which allowed ' +
                    'for remote control integration. Helped create an android application that allows managers to manage ' +
                    'their front end'
            },
            {
                title: 'LITT & Associate Programmer',
                subtitle: 'Wakefern Food Corp. May, 2017',
                content: 'As a leader in technical training, I learned the business side of programming. Gave project showcase ' +
                    'in front of executive staff. Gave multiple project presentations to ShopRite members.'
            },
            {
                title: 'Programmer',
                subtitle: 'Wakefern Food Corp. September, 2018',
                content: 'Currently coordinating and developing the integration of a high speed checkout lane. Worked on software integration ' +
                    'into Wakefern\'s point of sale'
            }
        ];
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  experience works!\n</p>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "//TODO maybe add card on subheading\r\n<header class=\"header-background mat-elevation-z6\">\r\n  <div id=\"home\">\r\n    <div class=\"header-headline\">\r\n      <h3 class=\"mat-h3\">Welcome</h3>\r\n      <app-avatar></app-avatar>\r\n      <h1 class=\"mat-h1\">Luis Echegorri</h1>\r\n    </div>\r\n    <div class=\"star-light\">\r\n      <mat-icon>star</mat-icon>\r\n    </div>\r\n    <span class=\"mat-h2\" typingAnimation [typeSpeed]=\"100\" [hideCursorOnComplete]=\"false\" [startDelay]=\"0\">\r\n    Software Developer - Leader - Swimmer\r\n    </span>\r\n    <p class=\"mat-h3\">Seasoned developer who has worked on many system designs. From native android applications, to\r\n      java enterprise servers, to website development, to database design. I have engineered systems from the ground up\r\n      to production. I have given technology demonstrations. I have built usage documentation. I am a quick learner and\r\n      I am always open to new opportunities.</p>\r\n    <p class=\"social\">\r\n      <a href=\"http://www.github.com/echegor\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\r\n      <a href=\"https://www.linkedin.com/in/luis-echegorri/\" target=\"_blank\"><i class=\"fa fa-linkedin-square\"></i></a>\r\n      <a href=\"\" target=\"_blank\"><i class=\"fa fa-facebook-square\"></i></a>\r\n    </p>\r\n  </div>\r\n</header>\r\n<app-education id=\"experience\" class=\"home-section mat-elevation-z6\"></app-education>\r\n<app-portfolio id=\"portfolio\" class=\"home-section mat-elevation-z6\"></app-portfolio>\r\n<app-skills id=\"skills\" class=\"home-section mat-elevation-z6\"></app-skills>\r\n<app-contact id=\"contact\" class=\"home-section mat-elevation-z6\"></app-contact>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social i {\n  padding: 10px;\n  font-size: 26px; }\n\n.star-light {\n  max-width: 75%;\n  padding: 0;\n  text-align: center;\n  border: none #fff;\n  border-top: .3rem solid;\n  margin: 2.5rem auto auto;\n  color: #ffffff; }\n\n.star-light mat-icon {\n  position: relative;\n  top: -.65em;\n  display: inline-block;\n  padding: 0 .25em;\n  font-weight: 900;\n  font-size: 2em;\n  color: #ffffff;\n  width: inherit; }\n\n.header-background {\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 3px;\n  padding-right: 3px;\n  height: 100vh;\n  min-height: 750px; }\n\np {\n  padding: 10px; }\n\n.header-headline {\n  padding-top: 70px; }\n\n.header-headline h1 {\n    font-size: 56px;\n    font-family: \"poppins-medium\", sans-serif;\n    font-weight: 600;\n    line-height: 56px;\n    margin: 15px 5px; }\n\n.header-headline h2 {\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 28px;\n    margin: 15px 0 25px 0; }\n\n.home-section {\n  padding-top: 20px;\n  display: flex; }\n\n/**\r\n  * Rules for when the device is detected to be a small screen.\r\n  */\n\n@media (max-width: 720px) {\n  .home-section {\n    padding-top: 20px; }\n  .header-background {\n    display: inline-table; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #home class=\"navbar-header\">\r\n  <div class=\"navbar-show-small\">\r\n    <button (click)=\"rotate()\" [@rotatedState]='state' class=\"app-nav-menu-button\" mat-icon-button\r\n            [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\" yPosition=\"below\" [overlapTrigger]=\"false\" (close)=\"rotate()\">\r\n      <button [ngx-scroll-to]=\"'home'\" mat-menu-item>\r\n        <mat-icon>home</mat-icon>\r\n        <span>Home</span>\r\n      </button>\r\n      <button [ngx-scroll-to]=\"'experience'\" mat-menu-item>\r\n        <mat-icon>school</mat-icon>\r\n        <span>Experience</span>\r\n      </button>\r\n      <button [ngx-scroll-to]=\"'portfolio'\" mat-menu-item>\r\n        <mat-icon>person</mat-icon>\r\n        <span>Portfolio</span>\r\n      </button>\r\n      <button [ngx-scroll-to]=\"'skills'\" mat-menu-item>\r\n        <mat-icon>library_books</mat-icon>\r\n        <span>Skills</span>\r\n      </button>\r\n      <button [ngx-scroll-to]=\"'contact'\" mat-menu-item>\r\n        <mat-icon>contact_mail</mat-icon>\r\n        <span>Contact</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n  <div class=\"navbar-show-small\">\r\n    <app-page-title></app-page-title>\r\n  </div>\r\n  <div class=\"navbar-hide-small\">\r\n    <i class=\"material-icons nav-icon\">\r\n      home\r\n    </i>\r\n    <a mat-button [ngx-scroll-to]=\"'home'\" class=\"app-button\">Home</a>\r\n  </div>\r\n  <div class=\"navbar-hide-small\">\r\n    <i class=\"material-icons nav-icon\">\r\n      school\r\n    </i>\r\n    <a mat-button class=\"app-button\" [ngx-scroll-to]=\"'experience'\">Experience</a>\r\n  </div>\r\n  <div class=\"navbar-hide-small\">\r\n    <i class=\"material-icons nav-icon\">\r\n      person\r\n    </i>\r\n    <a mat-button [ngx-scroll-to]=\"'portfolio'\" class=\"navbar-hide-small app-button\">Portfolio</a>\r\n  </div>\r\n  <div class=\"navbar-hide-small\">\r\n    <i class=\"material-icons nav-icon\">\r\n      library_books\r\n    </i>\r\n    <a mat-button [ngx-scroll-to]=\"'skills'\" class=\"app-button\">Skills</a>\r\n  </div>\r\n  <div class=\"navbar-hide-small\">\r\n    <i class=\"material-icons nav-icon\">\r\n      contact_mail\r\n    </i>\r\n    <a mat-button [ngx-scroll-to]=\"'contact'\" class=\"navbar-hide-small app-button\">Contact</a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 0;\n  justify-content: center; }\n\n.app-nav-menu-button {\n  text-align: left; }\n\n/*\r\nMake nav icon bigger\r\n*/\n\nmat-icon {\n  font-size: 36px; }\n\n.flex-spacer {\n  flex-grow: 1; }\n\n.nav-icon {\n  height: 26px;\n  margin: 0 0 3px 0;\n  vertical-align: middle; }\n\n.navbar-link {\n  text-decoration: inherit;\n  flex: 1; }\n\n.navbar-show-small {\n  display: none; }\n\n/**\r\n  * Rules for when the device is detected to be a small screen.\r\n  * Moves content two rows instead of one.\r\n  */\n\n@media (max-width: 720px) {\n  .navbar-hide-small {\n    display: none; }\n  .navbar-show-small {\n    display: flex;\n    margin: 0; }\n  .navbar-header {\n    justify-content: left;\n    padding-left: 8px; } }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.state = 'default';
    }
    NavBarComponent.prototype.rotate = function () {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    };
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")],
            animations: [
                // Each unique animation requires its own trigger. The first argument of the trigger function is the name
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotatedState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(90deg)', background: 'white', color: 'black', 'border-radius': '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-in'))
                ])
            ],
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/page-title/page-title.component.html":
/*!******************************************************!*\
  !*** ./src/app/page-title/page-title.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{title}}\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/page-title/page-title.component.scss":
/*!******************************************************!*\
  !*** ./src/app/page-title/page-title.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding-left: 5px;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/page-title/page-title.component.ts":
/*!****************************************************!*\
  !*** ./src/app/page-title/page-title.component.ts ***!
  \****************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageTitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (route) { return route.data; })).subscribe(function (event) {
            _this.title = event['title'];
        });
    };
    PageTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-title',
            template: __webpack_require__(/*! ./page-title.component.html */ "./src/app/page-title/page-title.component.html"),
            styles: [__webpack_require__(/*! ./page-title.component.scss */ "./src/app/page-title/page-title.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-background mat-elevation-z6\">\n  <div class=\"portfolio-header\">\n    <mat-card>\n      <h1 class=\"mat-h1\">\n        <mat-icon>person</mat-icon>\n        Portfolio\n      </h1>\n    </mat-card>\n  </div>\n  <ngu-carousel #myCarousel\n                [inputs]=\"carouselConfig\"\n                [dataSource]=\"carouselItems\">\n    <ngu-tile *nguCarouselDef=\"let item;\">\n      <mat-card class=\"carouselCard\">\n        <mat-card-title>{{item.title}}</mat-card-title>\n        <mat-card-subtitle>{{item.subtitle}}</mat-card-subtitle>\n        <img mat-card-image\n             src=\"{{item.images[0]}}\"\n             default=\"../../assets/wine-bottle_placeholder.svg\"\n             alt=\"Photo of project\">\n        <mat-card-content class=\"carouselCardContent\">{{item.content}}</mat-card-content>\n      </mat-card>\n    </ngu-tile>\n    <button NguCarouselNext class=\"rightRs\">\n      <mat-icon class=\"noSelect\">chevron_right</mat-icon>\n    </button>\n    <button NguCarouselPrev class=\"leftRs\">\n      <mat-icon class=\"noSelect\">chevron_left</mat-icon>\n    </button>\n    <ul class=\"myPoint\" NguCarouselPoint>\n      <li *ngFor=\"let j of myCarousel.pointNumbers; let j = index\"\n          [class.active]=\"j==myCarousel.activePoint\"\n          (click)=\"myCarousel.moveTo(j)\"></li>\n    </ul>\n  </ngu-carousel>\n</div>\n\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carouselCard {\n  height: 600px; }\n\n.carouselCardContent {\n  position: absolute;\n  bottom: 0;\n  padding: 20px; }\n\nimg.image-loaded {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  height: auto; }\n\nngu-carousel {\n  width: 100%;\n  display: block; }\n\n.tile {\n  min-height: 200px;\n  background-size: cover !important;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  left: 0;\n  border: none;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  outline: none; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  right: 0;\n  border: none;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  outline: none; }\n\n.leftRs mat-icon, .rightRs mat-icon {\n  justify-content: center;\n  vertical-align: middle;\n  display: inline;\n  font-size: 30px; }\n\n.myPoint {\n  list-style-type: none;\n  text-align: center;\n  padding: 12px;\n  margin: 0;\n  white-space: nowrap;\n  overflow: auto;\n  box-sizing: border-box; }\n\n.myPoint li {\n  display: inline-block;\n  border-radius: 50%;\n  padding: 4px;\n  margin: 0 3px;\n  transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  transition: 0.4s; }\n\n.myPoint li.active {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.portfolio-background {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%; }\n\n.portfolio-header {\n  text-align: center;\n  margin: 8px;\n  justify-content: center;\n  display: flex; }\n\n.portfolio-header h1 {\n    font-size: 56px;\n    font-weight: 600;\n    line-height: 56px;\n    margin: 15px 5px; }\n\n.portfolio-header h2 {\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 28px;\n    margin: 15px 0 25px 0; }\n\n.portfolio-header mat-icon {\n    font-size: inherit;\n    padding-right: 1em; }\n\n.portfolio-header mat-card {\n    width: 85%;\n    padding: 0; }\n\n/**\r\n  * Rules for when the device is detected to be a small screen.\r\n  */\n\n@media (max-width: 720px) {\n  .portfolio-header mat-icon {\n    font-size: 32px;\n    padding-right: 10px; }\n  .portfolio-header h1 {\n    font-size: 32px; }\n  ngu-tile {\n    justify-content: center; }\n  ngu-carousel {\n    display: inline-block; }\n  img.image-loaded {\n    max-width: 300px;\n    width: 40%; }\n  .carouselCard {\n    height: 475px; } }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(cdr) {
        this.cdr = cdr;
        this.name = 'Carousel';
        this.withAnim = true;
        this.resetAnim = true;
        this.carouselConfig = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            load: 3,
            interval: { timing: 4000, initialDelay: 4000 },
            loop: true,
            touch: true,
            velocity: 0.2
        };
        this.carouselItems = [
            {
                title: 'Mobile Override Manager',
                subtitle: 'Wakefern Food Corp.',
                content: 'Application allows for a front end manager, who holds an Android application, and cashiers, who ' +
                    'are sitting at a terminal, to exchange messages, for managers to monitor cashiers, managers interact with the ' +
                    'transaction itself, to perform manager, and perform overrides remotely. The mobile override manager project ' +
                    'saves Wakefern around 40 labor hours per week per store.',
                images: ['../../assets/images/mom/mom_login.png', '../../assets/images/mom/mom_main.png', '../../assets/images/mom/mom_more.png'],
            },
            {
                title: 'Jade',
                subtitle: 'Wakefern Food Corp.',
                content: 'Web service integration into the Toshiba ACE point of sale system for a new high speed checkout ' +
                    'scanner. Built unit tests as well as used Java Visual VM to prole performance in order to ensure each ' +
                    'item being scannedtook no more than 50 ms to complete in the system.',
                images: ['../../assets/images/jade/jade.png', '../../assets/images/jade/jade2.png'],
            },
            {
                title: 'Hour Tracker',
                subtitle: 'Personal',
                content: 'Native Android application built to track a person\'s daily activities as well as hours worked. ' +
                    'Leveraged Android design guidelines in order to create a visually appealing and simple user interface.',
                images: ['../../assets/images/hourtracker/hourtrackermain.png'],
            },
            {
                title: 'ShopRite Coupon Application:',
                subtitle: 'Personal',
                content: 'Built a personal application in order to make the coupon clipping process easier.',
                images: ['../../assets/images/ShopRiteCoupons/ShopriteCoupons1.jpg', '../../assets/images/ShopRiteCoupons/ShopriteCoupons2.jpg'],
            },
        ];
    }
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    PortfolioComponent.prototype.reset = function () {
        this.myCarousel.reset(!this.resetAnim);
    };
    PortfolioComponent.prototype.moveTo = function (slide) {
        this.myCarousel.moveTo(slide, !this.withAnim);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myCarousel'),
        __metadata("design:type", _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"])
    ], PortfolioComponent.prototype, "myCarousel", void 0);
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/scrolltop/scroll-top.component.html":
/*!*****************************************************!*\
  !*** ./src/app/scrolltop/scroll-top.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"scrollTop\" [hidden]=\"shouldHide\">\r\n  <button mat-raised-button color=\"primary\" class=\"scrollTopButton\" >\r\n    <mat-icon class=\"arrow_up\">keyboard_arrow_up</mat-icon>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/scrolltop/scroll-top.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/scrolltop/scroll-top.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-scrolltop .mat-raised-button {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  text-align: center;\n  z-index: 3;\n  height: 50px;\n  width: 50px;\n  min-height: 50px;\n  min-width: 10px;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  display: flex; }\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY; }\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\napp-scrolltop .arrow_up {\n  font-size: 56px;\n  display: inline; }\n"

/***/ }),

/***/ "./src/app/scrolltop/scroll-top.component.ts":
/*!***************************************************!*\
  !*** ./src/app/scrolltop/scroll-top.component.ts ***!
  \***************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
        this.shouldHide = true;
    };
    ScrollTopComponent.prototype.onScroll = function (event) {
        this.shouldHide = window.pageYOffset < 100;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollTopComponent.prototype, "onScroll", null);
    ScrollTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrolltop',
            template: __webpack_require__(/*! ./scroll-top.component.html */ "./src/app/scrolltop/scroll-top.component.html"),
            styles: [__webpack_require__(/*! ./scroll-top.component.scss */ "./src/app/scrolltop/scroll-top.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Look for your favorite wine below:</mat-card-title>\r\n  <!--<mat-card-title>Wine Search</mat-card-title>-->\r\n  <mat-form-field class=\"search-form-field\">\r\n    <input matInput #searchBox type=\"text\" id=\"search-box\" placeholder=\"Search wines.\" (keyup)=\"search(searchBox.value)\">\r\n    <button mat-button *ngIf=\"searchBox.value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n\r\n\r\n  <!--<input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\"/>-->\r\n  <!--The $ is a convention that indicates heroes$ is an Observable, not an array.-->\r\n  <!--The AsyncPipe subscribes to an Observable automatically so you won't have to do so in the component class.-->\r\n  <ul class=\"search-result\">\r\n    <li *ngFor=\"let wine of wines$ | async\">\r\n      <a routerLink=\"/detail/{{wine.id}}\">\r\n        {{wine.name}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none; }\n\nmat-card {\n  width: 75%;\n  min-width: 150px;\n  max-width: 600px;\n  margin: auto;\n  overflow: auto; }\n\n#search-box {\n  color: white;\n  width: 100%; }\n\n.search-form-field {\n  width: 100%;\n  min-width: 150px;\n  max-width: 600px;\n  padding: 5px; }\n\n.search-result li:hover {\n  background-color: #607D8B; }\n\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none; }\n\n.search-result li a:hover {\n  color: white; }\n\n.search-result li a:active {\n  color: white; }\n\nul.search-result {\n  margin-top: 0;\n  padding-left: 0; }\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wine_wine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wine/wine.service */ "./src/app/wine/wine.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(wineService) {
        this.wineService = wineService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    SearchBarComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wines$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.wineService.searchWines(term); }));
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_wine_wine_service__WEBPACK_IMPORTED_MODULE_1__["WineService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  shop works!\r\n</p>\r\n<app-wine-card></app-wine-card>\r\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-background mat-elevation-z6\">\n  <div class=\"skills-header\">\n    <mat-card>\n      <h1 class=\"mat-h1\">\n        <mat-icon>library_books</mat-icon>\n        Skills\n      </h1>\n    </mat-card>\n  </div>\n  <div class=\"grid-container\">\n    <mat-grid-list [cols]='columns' [rowHeight]=rowHeight>\n      <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n        <mat-card class=\"dashboard-card\">\n          <mat-card-header>\n            <mat-card-title class=\"mat-h1\">\n              {{card.title}}\n              <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n                <button mat-menu-item>Expand</button>\n                <button mat-menu-item>Remove</button>\n              </mat-menu>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content class=\"dashboard-card-content\">\n            <div class=\"mat-h2\">\n            {{card.content}}\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills-background {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%; }\n\n.skills-header {\n  text-align: center;\n  margin: 8px;\n  justify-content: center;\n  display: flex; }\n\n.skills-header h1 {\n    font-size: 56px;\n    font-weight: 600;\n    line-height: 56px;\n    margin: 15px 5px; }\n\n.skills-header h2 {\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 28px;\n    margin: 15px 0 25px 0; }\n\n.skills-header mat-icon {\n    font-size: inherit;\n    padding-right: 1em; }\n\n.skills-header mat-card {\n    width: 85%;\n    padding: 0; }\n\n.grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n/* mixin for multiline */\n\n.block-with-text {\n  overflow: hidden;\n  position: relative;\n  line-height: 1.2em;\n  max-height: 5em;\n  margin-right: -1em;\n  padding-right: 1em; }\n\n.block-with-text:before {\n  content: '...';\n  position: absolute;\n  right: 0;\n  bottom: 0; }\n\n.block-with-text:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 1em;\n  height: 1em;\n  margin-top: 0.2em;\n  background: white; }\n\n/**\r\n  * Rules for when the device is detected to be a small screen.\r\n  */\n\n@media (max-width: 720px) {\n  .skills-header mat-icon {\n    font-size: 32px;\n    padding-right: 10px; }\n  .skills-header h1 {\n    font-size: 32px; } }\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(breakpointObserver) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        // languages: string[] = [
        //   'C++', 'C', 'Java', 'Bash', 'Batch', 'PHP', 'Python', 'JavaScript', 'SQL', 'Groovy','TypeScript'
        // ];
        //
        // technologies: string[] =[
        //   'Android', 'Spring', 'CSS', 'XML', 'HTML', 'Grails', 'JQuery', 'AngularJS', 'Hibernate', 'JDBC', 'SOAP',
        //   'Web Services', 'Web Sockets', 'Typescript', 'NPM', 'NodeJS'
        // ];
        //
        // buildTools: string[] =[
        //   'Gradle','Maven'
        // ];
        //
        // testingFrameworks: string[] = [
        //   'Junit','Mockito'
        // ];
        //
        // ide : string[] = [
        //   'Intellij','Eclipse','RAD'
        // ];
        //
        // sourceControl: string[] = [
        //   'Git','RTC'
        // ];
        /** Based on the screen size, switch from standard to one column per row */
        this.languages = 'C++, C, Java, Bash, Batch, PHP, Python, JavaScript, SQL, Groovy, TypeScript';
        this.technologies = 'Android, Spring, CSS, XML, HTML, Grails, JQuery, AngularJS, Hibernate, JDBC, SOAP, Web Services, Web Sockets, NPM, NodeJS';
        this.buildTools = 'Gradle, Maven';
        this.testingFrameworks = 'Junit, Mockito';
        this.ide = 'Intellij, Eclipse, RAD';
        this.sourceControl = 'Git, RTC';
        this.columns = 3;
        this.rowHeight = '250px';
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                setTimeout(function () {
                    _this.columns = 1;
                    _this.rowHeight = '300px';
                });
                return [
                    { title: 'Languages', cols: 1, rows: 1, content: _this.languages },
                    { title: 'Technologies', cols: 1, rows: 1, content: _this.technologies },
                    { title: 'Build Tools', cols: 1, rows: 1, content: _this.buildTools },
                    { title: 'Source Control', cols: 1, rows: 1, content: _this.sourceControl }
                ];
            }
            else {
                setTimeout(function () {
                    _this.columns = 3;
                    _this.rowHeight = '250px';
                });
                return [
                    { title: 'Languages', cols: 3, rows: 1, content: _this.languages },
                    { title: 'Technologies', cols: 1, rows: 1, content: _this.technologies },
                    { title: 'Build Tools', cols: 1, rows: 1, content: _this.buildTools },
                    { title: 'Source Control', cols: 1, rows: 1, content: _this.sourceControl }
                ];
            }
        }));
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/webSearch/contextual.service.ts":
/*!*************************************************!*\
  !*** ./src/app/webSearch/contextual.service.ts ***!
  \*************************************************/
/*! exports provided: ContextualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualService", function() { return ContextualService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'X-Mashape-Key': '8ileJ80WhdmshnqE256UDR6EbQM1p1R5SQDjsnqwiJCK5yi39n',
        'X-Mashape-Host': 'contextualwebsearch-websearch-v1.p.mashape.com',
    }),
    params: {}
};
var ContextualService = /** @class */ (function () {
    function ContextualService(http) {
        this.http = http;
        this.api_url = 'https://contextualwebsearch-websearch-v1.p.mashape.com/api/Search/ImageSearchAPI';
    }
    ContextualService.prototype.getImage = function (searchQuery) {
        return this.getImageKey(searchQuery, 1, false);
    };
    ContextualService.prototype.getImageKey = function (searchQuery, count, autoCorrect) {
        httpOptions.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('count', count.toString()).set('autoCorrect', autoCorrect.toString()).set('q', searchQuery);
        return this.http.get(this.api_url, httpOptions);
    };
    ContextualService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContextualService);
    return ContextualService;
}());



/***/ }),

/***/ "./src/app/wine-card/wine-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/wine-card/wine-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wine-card {\r\n  max-width: 400px;\r\n}\r\n.wine-card-header-image {\r\n  /*background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');*/\r\n  background-size: cover;\r\n  position: relative;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n}\r\n#wine-image{\r\n  max-width: 400px;\r\n  max-height: 400px;\r\n  /*width:  200px;*/\r\n  /*height: 200px;*/\r\n  /*background: no-repeat 50% 50%;*/\r\n  /*background-size:     cover;*/\r\n}\r\n.author-info {\r\n  text-align: right;\r\n  margin: 5px;\r\n}\r\n#twitter-handle{\r\n  text-align: right;\r\n}\r\n#twitter-handle img {\r\n  height: 15px;\r\n  width: 15px;\r\n  text-decoration: none;\r\n}\r\n#twitter-handle a:link, a:visited {\r\n\r\n  color: #0084b4;\r\n  text-decoration: none;\r\n}\r\n#twitter-handle a:hover {\r\n  color: #00a3df;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/wine-card/wine-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/wine-card/wine-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"wine-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"wine-card-header-image\">\r\n      <img mat-card-image src=\"{{wineImage?.value[0]?.url}}\" alt=\"Avatar of wine\">\r\n    </div>\r\n    <mat-card-title>{{winePage?._embedded?.wines[pageIndex%20]?.name}}</mat-card-title>\r\n    <mat-card-subtitle>{{winePage?._embedded?.wines[pageIndex%20]?.title}}</mat-card-subtitle>\r\n    <!--<mat-card-subtitle>{{wine.variety}}</mat-card-subtitle>-->\r\n    <!--<mat-card-subtitle>{{wine.country}}</mat-card-subtitle>-->\r\n    <!--<mat-card-subtitle>{{wine.designation}}</mat-card-subtitle>-->\r\n  </mat-card-header>\r\n\r\n  <!--TODO: Add a placeholder image while image loads-->\r\n  <img id=\"wine-image\" mat-card-image\r\n       src=\"{{wineImage?.value[0]?.url}}\"\r\n       default=\"../../assets/wine-bottle_placeholder.svg\"\r\n       alt=\"Photo of wine\">\r\n  <!--<img ng-src=\"{{item.url}}\" altSrc=\"{{item.alt_url}}\" onerror=\"this.src = $(this).attr('altSrc')\">-->\r\n  <mat-paginator [length]=\"length\"\r\n                 [pageSize]=\"pageSize\"\r\n                 [pageIndex]=\"pageIndex\"\r\n                 [pageSizeOptions]=\"pageSizeOptions\"\r\n                 (page)=\"handlePage($event)\">\r\n  </mat-paginator>\r\n  <mat-card-content>\r\n    <p>\r\n      {{winePage?._embedded?.wines[pageIndex%20]?.description}}\r\n    </p>\r\n    <p mat-card-subtitle class=\"author-info\">\r\n      {{'-' + winePage?._embedded?.wines[pageIndex%20]?.taster_name}}\r\n    </p>\r\n    <div id=\"twitter-handle\">\r\n      <img src=\"../../assets/svg/twitter.svg\" alt=\"twitter icon\">\r\n      <a href=\"{{'https://twitter.com/' + winePage?._embedded?.wines[pageIndex%20]?.taster_twitter_handle}}\">\r\n        {{winePage?._embedded?.wines[pageIndex%20]?.taster_twitter_handle}}\r\n\r\n      </a>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/wine-card/wine-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wine-card/wine-card.component.ts ***!
  \**************************************************/
/*! exports provided: WineCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineCardComponent", function() { return WineCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wine_wine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wine/wine.service */ "./src/app/wine/wine.service.ts");
/* harmony import */ var _webSearch_contextual_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webSearch/contextual.service */ "./src/app/webSearch/contextual.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_winePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/winePage */ "./src/app/data/winePage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WineCardComponent = /** @class */ (function () {
    function WineCardComponent(wineService, contextualService) {
        this.wineService = wineService;
        this.contextualService = contextualService;
        this.pageSize = 1;
        this.pageIndex = 0;
        this.pageSizeOptions = [1];
        this.winePage = new _data_winePage__WEBPACK_IMPORTED_MODULE_4__["WinePage"]();
    }
    // https://github.com/rubenCodeforges/ng-gapi
    WineCardComponent.prototype.ngOnInit = function () {
        this.getWinePage();
    };
    /*
    * TODO: maybe fetch into another array 2 items away to fetch in background
    * */
    WineCardComponent.prototype.handlePage = function (event) {
        var _this = this;
        this.pageIndex = event.pageIndex;
        console.log('page index ' + event.pageIndex);
        if (this.winePage.page.size === this.pageIndex) {
            console.log('Limit reached');
            this.wineService.getNextPage(this.winePage).subscribe(function (page) {
                console.log('Fetched next pageee, %o', page);
                _this.handlePageFetched(page);
            });
        }
        else {
            this.getWineImage(this.winePage._embedded.wines[this.pageIndex % 20].title);
        }
    };
    WineCardComponent.prototype.handlePageFetched = function (winePage) {
        console.log('Fetched next page, %o', _data_winePage__WEBPACK_IMPORTED_MODULE_4__["WinePage"]);
        if (!winePage) {
            return;
        }
        this.winePage = winePage;
        console.log("current page: %o", this.winePage._embedded.wines[0]);
        this.length = this.winePage.page.totalPages;
        this.getWineImage(this.winePage._embedded.wines[this.pageIndex % 20].title);
    };
    WineCardComponent.prototype.getWinePage = function () {
        var _this = this;
        console.log('Fetching wine page');
        this.wineService.getWines().subscribe(function (page) {
            _this.handlePageFetched(page);
        });
    };
    // getWine(id: number): void {
    //   console.log('Fetching ' + id);
    //   this.wineService.getWineNo404(id).pipe(
    //     map(res => {
    //       console.log(res);
    //       return res;
    //     })
    //   ).subscribe(wine => {
    //     this.wine = wine;
    //     if (wine.title) {
    //       this.getWineImage(wine.title);
    //     }
    //   });
    // }
    WineCardComponent.prototype.getWineImage = function (title) {
        var _this = this;
        this.contextualService.getImage(title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        })).subscribe(function (image) {
            _this.wineImage = image;
        });
    };
    WineCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wine-card',
            template: __webpack_require__(/*! ./wine-card.component.html */ "./src/app/wine-card/wine-card.component.html"),
            styles: [__webpack_require__(/*! ./wine-card.component.css */ "./src/app/wine-card/wine-card.component.css")]
        }),
        __metadata("design:paramtypes", [_wine_wine_service__WEBPACK_IMPORTED_MODULE_1__["WineService"], _webSearch_contextual_service__WEBPACK_IMPORTED_MODULE_2__["ContextualService"]])
    ], WineCardComponent);
    return WineCardComponent;
}());



/***/ }),

/***/ "./src/app/wine/wine.service.ts":
/*!**************************************!*\
  !*** ./src/app/wine/wine.service.ts ***!
  \**************************************/
/*! exports provided: WineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineService", function() { return WineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var WineService = /** @class */ (function () {
    function WineService(http) {
        this.http = http;
        this.winesUrl = 'http://localhost:8080/wine'; // URL to web api
    }
    /** GET wines from the server */
    WineService.prototype.getWines = function () {
        var _this = this;
        return this.http.get(this.winesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (winee) { return _this.log('fetched wines'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getWines')));
    };
    WineService.prototype.getNextPage = function (winePage) {
        var _this = this;
        return this.http.get(winePage._links.next.href).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (winee) { return _this.log('fetched wines'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getNextPage')));
    };
    /** GET wine by id. Return `undefined` when id not found */
    WineService.prototype.getWineNo404 = function (id) {
        var _this = this;
        var url = this.winesUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (w) {
            var outcome = w ? "fetched" : "did not find";
            _this.log(w + " " + outcome + " wine id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getWine id=" + id)));
    };
    /* GET wines whose name contains search term */
    WineService.prototype.searchWines = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty wine array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(this.winesUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found winees matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchWines', [])));
    };
    //////// Save methods //////////
    /** POST: add a new wine to the server */
    WineService.prototype.addWine = function (wine) {
        var _this = this;
        return this.http.post(this.winesUrl, wine, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (wine) { return _this.log("added wine w/ id=" + wine.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addWine')));
    };
    /** DELETE: delete the wine from the server */
    WineService.prototype.deleteWine = function (wine) {
        var _this = this;
        var id = typeof wine === 'number' ? wine : wine.id;
        var url = this.winesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted wine id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteWine')));
    };
    /** PUT: update the wine on the server */
    WineService.prototype.updateWine = function (wine) {
        var _this = this;
        return this.http.put(this.winesUrl, wine, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated wine id=" + wine.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateWine')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    WineService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a WineService message with the MessageService */
    WineService.prototype.log = function (message) {
        console.log("WineService: " + message);
    };
    WineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WineService);
    return WineService;
}());



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
    production: true
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["MainAppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rtl1e\IdeaProjects\Momv3\modernResume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map