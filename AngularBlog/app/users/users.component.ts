import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})

export class UserComponent implements OnInit {

    title = 'Users Main Body';

    ngOnInit() {

    }
}