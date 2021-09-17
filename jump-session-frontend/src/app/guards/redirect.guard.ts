import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(public router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if(this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  
}
