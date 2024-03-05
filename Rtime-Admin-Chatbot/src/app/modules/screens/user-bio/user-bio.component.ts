import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/services/user-data.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: [ './user-bio.component.scss' ],
})
export class UserBioComponent implements OnInit {
  public storedUserData:any;
  public userData:any;
  public email = '';
  public date:any;
  public time:any;
  public meridiem:any;
  public allData:any;
  public tableData: any = {
    thead: [
      {
        id:'device_ip',
        text:'Device IP',
        type: 'inputText',
      },
      {
        id:'location',
        text:'Location',
        type:'inputText',
      },
      {
        id: 'date',
        text: 'Date',
        type: 'inputText',
      },
      {
        id: 'login_time',
        text: 'Login Time',
        type: 'inputText',
      },

      {
        id:'logout_time',
        text: 'Logout Time',
        type: 'inputText',
      },
      {
        id:'duration',
        text:'Duration',
        type:'inputText',
      },
    ],
    tbody: [],
  };
  constructor (
    private userdataService: UserDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.refreshTime();
  }

  ngOnInit (): void {
    this.email = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.getUesrData();
    interval(1000).subscribe(() => {
      this.getDate();
    });
  }

  getUesrData () {
    this.userdataService.getData(this.email).subscribe(
      (userdata: any) => {
        // console.log('hi');
        this.allData = userdata;
        this.tableData.tbody = userdata.result;
        // console.log(this.tableData.tbody);
      },
      (error:any) => {
        console.log(error);
        this.toastr.error('Something went wrong, please try again later !');
      },
    );
  }
  refreshTime () {
    this.getDate();
  }
  getDate () {
    const currentDateAndTime: Date = new Date();
    const currentYear: number = currentDateAndTime.getFullYear();
    const currentMonth: number = currentDateAndTime.getMonth() + 1;
    const currentDay: number = currentDateAndTime.getDate();
    let currentHour: number = currentDateAndTime.getHours();
    const currentMinute: number = currentDateAndTime.getMinutes();
    const currentSecond: number = currentDateAndTime.getSeconds();
    this.meridiem = currentHour >= 12 ? 'PM' : 'AM';
    currentHour = currentHour % 12 || 12;
    this.date = `${ currentDay  }/${  currentMonth  }/${  currentYear }`;
    this.time = `${ currentHour  }:${  currentMinute  }:${  currentSecond }`;
  }
  refreshBtn () {
    console.log('clicked');
    this.getUesrData();
    this.refreshTime();
  }
  goBack () {
    // console.log('back')
    this.router.navigate([ '/user-management' ]);
  }
}
