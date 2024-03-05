import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { RtimeCircularChartComponent } from './rtime-circular-chart/rtime-circular-chart.component';
import { RtimeLineChartComponent } from './rtime-line-chart/rtime-line-chart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    SidebarComponent,
    RtimeLineChartComponent,
    RtimeCircularChartComponent,
    TableComponent,
    LoaderComponent,
    ThemeToggleComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    NgxPaginationModule,
    Ng2OrderModule,
    RouterLinkActive,
    RouterLink,
  ],
  exports: [
    SidebarComponent,
    RtimeCircularChartComponent,
    RtimeLineChartComponent,
    TableComponent,
    LoaderComponent,
  ],
})
export class SharedModule { }
