import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SnackbarType } from '@app/interfaces/snackbar.interface';

import { CustomHttpParams } from '@app/modules/shared/services/http.service';
import { LoaderService } from '@app/modules/shared/services/loader.service';
import { SnackbarService } from '@app/modules/shared/services/snackbar.service';

import { environment } from '@env/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService, private snackbarService: SnackbarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show(req.headers.get(CustomHttpParams.LoaderMessage));

    return next.handle(req).pipe(
      delay(environment.production ? 0 : 1000),
      catchError((error: HttpErrorResponse) => {
        this.snackbarService.add({
          message: error.message,
          type: SnackbarType.Error,
          closeable: true
        });

        return throwError(error);
      }),
      finalize(() => this.loaderService.hide(req.params.get(CustomHttpParams.LoaderMessage)))
    );
  }
}
