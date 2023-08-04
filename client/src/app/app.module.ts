import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { BooksRoutingModule } from './books/books-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticateComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        UserRoutingModule,
        BooksRoutingModule,
        AppRoutingModule,
        CoreModule,
        SharedModule
    ],
    providers: [appInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
