import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/types/User';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private userService: UserService) { }

    submitHandler(form: NgForm): void {
        const value: User = form.value;

        this.userService.login();
        
        form.setValue({ email: '', password: '' });
    }
}
