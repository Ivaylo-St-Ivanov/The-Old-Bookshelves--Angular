import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsedBooksComponent } from './used-books/used-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
    declarations: [
        UsedBooksComponent,
        BookDetailsComponent
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
