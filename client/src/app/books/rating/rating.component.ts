import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';
import { addBoughtBy, addOwner } from 'src/app/util/util';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
    stars: number[] = [1, 2, 3, 4, 5];
    selectedValue: number = 0;
    book: any = {};
    user: any = {};

    constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService, private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.bookService.book$.subscribe((value) => {
            this.selectedValue = value.rating;
            this.book = value;
        });

        this.userService.user$.subscribe((value) => {
            this.user = value;
        });
    }

    onClickStar(star: number): void {
        this.selectedValue = star;

        const bookId = this.activatedRoute.snapshot.params['bookId'];
        const userId = this.user.objectId;
        
        const { bookName, imageUrl, author, cover, coverPrice, price, description, rating, used, owner, boughtBy } = this.book;

        const newRate = Math.ceil((star + rating) / 2);
        
        const newBookData = {
            bookName,
            imageUrl,
            author,
            cover,
            coverPrice,
            price,
            description,
            used,
            rating: newRate
        }

        let options; 

        if (owner?.objectId == userId) {
            options = addOwner(newBookData, userId);
        } else if (boughtBy?.objectId == userId) {
            options = addBoughtBy(newBookData, userId);
        } else {
            options = newBookData;
        }

        this.bookService.editBookById(bookId, options).subscribe(() => {
            this.router.navigate([`/books/catalog/${bookId}/details`]);
        });
    }
}
