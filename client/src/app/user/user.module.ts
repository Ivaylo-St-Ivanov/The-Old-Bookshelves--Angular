import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ValidateEmailDirective } from './validate-email.directive';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        ValidateEmailDirective,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class UserModule { }
