import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: any) => {
        let errorMesagge = '';
        let errorType = '';
        if (err instanceof ErrorEvent) {
          errorType = "Client side error"
          errorMesagge = `${err.error}: ${err.message}`;
          this.toastr.error(errorMesagge, errorType, { closeButton: true });
        } else {
          errorType = "Server side error"
          errorMesagge = `${err.status}: ${err.error.msg}`;
          this.toastr.error(errorMesagge, errorType, { closeButton: true });
        }
        return throwError(() => err);
      })
    );
  }
}
