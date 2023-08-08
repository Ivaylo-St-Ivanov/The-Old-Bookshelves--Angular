import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/types/Book';

import { BooksService } from 'src/app/books/books.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    books: Book[] = [];

    constructor(private bookService: BooksService) {}

    ngOnInit(): void {
        this.getFiveBooksRandom();
    }

    getFiveBooksRandom() {
        this.bookService.getAllUsedBooks().subscribe((result) => {
            const all = result.results;

            const five = [];
            const previous: number[] = [];

            while (five.length < 5) {
                const random = Math.floor(Math.random() * all.length);

                if (previous.includes(random)) {
                    continue;
                }
                five.push(all[random]);
                previous.push(random);
            }

            this.books = five;
        });
    }
}
