webpackJsonp([1,5],{

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 124;


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_todo_add_todo_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_todo_edit_todo_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'add-todo', component: __WEBPACK_IMPORTED_MODULE_3__add_todo_add_todo_component__["a" /* AddTodoComponent */] },
    { path: 'edit-todo/:key/:title/:priority', component: __WEBPACK_IMPORTED_MODULE_4__edit_todo_edit_todo_component__["a" /* EditTodoComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(208),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sessionService_session_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_todo_add_todo_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_todo_edit_todo_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__status_filter_status_filter_pipe__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__status_sorting_pipe_status_sorting_pipe__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__priority_sorting_pipe_priority_sorting_pipe__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__id_sorting_pipe_id_sorting_pipe__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__add_todo_add_todo_component__["a" /* AddTodoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__edit_todo_edit_todo_component__["a" /* EditTodoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__status_filter_status_filter_pipe__["a" /* StatusFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_18__status_sorting_pipe_status_sorting_pipe__["a" /* StatusSortingPipe */],
            __WEBPACK_IMPORTED_MODULE_19__priority_sorting_pipe_priority_sorting_pipe__["a" /* PrioritySortingPipe */],
            __WEBPACK_IMPORTED_MODULE_20__id_sorting_pipe_id_sorting_pipe__["a" /* IdSortingPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__sessionService_session_service__["a" /* SessionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdSortingPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IdSortingPipe = (function () {
    function IdSortingPipe() {
    }
    IdSortingPipe.prototype.transform = function (todos, sortById) {
        console.log('before sort pipe', sortById);
        if (!sortById)
            return todos;
        todos.sort(function (a, b) {
            if (a.id > b.id)
                return 1;
            if (a.id < b.id)
                return -1;
        });
        console.log('after sort pipe', sortById);
        return todos;
    };
    return IdSortingPipe;
}());
IdSortingPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'idSorting',
        pure: false
    })
], IdSortingPipe);

//# sourceMappingURL=id-sorting.pipe.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrioritySortingPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrioritySortingPipe = (function () {
    function PrioritySortingPipe() {
    }
    PrioritySortingPipe.prototype.transform = function (todos, sortByPriority) {
        if (!sortByPriority)
            return todos;
        todos.sort(function (a, b) {
            if (a.priority > b.priority)
                return 1;
            if (a.priority < b.priority)
                return -1;
        });
        return todos;
    };
    return PrioritySortingPipe;
}());
PrioritySortingPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'prioritySorting',
        pure: false
    })
], PrioritySortingPipe);

//# sourceMappingURL=priority-sorting.pipe.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusFilterPipe = (function () {
    function StatusFilterPipe() {
    }
    StatusFilterPipe.prototype.transform = function (todos, filterStatus) {
        if (filterStatus == "")
            return todos;
        return todos.filter(function (todo) {
            return todo.status == filterStatus;
        });
    };
    return StatusFilterPipe;
}());
StatusFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'statusFilter',
        pure: false
    })
], StatusFilterPipe);

//# sourceMappingURL=status-filter.pipe.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusSortingPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusSortingPipe = (function () {
    function StatusSortingPipe() {
    }
    StatusSortingPipe.prototype.transform = function (todos, sortByStatus) {
        if (!sortByStatus)
            return todos;
        todos.sort(function (a, b) {
            if (a.status == 'in queue' && (b.status == 'canceled' || b.status == 'done'))
                return -1;
            if (a.status == b.status)
                return 0;
            if (a.status == 'canceled' && b.status == 'done')
                return -1;
            if (a.status == 'canceled' && b.status == 'in queue')
                return 1;
            if (a.status == 'done' && (b.status == 'in queue' || b.status == 'canceled'))
                return 1;
        });
        return todos;
    };
    return StatusSortingPipe;
}());
StatusSortingPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'statusSorting',
        pure: false
    })
], StatusSortingPipe);

//# sourceMappingURL=status-sorting.pipe.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".submit-add-button{\r\n\twidth: 180px;\r\n\t// margin: 15px auto;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n          margin-top: 15px;\r\n}\r\n\r\n.mat-sidenav-content{\r\n\tmargin-top: 0px !important;\r\n\t-webkit-transform : none !important;\r\n\t        transform : none !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".submit-add-button{\r\n\twidth: 180px;\r\n\t// margin: 15px auto;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n          margin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".add-todo-button{\r\n\tfont-size: 40px;\r\n\tposition: fixed;\r\n\tbottom: 15px;\r\n\tright: 30px;\r\n\tz-index: 0 !important;\r\n}\r\n.add-todo-button:hover{\r\n\tcolor: #fff;\r\n}\r\n.add-todo-button:focus{\r\n\tcolor: #fff;\r\n}\r\n.plus{\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n\t}\r\n\r\n.todo-card{\r\n\tpadding: 0; \r\n}\r\n\r\n.todo-text{\r\n\tpadding: 25px 15px;\r\n\r\n}\r\n.canceled{\r\n\tbackground-color: #efcccc;\r\n}\r\n.done{\r\n\tbackground-color: #b0ec69;\r\n}\r\n.basic-buttons{\r\n\tdisplay: inline-block;\r\n\t*display: inline;\r\n\t*zoom: 1;\r\n}\r\n.fill-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.tool-button{\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n    -webkit-box-align: center;\r\n       -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.chosen-todo{\r\n\tborder: 0.5px solid rgba(233, 30, 99, 0.35);\r\n\tbox-shadow: 0 3px 1px -2px rgba(233, 30, 99,.2), 0 2px 2px 0 rgba(233, 30, 99,.14), 0 1px 5px 0 rgba(233, 30, 99,.12) !important;\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n.todo-card{\r\n\tcursor: pointer;\r\n}\r\n\r\n.side-nav-logo{\r\n\twidth: 100%;\r\n\theight: 64px;\r\n\tline-height: 64px;\r\n\tfont-size: 20px;\r\n\t// text-align: center;\r\n\tpadding: 0 16px;\r\n\tborder-bottom: 1px solid #eee;\r\n\r\n}\r\n\r\n.radio-group {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n     -ms-flex-direction: column;\r\n         flex-direction: column;\r\n}\r\n\r\n.radio-button {\r\n  margin: 5px 0px;\r\n}\r\n\r\n.selected-value {\r\n  margin: 15px 0;\r\n}\r\n\r\n.sort-container{\r\n\tpadding: 32px 0 0;\r\n\tposition: relative;\r\n\t// border-top: 1px solid #eee;\r\n\r\n}\r\n.sort-container::after{\r\n\tcontent: \"\";\r\n\twidth: 259px;\r\n\theight: 1px;\r\n\tborder-top: 1px solid #eee;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: -16px;\r\n\r\n}\r\n\r\n.close-button{\r\n\ttext-align: left;\r\n\tmargin-top: 20px;\r\n\tpadding: 10px 16px;\r\n\tborder-top: 1px solid #eee;\r\n}\r\n\r\n.list-item{\r\n\tpadding: 16px 0;\r\n}\r\nmd-nav-list{\r\n\tpadding-left: 16px;\r\n}\r\n\r\n.sort-checkbox{\r\n\tdisplay: block;\r\n\tmargin-bottom: 16px;\r\n}\r\nmd-checkbox:last-of-type{\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.space-block{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 64px;\r\n}\r\n\r\n@media only screen and(max-width: 768px){\r\n\t.todo-card .todo-text{\r\n\t\tpadding: 15px 15px !important;\r\n\t}\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n\t<md-toolbar color=\"accent\" style=\"position: fixed; top: 0; width: 100%; z-index: 1\">\n\t\t<button md-icon-button [routerLink]=\"['/home/']\">\n\t\t\t<i class=\"material-icons\">keyboard_backspace</i>\n\t\t</button>\n\n\t\t<span>todo-list</span>\n\n\t</md-toolbar>\n\t<div class=\"main-content\">\n\t\t<md-card class=\"form-card\">\n\t\t\t<h2>What would you like to do?</h2>\n\t\t\t<form #addTodoForm=\"ngForm\">\n\t\t\t  <table class=\"full-width\" cellspacing=\"0\">\n\t\t\t\t  <tr>\n\t\t\t\t    <td><md-input-container class=\"full-width\">\n\t\t\t\t      <input class=\"full-width\"  name=\"todo\" mdInput placeholder=\"Your todo\" [(ngModel)]=\"newTodo\" required >\n\t\t\t\t    </md-input-container></td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t  \t <td>\n\t\t\t\t    \t<md-select placeholder=\"Priority\" [(ngModel)]=\"todoPriority\" name=\"priority\">\n\t\t\t\t\t\t    <md-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\n\t\t\t\t\t\t      {{priority}}\n\t\t\t\t\t\t    </md-option>\n\t\t\t\t\t  </md-select>\n\t\t\t\t    </td>\n\t\t\t\t  </tr>\n\t\t\t  </table>\n\t\t\t</form>\n\t\t\t<button class=\"submit-add-button\" md-raised-button (click)=\"addTodo()\" [routerLink]=\"['/home/']\" [disabled]=\"!addTodoForm.valid\" >Add</button>\n\t\t</md-card>\t\n\t</div>\n</md-sidenav-container>\n\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n\t<md-toolbar color=\"warn\" style=\"position: fixed; top: 0; width: 100%; z-index: 1\">\n\t\t<button md-icon-button [routerLink]=\"['/home/']\">\n\t\t\t<i class=\"material-icons\">keyboard_backspace</i>\n\t\t</button>\n\n\t\t<span>todo-list</span>\n\n\t</md-toolbar>\n\t<div class=\"main-content\">\n\t\t<md-card>\n\t\t\t<h2>What would you like to do instead?</h2>\n\t\t\t<form #addTodoForm=\"ngForm\">\n\t\t\t  <table class=\"full-width\" cellspacing=\"0\">\n\t\t\t\t  <tr>\n\t\t\t\t    <td><md-input-container class=\"full-width\">\n\t\t\t\t      <input class=\"full-width\"  name=\"todo\" mdInput placeholder=\"Your todo\" [(ngModel)]=\"todoTitle\" required >\n\t\t\t\t    </md-input-container></td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t  \t <td>\n\t\t\t\t    \t<md-select placeholder=\"Priority\" [(ngModel)]=\"todoPriority\" name=\"priority\" >\n\t\t\t\t\t\t    <md-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\n\t\t\t\t\t\t      {{priority}}\n\t\t\t\t\t\t    </md-option>\n\t\t\t\t\t  </md-select>\n\t\t\t\t    </td>\n\t\t\t\t  </tr>\n\t\t\t  </table>\n\t\t\t  <button class=\"submit-add-button\" md-raised-button (click)=\"updateTodo()\" [routerLink]=\"['/home/']\" [disabled]=\"!addTodoForm.valid\" >Update</button>\n\t\t\t</form>\n\t\t</md-card>\t\n\t</div>\n</md-sidenav-container>"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "\n<md-sidenav-container  fullscreen>\n\t<!-- <div class=\"space-block\">\t</div> -->\n\t<md-sidenav #start >\n\t\t<div class=\"side-nav-logo\" >todo-list</div>\n\n\t\t<md-nav-list>\n\t\t\t<div class=\"list-item\">Filter by status</div>\n\t\t\t<md-radio-group  class=\"radio-group\" [(ngModel)]=\"filterStatus\">\n\t\t\t\t<md-radio-button class=\"radio-button\" value=\"in queue\">\n\t\t\t\t    In queue\n\t\t\t\t</md-radio-button>\n\t\t\t\t<md-radio-button class=\"radio-button\" value=\"canceled\">\n\t\t\t\t    Canceled\n\t\t\t\t</md-radio-button>\n\t\t\t\t<md-radio-button class=\"radio-button\" value=\"done\">\n\t\t\t\t    Done\n\t\t\t\t</md-radio-button>\n\t\t\t\t<md-radio-button class=\"radio-button\" value=\"\">\n\t\t\t\t    All\n\t\t\t\t</md-radio-button>\n\t\t\t</md-radio-group>\n\t\t\t<div class=\"sort-container\">\n\t\t\t\t<md-checkbox class=\"sort-checkbox\" (change)=\"onSort()\" [(ngModel)]=\"sortByStatus\" >Sort by status</md-checkbox>\n\t\t\t\t<md-checkbox class=\"sort-checkbox\" (change)=\"onSort()\" [(ngModel)]=\"sortByPriority\" >Sort by priority</md-checkbox>\n\t\t\t</div>\n\t\t</md-nav-list>\n\n\t</md-sidenav>\n\t<div class=\"toolbar-container\">\n\t\t<md-toolbar color=\"primary\" class=\"md-toolbar-tools\" style=\"position: fixed; top: 0; width: 100%; z-index: 1\">\n\n\t\t\t<button md-icon-button (click)=\"start.open()\">\n\t\t\t\t<md-icon>menu</md-icon>\n\t\t\t</button>\n\n\t\t\t<span>todo-list</span>\n\n\t\t\t<span class=\"fill-space\" flex></span>\n\n\t\t\t<button md-icon-button [mdMenuTriggerFor]=\"menu\" >\n\t\t\t  <md-icon>more_vert</md-icon>\n\t\t\t</button>\n\t\t\t<md-menu #menu=\"mdMenu\">\n\t\t\t\t<div class=\"when-todo-chosen\" *ngIf=\"currentTodo\" >\n\t\t\t\t\t<div class=\"when-in-queue\" *ngIf=\"isCurrentTodoInQueue()\">\n\t\t\t\t\t  <button class=\"tool-button\" md-menu-item (click)=\"removeTodo(currentTodo.$key)\">\n\t\t\t\t      <md-icon>delete</md-icon>\n\t\t\t\t      <span>Delete</span>\n\t\t\t\t\t  </button>\n\t\t\t\t\t  <button class=\"tool-button\" md-menu-item (click)=\"cancelTodo()\">\n\t\t\t\t\t    <md-icon>clear</md-icon>\n\t\t\t\t\t    <span>Cancel</span>\n\t\t\t\t\t  </button>\n\t\t\t\t\t  <button class=\"tool-button\" md-menu-item (click)=\"navigateToEditPage()\">\n\t\t\t\t\t    <md-icon>edit</md-icon>\n\t\t\t\t\t    <span>Edit</span>\n\t\t\t\t\t  </button>\n\t\t\t\t\t  <button class=\"tool-button\" md-menu-item (click)=\"completeTodo()\">\n\t\t\t\t\t    <md-icon>done</md-icon>\n\t\t\t\t\t    <span>Complete</span>\n\t\t\t\t\t  </button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"when-canceled\" *ngIf=\"isCurrentTodoCanceled()\">\n\t\t\t\t\t  <button class=\"tool-button\" md-menu-item (click)=\"putBackInQueueTodo()\">\n\t\t\t\t\t      <md-icon>\n\t\t\t\t\t\t\t\t<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n\t\t\t\t\t\t\t\t\t<path fill=\"#a0a0a0\" d=\"M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z\" />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t    </md-icon>\n\t\t\t\t      <span>Put back in the queue</span>\n\t\t\t\t\t  </button>\n\t\t\t\t\t  <button class=\"tool-button\" md-menu-item (click)=\"removeTodo()\">\n\t\t\t\t\t    <md-icon>delete</md-icon>\n\t\t\t\t\t    <span>Delete</span>\n\t\t\t\t\t  </button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"when-done\" *ngIf=\"isCurrentTodoDone()\">\n\t\t\t\t\t  <button class=\"tool-button\" md-menu-item (click)=\"removeTodo()\">\n\t\t\t\t\t    <md-icon>delete</md-icon>\n\t\t\t\t\t    <span>Delete</span>\n\t\t\t\t\t  </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"when-todo-not-chosen\" *ngIf=\"!currentTodo\">\n\t\t\t\t\t<button class=\"tool-button\" md-menu-item (click)=\"clearAll()\">\n\t\t\t\t      <md-icon>delete</md-icon>\n\t\t\t\t      <span>Clear the space</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</md-menu>\n\n\t\t</md-toolbar>\n\t</div>\n\n\t<div class=\"main-content\">\n\n\t\t<md-card [ngClass]=\"{'chosen-todo': currentTodo == todo}\" (click)=\"setCurrentTodo(todo)\" class=\"todo-card\" *ngFor=\"let todo of todos | async | idSorting:sortById | statusFilter:filterStatus | statusSorting:sortByStatus | prioritySorting:sortByPriority; trackBy:todo?.id\">\n\t\t\t\n\t\t\t<div [ngClass]=\"{'canceled': todo.status=='canceled', 'done': todo.status=='done', 'todo-text': true}\" >\n\t\t\t\t{{todo.title}} \n\t\t\t</div>\n\t\t</md-card>\n\n\t</div>\n\n</md-sidenav-container>\n<a class=\"add-todo-button\" md-fab [routerLink]=\"['/add-todo/']\" layout-align=\" bottom right\">\n\t\t<div class=\"plus\">+</div>\n\t</a>\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = (function () {
    function SessionService() {
        this.lastId = -1;
    }
    SessionService.prototype.setlastId = function (id) {
        this.lastId = id;
    };
    SessionService.prototype.getlastId = function () {
        return this.lastId;
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SessionService);

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sessionService_session_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTodoComponent = (function () {
    function AddTodoComponent(db, SessionService) {
        this.SessionService = SessionService;
        this.priorities = [1, 2, 3, 4, 5];
        this.todos = db.list('/');
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    AddTodoComponent.prototype.addTodo = function () {
        var todo = this.newTodo;
        var id = this.SessionService.getlastId() + 1;
        var priority = 10;
        if (this.todoPriority) {
            priority = this.todoPriority;
        }
        var todoObject = { "id": id, "title": todo, "status": "in queue", "priority": priority };
        // this.TodoService.addTodo(todo, priority);
        this.todos.push(todoObject);
        this.SessionService.setlastId(id);
    };
    return AddTodoComponent;
}());
AddTodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-todo',
        template: __webpack_require__(207),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sessionService_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sessionService_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], AddTodoComponent);

var _a, _b;
//# sourceMappingURL=add-todo.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sessionService_session_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTodoComponent = (function () {
    function EditTodoComponent(db, route, router, SessionService) {
        this.db = db;
        this.route = route;
        this.router = router;
        this.SessionService = SessionService;
        this.priorities = [1, 2, 3, 4, 5];
    }
    EditTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params.switchMap((params: Params) => this.db.object('/'+params['key']))
        // .subscribe((todo: any) => {
        // 	this.myTodo = todo;
        // });
        console.log('edit component');
        // console.log(this.SessionService.getCurrentTodo());
        // this.myTodo = this.SessionService.getCurrentTodo();
        this.route.params.subscribe(function (params) {
            _this.todoPriority = +params['priority'];
            if (_this.todoPriority == 10)
                _this.todoPriority = undefined;
            _this.todoTitle = params['title'];
            _this.todoKey = params['key'];
            console.log('params', _this.todoKey, _this.todoTitle, _this.todoPriority);
        });
    };
    EditTodoComponent.prototype.updateTodo = function () {
        this.db.object('/' + this.todoKey)
            .update({
            title: this.todoTitle,
            priority: (this.todoPriority ? this.todoPriority : 10)
        });
    };
    return EditTodoComponent;
}());
EditTodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-todo',
        template: __webpack_require__(209),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__sessionService_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sessionService_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], EditTodoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-todo.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sessionService_session_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(db, router, SessionService) {
        var _this = this;
        this.router = router;
        this.SessionService = SessionService;
        this.filterStatus = "";
        this.sortByStatus = false;
        this.sortByPriority = false;
        this.sortById = false;
        this.newTodo = '';
        this.todos = db.list('/');
        this.todos.subscribe(function (todos) {
            for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
                var todo_1 = todos_1[_i];
                if (todo_1.id > _this.SessionService.getlastId()) {
                    _this.SessionService.setlastId(todo_1.id);
                    console.log(_this.SessionService.getlastId());
                }
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.removeTodo = function () {
        this.todos.remove(this.currentTodo.$key);
        this.resetCurrentTodo();
    };
    HomeComponent.prototype.clearAll = function () {
        this.todos.remove();
    };
    HomeComponent.prototype.completeTodo = function () {
        console.log('Get it done!');
        this.todos.update(this.currentTodo.$key, { "status": "done" });
        this.resetCurrentTodo();
    };
    HomeComponent.prototype.cancelTodo = function () {
        this.todos.update(this.currentTodo.$key, { "status": "canceled" });
        this.resetCurrentTodo();
    };
    HomeComponent.prototype.putBackInQueueTodo = function () {
        this.todos.update(this.currentTodo.$key, { "status": "in queue" });
        this.resetCurrentTodo();
    };
    HomeComponent.prototype.setCurrentTodo = function (todo) {
        if (!this.currentTodo) {
            this.currentTodo = todo;
        }
        else {
            if (this.currentTodo.$key == todo.$key) {
                this.resetCurrentTodo();
            }
            else {
                this.currentTodo = todo;
            }
        }
    };
    HomeComponent.prototype.resetCurrentTodo = function () {
        this.currentTodo = null;
    };
    HomeComponent.prototype.navigateToEditPage = function () {
        var key = this.currentTodo.$key;
        var title = this.currentTodo.title;
        var priority = this.currentTodo.priority.toString();
        this.router.navigate(['/edit-todo/', key, title, priority]);
    };
    HomeComponent.prototype.isCurrentTodoInQueue = function () {
        return this.currentTodo.status == 'in queue';
    };
    HomeComponent.prototype.isCurrentTodoCanceled = function () {
        return this.currentTodo.status == 'canceled';
    };
    HomeComponent.prototype.isCurrentTodoDone = function () {
        return this.currentTodo.status == 'done';
    };
    HomeComponent.prototype.onSort = function () {
        if (!this.sortByStatus && !this.sortByPriority) {
            this.sortById = true;
        }
        console.log(this.sortById);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(210),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__sessionService_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sessionService_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBO4wNRGPbIGyF7ZGOTuxZ_Oc1U-TS54l0",
        authDomain: "todo-list-6c51d.firebaseapp.com",
        databaseURL: "https://todo-list-6c51d.firebaseio.com",
        projectId: "todo-list-6c51d",
        storageBucket: "todo-list-6c51d.appspot.com",
        messagingSenderId: "65666024603"
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.bundle.js.map