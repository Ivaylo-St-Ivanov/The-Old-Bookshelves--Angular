import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsedBooksComponent } from './used-books/used-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { path } from '../util/paths';
import { SellBookComponent } from './sell-book/sell-book.component';

const routes: Routes = [
    {
        path: path.usedBook,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: UsedBooksComponent
            },
            {
                path: path.bookDetails,
                component: BookDetailsComponent
            }
        ]
    },
    {
        path: path.sellBook,
        component: SellBookComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule { }
