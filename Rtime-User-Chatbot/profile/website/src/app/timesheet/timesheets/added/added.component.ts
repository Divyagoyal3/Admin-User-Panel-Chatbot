import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-added',
  templateUrl: './added.component.html',
  styleUrls: [ './added.component.scss' ],
})
export class AddedComponent {
  // @Input() selectedProject: string = '';
  @Input() selectedDate: string = '';
  @Input() selectedUser:any = '';
  @Input() selectedNotes:any = '';
  @Input() selectedStartTime:any = '';
  @Input() selectedEndTime:any = '';
  @Input() selectedOption:any = '';
  @Input() totalHours:any = '';
  @Input() totalMinutes:any = '';
  constructor (private router:Router) {
    console.log('');
  }
  back () {
    this.router.navigate([ '/time-log' ]);
  }
}
