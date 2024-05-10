import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../../../shared/model/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public httpClient: HttpClient) { }

  register(body: Registration) {
    return this.httpClient.post('/api/user', body);
  }
}
