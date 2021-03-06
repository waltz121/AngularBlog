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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
    }
    BlogService.prototype.saveBlog = function (fm) {
        var url = "/api/Blog/saveBlogInfo";
        return this.http.post(url, fm, httpOptions);
    };
    BlogService.prototype.getAllBlog = function () {
        var url = "/api/Blog/getAllBlogPosts";
        return this.http.get(url);
    };
    BlogService.prototype.deleteBlog = function (ID) {
        var url = "/api/Blog/deleteBlog?id=" + ID;
        return this.http.put(url, httpOptions);
    };
    BlogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map