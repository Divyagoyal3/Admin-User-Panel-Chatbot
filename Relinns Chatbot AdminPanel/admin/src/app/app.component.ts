import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'RTime';

  public tableData: any = {
    thead: [
      {
        id: 'id',
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
        id: 'status',
        text: 'status',
        type: 'inputText',
      },
      {
        id: 'created At',
        text: 'Created At',
        type: 'time',
      },
      {
        id: 'updated At',
        text: 'Updated At',
        type: 'time',
      },
      {
        id: 'profile_picture',
        text: 'Profile Picture',
        type: 'image',
      },
      {
        id: 'role',
        text: 'Role',
        type: 'inputText',
      },
    ],
    tbody: [
      {
        id: 'name',
        name: 'Taman',
        email: 'taman@',
        role: 'development',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 'name',
        name: 'Vishakha',
        email: 'vishakha@',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 'name',
        name: 'Nitesh',
        email: 'nitesh@',
        // profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 'name',
        name: 'satyam',
        email: 'nitesh@',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    ],
  };
}
