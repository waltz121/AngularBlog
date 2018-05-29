import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserRegistrationFormModel } from '../class/FormModel/userRegistrationFormModel';
import { LoginInfo } from '../class/loginInfo';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    currentUserLoginInfo: LoginInfo = {
        successLogin: false,
        loginStartTime: new Date(),
        userName: '',
        password: '',
        IsCorrectLogin: false,
        userID: 0
    };

    registerUser(fm: UserRegistrationFormModel): Observable<UserRegistrationFormModel> {
        const url = "/api/Login/saveUserInfo";

        return this.http.post<UserRegistrationFormModel>(url, fm, httpOptions);
    }

    Login(vm: LoginInfo): Observable<LoginInfo> {
        const url = "/api/Login/IsCorrectLogin?username=" + vm.userName
                                           + "&password=" + vm.password;        

        return this.http.get<LoginInfo>(url);
    }
}