import { Component, Input, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/Services/timesheet.service';

interface MyData {
  // TaskCode: string;
  Taskname: string;
  Duration: string;
  User: string;
  // BillingType: string;
  // ApprovalStatus:String;
  Notes: string;
  Addedby: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent implements OnInit {
  @Input() userData: any = {};
  public data: any;
  public heading:any;
  // @Input() data: any;
  array: MyData[] = [
    { //TaskCode: 'TA1-1821',
      Taskname: 'Moodle Plan',
      Duration: '04:00 hrs',
      User: 'Jatin Vaid',
      // BillingType: 'Billable',
      //ApprovalStatus:'Pending',
      Notes: 'Assignment Angular',
      Addedby: 'Jatin Vaid',
    },

    // { //TaskCode: 'TA1-1821',
    //   Taskname: 'Moodle Plan',
    //   Duration: '04:00 hrs',

    //   User: 'Ishika Gupta',
    //   // BillingType: 'Billable',
    //   // ApprovalStatus:'Pending',
    //   Notes:'Assignment Angular',
    //   Addedby:'Ishika Gupta' },

    { //TaskCode: 'TA1-1821',
      Taskname: 'Moodle Plan',
      Duration: '04:00 hrs',

      User: 'Vishakha Gupta ',
      // BillingType: 'Billable',
      // ApprovalStatus:'Pending',
      Notes: 'Assignment Angular',
      Addedby: 'Vishakha Gupta',
    },

    { //TaskCode: 'TA1-1821',
      Taskname: 'Moodle Plan',
      Duration: '04:00 hrs',

      User: 'Billu Gupta ',
      // BillingType: 'Billable',
      // ApprovalStatus:'Pending',
      Notes: 'Assignment Angular',
      Addedby: 'Billu Gupta',
    },
    { //TaskCode: 'TA1-1821',
      Taskname: 'Moodle Plan',
      Duration: '04:00 hrs',

      User: 'Billu Gupta ',
      // BillingType: 'Billable',
      // ApprovalStatus:'Pending',
      Notes: 'Assignment Angular',
      Addedby: 'Billu Gupta',
    },




  ];

  tabkey: string[] = [];
  tabvalue: string[][] = [];
  getTableData (data: any) {
    console.log(data);
  }
  constructor (private timesheetService: TimesheetService) {
    //this.getData();
    this.data = this.userData;
    console.log('ishika');
    console.log(this.timesheetService);
    console.log('ishika');
    //this.getTableData(this.data);
  }

  getData () {
    if (this.array.length > 0) {
      this.tabkey = Object.keys(this.array[0]);
      this.tabvalue = this.array.map((obj) => Object.values(obj));
    }
  }

  ngOnInit () {

    this.data = this.userData.tbody;
    console.log(this.data);
    this.heading = this.userData.thead;
    console.log(this.heading);
  }
}







