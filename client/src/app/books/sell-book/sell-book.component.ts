import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { BooksService } from '../books.service';

@Component({
    selector: 'app-sell-book',
    templateUrl: './sell-book.component.html',
    styleUrls: ['./sell-book.component.css']
})
export class SellBookComponent {
    constructor(private bookService: BooksService, private router: Router) { }

    sellBookSubmitHandler(form: NgForm): void {
        if (form.invalid) {
            return;
        }

        const { imageUrl, bookName, author, cover, coverPrice, price, description } = form.value;

        this.bookService.createBook(imageUrl, bookName, author, cover, coverPrice, price, description).subscribe(() => {
            this.router.navigate(['/books/used-books']);
        });
    }
}
