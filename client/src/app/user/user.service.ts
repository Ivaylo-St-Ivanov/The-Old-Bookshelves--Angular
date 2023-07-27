import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

import { User } from '../types/User';
import { environment } from 'src/environments/environment.development';
import { APP_ID, REST_API_KEY } from '../util/constants';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnDestroy {
    private user$$ = new BehaviorSubject<User | undefined>(undefined);

    public user$ = this.user$$.asObservable();

    user: User | undefined;
    USER_KEY = '[user]';

    get isLogged(): boolean {
        return !!this.user;
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

    register(email: string, username: string, password: string, rePassword: string) {
        return this.http
            .post<User>(`${apiUrl}/users`, { email, username, password, rePassword },
                {
                    headers: {
                        ...this.HEADERS,
                        'Content-Type': 'application/json'
                    }
                })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    login(email: string, password: string) {
        return this.http
            .post<User>(`${apiUrl}/login`, { email, password }, { headers: this.HEADERS })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    logout() {
        return this.http
            .post<User>(`${apiUrl}/logout`, {}, { headers: this.HEADERS })
            .pipe(tap(() => this.user$$.next(undefined)));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
