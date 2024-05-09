import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static login(user: any): Observable<any> {
    if(user.name === 'test1@gmail.com') {
      return of({
        type: 'app-layout/transporter-owner',
        data: {
          name: 'Test1',
          type: 'owner'
        }
      });
    } else if(user.name === 'test2@gmail.com') {
      return of({
        type: 'app-layout/driver',
        data: {
          name: 'Test2',
          type: 'driver'
        }
      });
    } else if(user.name === 'test3@gmail.com') {
      return of({
        type: 'app-layout/cleaner',
        data: {
          name: 'Test3',
          type: 'cleaner'
        }
      });
    } else {
      return of({
        type: 'app-layout/none'
      });
    }
  }

  constructor() { }
}
