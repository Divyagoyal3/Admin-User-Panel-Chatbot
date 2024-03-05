import { Component, OnInit } from '@angular/core';
import { AllUsersService } from 'src/app/services/all-users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: [ './user-management.component.scss' ],
})
export class UserManagementComponent implements OnInit {
  public date: any;
  public time: any;
  public meridiem: any;
  public button: boolean = true;
  public apiData: any;
  public tableData: any = {
    thead: [
      {
        id: 'profilePic',
        text: 'Profile Picture',
        type: 'image',
      },
      {
        id: 'emp_id',
        text: 'Id',
        type: 'inputText',
      },
      {
        id: 'name',
        text: 'Name',
        type: 'inputText',
      },
      {
        id: 'email',
        text: 'Email',
        type: 'inputText',
      },

      {
        id: 'role',
        text: 'Role',
        type: 'role',
      },
      {
        id: 'action',
        text: 'Active  ',
        type: 'toggle',
      },
    ],
    tbody: [],
  };
  constructor (private router: Router, private allusers: AllUsersService,
    private toastr: ToastrService) {
    this.getUesrData();
    this.refreshTime();
  }


  async getUesrData () {
    await this.allusers.getData().then(
      (userdata: any) => {
        // console.log(userdata.result);
        this.apiData = userdata.result;
        this.tableData.tbody = userdata.result;

        // console.log(this.tableData.tbody);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Something went wrong, please try again later !');
      },
    );
  }
  receivedMessage: any;

  receiveMessage (message: any) {
    this.receivedMessage = message;
    // console.log('-----taman----', this.receivedMessage);
    this.tableData.tbody = this.receivedMessage;
  }


  ngOnInit (): void {
    this.tableData.body = this.apiData;
    // console.log(this.tableData.body);
    interval(1000).subscribe(() => {
      this.getDate();
    });
  }
  refreshTime () {
    this.getDate();
  }
  getDate () {
    // Get current date and time
    const currentDateAndTime: Date = new Date();

    // Extract individual components
    const currentYear: number = currentDateAndTime.getFullYear();
    const currentMonth: number = currentDateAndTime.getMonth() + 1;
    const currentDay: number = currentDateAndTime.getDate();
    let currentHour: number = currentDateAndTime.getHours();
    const currentMinute: number = currentDateAndTime.getMinutes();
    const currentSecond: number = currentDateAndTime.getSeconds();
    this.meridiem = currentHour >= 12 ? 'PM' : 'AM';
    currentHour = currentHour % 12 || 12;
    this.date = `${ currentDay }/${ currentMonth }/${ currentYear }`;
    this.time = `${ currentHour }:${ currentMinute }:${ currentSecond }`;
    // console.log();
    // console.log(this.time+' '+meridiem);
  }
  receivedData: string | undefined;

  handleData (data: string) {
    this.receivedData = data;
    // console.log(this.receivedData);
  }
  isSidebarCollapsed = false;

  toggleSidebar () {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onProfileClick (event: any) {
    this.router.navigate([ `/userbio/${ event }` ]);
  }
  refreshBtn () {
    // console.log('clicked')
    this.getUesrData();
    this.refreshTime();
  }
}
