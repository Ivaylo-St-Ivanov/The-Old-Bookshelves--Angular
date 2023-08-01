import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/types/Book';

import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: Book | undefined;
    isOwner: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService, private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.getBook();
    }

    getBook(): void {
        const id = this.activatedRoute.snapshot.params['bookId'];

        this.userService.getCurrentUser().subscribe((user) =>
            this.bookService.getUsedBookById(id).subscribe((book) => {
                if (user.objectId == book.owner?.objectId) {
                    this.isOwner = true;
                }        
                
                this.book = book;
            }));
    }

    onEditClick() {
        const id = this.activatedRoute.snapshot.params['bookId'];

        this.router.navigate([`/books/${id}/edit-book`]);
    }

    onDeleteClick() {
        const id = this.activatedRoute.snapshot.params['bookId'];

        this.bookService.deleteBook(id).subscribe({
            next: () => {
                this.router.navigate(['/books/used-books']);
            }
        });
    }
}
