import { NotificationMessageComponent } from './../dialogues/notification-message/notification-message.component';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class NtContextService {

  public showProgressBar:number = 0;
  public snackBarRef!:MatSnackBarRef<NotificationMessageComponent>;
  public authenticationDetails!: User;

  public SESSION_EXPIRE_DIALOG_TIME:number = 300000; // milliseconds - 5 mins
  public SESSION_EXPIRATION_TIME:number = 900; // secs - 15 mins
  public REFRESH_TOKEN_INTERVAL:number = 540000 // milliseconds - 9 mins;

  public SAVE_USER:string = environment.hostname + "/ntmsvc/member/create/member";
  public AUTHENTICATE_USER:string = environment.hostname + "/authsvc/authenticate";
  public REFRESH_USER_TOKEN:string = environment.hostname + "/authsvc/refreshToken";

  constructor() { }
}
