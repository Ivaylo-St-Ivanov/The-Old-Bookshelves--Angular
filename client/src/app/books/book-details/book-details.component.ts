import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/types/Book';

import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';

import { USER_KEY } from 'src/app/util/constants';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: Book | undefined;
    isAuthenticated: boolean = false;
    isOwner: boolean = false;
    isDeleteClick: boolean = false;
    isCancelClick: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService, private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.getBook();

        const token = localStorage.getItem(USER_KEY);
        if (token) {
            this.isAuthenticated = true;
        }
    }

    getBook(): void {
        const bookId = this.activatedRoute.snapshot.params['bookId'];

        const token = localStorage.getItem(USER_KEY);

        if (token) {
            this.userService.getCurrentUser().subscribe((user) =>
                this.bookService.getUsedBookById(bookId).subscribe((book) => {
                    if (user.objectId == book.owner?.objectId) {
                        this.isOwner = true;
                    }

                    this.book = book;
                }));
        } else {
            this.bookService.getUsedBookById(bookId).subscribe((book) => {

                this.book = book;
            });
        }
    }

    onEditClick() {
        const bookId = this.activatedRoute.snapshot.params['bookId'];

        this.router.navigate([`/books/${bookId}/edit-book`]);
    }

    onDeleteClick() {
        this.isDeleteClick = true;
    }

    onCancelClick() {
        this.isDeleteClick = false;
    }

    onDeleteConfirmation() {
        const bookId = this.activatedRoute.snapshot.params['bookId'];

        this.bookService.deleteBook(bookId).subscribe({
            next: () => {
                this.router.navigate(['/books/used-books']);
            }
        });
    }

    onBuyClick() {
        const bookId = this.activatedRoute.snapshot.params['bookId'];

        this.userService.getCurrentUser().subscribe((user) =>
            this.bookService.getUsedBookById(bookId).subscribe((book) => {
                const { bookName, imageUrl, author, cover, coverPrice, price, description } = book;

                this.bookService.buyBook({ bookName, imageUrl, author, cover, coverPrice, price, description }, bookId, user.objectId).subscribe({
                    next: () => {
                        this.router.navigate(['/books/used-books']);
                    }
                });
            }));
    }
}
