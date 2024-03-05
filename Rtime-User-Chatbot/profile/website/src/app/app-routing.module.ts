

import { RouterModule, Routes } from '@angular/router';
import { AddedComponent } from './timesheet/timesheets/added/added.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { TimeLogComponent } from './timesheet/timesheets/time-log/time-log.component';
import { UppercontentComponent } from './timesheet/timesheets/uppercontent/uppercontent.component';





const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component:LoginComponent },
  { path: 'timesheet',
    loadChildren: () => import('./timesheet/timesheet.module').then((m) => m.TimesheetModule),
  },
  { path: 'added', component:AddedComponent },
  { path:  'time-log', component:TimeLogComponent },
  { path:'upper', component:UppercontentComponent },
];







@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
