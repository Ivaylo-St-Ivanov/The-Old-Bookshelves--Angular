import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/types/Book';

import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';
import { BooksService } from '../books.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-used-books',
    templateUrl: './used-books.component.html',
    styleUrls: ['./used-books.component.css']
})
export class UsedBooksComponent implements OnInit {
    booksList: Book[] = [];
    isEmptyBookList: boolean = false;
    hovered: string = '';

    constructor(private booksService: BooksService, public globalLoaderService: GlobalLoaderService) { }

    ngOnInit(): void {
        this.loadAllUsedBooks();
    };

    loadAllUsedBooks(): void {
        this.globalLoaderService.showLoader();

        setTimeout(() => {
            this.booksService.getAllUsedBooks().subscribe((books) => {
                this.booksList = books.results;
                this.globalLoaderService.hideLoader();
            });
        }, 2500);
    }

    searchSubmitHandler(form: NgForm): void {
        this.isEmptyBookList = false;
        const { search } = form.value;

        this.booksService.getAllUsedBooks().subscribe((books) => {
            this.booksList = books.results;
            let results;

            results = this.booksList.filter(b => b.author.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

            if (results.length == 0) {
                results = this.booksList.filter(b => b.bookName.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
            }
            if (results.length == 0) {
                this.isEmptyBookList = true;
            }
            this.booksList = results;

            form.setValue({
                search: ''
            });
        });
    }

    setHovered(bookId: string) {
        this.hovered = bookId;
    }
};
