import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './modules/screens/dashboard/dashboard.component';
import { ErrorComponent } from './modules/screens/error/error.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { NgModule } from '@angular/core';
import { TimesheetComponent } from './modules/screens/timesheet/timesheet.component';
import { UserBioComponent } from './modules/screens/user-bio/user-bio.component';
import { UserManagementComponent } from './modules/screens/user-management/user-management.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'userbio/:id', component: UserBioComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: '**', component:ErrorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {

}

