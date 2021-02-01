import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataResponse } from '@core/interfaces-abstracts/data-response.interface';
import { AppConfigService } from '@core/services/app-config.service';
import * as logger from '@shared/services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  private endpoint: string;

  private _httpOptions = {
    headers: new HttpHeaders({})
  };

  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService
  ) {
    this.endpoint = this.appConfigService.getBaseUrl();
  }

  post<T>(url: string, body: T | any, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: string;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: string;
    withCredentials?: boolean;
  }): Observable<T> {
    const httpOptions = options ? this.createHttpOption(options) : this._httpOptions;

    if (body) {
      // // this.loadingService.open();
      url = `${this.endpoint}${url}`;

      return this.http.post<T>(url, body, httpOptions).pipe(
        catchError(this.handleError),
        tap((res: T) => {
          // // this.loadingService.close();
          return res;
        })
      );
    }
  }

  put<T>(url: string, body: T | any, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: string;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: string;
    withCredentials?: boolean;
  }): Observable<T> {
    const httpOptions = options ? this.createHttpOption(options) : this._httpOptions;

    if (body) {
      // // this.loadingService.open();
      url = `${this.endpoint}${url}`;
      return this.http.put<T>(url, body, httpOptions).pipe(
        tap((res: T) => {
          logger.log(res);
          // this.loadingService.close();
          return res;
        })
      );
    }
  }

  get<T>(
    url: string,
    options?: {
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      observe?: string;
      params?: HttpParams | {
          [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: string;
      withCredentials?: boolean;
    }
  ): Observable<T> {
    const httpOptions = options ? this.createHttpOption(options) : this._httpOptions;
    // this.loadingService.open();

    url = `${this.endpoint}${url}`;

    return this.http.get<T>(url, httpOptions).pipe(
      tap((res: any) => {
        logger.log(res);
        // this.loadingService.close();
        return res;
      })
    );
  }

  delete<T>(url: string, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: string;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: string;
    withCredentials?: boolean;
  }): Observable<DataResponse<T>> {
    const httpOptions = options ? this.createHttpOption(options) : this._httpOptions;
    url = `${this.endpoint}${url}`;
    return this.http.delete<T>(url, httpOptions).pipe(
      catchError(this.handleError),
      tap((res: T[] | any) => {
        // this.loadingService.close();
        logger.log(res);
        return res;
      })
    );
  }

  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    let errorMessage = '';
    if (error?.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `ON BACKEND: ${error.message}`;
    }
    // return an observable with a user-facing error message
    logger.error(errorMessage);
    return throwError(error);
  }

  private createParams(query: HttpParams | string | any): HttpParams {
    let newParams = new HttpParams();

    if (typeof query === 'string') {
      let stringParams = new HttpParams();
      const splitQuery = query.split('&');

      splitQuery.forEach((param) => {
        const pairOfKeyValue = param.split('=');
        stringParams = stringParams.set(pairOfKeyValue[0], pairOfKeyValue[1]);
      });

      newParams = stringParams;
    } else if (typeof query === 'object') {
      Object.keys(query).forEach((key) => {
        newParams = newParams.set(key, query[key]);
      });
    } else if (query instanceof HttpParams) {
      newParams = query;
    }

    return newParams;
  }

  private createHttpOption(options: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: string;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: string;
    withCredentials?: boolean;
  }): object {
    const httpOptions: any = {...this._httpOptions};
    if (options.headers) {
      httpOptions.headers = options.headers;
    }
    if (options.observe) {
      httpOptions.observe = options.observe;
    }
    if (options.params) {
      httpOptions.params = this.createParams(options.params);
    }
    if (options.reportProgress) {
      httpOptions.reportProgress = options.reportProgress;
    }
    if (options.responseType) {
      httpOptions.responseType = options.responseType;
    }
    if (options.withCredentials) {
      httpOptions.withCredentials = options.withCredentials;
    }
    return httpOptions;
  }
}

export enum ContentType {
  json = 'application/json',
}
