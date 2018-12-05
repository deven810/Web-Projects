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
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postList {\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0TGlzdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<span class=\"postList\">\n    <app-list></app-list>\n</span>\n<router-outlet></router-outlet>"

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
        this.title = 'angular-blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HttpClientModule } from "@angular/common/http";





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
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

var BlogService = /** @class */ (function () {
    function BlogService() {
        this.http = new XMLHttpRequest();
        this.url = "http://localhost:3000/api/";
    }
    BlogService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                // console.log(this.parseJWT(this.getCookie("jwt")));
                // console.log("login")
                _this.http.open("POST", "http://localhost:3000/login/");
                _this.http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                _this.http.withCredentials = true;
                _this.http.onload = function () { return resolve(); };
                _this.http.onerror = function () { return reject(); };
                _this.http.onreadystatechange = (function () {
                    if (_this.http.readyState != 4)
                        return;
                    _this.rawCookie = _this.getCookie("jwt");
                    _this.cookie = _this.parseJWT(_this.getCookie("jwt"));
                    _this.user = _this.cookie.usr;
                });
                _this.http.send("username=" + username + "&password=" + password);
            }
            catch (_a) {
                reject();
            }
        });
    };
    BlogService.prototype.fetchPosts = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(username);
            _this.http.open("GET", _this.url + encodeURI(username));
            _this.http.withCredentials = true;
            _this.http.responseType = "json";
            _this.http.onload = function () { return resolve(); };
            _this.http.onerror = function () { return reject(); };
            _this.http.onreadystatechange = (function () {
                if (_this.http.readyState != 4)
                    return;
                _this.posts = _this.http.response;
                _this.uid = _this.posts[_this.posts.length - 1].postid;
            });
            _this.http.send();
        });
    };
    BlogService.prototype.getPosts = function (username) {
        // console.log("getposts")
        // console.log(this.posts)
        return this.posts;
    };
    BlogService.prototype.getPost = function (username, id) {
        console.log(this.posts);
        return this.posts.find(function (x) { return x.postid === id; });
    };
    BlogService.prototype.newPost = function (username) {
        var _this = this;
        this.uid++;
        var time = new Date();
        var p = {
            "postid": this.uid,
            "created": time,
            "modified": time,
            "title": "",
            "body": ""
        };
        var ps = {
            "postid": 0,
            "username": this.user,
            "title": "",
            "body": ""
        };
        return new Promise(function (resolve, reject) {
            //Add to local copy
            _this.posts.push(p);
            //Add to the backend
            _this.http.open("POST", _this.url + encodeURI(username) + "/" + p.postid);
            console.log(_this.url + encodeURI(username) + "/" + p.postid);
            _this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            _this.http.onload = function () { return resolve([_this.http.status, p]); };
            _this.http.onerror = function () { return reject(); };
            _this.http.onreadystatechange = (function () { return _this.addModifyPost(p, true); });
            console.log(JSON.stringify(ps));
            _this.http.send(JSON.stringify(ps));
        });
    };
    BlogService.prototype.updatePost = function (username, post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Update local copy
            _this.posts = _this.posts.map(function (x) {
                if (x.postid === post.postid)
                    return post;
                else
                    return x;
            });
            //Update backend copy
            _this.http.open("PUT", _this.url + encodeURI(username) + "/" + post.postid);
            _this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            _this.http.onload = function () { return resolve(_this.http.status); };
            _this.http.onerror = function () { return reject(); };
            _this.http.onreadystatechange = (function () { return _this.addModifyPost(post, false); });
            _this.http.send(JSON.stringify(post));
        });
    };
    BlogService.prototype.deletePost = function (username, postid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Remove local copy
            console.log(_this);
            console.log(_this.posts);
            _this.posts = _this.posts.filter(function (x) { return x.postid !== postid; });
            // this.posts.pop();  
            console.log(_this.posts);
            //Remove backend copy
            _this.http.open("DELETE", _this.url + encodeURI(username) + "/" + postid);
            _this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            _this.http.onload = function () { return resolve(_this.http.status); };
            _this.http.onerror = function () { return reject(); };
            _this.http.onreadystatechange = (function () { return _this.removePost(postid); });
            _this.http.send();
        });
    };
    //// Helper fuctions ////
    BlogService.prototype.populatePosts = function () {
        if (this.http.readyState != 4)
            return;
        this.posts = this.http.response;
        // console.log("populate")
        // console.log(this.http.response);
        // console.log(this.posts);
    };
    BlogService.prototype.addModifyPost = function (post, isAdd) {
        if (this.http.readyState != 4)
            return;
        if (isAdd === true) { // Add to posts array if the backend changed. 
            if (this.http.status === 201)
                console.log();
            // this.posts.push(post); 
            else
                ; // Add error checking
        }
        else { // Edit the posts array if the backend changed. 
            if (this.http.status === 200) {
                console.log();
            }
            else
                ; // Add error checking
        }
    };
    BlogService.prototype.removePost = function (postid) {
        if (this.http.readyState != 4)
            return;
        if (this.http.status === 204) {
        }
        else {
            ;
        }
    };
    BlogService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        // document.cookie = "jwt = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDI5MDA1ODIsInVzciI6ImNzMTQ0IiwiaWF0IjoxNTQyODkzMzgyfQ.xmiscoNljaH9erBB3K09Dvw_B0jmGLfFpB_sbadoD0E";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    BlogService.prototype.parseJWT = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n    display: inline-block;\n    width: 3em;\n    margin: .5em 0;\n    color: #607d8b;\n    font-weight: 700;\n}\n\nbutton {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.editWrapper {\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDNlbTtcbiAgICBtYXJnaW46IC41ZW0gMDtcbiAgICBjb2xvcjogIzYwN2Q4YjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY3Vyc29yOiBoYW5kO1xufVxuXG4uZWRpdFdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editWrapper\" *ngIf=\"post\">\n    <div name=\"edit-title\">\n      <label> Title\n        <input [(ngModel)]=\"post.title\" placeholder=\"Blog title\" />\n      </label>\n    </div>\n    <div>\n      <label> Body\n        <textarea name=\"body\" rows=\"10\" cols=\"40\" [(ngModel)]=\"post.body\" placeholder=\"Enter body here\"></textarea>\n      </label>\n    </div>\n  \n    Last modified\n    {{post.modified | date : 'short'}}\n  \n  \n    <button (click)=\"onDelete()\">\n      Delete\n    </button>\n    <button (click)=\"onSave()\">\n      Save\n    </button>\n    <button (click)=\"onPreview()\">\n      Preview\n    </button>\n  </div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(route, blogService, router) {
        this.route = route;
        this.blogService = blogService;
        this.router = router;
        this.didRefresh = false;
    }
    // AUTOSAVE: saveBeforeRefresh() function gets invoked and updates post before the user closes tab or refreshes page
    EditComponent.prototype.saveBeforeRefresh = function () {
        this.didRefresh = true;
        this.blogService.updatePost(this.blogService.user, this.post);
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.login("cs144", "password")
            .then(function () {
            return _this.blogService.fetchPosts(_this.blogService.parseJWT(_this.blogService.getCookie("jwt")).usr);
        })
            .then(function () {
            // console.log(this.blogService.posts)
            _this.route.paramMap.subscribe(function () { return _this.getPost(); });
        });
    };
    EditComponent.prototype.getPost = function () {
        var id = this.route.snapshot.paramMap.get('id');
        var user = this.blogService.user;
        // console.log(this.blogService.posts)
        this.post = this.blogService.getPost(this.blogService.user, Number(id));
        console.log(this.post);
    };
    EditComponent.prototype.onDelete = function () {
        var _this = this;
        // this.bs.posts = this.bs.posts.filter(x => x.postid !== this.post.postid)
        this.blogService.deletePost(this.blogService.user, this.post.postid)
            .then(function (status) {
            if (status !== 204) {
                alert("Error deleting the post from the server");
            }
            _this.router.navigate(['/']);
        });
        console.log(this.blogService.posts);
    };
    EditComponent.prototype.onPreview = function () {
        this.onSave();
        this.router.navigate(['/preview/' + this.post.postid]);
        // console.log("Asked for preview")
    };
    EditComponent.prototype.onSave = function () {
        this.post.modified = new Date();
        this.blogService.updatePost(this.blogService.user, this.post)
            .then(function (status) {
            if (status !== 200) {
                alert("Error updating the post from the server");
                console.log(status);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _blog_service__WEBPACK_IMPORTED_MODULE_2__["Post"])
    ], EditComponent.prototype, "post", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "saveBeforeRefresh", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".posts {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n\n.posts li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n\n.posts li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n\n.posts a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px;\n  }\n\n.posts a:hover {\n    color:#607D8B;\n  }\n\n.posts .listItem {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0dBQ2I7O0FBRUg7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7R0FDcEI7O0FBRUQ7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFdBQVc7R0FDWjs7QUFFRDtJQUNFLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0dBQ2Q7O0FBRUQ7SUFDRSxjQUFjO0dBQ2Y7O0FBRUQ7SUFDRSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0dBQzVCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdHMge1xuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxNWVtO1xuICB9XG5cbi5wb3N0cyBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBwYWRkaW5nOiAuM2VtIDA7XG4gICAgaGVpZ2h0OiAxLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAucG9zdHMgbGk6aG92ZXIge1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgbGVmdDogLjFlbTtcbiAgfVxuXG4gIC5wb3N0cyBhIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuXG4gIC5wb3N0cyBhOmhvdmVyIHtcbiAgICBjb2xvcjojNjA3RDhCO1xuICB9XG5cbiAgLnBvc3RzIC5saXN0SXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1pbi13aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=onCreate()>\n    New post\n  </button>\n  \n  <ul class=\"posts\">\n    <li *ngFor='let post of this.bs.posts'>\n      <a routerLink=\"/edit/{{post.postid}}\">\n        <span class=\"listItem\">\n          {{post.created | date : 'short'}}\n        </span>\n        {{post.title}}\n      </a>\n    </li>\n  </ul>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as jwt from 'jsonwebtoken';
var ListComponent = /** @class */ (function () {
    function ListComponent(route, router, bs) {
        this.route = route;
        this.router = router;
        this.bs = bs;
        this.secret = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
    }
    // constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var decode;
        try {
            // this.bs.login("user2", "blogserver")
            this.bs.login("cs144", "password")
                .then(function () {
                decode = _this.bs.parseJWT(_this.bs.getCookie("jwt"));
                _this.user = decode.usr;
                return _this.bs.fetchPosts(_this.user);
            })
                .then(function () {
                // this.posts = this.bs.getPosts(this.user);
                console.log(_this.bs.posts);
            })
                .catch(function () { return console.log("fuck me"); });
        }
        catch (e) {
            console.log("fuck off");
        }
    };
    ListComponent.prototype.onSelect = function (post) {
        this.selectedPost = post;
    };
    ListComponent.prototype.onCreate = function () {
        var _this = this;
        this.bs.newPost(this.bs.user)
            .then(function (status) {
            if (status[0] !== 201) {
                alert("Error add new post to the server.");
                // console.log(status[0],status[1].postid); 
                _this.bs.deletePost(_this.bs.user, status[1].postid);
            }
            _this.router.navigate(['/edit/' + status[1].postid]);
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <div innerHTML=\"{{display.title}}\"></div>\n  <div innerHTML=\"{{display.body}}\"></div>\n  \n  <!-- Buttons -->\n  \n  <div>\n    <button (click)=\"onEdit()\">\n      Edit\n    </button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(route, blogService, router) {
        this.route = route;
        this.blogService = blogService;
        this.router = router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.login("cs144", "password")
            .then(function () {
            return _this.blogService.fetchPosts(_this.blogService.parseJWT(_this.blogService.getCookie("jwt")).usr);
        })
            .then(function () {
            // console.log(this.blogService.posts)
            _this.route.paramMap.subscribe(function () { return _this.getPost(); });
        });
        this.reader = new commonmark__WEBPACK_IMPORTED_MODULE_3__["Parser"]();
        this.writer = new commonmark__WEBPACK_IMPORTED_MODULE_3__["HtmlRenderer"]();
    };
    PreviewComponent.prototype.getPost = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        var user = this.blogService.user;
        this.post = this.blogService.getPost(this.blogService.user, id);
        console.log(this.blogService.posts);
        this.display.title = this.writer.render(this.reader.parse(this.post.title));
        this.display.body = this.writer.render(this.reader.parse(this.post.body));
        console.log(this.post);
    };
    PreviewComponent.prototype.onEdit = function () {
        this.router.navigate(['/edit/' + this.post.postid]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _blog_service__WEBPACK_IMPORTED_MODULE_2__["Post"])
    ], PreviewComponent.prototype, "post", void 0);
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PreviewComponent);
    return PreviewComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/DEVEN_WORK/angular_markdown_editor/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map