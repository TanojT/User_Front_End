import { UserDetailsScreen } from './../../models/UserDetailsScreen';
import { NtAuthenticationService } from './../../services/nt-authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {NtContextService} from "../../services/nt-context.service";
import {AuthenticationRequest} from "../../models/AuthenticationRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDetailsScreen!: UserDetailsScreen;
  authenticationRequest!: AuthenticationRequest;

  constructor(private authService: NtAuthenticationService,
    private appContext: NtContextService,
    private router : Router) { }

  showCreateUser(){
    this.userDetailsScreen.createOrEdit = true;
    this.userDetailsScreen.loginScreen = true;
  }


  checkLogin()
  {

    this.authService.login(this.authenticationRequest).subscribe((authenticationResponse:User)=>{
      this.authService.modifyContextAuthDetails(authenticationResponse);
      this.authService.invokeTokenRefreshTimer();
      this.authService.invokeSessionTimeoutTimer();
      this.router.navigate(['/home/dashboard']);
      this.authService.snackBarMessage();
    });

  }

  enableLoginButton(){

    return this.authenticationRequest.username
       && this.authenticationRequest.username != null
       && this.authenticationRequest.username != ''
       && this.authenticationRequest.password
       && this.authenticationRequest.password != null
       && this.authenticationRequest.password != ''

  }

  ngOnInit() {
    this.authService.corsTest();
    this.authService.unSubscribeTimers();
    // this.appContext.authenticationDetails = null;

    this.authenticationRequest = new AuthenticationRequest();
    this.userDetailsScreen = new UserDetailsScreen();
    this.userDetailsScreen.createOrEdit = false;
    this.userDetailsScreen.listUserDetails = false;
    this.userDetailsScreen.showUserDetails = false;
    this.userDetailsScreen.loginScreen = false;
  }

}
