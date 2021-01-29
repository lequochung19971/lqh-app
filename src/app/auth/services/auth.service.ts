import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppConfigService } from '@core/services/app-config.service';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { ProxyService } from '../../shared/services/proxy.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Tokens } from '@core/interfaces-abstracts/tokens.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private _loggerAccount: string;

  constructor(
    protected proxy: ProxyService,
    protected appConfigService: AppConfigService
  ) { }

  login(account: {email: string, password: string}): Observable<boolean> {
    console.log(this._loggerAccount);
    const url = this.appConfigService.getLoginUrl();
    return this.proxy.post<boolean>(url, account).pipe(
      tap((tokens: any) => this.doLogin(account.email, tokens)),
      mapTo(true),
      catchError((error: HttpErrorResponse) => {
        alert(error.error);
        return throwError(error);
      })
    );
  }

  logout(): Observable<boolean> {
    return new Observable(subscribe => {
      this.doLogoutUser();
      subscribe.next(true);
      subscribe.complete();
    });
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  hasRefreshToken(): boolean {
    return !!this.getRefreshToken();
  }

  getJwtToken(): string {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  refreshToken(): Observable<any> {
    // if (!this.hasRefreshToken()) {
    //   return throwError(new HttpErrorResponse({error: {message: ''}}));
    // }
    const url = this.appConfigService.getRefreshTokenUrl();
    const refreshTokenModel = {
      refreshToken: this.getRefreshToken()
    };

    return this.proxy.post<any>(url, refreshTokenModel).pipe(
      tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwtToken);
    }));
  }
  
  removeTokens(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  private doLogoutUser(): void {
    this._loggerAccount = null;
    this.removeTokens();
  }

  private doLogin(accountName: string, tokens: Tokens): void {
    this._loggerAccount = accountName;
    this.storeToken(tokens);
  }

  private storeToken(tokens: Tokens): void {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwtToken);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private getRefreshToken(): string {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string): void {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }
}
