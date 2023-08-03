import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

import { User } from '../types/User';
import { environment } from 'src/environments/environment.development';
import { APP_ID, REST_API_KEY, USER_KEY } from '../util/constants';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnDestroy {
    private user$$ = new BehaviorSubject<User | undefined>(undefined);

    public user$ = this.user$$.asObservable();

    user: User | undefined;

    get isLogged(): boolean {
        if (localStorage.getItem(USER_KEY) != null) {
            return true;
        }
        return false;
    }

    subscription: Subscription;

    constructor(private http: HttpClient) {
        this.subscription = this.user$.subscribe((user) => {
            this.user = user;
        });
    }

    HEADERS = {
        'X-Parse-Application-Id': APP_ID,
        'X-Parse-REST-API-Key': REST_API_KEY,
        'X-Parse-Revocable-Session': '1'
    }

    register(email: string, username: string, password: String) {
        return this.http
            .post<User>(`${apiUrl}/users`, { email, username, password },
                {
                    headers: {
                        ...this.HEADERS,
                        'Content-Type': 'application/json'
                    }
                })
            .pipe(tap((user) => localStorage.setItem(USER_KEY, user.sessionToken)));
    }

    login(email: string, password: string) {
        return this.http
            .post<User>(`${apiUrl}/login`, { email, password }, { headers: this.HEADERS })
            .pipe(tap((user) => localStorage.setItem(USER_KEY, user.sessionToken)))
            .pipe(tap((user) => this.user$$.next(user)));
    }

    logout() {
        return this.http
            .post<User>(`${apiUrl}/logout`, {}, { headers: this.HEADERS })
            .pipe(tap(() => localStorage.removeItem(USER_KEY)))
            .pipe(tap(() => this.user$$.next(undefined)));
    }

    getCurrentUser() {
        return this.http
            .get<User>(`${apiUrl}/users/me`, { headers: this.HEADERS })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
