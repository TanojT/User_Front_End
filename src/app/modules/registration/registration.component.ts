import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../../shared/model/registration.model';
import { RegistrationService } from '../../core/http/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(public registrationService: RegistrationService) {}

  onRegister(registration: NgForm) {
    const body: Registration = {
      firstName: registration.value.firstName,
      lastName: registration.value.lastName,
      email: registration.value.email,
      userType: registration.value.userType,
      mobile: registration.value.mobile,
      userName: registration.value.userName,
      password: registration.value.password,
      address: registration.value.address
    }
    this.registrationService.register(body).subscribe((response: any) => {
      console.log(response);
    }, (error: any) => {
      console.error(error);
    });
  }

}
