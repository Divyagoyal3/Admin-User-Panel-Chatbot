import { ActiveUser, ApiResponse, IncorrectTimeSheetResponse, TimeSheetHoursResponse, User } from '../modules/interfaces/dashboard';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // userUrl="http://localhost:8000/admin/totalusers";
  constructor (private http: HttpClient) {
    console.log('dashboard service!');
  }

  getUsers (): Observable<User> {
    const token =  localStorage.getItem('token');
    const head_obj = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get<User>('http://192.168.1.23:8000/admin/totalusers', { headers: head_obj });
  }

  getFiveActiveUsers (): Observable<{ result: ActiveUser[] }> {
    const token =  localStorage.getItem('token');
    const head_obj = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get<{ result: ActiveUser[] }>('http://192.168.1.23:8000/admin/recentusers', { headers: head_obj });
  }

  getFilledMissedTimeSheet (): Observable<ApiResponse> {
    const token =  localStorage.getItem('token');
    const head_obj = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get<ApiResponse>('http://192.168.1.23:8000/aggregation/v1/timesheet/admin/get/count-employe-today?admin=true',
      { headers: head_obj });
  }

  getTotalTimesheetHoursToday (): Observable<{ result: TimeSheetHoursResponse[] }> {
    const token =  localStorage.getItem('token');
    const head_obj = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get<{ result: TimeSheetHoursResponse[] }>
    ('http://192.168.1.23:8000/aggregation/v1/timesheet/admin/total-timesheet-hours', { headers: head_obj });
  }

  getTotalCountOfIncorrectTimesheetYesterday (): Observable<{ result: IncorrectTimeSheetResponse[] }> {
    const token =  localStorage.getItem('token');
    const head_obj = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get<{ result: IncorrectTimeSheetResponse[] }>
    ('http://192.168.1.23:8000/aggregation/v1/timesheet/admin/incorrect-timesheet?timeperiod=yesterday&admin=true', { headers: head_obj });
  }

}

export { IncorrectTimeSheetResponse, TimeSheetHoursResponse, ApiResponse, ActiveUser, User };
