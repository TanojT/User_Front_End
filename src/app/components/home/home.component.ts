import { Router } from '@angular/router';
import { NtContextService } from './../../services/nt-context.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstName!:string;

  constructor() {
  }

  ngOnInit() {
  }

}
