import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";


export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedRequest = req.clone({headers: req.headers.append('new-header', 'value')}); //Add API key
        return next.handle(modifiedRequest).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log('Response arrived, body data: ', event.body)
            }
        }));
    }
}