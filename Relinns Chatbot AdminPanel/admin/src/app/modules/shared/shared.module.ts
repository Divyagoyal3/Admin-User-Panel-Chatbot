import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RtimeCircularChartComponent } from './rtime-circular-chart/rtime-circular-chart.component';
import { RtimeLineChartComponent } from './rtime-line-chart/rtime-line-chart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    SidebarComponent,
    RtimeLineChartComponent,
    RtimeCircularChartComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [
    SidebarComponent,
    RtimeCircularChartComponent,
    RtimeLineChartComponent,
    TableComponent,
  ],
})
export class SharedModule { }
