import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/screens/dashboard/dashboard.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './modules/shared/profile/profile.component';
import { TimesheetComponent } from './modules/screens/timesheet/timesheet.component';
import { UserManagementComponent } from './modules/screens/user-management/user-management.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
