import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    passwordsMatching: boolean = false;

    matchPasswordsValidator(form: NgForm) {
        if (form.value.password == form.value.repeatPassword) {
            this.passwordsMatching = true;
        } else {
            this.passwordsMatching = false;
        }
    }

    constructor(private userService: UserService, private router: Router) {}
    
    registerSubmitHandler(form: NgForm): void {
        if (form.invalid) {
            return;
        }

        const { email, username, password, rePassword } = form.value;

        this.userService.register(email!, username!, password!, rePassword!).subscribe(() => {
            this.userService.getCurrentUser().subscribe({
                next: () => {
                    this.router.navigate(['/books/used-books']);
                }
            });
        });
    }
}
