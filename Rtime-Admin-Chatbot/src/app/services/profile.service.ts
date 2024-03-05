import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private getUserURL = 'http://192.168.1.32:8000/user/profile';
  constructor (private http :HttpClient) {
    console.log('Constructor called');
  }

  getProfileData (): Observable<any> {
    console.log('token from localstorage: ', localStorage.getItem('token'));
    return this.http.get<any>(this.getUserURL, {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`,
      },
    });
  }

}
