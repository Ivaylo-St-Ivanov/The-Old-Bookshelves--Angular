import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ValidateEmailDirective } from './validate-email.directive';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        ValidateEmailDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class UserModule { }
