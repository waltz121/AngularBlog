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
var loginInfo_1 = require("../class/loginInfo");
var login_service_1 = require("../services/login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.title = 'Login';
        this.isNotRegistered = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.LogIn = function () {
        //this.loginInfo.successLogin = true;
        var _this = this;
        this.loginService.Login(this.loginInfo)
            .subscribe(function (vm) {
            return _this.afterLogin(vm);
        });
    };
    LoginComponent.prototype.afterLogin = function (vm) {
        this.loginInfo = vm;
        this.loginService.currentUserLoginInfo = vm;
    };
    ;
    LoginComponent.prototype.Register = function () {
        this.isNotRegistered = true;
    };
    LoginComponent.prototype.ExitRegisterForm = function () {
        this.isNotRegistered = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", loginInfo_1.LoginInfo)
    ], LoginComponent.prototype, "loginInfo", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map