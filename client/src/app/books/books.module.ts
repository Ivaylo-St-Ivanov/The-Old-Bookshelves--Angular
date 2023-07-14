import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsedBooksComponent } from './used-books/used-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SellBookComponent } from './sell-book/sell-book.component';

@NgModule({
    declarations: [
        UsedBooksComponent,
        BookDetailsComponent,
        SellBookComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        UsedBooksComponent,
        BookDetailsComponent,
        SellBookComponent
    ]
})
export class BooksModule { }
