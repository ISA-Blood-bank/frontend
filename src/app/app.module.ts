import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { UserProfileModule } from './pages/user-profile/user-profile.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BloodCenterRegisterModule } from './pages/blood-center-register/blood-center-register.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TokenInterceptor } from './pages/home-page/interceptor/TokenInterceptor';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CreateAvailableAppointmentsModule } from './MedicalStaff/create-available-appointments/create-available-appointments.module';
import { ScheduleNewAppointmentModule } from './pages/schedule-new-appointment/schedule-new-appointment.module';
import { AllSCheduledDisplayComponent } from './pages/allScheduled/components/all-scheduled-display/all-scheduled-display.component';
import { ScheduledInfoComponent } from './pages/allScheduled/components/scheduled-info/scheduled-info.component';
import { ObserversModule } from '@angular/cdk/observers';
import { StartedAppointmentComponent } from './pages/allScheduled/components/started-appointment/started-appointment.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { BloodCenterDisplayComponent } from './pages/grades/components/blood-center-display/blood-center-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllBloodsComponentComponent } from './pages/blood/components/all-bloods-component/all-bloods-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllSCheduledDisplayComponent,
    ScheduledInfoComponent,
    StartedAppointmentComponent,
    BloodCenterDisplayComponent,
    AllBloodsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomePageModule,
    MatToolbarModule,
    BloodCenterRegisterModule,
    HttpClientModule,
    MatToolbarModule,
    BloodCenterRegisterModule,
    HttpClientModule,
    MatFormFieldModule,
    UserProfileModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CreateAvailableAppointmentsModule,
    ScheduleNewAppointmentModule,
    ObserversModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
