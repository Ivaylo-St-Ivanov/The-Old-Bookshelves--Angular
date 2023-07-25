import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../types/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User | undefined;
    USER_KEY = '[user]';

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) {
        try {
            const lsUser = localStorage.getItem(this.USER_KEY) || '';
            this.user = JSON.parse(lsUser);
        } catch (err) {
            this.user = undefined;
        }
    }

    login(email: string, password: string) {
        return this.http
            .post('/login', { email, password },
                {
                    headers: {
                        'X-Parse-Application-Id': 'sHoFUCih1jGOaithEx5pZ0Ko7aPYyzNhyF2gVHsW',
                        'X-Parse-REST-API-Key': '1oWpcMtcWoMqXnhweM4Wb36dp9iAvRagC6E0thhm',
                        'X-Parse-Revocable-Session': '1'
                    }
                });
    }

    logout(): void {
        this.user = undefined;
        localStorage.removeItem(this.USER_KEY);
    }
}
