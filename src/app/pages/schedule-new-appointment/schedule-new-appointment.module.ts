import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAppointmentFormComponent } from './components/new-appointment-form/new-appointment-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BloodCentersCardComponent } from './components/blood-centers-card/blood-centers-card.component';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    NewAppointmentFormComponent,
    BloodCentersCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    MatButtonToggleModule
  ]
})
export class ScheduleNewAppointmentModule { }
