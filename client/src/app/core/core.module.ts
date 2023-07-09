import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsedBooksComponent } from './used-books/used-books.component';
import { Page404Component } from './page404/page404.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent,
        UsedBooksComponent,
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
        UsedBooksComponent,
        Page404Component,
        GlobalLoaderComponent
    ]
})
export class CoreModule { }
