function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'start-app';
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 31,
      vars: 0,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "images"], ["href", "https://google.com/", "target", "_blank"], ["src", "/assets/img/google-logo.png", "alt", "google-logo"], ["href", "https://facebook.com/", "target", "_blank"], ["src", "/assets/img/facebook-logo.webp", "alt", "facebook-logo"], ["href", "https://github.com/", "target", "_blank"], ["src", "/assets/img/github-logo.png", "alt", "github-logo"], ["href", "https://www.linkedin.com/login/ar", "target", "_blank"], ["src", "/assets/img/linked-logo.webp", "alt", "linked-logo"], ["action", "#", "method", "get"], ["type", "text", "placeholder", "Username", "name", "Username"], ["type", "email", "placeholder", "Email", "name", "email"], ["type", "Password", "placeholder", "Password", "name", "Password"], ["type", "password", "placeholder", "Confirm Password", "name", "Confirm Password"], [1, "btn"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Project two ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin: auto;\r\n    background-color: #fff;\r\n    text-align: center;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);\r\n    padding: 10px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 50px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\r\n    background-color: #f2f6ff;\r\n    padding: 15px;\r\n    margin: 20px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 30px;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    padding: 15px 0px;\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    outline: none;\r\n    margin: 20px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    font-size: 20px;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    background-color: blue;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding: 15px 50px;\r\n    border: none;\r\n    margin: 30px 0px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBoMiB7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcbi5jb250YWluZXIgLmltYWdlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW1hZ2VzIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMHB4IDMwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBmb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIGZvcm0gaW5wdXR7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBmb3JtIGlucHV0OmZvY3Vze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */", "*[_ngcontent-%COMP%] {\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin: auto;\r\n    background-color: #fff;\r\n    text-align: center;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);\r\n    padding: 10px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 50px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\r\n    background-color: #f2f6ff;\r\n    padding: 15px;\r\n    margin: 20px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 30px;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    padding: 15px 0px;\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    outline: none;\r\n    margin: 20px 0px;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    font-size: 20px;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    background-color: blue;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding: 15px 50px;\r\n    border: none;\r\n    margin: 30px 0px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBoMiB7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcbi5jb250YWluZXIgLmltYWdlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW1hZ2VzIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMHB4IDMwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBmb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIGZvcm0gaW5wdXR7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBmb3JtIGlucHV0OmZvY3Vze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\user\Documents\c#\Mixture\start-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map