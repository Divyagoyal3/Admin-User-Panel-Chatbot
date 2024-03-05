import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SlidewindowComponent } from './timesheets/slidewindow/slidewindow.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';

const routes: Routes = [
  {
    path: '',
    component: TimesheetsComponent,
  },
  {
    path:'slidewindow',
    component:SlidewindowComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class TimesheetRoutingModule { }
