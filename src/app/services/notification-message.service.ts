import { NtContextService } from './nt-context.service';
import { NotificationMessageComponent } from './../dialogues/notification-message/notification-message.component';
import { MatSnackBarRef, MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { NotificationMessage } from '../models/NotificationMessage';

@Injectable({
  providedIn: 'root'
})
export class NotificationMessageService {


  public NOTIFICATION_DEFAULT_DURATION: number = 2000; // 2 sec
  constructor(private snackBar: MatSnackBar, private appContext: NtContextService) { }

  getMatSnackBarConfig(){
    let matSnackBarConfig = new MatSnackBarConfig();
    matSnackBarConfig.verticalPosition = 'bottom';
    matSnackBarConfig.horizontalPosition = 'left';
    matSnackBarConfig.duration = this.NOTIFICATION_DEFAULT_DURATION;
    return matSnackBarConfig;
  }

  public info(snackBarData: NotificationMessage){
    let matSnackBarConfig = this.getMatSnackBarConfig();
    matSnackBarConfig.data = snackBarData;
    matSnackBarConfig.panelClass = 'snack-bar-background-success';
    if(snackBarData.duration && snackBarData.duration!=null && snackBarData.duration > 0)
      matSnackBarConfig.duration = snackBarData.duration;
    if(this.appContext.snackBarRef && this.appContext.snackBarRef!=null)
      this.appContext.snackBarRef.dismiss();
    this.appContext.snackBarRef = this.snackBar.openFromComponent(NotificationMessageComponent,matSnackBarConfig);
  }

  public error(snackBarData: NotificationMessage){
    let matSnackBarConfig = this.getMatSnackBarConfig();
    matSnackBarConfig.data = snackBarData;
    matSnackBarConfig.panelClass = 'snack-bar-background-error';
    // if(snackBarData.duration && snackBarData.duration!=null && snackBarData.duration > 0)
    //   matSnackBarConfig.duration = snackBarData.duration;
    if(this.appContext.snackBarRef && this.appContext.snackBarRef!=null)
      this.appContext.snackBarRef.dismiss();
    this.appContext.snackBarRef = this.snackBar.openFromComponent(NotificationMessageComponent,matSnackBarConfig);
  }
}
