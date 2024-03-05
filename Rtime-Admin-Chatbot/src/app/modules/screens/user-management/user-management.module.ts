import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UserManagementComponent } from './user-management.component';
@NgModule({
  declarations: [
    UserManagementComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})

export class UserManagementModule  {

}

