import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../types/Book';
import { environment } from 'src/environments/environment.development';
import { APP_ID, REST_API_KEY } from '../util/constants';
import { addOwner } from '../util/util';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class BooksService {

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
        return this.http.get<Book>(`${apiUrl}/classes/UsedBook/${bookId}`, { headers: this.HEADERS });
    };

    getBooksByUser(query: string) {
        return this.http.get<any>(`${apiUrl}/classes/UsedBook?${query}`, { headers: this.HEADERS });
    }

    editBookById(data: object, bookId: string, userId: string) {
        return this.http.put<Book>(`${apiUrl}/classes/UsedBook/${bookId}`, addOwner(data, userId),
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
};
