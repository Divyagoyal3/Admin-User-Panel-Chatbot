import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-log',
  templateUrl: './time-log.component.html',
  styleUrls: [ './time-log.component.scss' ],
})
export class TimeLogComponent {
  // constructor (private router: Router) {
  //   console.log('hi');
  // }


  // sidebarOpened: boolean = false;
  // selectedOption: string = '';

  // toggleSidebar (): void {
  //   this.sidebarOpened = !this.sidebarOpened;
  // }

  // onProjectSelected (value: string): void {
  //   this.selectedOption = value;
  // }


  sidebarOpened: boolean = false;
  selectedOption: string = '';

  toggleSidebar () {
    this.sidebarOpened = !this.sidebarOpened;
  }

  onProjectSelected (value: string) {
    this.selectedOption = value;
  }


  onAddClicked (): void {
    if (this.selectedOption === 'default') {
      alert('Please select a project.');
    }}
  ngForm: FormGroup;


  constructor (private formBuilder: FormBuilder, private router:Router) {
    this.ngForm = this.formBuilder.group({
      date: [ '', Validators.required ],
      username: [ '', Validators.required ],
      startTime: [ '', Validators.required ],
      endTime: [ '', Validators.required ],
      notes: [ '', Validators.required ],

    });
  }

  currentDate (): string {
    return new Date().toISOString().slice(0, 16); // Truncate to YYYY-MM-DDTHH:mm
  }
    @Input() selectedProject: string = '';

    onSubmit (): void {
      if (this.ngForm.valid) {
        this.calculateTotalHoursAndMinutes();

        // Form is valid, proceed with form submission
        console.log('Form submitted:', this.ngForm.value);
        alert('Details added successfully!');
      } else {
        // Form is invalid, display alert
        alert('Please fill in all the required details.');
      }
    }
    addClicked: boolean = false;

    navigateToAdded () {
      if(this.ngForm.valid) {
        this.addClicked = true;
        // this.router.navigate(['/added'])
      }
    }


    selectedDate:any = '';

    onDateSelected (value: string) {
      this.selectedDate = value;
    }

    selectedUser:any = '';
    onSelectedUser (value:any) {
      this.selectedUser = value;
    }

    selectedNotes:any = '';
    onSelectedNotes (value:any) {
      this.selectedNotes = value;
    }

    selectedStartTime:any = '';
    onSelectedStartTime (value:any) {
      this.selectedStartTime = value;
    }

    selectedEndTime:any = '';
    onSelectedEndTime (value:any) {
      this.selectedEndTime = value;
    }
    selectedHours:any = '';
    onSelectedHours (value:any) {
      this.selectedHours = value;
    }


    // startTime: string = ''; // Stores the selected start time
    // endTime: string = ''; // Stores the selected end time
    // totalHours: number = 0; // Stores the calculated total hours

    // // Method to calculate total hours between start time and end time
    // calculateTotalHours() {
    //   if (this.startTime && this.endTime) {
    //     const startTimeObj = new Date('2000-01-01T' + this.startTime); // Assuming date is irrelevant
    //     const endTimeObj = new Date('2000-01-01T' + this.endTime); // Assuming date is irrelevant
    //     const differenceInMillis = endTimeObj.getTime() - startTimeObj.getTime();
    //     this.totalHours = Math.floor(differenceInMillis / (1000 * 60 * 60)); // Convert milliseconds to hours
    //   } else {
    //     this.totalHours = 0; // Reset total hours if either start time or end time is not selected
    //   }
    // }
    startTime: string = ''; // Stores the selected start time
    endTime: string = ''; // Stores the selected end time
    totalHours: number = 0; // Stores the calculated total hours
    totalMinutes: number = 0; // Stores the calculated total minutes

    // Method to calculate total hours and minutes between start time and end time
    calculateTotalHoursAndMinutes () {
      if (this.startTime && this.endTime) {
        const startTimeObj = new Date(`2000-01-01T${  this.startTime }`); // Assuming date is irrelevant
        const endTimeObj = new Date(`2000-01-01T${  this.endTime }`); // Assuming date is irrelevant
        const differenceInMillis = endTimeObj.getTime() - startTimeObj.getTime();
        this.totalHours = Math.floor(differenceInMillis / (1000 * 60 * 60)); // Convert milliseconds to hours
        this.totalMinutes = Math.floor((differenceInMillis / (1000 * 60)) % 60); // Convert milliseconds to minutes
      } else {
        this.totalHours = 0; // Reset total hours if either start time or end time is not selected
        this.totalMinutes = 0; // Reset total minutes if either start time or end time is not selected
      }
    }

    getCurrentDate (): string {
      const currentDate = new Date();
      // Format the date as YYYY-MM-DD (required format for the 'max' attribute of input type='date')
      const formattedDate = currentDate.toISOString().split('T')[0];
      return formattedDate;
    }


    ////for making modal

    // showModal: boolean = false;

    //   toggleModal() {
    //     this.showModal = !this.showModal;
    //   }
    timeRangeError: boolean = false;

    validateTimeRange () {
      if (this.startTime && this.endTime) {
        const startTime = new Date(`1970-01-01T${  this.startTime }`);
        const endTime = new Date(`1970-01-01T${  this.endTime }`);

        if (startTime <= endTime) {
          this.timeRangeError = true;
        } else {
          this.timeRangeError = false;
        }
      }
    }
}






