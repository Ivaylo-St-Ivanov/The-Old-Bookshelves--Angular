import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
    requestErrors: string | null = null;
    errorTimeout: any;
    errorTimeoutDuration: number = 3000;

    ngOnDestroy(): void {
        if (this.errorTimeout) {
            clearTimeout(this.errorTimeout);
        }
    }

    constructor(private userService: UserService, private router: Router) { }

    submitHandler(form: NgForm): void {

        const { email, password } = form.value;

        if (email == '' || password == '') {
            this.requestErrors = 'All fields are required!';

            this.errorTimeout = setTimeout(() => {
                this.requestErrors = null;
            }, this.errorTimeoutDuration);

            throw new Error(this.requestErrors);
        }

        if (form.invalid) {
            return;
        }

        this.userService.login(email, password)
            .pipe(
                catchError((err) => {
                    this.requestErrors = err.error.error;

                    this.errorTimeout = setTimeout(() => {
                        this.requestErrors = null;
                    }, this.errorTimeoutDuration);

                    return err;
                })
            )
            .subscribe(() => {
                this.router.navigate(['/books/catalog']);
            });
    }
}
