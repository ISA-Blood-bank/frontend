import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAppointmentFormComponent } from './components/create-appointment-form/create-appointment-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    CreateAppointmentFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})
export class CreateAvailableAppointmentsModule { }
