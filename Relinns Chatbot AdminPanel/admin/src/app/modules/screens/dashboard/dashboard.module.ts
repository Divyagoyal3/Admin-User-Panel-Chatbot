import { ChatbotComponent } from '../chatbot/chatbot.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    ChatbotComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
