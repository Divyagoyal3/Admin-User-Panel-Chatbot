import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  public blockUser:any;
  public status:any;
  public token = localStorage.getItem('token');
  private apiUrl = 'http://192.168.1.32:8000/admin//user-enable-disable';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (email:string, status:boolean): Promise<any> {
    const requestData = { email, status };
    return this.http
      .put<any>(this.apiUrl, requestData, {
        headers: {
          Authorization: `Bearer ${ this.token }`,
        },
      })
      .toPromise();
  }
}
