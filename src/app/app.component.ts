import { NtAuthenticationService } from './services/nt-authentication.service';
import { NtContextService } from './services/nt-context.service';
import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NiharikaTradersUi';

  constructor(public authService: NtAuthenticationService,
  public appContext: NtContextService){

  }

  ngOnInit(){
  }
}
