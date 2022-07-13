import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SAuthService } from './s-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardauthGuard implements CanActivate {

constructor(private auServ:SAuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.auServ.getToken())
          return false;
        else
          return true;
  }
  //above code if user not logged in, will return false and prevent access
  //true wil allow access

}
