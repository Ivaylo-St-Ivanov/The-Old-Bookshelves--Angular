import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Store } from '@ngrx/store';

import { Book } from 'src/app/types/Book';
import { User } from 'src/app/types/User';

import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

import { USER_KEY } from 'src/app/util/constants';

// import { setData, getData } from 'src/app/store/action';
// import { getBoughtBook } from 'src/app/store/selector';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: Book | undefined;
    user: User | undefined;
    isAuthenticated: boolean = false;
    isOwner: boolean = false;
    isDeleteClick: boolean = false;
    isCancelClick: boolean = false;
    isBought: boolean = false;
    // boughtBook$ = this.store.select(getBoughtBook);

    constructor(private globalLoaderService: GlobalLoaderService, private activatedRoute: ActivatedRoute, private bookService: BooksService, private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.userService.user$.subscribe((user) => {
            this.user = user;
        });

        this.getBook();

        const token = localStorage.getItem(USER_KEY);
        if (token) {
            this.isAuthenticated = true;
        }
    }

    getBook(): void {
        this.globalLoaderService.showLoader();
        
        const bookId = this.activatedRoute.snapshot.params['bookId'];

        const token = localStorage.getItem(USER_KEY);

        if (token) {
            this.userService.getCurrentUser().subscribe((user) =>
                this.bookService.getUsedBookById(bookId).subscribe((book) => {
                    if (user.objectId == book.owner?.objectId) {
                        this.isOwner = true;
                    }
                    if (book.boughtBy != undefined) {
                        this.isBought = true;
                    }

                    this.book = book;
                    this.globalLoaderService.hideLoader();
                }));
        } else {
            this.bookService.getUsedBookById(bookId).subscribe((book) => {

                this.book = book;
                this.globalLoaderService.hideLoader();
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

        this.bookService.deleteBook(bookId).subscribe(() => {
            this.router.navigate(['/books/catalog']);
        });
    }

    onBuyClick() {
        const bookId = this.activatedRoute.snapshot.params['bookId'];
        const userId = this.user?.objectId as string;

        const { bookName, imageUrl, author, cover, coverPrice, price, description } = this.book as Book;

        // const data = [
        //      userId, { bookName, imageUrl, author, cover, coverPrice, price, description }
        // ]
        // this.store.dispatch(setData({ collection: data}));
        // console.log(this.store.dispatch(getData()));
        
        this.bookService.buyBook({ bookName, imageUrl, author, cover, coverPrice, price, description }, bookId, userId).subscribe(() => {
            this.router.navigate(['/books/catalog']);
        });
    }
}
