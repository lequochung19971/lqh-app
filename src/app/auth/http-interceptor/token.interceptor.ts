import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Tokens } from '@core/interfaces-abstracts/tokens.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private _isRefreshing = false;
  private _refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(protected authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const currenJwtToken = this.authService.getJwtToken();
    if (currenJwtToken) {
      request = this.addToken(request, currenJwtToken);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this._isRefreshing) {
      this._isRefreshing = true;
      this._refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe (
        switchMap((tokens: Tokens) => {
          this._isRefreshing = false;
          this._refreshTokenSubject.next(tokens.jwtToken);
          return next.handle(this.addToken(request, tokens.jwtToken));
        })
      );
    }

    return this._refreshTokenSubject.pipe (
      filter((tokens: Tokens) => tokens !== null),
      take(1),
      switchMap((tokens) => {
        return next.handle(this.addToken(request, tokens.jwtToken));
      })
    );
  }
  
  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
