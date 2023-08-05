import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { BooksService } from 'src/app/books/books.service';

import { Book } from 'src/app/types/Book';
import { User } from 'src/app/types/User';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    user: User | undefined;
    bookForSale: Book[] = [];
    isBooksForSale: boolean = false;

    constructor(private userService: UserService, private bookService: BooksService) { }

    ngOnInit(): void {
        this.getUserWithHisBooks();
    }

    getUserWithHisBooks(): void {
        this.userService.getCurrentUser().subscribe((user) => {
            this.user = user;

            const query = `where={"owner": {"__type":"Pointer","className":"_User","objectId":"${user.objectId}"}}`;
            this.bookService.getBooksByUser(query).subscribe((result) => {
                this.bookForSale = result.results;

                if (result.results.length > 0) {
                    this.isBooksForSale = true;
                }
            });
        });
    }
}