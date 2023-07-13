import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MinLengthDirective } from './min-length.directive';
import { ValidateEmailDirective } from './validate-email.directive';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        MinLengthDirective,
        ValidateEmailDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class UserModule { }
