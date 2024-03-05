import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent implements OnInit {
  // timesheetService: any;
  constructor (
    private router: Router,
    private userdataService: UserDataService,
  ) {
    // console.log('hi');
  }
  @Input() data: any;
  @Input() userData: any;
  @Input() showButton: any;
  public heading: any;
  public keys: any;
  public button: boolean = false;
  ngOnInit () {
    this.heading = this.userData.thead;
    // console.log(this.heading);
    this.data = this.userData.tbody;
    // console.log(this.data);
    this.button = this.showButton;
    // console.log(this.button);
  }
  @Output() dataEmitter = new EventEmitter<any>();
  @Output() ProfileClickEvent = new EventEmitter<any>();
  emitData () {
    const dataToSend = 'Hello, Parent!';
    this.dataEmitter.emit(dataToSend);
  }
  editModal () {
    const dataToSend = 'Hello, Parent!';
    this.dataEmitter.emit(dataToSend);
  }
  // deleteModal () {

  // }
  // blockModal () {

  // }
  showUser (name: any) {
    const userData = name.email;
    console.log(userData);


    // localStorage.setItem('userData', JSON.stringify(userData.email));
    // console.log(userData);
    this.ProfileClickEvent.emit(name.email);
  }
  getData () {
    // this.userdataService.getData(this.userData).subscribe(
    //   (response: any) => {
    //     // console.log('taman');
    //     this.userData = response;
    //     console.log(this.userData);
    //   },
    //   (error:any) => {
    //     // console.log('taman');
    //     console.error('Error fetching data', error);
    //     // console.log('hi');
    //   },
    // );
  }
}
