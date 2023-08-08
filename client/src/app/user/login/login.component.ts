import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    requestErrors: string | null = null;

    constructor(private userService: UserService, private router: Router) { }

    submitHandler(form: NgForm): void {

        const { email, password } = form.value;

        if (email == '' || password == '') {
            this.requestErrors = 'All fields are required!'
            throw new Error(this.requestErrors);
        }

        if (form.invalid) {
            return;
        }

        this.userService.login(email, password)
            .pipe(
                catchError((err) => {
                    this.requestErrors = err.error.error;

                    return err;
                })
            )
            .subscribe(() => {
                this.router.navigate(['/books/catalog']);
            });
    }
}
