import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError,  throwError } from 'rxjs';
import { AuthService } from './auth.service';

export class ErrorInterceptor implements HttpInterceptor {
  router: Router
  httpClient: HttpClient
  authService: AuthService

  constructor() {
    this.authService = new AuthService(this.router, this.httpClient)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const { message } = error.error.error
        // {"error":{"statusCode":401,"name":"UnauthorizedError","message":"Error verifying token : jwt expired"}}
        if (error.status === 401 && message.includes('jwt expired')) {
          this.authService.logout()
        }

        return throwError(() => console.log(message))
      })
    )
  }

}