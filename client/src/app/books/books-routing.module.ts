import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsedBooksComponent } from './used-books/used-books.component';

import { path } from '../util/util';

const routes: Routes = [
    {
        path: path.usedBook,
        component: UsedBooksComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule { }
