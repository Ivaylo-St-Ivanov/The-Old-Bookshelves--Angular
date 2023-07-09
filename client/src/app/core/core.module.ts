import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsedBooksComponent } from './used-books/used-books.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent,
        UsedBooksComponent,
        Page404Component
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent,
        UsedBooksComponent,
        Page404Component
    ]
})
export class CoreModule { }
