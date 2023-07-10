import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/types/Book';

import { BooksService } from '../books.service';

@Component({
    selector: 'app-used-books',
    templateUrl: './used-books.component.html',
    styleUrls: ['./used-books.component.css']
})
export class UsedBooksComponent implements OnInit {
    booksList: Book[] = [];

    constructor(private booksService: BooksService) { }

    ngOnInit(): void {
        this.booksService.getAllUsedBooks().subscribe((books) => {
            this.booksList = books.results;
        });
    };
};
