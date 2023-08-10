import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

import { Book } from '../types/Book';
import { environment } from 'src/environments/environment.development';
import { APP_ID, REST_API_KEY } from '../util/constants';
import { addOwner, addBoughtBy } from '../util/util';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private book$$ = new BehaviorSubject<any>({});
    book$ = this.book$$.asObservable();

    constructor(private http: HttpClient) { }

    HEADERS = {
        'X-Parse-Application-Id': APP_ID,
        'X-Parse-REST-API-Key': REST_API_KEY
    }

    createBook(data: object, userId: string) {
        return this.http.post<Book>(`${apiUrl}/classes/UsedBook`, addOwner(data, userId),
            {
                headers: {
                    ...this.HEADERS,
                    'Content-Type': 'application/json'
                }
            });
    }

    getAllUsedBooks() {
        return this.http.get<any>(`${apiUrl}/classes/UsedBook`, { headers: this.HEADERS });
    };

    getUsedBookById(bookId: number) {
        return this.http
            .get<Book>(`${apiUrl}/classes/UsedBook/${bookId}`, { headers: this.HEADERS })
            .pipe(tap((book) => this.book$$.next(book)));
    };

    getBooksByUser(query: string) {
        return this.http.get<any>(`${apiUrl}/classes/UsedBook?${query}`, { headers: this.HEADERS });
    }

    editBookById(bookId: string, options: object) {
        return this.http.put<Book>(`${apiUrl}/classes/UsedBook/${bookId}`, options,
            {
                headers: {
                    ...this.HEADERS,
                    'Content-Type': 'application/json'
                }
            });
    }

    deleteBook(bookId: number) {
        return this.http.delete<Book>(`${apiUrl}/classes/UsedBook/${bookId}`, { headers: this.HEADERS });
    }

    buyBook(data: object, bookId: string, userId: string) {
        return this.http.put<any>(`${apiUrl}/classes/UsedBook/${bookId}`, addBoughtBy(data, userId),
            {
                headers: {
                    ...this.HEADERS,
                    'Content-Type': 'application/json'
                }
            });
    }
};
