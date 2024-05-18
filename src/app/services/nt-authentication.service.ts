import { SessionExpirationDialogComponent } from './../dialogues/session-expiration-dialog/session-expiration-dialog.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { Subscription, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {HttpClient} from "@angular/common/http";
import {NtContextService} from "./nt-context.service";
import {AuthenticationRequest} from "../models/AuthenticationRequest";
import { NotificationMessageService } from './notification-message.service';
import { NotificationMessage } from '../models/NotificationMessage';
import { MatDialog } from '@angular/material/dialog';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class NtAuthenticationService {
  private tokenRefreshTimerSubscription! : Subscription;
  private sessionTimeoutSubscription! : Subscription;
  public loggedInStatus!:string;

  constructor(private http: HttpClient,
              private bnIdle: BnNgIdleService,
              private dialog: MatDialog,
              private notificationMessage: NotificationMessageService,
              private appContext: NtContextService) { }

  public login(authRequest:AuthenticationRequest) {
    return this.http.post<User>(this.appContext.AUTHENTICATE_USER, authRequest);
  }

  public getAccessTokenByRefresh() {
    return this.http.get<User>(this.appContext.REFRESH_USER_TOKEN);
  }

  public corsTest() {
    return this.http.post<any>("https://vikrya-ms.herokuapp.com/user-security/ns/register-user",{
      email : 's@s.com'
    }).subscribe( data => {
      console.log(data);
    });
  }

  public invokeTokenRefreshTimer(){
    this.tokenRefreshTimerSubscription = timer(this.appContext.REFRESH_TOKEN_INTERVAL,this.appContext.REFRESH_TOKEN_INTERVAL).subscribe(time =>{
    console.log("refreshing the token");
    this.getAccessTokenByRefresh().subscribe(refreshedAuthDetails => {
        this.modifyContextAuthDetails(refreshedAuthDetails);
      });
    });
  }

  public modifyContextAuthDetails(authDetails: any){
      this.appContext.authenticationDetails = authDetails;
      this.loggedInStatus = "SUCCESS";
      let decodeValue = jwtDecode(authDetails.jwt);
      console.log(decodeValue);
      // this.appContext.authenticationDetails.roles = decodeValue.authorities;
      console.log(this.appContext.authenticationDetails.roles);
      // this.appContext.authenticationDetails.username = decodeValue.username;
  }


  public invokeSessionTimeoutTimer() {
    // initiate it in your component constructor
    let idDialogOpened = false;
    this.sessionTimeoutSubscription = this.bnIdle.startWatching(this.appContext.SESSION_EXPIRATION_TIME).subscribe((res) => {
      if(res) {
          console.log("session expired");
          if(!idDialogOpened){
            idDialogOpened = true;
            const dialogRef = this.dialog.open(SessionExpirationDialogComponent, {
              width: '500px',
              height: '200px',
            });

            dialogRef.afterClosed().subscribe(result => {

              if(result && result.cancelSession){
                this.bnIdle.stopTimer();
                this.reload();
              }else{
                idDialogOpened = false;
                this.bnIdle.resetTimer();
              }

            });

          }
      }
    })
  }

  public snackBarMessage(){
    let snackbarData = new NotificationMessage();
    snackbarData.message = "Welcome, "+ this.appContext.authenticationDetails.firstName + this.appContext.authenticationDetails.lastName + " !!!";
    // snackbarData.showOkButton = true;
    this.notificationMessage.info(snackbarData);
}

unSubscribeTimers(){
  if(this.tokenRefreshTimerSubscription)
    this.tokenRefreshTimerSubscription.unsubscribe();

  if(this.sessionTimeoutSubscription)
    this.sessionTimeoutSubscription.unsubscribe();

  // if(this.bnIdle)
  //   this.bnIdle.stopTimer();
}

  reload(){
    location.reload();
  }

}
