import { NotificationMessageService } from './../services/notification-message.service';
import { NtContextService } from './../services/nt-context.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from "rxjs/operators";
import { NtAuthenticationService } from '../services/nt-authentication.service';
import { NotificationMessage } from '../models/NotificationMessage';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor( private router:Router,
      private authService:NtAuthenticationService,
      private appContext: NtContextService, private notificationMessage: NotificationMessageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable< HttpEvent<any>> {
      let authReq = req;

      if(req.url != this.appContext.AUTHENTICATE_USER){
        if(this.appContext.authenticationDetails != null)
        {
          authReq = this.addToken(authReq,this.appContext.authenticationDetails.jwt,this.appContext.authenticationDetails.username)
        }else{
          // this.authService.reload();
        }
      }

      this.appContext.showProgressBar = this.appContext.showProgressBar + 2;
      return next.handle(authReq).pipe(tap(
                                  event => this.handleResponse(req, event),
                                  error => this.handleResponse(req, error)
                                ));
    }

    private addToken(request: HttpRequest<any>, token: string, username: string) {
      return request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
          'username': username
        }
      });
    }

    handleResponse(req: HttpRequest<any>, event: any) {

      // debugger;
      this.appContext.showProgressBar = this.appContext.showProgressBar - 1;
      if (event instanceof HttpResponse) {
        // if(event.body.errors ){
        //   snackBarData.message = event.body.message;
        //   this.snackBarService.error(snackBarData);
        // }
        console.log('Request for ', req.url,
            ' Response Status ', event.status,
            ' Response StatusText ', event.statusText,
            ' With body ', event.body);
      }
      if (event instanceof HttpErrorResponse) {
        let snackBarData = new NotificationMessage();
          snackBarData.showOkButton = false;
          // snackBarData.message = null;
          if(event.message)
            snackBarData.message = event.message;

          if(snackBarData.message==null && event.statusText)
            snackBarData.message = event.status +" : "+ event.statusText;

          if(snackBarData.message==null && event.error && event.error.errorCode && event.error.errorMsg)
            snackBarData.message = event.error.errorCode +" : "+ event.error.errorMsg;



        this.notificationMessage.error(snackBarData);

        console.log('Request for ', req.url,
            ' Error Response Status ', event.status,
            ' Error Response StatusText ', event.statusText,
            ' Error ', event.error.error,
            ' Error description ', event.error.message);

        if(this.appContext.authenticationDetails != null && req.url
          && req.url!=null && req.url.includes(this.appContext.AUTHENTICATE_USER)){
          this.authService.reload();
        }

      }
    }

}

