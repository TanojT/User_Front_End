import { NtContextService } from './../../services/nt-context.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-session-expiration-dialog',
  templateUrl: './session-expiration-dialog.component.html',
  styleUrls: ['./session-expiration-dialog.component.scss']
})
export class SessionExpirationDialogComponent implements OnInit {

  userDisplayName:string = '';
   refreshTokenExpiresIn:string = '';
  private dialogCloseTimeoutSubscription! : Subscription;
  constructor(private dialogRef: MatDialogRef<SessionExpirationDialogComponent>,
              private appContext: NtContextService) {
                this.dialogRef.disableClose = true;
              }

  ngOnInit() {

    this.userDisplayName = this.appContext.authenticationDetails.firstName +" "+this.appContext.authenticationDetails.lastName;
    let dialogCloseTime = this.appContext.SESSION_EXPIRE_DIALOG_TIME;

    this.dialogCloseTimeoutSubscription = timer(0,1000).subscribe(secs =>{

      if(dialogCloseTime > 0){
        dialogCloseTime = dialogCloseTime - 1000;
        this.refreshTokenExpiresIn = this.convertMilliSecondsToMins(dialogCloseTime);
      }else{
        this.dialogCloseTimeoutSubscription.unsubscribe();
        this.dialogRef.close({cancelSession: true});
      }

    });

  }



  continue(): void{
    this.dialogCloseTimeoutSubscription.unsubscribe();
    this.dialogRef.close({cancelSession: false});
  }

  logout(): void{
    this.dialogCloseTimeoutSubscription.unsubscribe();
    this.dialogRef.close({cancelSession: true});
  }



  private convertMilliSecondsToMins(duration: any){

    // let milliseconds = (duration % 1000)/100;
    let seconds = parseInt(((duration/1000) % 60)+"");
    let minutes = parseInt(((duration/(1000*60))%60)+"");
    // let hours = (duration/(1000*60*60))%24;

    // let hoursStr = (hours < 10) ? "0" + hours : hours;
    let minutesStr = (minutes < 10) ? "0" + minutes : minutes;
    let secondsStr = (seconds < 10) ? "0" + seconds : seconds;

    return ( minutesStr + " min  " + secondsStr + " sec  ");
  }


}
