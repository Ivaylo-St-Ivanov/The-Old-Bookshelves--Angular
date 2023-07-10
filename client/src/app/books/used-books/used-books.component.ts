import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/types/Book';

import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';
import { BooksService } from '../books.service';

@Component({
    selector: 'app-used-books',
    templateUrl: './used-books.component.html',
    styleUrls: ['./used-books.component.css']
})
export class UsedBooksComponent implements OnInit {
    booksList: Book[] = [];

    constructor(private booksService: BooksService, public globalLoaderService: GlobalLoaderService) { }

    ngOnInit(): void {
        this.globalLoaderService.showLoader();

        setTimeout(() => {
            this.booksService.getAllUsedBooks().subscribe((books) => {
                this.booksList = books.results;
                this.globalLoaderService.hideLoader();
            });
        }, 2500);
    };
};
