import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IHttpOptions {
  headers?: HttpHeaders | {
    [header: string]: string | Array<string>;
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | Array<string>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export enum CustomHttpParams {
  LoaderMessage = 'loaderMessage',
}

@Injectable()
export class HttpService {
  private api: string = environment.api;

  constructor(private http: HttpClient) { }

  get(endpoint: string, options?: IHttpOptions): Observable<any> {
    return this.http
      .get(this.api + endpoint, options)
      .pipe(map((response: any) => response));
  }

  post(endpoint: string, body: any, options?: IHttpOptions): Observable<any> {
    return this.http
      .post(this.api + endpoint, body, options)
      .pipe(map((response: any) => response));
  }
}
