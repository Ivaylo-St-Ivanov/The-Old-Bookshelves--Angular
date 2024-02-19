import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/user/user.service';
import { BooksService } from '../books.service';

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
    selectedStars: any = {};

    constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService, private userService: UserService, private router: Router) { }

    @Output() toastMessageEvent = new EventEmitter<any>();

    sendDataToParent(toastMessage: string) {
        this.toastMessageEvent.emit(toastMessage);
    }

    ngOnInit(): void {
        this.bookService.book$.subscribe((value) => {
            this.selectedValue = value.rating;
            this.book = value;
            this.selectedStars = this.stars.slice(0, this.selectedValue);
        });

        this.userService.user$.subscribe((value) => {
            this.user = value;
        });
    }

    onClickStar(star: number): void {
        this.selectedValue = star;

        const bookId = this.activatedRoute.snapshot.params['bookId'];
        const userId = this.user.objectId;
        
        let { bookName, imageUrl, author, cover, coverPrice, price, description, rating, used, owner } = this.book;

        if (rating == undefined) {
            rating = 1;
        }
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
            rating: newRate,
            owner
        }

        this.bookService.editBookById(bookId, newBookData).subscribe(() => {
            let toastMessage = 'Successfully rated this book';
            this.sendDataToParent(toastMessage);

            this.router.navigate([`/books/catalog/${bookId}/details`]);
        });
    }
}
