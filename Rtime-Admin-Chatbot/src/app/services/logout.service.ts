import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {

  private logoutUrl = 'http://192.168.1.32:8000/user/logout';

  constructor (private http: HttpClient) {
    //console.log("hi");
  }

  logout (): Observable<any> {
    return this.http.put<any>(this.logoutUrl, {}, {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`,
      },
    });

  }
}
