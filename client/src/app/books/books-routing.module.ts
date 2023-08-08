import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsedBooksComponent } from './used-books/used-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { path } from '../util/paths';
import { SellBookComponent } from './sell-book/sell-book.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { GuardPageComponent } from './guard-page/guard-page.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
    {
        path: path.booksCatalog,
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
        component: SellBookComponent,
        canActivate: [AuthActivate]
    },
    {
        path: path.editBook,
        component: EditBookComponent,
        canActivate: [AuthActivate]
    },
    {
        path: path.guardPage,
        component: GuardPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule { }
