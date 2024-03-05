import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  public token:any = localStorage.getItem('token');
  constructor (private router: Router) {
    // console.log('auth guard');
  }
  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.token) {
      alert('please login first');
      this.router.navigate([ '/login' ]);
      return false;

    }
    else {
      return true;
    }
  }
}
