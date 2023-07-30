import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../types/Book';
import { environment } from 'src/environments/environment.development';
import { APP_ID, REST_API_KEY } from '../util/constants';

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

    createBook(imageUrl: string, bookName: string, author: string, cover: string, coverPrice: number, price: number, description: string) {
        return this.http.post<Book>(`${apiUrl}/classes/UsedBook`, { imageUrl, bookName, author, cover, coverPrice, price, description },
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

    getUsedBookById(id: number) {
        return this.http.get<Book>(`${apiUrl}/classes/UsedBook/${id}`, { headers: this.HEADERS });
    };
};
