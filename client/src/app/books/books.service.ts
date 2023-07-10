import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const URL = 'https://parseapi.back4app.com/classes/UsedBook';
const appId = 'sHoFUCih1jGOaithEx5pZ0Ko7aPYyzNhyF2gVHsW';
const restApiKey = '1oWpcMtcWoMqXnhweM4Wb36dp9iAvRagC6E0thhm';

@Injectable({
    providedIn: 'root'
})
export class BooksService implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        //
    }

    getAllUsedBooks() {
        return this.http.get<any>(URL, {
            headers: {
                'X-Parse-Application-Id': appId,
                'X-Parse-REST-API-Key': restApiKey
            }
        });
    };
}
