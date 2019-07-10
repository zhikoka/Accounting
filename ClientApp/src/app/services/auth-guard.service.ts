import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { 
  CanActivate, 
  CanActivateChild,
  Router, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,
  Route,
  CanLoad
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
   
    
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  

  checkLogin(url: string): boolean {
    
    if (this.authService.loginRequired) {
      this.router.navigate(['/login']);
         
      return false;
           
      }
          
      this.authService.redirectUrl = url;
      return true;     
    }

   
  
}
