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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BusinessAnalyticsModule } from './MedicalStaff/business-analytics/business-analytics.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
    BusinessAnalyticsModule
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
