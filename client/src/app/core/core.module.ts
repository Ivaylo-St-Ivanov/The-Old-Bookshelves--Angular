import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { Page404Component } from './page404/page404.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent,
        Page404Component,
        GlobalLoaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent,
        Page404Component,
        GlobalLoaderComponent
    ]
})
export class CoreModule { }
