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
var user_service_1 = require("../services/user.service");
var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.title = 'Users Main Body';
        this.user = {
            name: "",
            lastname: "",
            birthdate: new Date(),
            created: new Date(),
            updated: new Date(),
            status: "",
            email: ""
        };
        this.columnDefs = [
            { headerName: 'ID', field: 'id' },
            { headerName: 'FirstName', field: 'name' },
            { headerName: 'LastName', field: 'lastname' },
            { headerName: 'Birthdate', field: 'birthdate' },
            { headerName: 'Email', field: 'email' },
            { headerName: 'Status', field: 'status' }
        ];
        this.context = { componentParent: this };
    }
    UserComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    UserComponent.prototype.initData = function () {
        var _this = this;
        this.userService.getAllUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    UserComponent.prototype.OnGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=users.component.js.map