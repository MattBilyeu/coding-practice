import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { TestServiceService } from "./test-service.service";

@Injectable()
export class TestInterceptorService implements HttpInterceptor {

    constructor(private testService: TestServiceService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req)
    }
}