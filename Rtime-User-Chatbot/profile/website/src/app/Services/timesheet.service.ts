import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TimesheetService {

  private apiUrl =
    'http://192.168.1.42:3000/aggregation/v1/timesheet/admin/get';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }

  getTimesheetData (): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('token') }`,
      },
    });
  }


}
