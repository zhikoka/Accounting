
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string = "";
  public role:string= "";
  public uesrEmail: string="";
  errorMessage: any;
  redirectUrl: string = '/dashboard';
 
  constructor(private http: HttpClient) {
  
  }
  login(creds: any): Observable<boolean> {
    return this.http.post<any> ("/api/account", creds)
      .pipe(
      map
        (res => {
  
        let tokenInfo = res;
        // console.log(res);
        this.token = tokenInfo.token;
      

        const helper = new JwtHelperService();

        const decodedToken = helper.decodeToken(this.token);
        this.role= decodedToken.Manager;

        this.uesrEmail=decodedToken.sub;


          console.log(res);
          return false;
        })
      )

  }

  public get loginRequired(){
    return false;
  }
  



  logout(): any {
    
    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.clear();

   return this.http.get<any>("/api/account");
  
  }
  // register():Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  // }
}
