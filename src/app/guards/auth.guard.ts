import { NtAuthenticationService } from './../services/nt-authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router,
    private authService: NtAuthenticationService) { }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    if (this.authService.loggedInStatus != null && this.authService.loggedInStatus == 'SUCCESS') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}



@Injectable({ providedIn: 'root' })
export class AuthGuardNOChild implements CanActivate {

  constructor(private router: Router,
    private authService: NtAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.loggedInStatus != null && this.authService.loggedInStatus == 'SUCCESS') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }
}
