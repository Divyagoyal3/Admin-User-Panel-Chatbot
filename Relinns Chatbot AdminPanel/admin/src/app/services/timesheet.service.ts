import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  public token = localStorage.getItem('token');
  private apiUrl = 'http://192.168.1.23:8000/aggregation/v1/timesheet/admin/get?page=1&limit=2';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${ this.token }`,
      },
    });
  }
}
