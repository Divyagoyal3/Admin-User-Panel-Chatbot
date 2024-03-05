

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddedComponent } from './timesheets/added/added.component';
import { ChatbotComponent } from './timesheets/chatbot/chatbot.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SlidewindowComponent } from './timesheets/slidewindow/slidewindow.component';
import { TimeLogComponent } from './timesheets/time-log/time-log.component';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetsComponent } from './timesheets/timesheets.component';
import { UppercontentComponent } from './timesheets/uppercontent/uppercontent.component';


@NgModule({
  declarations: [
    TimesheetsComponent,
    UppercontentComponent,
    SlidewindowComponent,
    TimeLogComponent,
    AddedComponent,
    // ListenerComponent,
    ChatbotComponent,


  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports:[
    SharedModule,
    TimesheetsComponent,
  ],

})
export class TimesheetModule { }
