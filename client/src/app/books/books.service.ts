import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from '../types/Book';

const URL = 'https://parseapi.back4app.com/classes/UsedBook';
const appId = 'sHoFUCih1jGOaithEx5pZ0Ko7aPYyzNhyF2gVHsW';
const restApiKey = '1oWpcMtcWoMqXnhweM4Wb36dp9iAvRagC6E0thhm';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(private http: HttpClient) { }

    getAllUsedBooks() {
        return this.http.get<any>(URL, {
            headers: {
                'X-Parse-Application-Id': appId,
                'X-Parse-REST-API-Key': restApiKey
            }
        });
    };

    getUsedBookById(id: number) {
        return this.http.get<Book>(`${URL}/${id}`, {
            headers: {
                'X-Parse-Application-Id': appId,
                'X-Parse-REST-API-Key': restApiKey
            }
        });
    };
};
