import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-uppercontent',
  templateUrl: './uppercontent.component.html',
  styleUrls: [ './uppercontent.component.scss' ],
})
export class UppercontentComponent {




  constructor (private router: Router)
  {
    console.log('');
  }

  showAddTimeLogComponent: boolean = false;
  navigateToOtherComponent ()
  {
    this.showAddTimeLogComponent = true;




  }





}
