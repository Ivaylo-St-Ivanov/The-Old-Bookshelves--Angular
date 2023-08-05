import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthActivate } from '../core/guards/auth.activate';
import { path } from '../util/paths';

const routes: Routes = [
    {
        path: path.register,
        component: RegisterComponent
    },
    {
        path: path.login,
        component: LoginComponent
    },
    {
        path: path.userProfile,
        component: UserProfileComponent,
        canActivate: [AuthActivate]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
