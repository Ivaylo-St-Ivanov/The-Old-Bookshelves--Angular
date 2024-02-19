import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';

@Component({
    selector: 'app-authenticate',
    templateUrl: './authenticate.component.html',
    styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
    isAuthenticating = false;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getCurrentUser().subscribe({
            next: () => {
                this.isAuthenticating = true;
            },
            error: () => {
                this.isAuthenticating = false;
            },
            complete: () => {
                this.isAuthenticating = false;
            }
        });
    }
}
