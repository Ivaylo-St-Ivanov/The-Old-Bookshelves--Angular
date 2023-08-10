import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/types/User';

import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';

@Component({
    selector: 'app-sell-book',
    templateUrl: './sell-book.component.html',
    styleUrls: ['./sell-book.component.css']
})
export class SellBookComponent implements OnInit {
    user: User | undefined;

    constructor(private bookService: BooksService, private router: Router, private userService: UserService) { }

    ngOnInit(): void {
        this.userService.user$.subscribe((user) => {
            this.user = user;
        });
    }

    sellBookSubmitHandler(form: NgForm): void {
        if (form.invalid) {
            return;
        }

        const { imageUrl, bookName, author, cover, coverPrice, price, description } = form.value;
        const used = true;
        const userId = this.user?.objectId as string;

        this.bookService.createBook({ imageUrl, bookName, author, cover, coverPrice, price, description, used }, userId).subscribe(() => {
            this.router.navigate(['/books/catalog']);
        });
    }
}
