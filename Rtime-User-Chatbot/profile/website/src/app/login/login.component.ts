//
import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent {

  constructor (private router: Router, private loginService: LoginService) {
    //console.log('');


  }

  signIn () {
    this.router.navigate([ 'timesheet' ]);
    //this.loginService.login();
  }
}

