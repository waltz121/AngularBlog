"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Angular Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var ag_grid_angular_1 = require("ag-grid-angular");
//Component
var users_component_1 = require("./users/users.component");
var blog_component_1 = require("./blog/blog.component");
var app_component_1 = require("./app.component");
var blog_detail_component_1 = require("./blog-detail/blog-detail.component");
//Other Modules
var app_routing_module_1 = require("./app-routing.module");
var user_login_module_1 = require("./user-login.module");
//Services
var blog_service_1 = require("./services/blog.service");
var login_service_1 = require("./services/login.service");
var user_service_1 = require("./services/user.service");
//Grid Utilities
var blog_edit_renderer_component_1 = require("./utils/blog-edit-renderer.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                user_login_module_1.UserLoginModule,
                ag_grid_angular_1.AgGridModule.withComponents([
                    blog_edit_renderer_component_1.BlogEditRenderer
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                users_component_1.UserComponent,
                blog_component_1.BlogComponent,
                blog_detail_component_1.BlogDetailComponent,
                blog_edit_renderer_component_1.BlogEditRenderer
            ],
            providers: [blog_service_1.BlogService, login_service_1.LoginService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map