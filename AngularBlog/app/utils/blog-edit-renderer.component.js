"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlogEditRenderer = /** @class */ (function () {
    function BlogEditRenderer() {
    }
    BlogEditRenderer.prototype.agInit = function (params) {
        this.params = params;
    };
    BlogEditRenderer.prototype.editBlog = function () {
        this.params.context.componentParent.isCreatingBlog = true;
        var selectedData = this.params.data;
        this.params.context.componentParent.blogPost = {
            id: selectedData.id,
            title: selectedData.title,
            body: selectedData.body,
            user_id: selectedData.user_id,
            publish_date: selectedData.publish_date,
            allow_publish: selectedData.allow_publish,
            created: selectedData.created,
            updated: selectedData.updated
        };
    };
    BlogEditRenderer.prototype.deleteBlog = function () {
        this.params.context.componentParent.isCreatingBlog = true;
        var selectedData = this.params.data;
        this.params.context.componentParent.blogPost = {
            id: selectedData.id,
            title: selectedData.title,
            body: selectedData.body,
            user_id: selectedData.user_id,
            publish_date: selectedData.publish_date,
            allow_publish: selectedData.allow_publish,
            created: selectedData.created,
            updated: selectedData.updated
        };
    };
    BlogEditRenderer.prototype.refresh = function () {
        return false;
    };
    BlogEditRenderer = __decorate([
        core_1.Component({
            selector: 'edit-cell',
            template: "<span>\n                <button style=\"height: 20px\"  data-toggle=\"modal\" data-target=\"#blogEditModal\" class=\"btn btn-info\" (click)=\"editBlog()\">Edit</button> /\n                <button style=\"height: 20px\"  data-toggle=\"modal\" data-target=\"#deleteBlogModal\" class=\"btn btn-info\" (click)=\"deleteBlog()\">Delete</button>\n               </span>",
            styles: [
                ".btn {\n  line-height: 0.5    \n        }\n        "
            ]
        })
    ], BlogEditRenderer);
    return BlogEditRenderer;
}());
exports.BlogEditRenderer = BlogEditRenderer;
//# sourceMappingURL=blog-edit-renderer.component.js.map