import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidewindow',
  templateUrl: './slidewindow.component.html',
  styleUrls: [ './slidewindow.component.scss' ],
})
export class SlidewindowComponent {

  sidebarOpened: boolean = false;
  selectedOption: string = 'default';
  router: any;
  addClicked: boolean = false;

  toggleSidebar (): void {
    this.sidebarOpened = !this.sidebarOpened;
  }

  onProjectSelected (value: string): void {
    this.selectedOption = value;
  }
  onAddClicked (): void {
    if (this.selectedOption === 'default') {
      alert('Please select a project before adding.');
    }else {
      // Proceed with the add action
      // For example, navigate to the "added" page
      // Replace this with your actual implementation
      this.router.navigate([ '/added' ]);
    }}



}
