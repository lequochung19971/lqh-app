import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataResponse } from '@core/interfaces-abstracts/data-response.interface';
import { ProxyMetaParams } from '@core/interfaces-abstracts/proxy-meta-params.interface';
import { AppConfigService } from '@core/services/app-config.service';
import * as logger from '@shared/services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  private endpoint: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'auth-token'
    }),

    params: new HttpParams(),
  };

  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService
  ) {
    this.endpoint = this.appConfigService.getBaseUrl();
  }

  post<T>(url: string, dataModel: T | any): Observable<DataResponse<T> | T> {
    if (dataModel) {
      // // this.loadingService.open();
      const jsonData = JSON.stringify(dataModel);
      url = `${this.endpoint}${url}`;

      return this.http.post<DataResponse<T>>(url, jsonData, this.httpOptions).pipe(
        catchError(this.handleError),
        tap((res: DataResponse<T> | T | any) => {
          // // this.loadingService.close();
          return res;
        })
      );
    }
  }

  put<T>(url: string, dataModel: T | any): Observable<T | T[] | DataResponse<T>> {
    if (dataModel) {
      // // this.loadingService.open();
      const jsonData = JSON.stringify(dataModel);
      url = `${this.endpoint}${url}`;
      return this.http.put<T>(url, jsonData, this.httpOptions).pipe(
        tap((res: T[] | any) => {
          logger.log(res);
          // this.loadingService.close();
          return res;
        })
      );
    }
  }

  get<T>(
    url: string,
    query?: HttpParams | string | any,
    meta?: ProxyMetaParams,
  ): Observable<T | T[] | any | DataResponse<T>> {
    // this.loadingService.open();
    const httpOpts = Object.assign({}, this.httpOptions);

    if (meta && meta.fullResponse) {
      // tslint:disable-next-line:no-string-literal
      httpOpts['observe'] = 'response';
    }

    url = `${this.endpoint}${url}`;
    httpOpts.params = this.createParams(query);

    return this.http.get<T[] | T>(url, httpOpts).pipe(
      catchError(this.handleError),
      tap((res: T[] | T) => {
        logger.log(res);
        // this.loadingService.close();
        return res;
      })
    );
  }

  delete<T>(model: T | any, dataModel: T | any): Observable<T | T[]> {
    if (dataModel) {
      const url = `${this.endpoint}${model.tableName}/${dataModel._id}`;

      return this.http.delete<T | T[]>(url, this.httpOptions).pipe(
        catchError(this.handleError),
        tap((res: T[] | any) => {
          // this.loadingService.close();
          logger.log(res);
          return res;
        })
      );
    }
  }

  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
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
}
