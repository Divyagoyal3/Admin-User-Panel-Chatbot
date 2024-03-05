import { ActivatedRoute, Router } from '@angular/router';
import { ActiveUser, ApiResponse,
  DashboardService, IncorrectTimeSheetResponse,
  TimeSheetHoursResponse, User } from 'src/app/services/dashboard.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { MissedTimeSheets, ProjectsTimeSheetEntry } from '../../interfaces/dashboard';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
})
export class DashboardComponent implements OnInit {
  totalUserCount!: number;
  totalActiveUsers: ActiveUser[] = [];
  filledTimeSheet!: number;
  missedTimeSheet!: number;
  totalTimeSheetHours: TimeSheetHoursResponse[] = [];
  totalCountOfIncorrectTimesheet: IncorrectTimeSheetResponse[] = [];
  totalProjectHours: ProjectsTimeSheetEntry[] = [];
  totalMissedTimeSheets: MissedTimeSheets[] = [];
  showChatbot: boolean = false;
  showChatbotIcon: boolean = false;
  public getToken: any;
  showFilters = false;
  canShowToast : boolean = true;

  public meridiem: any;
  public date: any;
  public time: any;
  public userData: any;
  constructor (private router: Router,
    private dashboardService: DashboardService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private timesheetService: TimesheetService,
    private elRef: ElementRef,
  ) {
    // console.log('constructor called');
  }

  ngOnInit () {
    this.getTotalUsers();
    this.getActiveUsers();
    this.getFilledMissedTimeSheetToday();
    this.getTotalTimesheetHours();
    this.getTotalCountOfIncorrectTimesheet();
    this.getTotalProjectHours();
    this.getTotalMissedTimeSheets();
    this.addScrollListener();
    this.route.queryParams.subscribe((params) => {
      // const token = params['token'];
      const { token } = params;
      console.log(token);
      if (token) {
        this.getToken = token;
        localStorage.setItem('token', token);
        this.getDataUser();
      } else {

        if (localStorage.getItem('token')) {
          console.log(token);
          this.getDataUser();
        } else {
          console.log('No token found');
          this.router.navigate([ 'login' ]);
        }
      }
    });
    interval(1000).subscribe(() => {
      this.getDate();
    });

  }

  refreshTime () {
    this.getDate();
    this.getTotalUsers();
    this.getActiveUsers();
    this.getFilledMissedTimeSheetToday();
    this.getTotalTimesheetHours();
    this.getTotalCountOfIncorrectTimesheet();
    this.getTotalProjectHours();
    this.getTotalMissedTimeSheets();
  }

  showToastFunction () {
    if (this.canShowToast === true) {
      this.toastr.error('Something went wrong, please try again later !');
      this.canShowToast = false;

      setTimeout(() => {
        this.canShowToast = true;
      }, 3000);
    }
  }

  toggleChatbot () {
    this.showChatbot = !this.showChatbot;
  }

  showChatbotIconOnScroll (): void {
    const scrollThreshold = 50; // Adjust this value as needed
    if (window.scrollY > scrollThreshold) {
      this.showChatbotIcon = true;
      window.removeEventListener('scroll', this.showChatbotIconOnScroll); // Remove the event listener after showing the chatbot icon
    }
  }

  addScrollListener (): void {
    window.addEventListener('scroll', this.showChatbotIconOnScroll.bind(this));
  }


  // reload() {
  //   window.location.reload();
  // }

  getDate (): void {
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
  }

  async getDataUser () {
    try {
      const response = await this.timesheetService.getProfileData().toPromise();

      if (response.success === true) {
        this.userData = response;
      }
    } catch (error) {
      this.router.navigate([ 'login' ]);
      this.showToastFunction();
    }
  }


  getTotalUsers () {
    this.dashboardService.getUsers()
      .subscribe(
        (users: User) => {
          this.totalUserCount = users.result;
        },
        (error) => {
          console.error('Error fetching users:', error.totalUserCount.err);
          this.showToastFunction();
        },
      );
  }

  //Recent 5 Active Users
  getActiveUsers () {
    this.dashboardService.getFiveActiveUsers().subscribe(
      (users: { result: ActiveUser[] }) => {
        this.totalActiveUsers = users.result;
        console.log(this.totalActiveUsers);
      },
      (error) => {
        console.error('Error fetching active users:', error);
        this.showToastFunction();
      },
    );
  }

  getFilledMissedTimeSheetToday () {
    this.dashboardService.getFilledMissedTimeSheet().subscribe(
      (response: ApiResponse) => {
        this.filledTimeSheet = response.result.todayNumberOfFilledUsers;
        this.missedTimeSheet = response.result.todayNumberOfUnfilledUsers;
      },
      (error) => {
        console.error('Error fetching filled and missed timesheets:', error);
        this.showToastFunction();
      },
    );
  }


  getTotalTimesheetHours () {
    this.dashboardService.getTotalTimesheetHoursToday().subscribe(
      (response: { result: TimeSheetHoursResponse[] }) => {
        this.totalTimeSheetHours = response.result;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching total timesheet hours:', error);
        this.showToastFunction();
      },
    );
  }

  getTotalCountOfIncorrectTimesheet () {
    this.dashboardService.getTotalCountOfIncorrectTimesheetYesterday().subscribe(
      (response: { result: IncorrectTimeSheetResponse[] }) => {
        this.totalCountOfIncorrectTimesheet = response.result;
        // console.log(response);
      },
      (error) => {
        console.error('Error fetching total count of incorrect timesheet:', error);
        this.showToastFunction();
      },
    );
  }


  getTotalProjectHours () {
    this.dashboardService.getTotalTimesheetHoursByProject().subscribe(
      (response: { result: ProjectsTimeSheetEntry[] }) => {
        this.totalProjectHours = response.result;
        console.log('users: ', response);
      },
      (error) => {
        console.error('Error fetching total project hours:', error);
        this.showToastFunction();
      },
    );
  }

  getTotalMissedTimeSheets () {
    this.dashboardService.getMissedTimesheetBythirtyDays().subscribe(
      (response: { result: MissedTimeSheets[] }) => {
        this.totalMissedTimeSheets = response.result;
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error fetching total missed time sheets:', error);
        this.showToastFunction();
      },
    );
  }

}
