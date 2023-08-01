import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsedBooksComponent } from './used-books/used-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SellBookComponent } from './sell-book/sell-book.component';
import { GuardPageComponent } from './guard-page/guard-page.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
    declarations: [
        UsedBooksComponent,
        BookDetailsComponent,
        SellBookComponent,
        GuardPageComponent,
        EditBookComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        UsedBooksComponent,
        BookDetailsComponent,
        SellBookComponent,
        GuardPageComponent,
        EditBookComponent
    ]
})
export class BooksModule { }
