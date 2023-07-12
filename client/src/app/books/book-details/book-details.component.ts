import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'src/app/types/Book';

import { BooksService } from '../books.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: Book | undefined;

    constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService) {}

    ngOnInit(): void {
        this.getBook();
    }

    getBook(): void {
        const id = this.activatedRoute.snapshot.params['bookId'];

        this.bookService.getUsedBookById(id).subscribe((book) => {
            this.book = book;
        });
    }
}
