import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AllUsersService {
  public pageNum:number = 1;
  public token = localStorage.getItem('token');
  private apiUrl = `http://192.168.1.32:8000/admin/users?page=${ this.pageNum }&limit=20`;
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (): Promise<any> {
    return this.http
      .get<any>(this.apiUrl, {
        headers: {
          Authorization: `Bearer ${ this.token }`,
        },
      })
      .toPromise();
  }
}
