import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router,
    public loginService: LoginService) { }

  canActivate(): boolean {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
  
}
