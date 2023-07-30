import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";

import { USER_KEY } from './util/constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem(USER_KEY);
        
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('X-Parse-Session-Token', token)
            });

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}