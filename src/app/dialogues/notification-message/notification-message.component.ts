import { NtContextService } from './../../services/nt-context.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NotificationMessageService } from '../../services/notification-message.service';
import { NotificationMessage } from '../../models/NotificationMessage';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss']
})
export class NotificationMessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public snackBarData: NotificationMessage,
  private appContext:NtContextService ) { }

  ngOnInit() {
  }

  onOkClick(){
    this.appContext.snackBarRef.dismiss();
  }

}
