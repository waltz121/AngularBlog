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
var login_service_1 = require("../services/login.service");
var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(loginService) {
        this.loginService = loginService;
        this.title = 'User Registration';
        this.userRegistrationFM = {
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            birthDate: new Date(),
            created: new Date(),
            updated: new Date(),
            status: "",
            email: ""
        };
    }
    UserRegistrationComponent.prototype.submit = function () {
        var _this = this;
        this.loginService.registerUser(this.userRegistrationFM)
            .subscribe(function (fm) { return _this.userRegistrationFMArray.push(fm); });
    };
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-userRegistration',
            templateUrl: './users-registration.component.html',
            styleUrls: ['./users-registration.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=users-registration.component.js.map