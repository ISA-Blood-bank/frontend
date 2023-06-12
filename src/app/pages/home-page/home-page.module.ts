import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCentersDisplayComponent } from './components/blood-centers-display/blood-centers-display.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { MatSelectModule } from '@angular/material/select';

import { RegisteredUsersDisplayComponent } from './components/registered-users-display/registered-users-display/registered-users-display.component';

import { UserQuestionnaireComponent } from './components/user-questionnaire/user-questionnaire/user-questionnaire.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './components/user-login/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import { AppointmentsComponent } from './components/appointments/appointments/appointments.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ScheduledAppointmentsComponent } from './components/scheduled-appointments/scheduled-appointments/scheduled-appointments.component';
import { AppointmentReportsComponent } from './components/appointment-reports/appointment-reports/appointment-reports.component';
import { AdminCalendarComponent } from './components/admin-calendar/admin-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepicker, MatDatepickerModule, MatYearView } from '@angular/material/datepicker';








@NgModule({
  declarations: [
    BloodCentersDisplayComponent,
    UserRegisterComponent,
    RegisteredUsersDisplayComponent,
    UserQuestionnaireComponent,
    LoginComponent,
    AppointmentsComponent,
    ChangePasswordComponent,
    ScheduledAppointmentsComponent,
    AppointmentReportsComponent,
    AdminCalendarComponent

    
  ],
  imports: [
    CommonModule,
    MatTableModule, 
    FormsModule,
    MatButtonToggleModule,
    MaterialModule,
   
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSortModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatDatepickerModule

  ],
  /*providers:[
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ]*/
})
export class HomePageModule { }
