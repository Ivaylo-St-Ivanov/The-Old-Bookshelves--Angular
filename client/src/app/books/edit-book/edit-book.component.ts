import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';
import { addOwner } from 'src/app/util/util';

@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
    form = this.fb.group({
        bookName: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
        author: ['', [Validators.required]],
        cover: [''],
        coverPrice: [0, [Validators.required, Validators.min(0)]],
        price: [0, [Validators.required, Validators.min(0)]],
        description: ['']
    });
    book: any = {};
    user: any = {};
    rating: any = {};

    constructor(private fb: FormBuilder, private bookService: BooksService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.bookService.book$.subscribe((book) => {
            this.form.setValue({
                bookName: book.bookName,
                imageUrl: book.imageUrl,
                author: book.author,
                cover: book.cover,
                coverPrice: book.coverPrice,
                price: book.price,
                description: book.description
            });

            this.rating = book.rating
        });

        this.userService.user$.subscribe((user) => {
            this.user = user;
        });
    }

    onEditBookSubmit(): void {
        if (this.form.invalid) {
            return;
        }

        const { bookName, imageUrl, author, cover, coverPrice, price, description } = this.form.value;
        const bookId = this.activatedRoute.snapshot.params['bookId'];
        const userId = this.user.objectId;
        const rating = this.rating;
        const used = true;

        const options = addOwner({ bookName, imageUrl, author, cover, coverPrice, price, description, rating, used }, userId);

        this.bookService.editBookById(bookId, options).subscribe(() => {
            this.router.navigate([`/books/catalog/${bookId}/details`]);
        });
    }
}
