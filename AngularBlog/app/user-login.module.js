"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
//Components
var login_component_1 = require("./Login/login.component");
var users_registration_component_1 = require("./users-registration/users-registration.component");
//Services
var login_service_1 = require("./services/login.service");
var UserLoginModule = /** @class */ (function () {
    function UserLoginModule() {
    }
    UserLoginModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            declarations: [
                login_component_1.LoginComponent,
                users_registration_component_1.UserRegistrationComponent
            ],
            providers: [login_service_1.LoginService],
            exports: [login_component_1.LoginComponent]
        })
    ], UserLoginModule);
    return UserLoginModule;
}());
exports.UserLoginModule = UserLoginModule;
//# sourceMappingURL=user-login.module.js.map