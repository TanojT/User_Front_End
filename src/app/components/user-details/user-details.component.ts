import { UserDetailsScreen } from './../../models/UserDetailsScreen';
import { Component, Input, OnInit, Optional, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../models/User";
import { NtDataSubscriptionService } from '../../services/nt-data-subscription.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input("userDetailsScreen") userDetailsScreen!: UserDetailsScreen;

  constructor() {

  }

    ngOnInit() {
      if(this.userDetailsScreen == null){
        this.userDetailsScreen = new UserDetailsScreen();
        this.userDetailsScreen.createOrEdit = false;
        this.userDetailsScreen.listUserDetails = true;
        this.userDetailsScreen.showUserDetails = false;
        this.userDetailsScreen.loginScreen = false;
      }

    }



}

@Component({
  selector: 'app-list-user-details',
  templateUrl: './list-user-details.component.html',
  styleUrls: ['./list-user-details.component.scss']
})
export class ListUserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-create-or-edit-user-details',
  templateUrl: './create-or-edit-user-details.component.html',
  styleUrls: ['./create-or-edit-user-details.component.scss']
})
export class CreateOrEditUserDetailsComponent implements OnInit {

  @Input("userDetailsScreen") userDetailsScreen!: UserDetailsScreen;
  @Output() userDetailsScreenChange = new EventEmitter();

  user!: User;

  constructor(private router: Router, private dataSubscriptionService: NtDataSubscriptionService) { }

  ngOnInit() {
    this.user = new User();
  }

  saveAndGotoUserList() {
    this.user.userId = uuid();
    this.dataSubscriptionService.saveUser(this.user).subscribe(result => {
      this.userDetailsScreen.createOrEdit = false;
      this.userDetailsScreen.listUserDetails = true;
      this.userDetailsScreen.loginScreen = false;
      this.userDetailsScreen.showUserDetails = false;
      this.userDetailsScreenChange.emit(this.userDetailsScreen);
    });
  }

  submitAndGotoLogin() {
    this.user.userId = uuid();
    this.dataSubscriptionService.saveUser(this.user).subscribe(result => {
      this.userDetailsScreen.createOrEdit = false;
      this.userDetailsScreen.listUserDetails = false;
      this.userDetailsScreen.loginScreen = false;
      this.userDetailsScreen.showUserDetails = false;
      this.userDetailsScreenChange.emit(this.userDetailsScreen);
      this.router.navigate(["/login"]);
    });
  }

  cancelAndGotoLogin() {
    this.userDetailsScreen.createOrEdit = false;
    this.userDetailsScreen.listUserDetails = false;
    this.userDetailsScreen.loginScreen = false;
    this.userDetailsScreen.showUserDetails = false;
    this.userDetailsScreenChange.emit(this.userDetailsScreen);
    this.router.navigate(["/login"]);
  }


}

@Component({
  selector: 'app-show-user-details',
  templateUrl: './show-user-details.component.html',
  styleUrls: ['./show-user-details.component.scss']
})
export class ShowUserDetailsComponent implements OnInit {

  @Input("userDetails") userDetails!: User;

  constructor() { }

  ngOnInit() {
  }

}
