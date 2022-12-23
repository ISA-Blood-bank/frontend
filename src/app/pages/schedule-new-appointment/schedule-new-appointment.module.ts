import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAppointmentFormComponent } from './components/new-appointment-form/new-appointment-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    NewAppointmentFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ScheduleNewAppointmentModule { }
