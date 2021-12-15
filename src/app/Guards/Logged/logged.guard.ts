import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/LoginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
 
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    if(this.loginService.loggedIn()) {
        this.router.navigate(['/account'])
        return false
    }
    else {
        return true
    }
  } 
}
