import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: [ './sidenavbar.component.scss' ],
})
export class SidenavbarComponent implements OnInit {
  showSideBar: boolean = true;
  // showProfileComponent: boolean = false;
  // value: any;

  // onValueChanged (value: boolean) {
  //   this.value = value;
  // }
  // navigateToOtherComponent ()
  // {
  //   this.showProfileComponent = !this.showProfileComponent;
  //   // this.router.navigate([ '/slidewindow' ]);
  // }

  ngOnInit (): void {
    if (document.documentElement.getBoundingClientRect().width < 600) {
      this.showSideBar = false;
    }
  }
  currentDate: Date = new Date(); // Initialize currentDate with current date and time

  constructor () {
    setInterval(() => {
      this.currentDate = new Date(); // Update currentDate every second
    }, 1000);
  }
}
