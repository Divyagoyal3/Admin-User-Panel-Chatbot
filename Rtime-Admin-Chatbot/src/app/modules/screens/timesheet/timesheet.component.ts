import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TimesheetService } from '../../../services/timesheet.service';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: [ './timesheet.component.scss' ],
})
export class TimesheetComponent implements OnInit {
  public date:any;
  public time:any;
  userData: any;
  public apiData:any;
  public meridiem:any;
  // public button:boolean = false;
  public tableHeading:[] = [];
  public tableBody:[] = [];
  data: any[] = [];  // Your data goes here
  filteredData: any[] = [];
  searchTerm: string = '';
  public myData: any = {
    thead: [
      {
        id:'_projectName',
        text:'Project Name',
        type:'inputText',
      },
      {
        id: 'username',
        text: 'Name',
        type: 'inputText',
      },
      {
        id: 'description',
        text: 'Description',
        type: 'inputText',
      },

      {
        id:'from_date',
        text: 'From Date',
        type: 'inputText',
      },
      {
        id:'to_date',
        text:'To Date',
        type:'inputText',
      },
      // {
      //   id:'update_time',
      //   text:'Updated Time',
      //   type:'inputText',
      // },
    ],
    tbody: [],
  };



  constructor (private timesheetService:TimesheetService,
    private toastr:ToastrService) {
    this.getUesrData();
    this.refreshTime();
  }



  async getUesrData () {
    await this.timesheetService.getData().then(
      (userdata: any) => {
        this.apiData = userdata.result;
        this.myData.tbody = userdata.result.data;
        // console.log('aaaa: ', userdata.result.data);

        this.myData.tbody = userdata.result.data.map((item: any) => {
          return {
            ...item,
            _id: item._projectId._id,
            _projectName: item._projectId.projectName,
            username: item.username,
            from_date: item.startTime,
            to_date: item.endTime,
            update_time:item.updatedAt,
          };
        });
        // console.log(this.myData.tbody);
      },
      (error:any) => {
        console.log(error);
        this.toastr.error('Something went wrong, please try again later !');
      },
    );
  }


  ngOnInit (): void {
    this.myData.body = this.apiData;
    console.log(this.myData.body);
    interval(1000).subscribe(() => {
      this.getDate();
    });
  }


  dataSource: MatTableDataSource<any> | undefined;
  displayedColumns: string[] = [ 'column1', 'column2', 'column3' ]; // Adjust column names
  @ViewChild(MatSort) sort: MatSort | undefined;



  filterData (): void {
    this.filteredData = this.data.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
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
    const isoDate = currentDateAndTime.toISOString();
    return isoDate;
  }

  refreshBtn () {
    this.refreshTime();
    this.getUesrData();
  }

}
