import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { User } from '../types/User';

const { apiUrl } = environment;

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

    register(email: string, username: string, password: string, rePassword: string) {
        return this.http
            .post(`${apiUrl}/users`, { email, username, password, rePassword },
                {
                    headers: {
                        'X-Parse-Application-Id': 'sHoFUCih1jGOaithEx5pZ0Ko7aPYyzNhyF2gVHsW',
                        'X-Parse-REST-API-Key': '1oWpcMtcWoMqXnhweM4Wb36dp9iAvRagC6E0thhm',
                        'X-Parse-Revocable-Session': '1',
                        'Content-Type': 'application/json'
                    }
                });
    }

    login(email: string, password: string) {
        return this.http
            .post(`${apiUrl}/login`, { email, password },
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
