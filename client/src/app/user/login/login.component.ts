import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/types/User';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private userService: UserService, private router: Router) { }

    submitHandler(form: NgForm): void {
        if (form.invalid) {
            return
        }
        
        const value: User = form.value;

        this.userService.login();
        this.router.navigate(['/books/used-books']);
        
        form.setValue({ email: '', password: '' });
    }
}
