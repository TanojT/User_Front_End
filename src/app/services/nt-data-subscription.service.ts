import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {NtContextService} from "./nt-context.service";

@Injectable({
  providedIn: 'root'
})
export class NtDataSubscriptionService {

  constructor(private http: HttpClient,
              private appContext: NtContextService) { }


  public saveUser(user:User) {
    return this.http.post<User>(this.appContext.SAVE_USER, user);
  }


}
