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
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
var core_1 = require("@angular/core");
var blog_service_1 = require("../services/blog.service");
var blog_edit_renderer_component_1 = require("../utils/blog-edit-renderer.component");
var login_service_1 = require("../services/login.service");
var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogService, loginService) {
        this.blogService = blogService;
        this.loginService = loginService;
        this.isCreatingBlog = false;
        this.title = 'Blog Posts Admin Tool';
        this.blogPost = {
            id: 0,
            title: "",
            body: "",
            user_id: this.loginService.currentUserLoginInfo.userID,
            publish_date: new Date(),
            allow_publish: false,
            created: new Date(),
            updated: new Date()
        };
        this.columnDefs = [
            { headerName: 'ID', field: 'id' },
            { headerName: 'Title', field: 'title' },
            { headerName: 'Body', field: 'body' },
            { headerName: 'Publish Date', field: 'publish_date' },
            { headerName: 'Allow Publish', fields: 'allow_publish' },
            { headerName: 'Created', fields: 'created' },
            {
                headerName: 'Edit / Delete',
                fields: 'value',
                cellRenderer: "blogEditRenderer",
                colId: "params"
            }
        ];
        this.frameworkComponents = {
            blogEditRenderer: blog_edit_renderer_component_1.BlogEditRenderer
        };
        this.context = { componentParent: this };
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.initData();
        var param = this;
        $("#blogdetailModal").on('hidden.bs.modal', function () {
            param.initData();
            param.isCreatingBlog = false;
        });
        $("#blogEditModal").on('hidden.bs.modal', function () {
            param.initData();
            param.isCreatingBlog = false;
        });
        $("#deleteBlogModal").on('hidden.bs.modal', function () {
            param.initData();
            param.isCreatingBlog = false;
        });
    };
    BlogComponent.prototype.initData = function () {
        var _this = this;
        this.blogService.getAllBlog()
            .subscribe(function (data) {
            _this.blogPosts = data;
        });
    };
    BlogComponent.prototype.createBlog = function () {
        this.isCreatingBlog = true;
        this.blogPost = {
            id: 0,
            title: "",
            body: "",
            user_id: this.loginService.currentUserLoginInfo.userID,
            publish_date: new Date(),
            allow_publish: false,
            created: new Date(),
            updated: new Date()
        };
    };
    BlogComponent.prototype.deleteBlog = function () {
        this.blogService.deleteBlog(this.blogPost.id)
            .subscribe(function () {
            console.log("Successfuly Deleted!");
        });
    };
    BlogComponent.prototype.goBackToMainPage = function () {
        this.initData();
        this.isCreatingBlog = false;
    };
    BlogComponent.prototype.OnGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'app-blog',
            templateUrl: './blog.component.html',
            styleUrls: ['./blog.component.css']
        }),
        __metadata("design:paramtypes", [blog_service_1.BlogService,
            login_service_1.LoginService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map