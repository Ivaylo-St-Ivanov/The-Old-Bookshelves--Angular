import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

import { UserService } from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
    passwordsMatching: boolean = false;
    requestErrors: string | null = null;
    errorTimeout: any;
    errorTimeoutDuration: number = 3000;

    ngOnDestroy(): void {
        if (this.errorTimeout) {
            clearTimeout(this.errorTimeout);
        }
    }

    matchPasswordsValidator(form: NgForm) {
        if (form.value.password == form.value.rePassword) {
            this.passwordsMatching = true;
        } else {
            this.passwordsMatching = false;
        }
    }

    constructor(private userService: UserService, private router: Router) { }

    registerSubmitHandler(form: NgForm): void {

        const { email, username, password, rePassword } = form.value;

        if (email == '' || username == '' || password == '' || rePassword == '') {
            this.requestErrors = 'All fields are required!'

            this.errorTimeout = setTimeout(() => {
                this.requestErrors = null;
            }, this.errorTimeoutDuration);

            throw new Error(this.requestErrors);
        }

        if (password != rePassword) {
            return;
        }

        this.userService.register(email!, username!, password!)
            .pipe(
                catchError((err) => {
                    this.requestErrors = err.error.error;

                    this.errorTimeout = setTimeout(() => {
                        this.requestErrors = null;
                    }, this.errorTimeoutDuration);

                    return [err];
                })
            )
            .subscribe(() => {
                this.userService.getCurrentUser().subscribe({
                    next: () => {
                        this.router.navigate(['/books/catalog']);
                    }
                });
            });
    }
}
