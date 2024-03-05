import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {

  openDropdown: Subject<string> = new Subject();
  constructor () {
    //Empty Constructor
  }


}
