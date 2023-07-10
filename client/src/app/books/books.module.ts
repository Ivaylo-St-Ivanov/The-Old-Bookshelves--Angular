import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsedBooksComponent } from './used-books/used-books.component';

@NgModule({
    declarations: [
        UsedBooksComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        UsedBooksComponent
    ]
})
export class BooksModule { }
