"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Angular
var core_1 = require("@angular/core");
//Class
var blogPost_1 = require("../class/blogPost");
//Services
var blog_service_1 = require("../services/blog.service");
var login_service_1 = require("../services/login.service");
var BlogDetailComponent = /** @class */ (function () {
    function BlogDetailComponent(blogService, loginService) {
        this.blogService = blogService;
        this.loginService = loginService;
        this.title = 'Blog Details';
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
    };
    BlogDetailComponent.prototype.submit = function () {
        var _this = this;
        this.blogService.saveBlog(this.blogPost)
            .subscribe(function () { return _this.refresh(); });
    };
    BlogDetailComponent.prototype.refresh = function () {
        console.log("Saving Finished");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", blogPost_1.BlogPost)
    ], BlogDetailComponent.prototype, "blogPost", void 0);
    BlogDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-detail',
            templateUrl: './blog-detail.component.html',
            styleUrls: ['./blog-detail.component.css']
        }),
        __metadata("design:paramtypes", [blog_service_1.BlogService,
            login_service_1.LoginService])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());
exports.BlogDetailComponent = BlogDetailComponent;
//# sourceMappingURL=blog-detail.component.js.map