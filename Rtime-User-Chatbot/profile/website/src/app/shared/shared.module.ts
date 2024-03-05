import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { TableComponent } from './table/table.component';

// import { UppercontentComponent } from '../uppercontent/uppercontent.component';

@NgModule({
  declarations: [
    SidenavbarComponent,
    TableComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    //  UppercontentComponent
  ],
  exports: [
    SidenavbarComponent,
    TableComponent,
    NavbarComponent,
  ],

})
export class SharedModule { }
