import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { BooksRoutingModule } from './books/books-routing.module';

import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        UserRoutingModule,
        BooksRoutingModule,
        AppRoutingModule,
        CoreModule,
        BooksModule,
        UserModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
