import { NtContextService } from './../../services/nt-context.service';
import { NtAuthenticationService } from './../../services/nt-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private authService: NtAuthenticationService,
  public appContext: NtContextService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.reload();
  }

}
