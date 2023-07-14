import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsedBooksComponent } from './used-books/used-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SellBookComponent } from './sell-book/sell-book.component';
import { GuardPageComponent } from './guard-page/guard-page.component';

@NgModule({
    declarations: [
        UsedBooksComponent,
        BookDetailsComponent,
        SellBookComponent,
        GuardPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        UsedBooksComponent,
        BookDetailsComponent,
        SellBookComponent,
        GuardPageComponent
    ]
})
export class BooksModule { }
