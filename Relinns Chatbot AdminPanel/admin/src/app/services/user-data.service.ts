import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public token = '';

  private apiUrl = 'http://192.168.1.23:8000/admin/user?email=';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (email:string): Observable<any> {
    return this.http.get<any>(this.apiUrl + email, {
      headers: {
        Authorization: `Bearer ${ this.token }`,
      },
    });
  }
}
