import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/Services/timesheet.service';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: [ './timesheets.component.scss' ],
})
export class TimesheetsComponent  implements OnInit {
  public userData: any;
  public tableData: any = {
    thead: [

      {
        id:'id',
        text:'Id',
        type:'inputText',
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
        id:'role',
        text: 'Role',
        type: 'inputText',
      },

    ],
    tbody: [
      {
        id:'name',
        name:'Taman',
        email:'taman@relinns.com',
        role: 'development',
      // profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'Vishakha',
        email: 'vishakha@relinns.com',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'Nitesh',
        email: 'nitesh@relinns.com',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'satyam',
        email: 'nitesh@relinns.com',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'Ankit',
        email: 'ankit@relinns.com',
      // profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    ],
  };

  showChatbot: boolean = false;
  value: any;

  onValueChanged (value: boolean) {
    this.value = value;
  }
  // navigateToOtherComponent ()
  // {
  //   this.showProfileComponent = !this.showProfileComponent;
  //   // this.router.navigate([ '/slidewindow' ]);
  // }
  toggleChatbot () {
    this.showChatbot = !this.showChatbot;
  }
  constructor (private timesheetService:TimesheetService) {

    // console.log('hi');


  }
  ngOnInit ()
  {
    this.getData();
  }

  getData () {
    this.timesheetService.getTimesheetData().subscribe(
      (response) => {
        this.userData = response;
        console.log('hi');
      },
      (error) => {
        console.error('Error fetching data', error);
        console.log('hi');
      },
    );

  }

}








