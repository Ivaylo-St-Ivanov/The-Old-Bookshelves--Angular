import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent
    ]
})
export class CoreModule { }
