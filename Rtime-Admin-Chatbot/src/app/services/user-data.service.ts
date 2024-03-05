import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {



  private apiUrl = 'http://192.168.1.32:8000/admin/users?searchTerm=';
  public token = localStorage.getItem('token');
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (search:string): Observable<any> {
    return this.http.get<any>(this.apiUrl + search, {
      headers: {
        Authorization: `Bearer ${ this.token }`,
      },
    });
  }
}
