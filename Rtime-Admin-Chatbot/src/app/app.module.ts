import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './modules/screens/dashboard/dashboard.module';
import { DashboardService } from './services/dashboard.service';
import { DropdownService } from './services/dropdown.service';
import { ErrorComponent } from './modules/screens/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatePipe } from './paginate.pipe';
import { SharedModule } from './modules/shared/shared.module';
import { SharedService } from './services/shared.service';
import { ThemeService } from './services/theme.service';
import { TimesheetComponent } from './modules/screens/timesheet/timesheet.component';
import { ToastrModule } from 'ngx-toastr';
import { UserBioComponent } from './modules/screens/user-bio/user-bio.component';
import { UserManagementModule } from './modules/screens/user-management/user-management.module';
@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    UserBioComponent,
    PaginatePipe,
    ErrorComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    DashboardModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    UserManagementModule,
  ],
  providers: [ ThemeService, SharedService, DropdownService, DashboardService ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
