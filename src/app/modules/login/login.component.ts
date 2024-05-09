import { Component } from '@angular/core';
import { LoginService } from '../../core/http/login/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    readonly loginService: LoginService,
    readonly router: Router
  ) {

  }

  onLogin(loginForm: NgForm) {
    const user = {
      name: loginForm.value.email,
      password: loginForm.value.password
    };
    LoginService.login(user).subscribe((response: any) => {
      this.router.navigate([`/${response.type}`]);
    }, (error: any) => {

    });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
