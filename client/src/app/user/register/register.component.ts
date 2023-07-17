import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    
    registerSubmitHandler(form: NgForm): void {
        if (form.invalid) {
            return;
        }
    }
}
