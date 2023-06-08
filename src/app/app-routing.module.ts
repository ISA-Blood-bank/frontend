import { BloodCentersDisplayComponent } from './pages/home-page/components/blood-centers-display/blood-centers-display.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodCenterRegisterFormComponent } from './pages/blood-center-register/components/blood-center-register-form/blood-center-register-form.component';
import { UserRegisterComponent } from './pages/home-page/components/user-register/user-register.component';
import { RegisteredUsersDisplayComponent } from './pages/home-page/components/registered-users-display/registered-users-display/registered-users-display.component';
import { ProfileViewComponent } from './pages/user-profile/components/profile-view/profile-view.component';
import { UserQuestionnaireComponent } from './pages/home-page/components/user-questionnaire/user-questionnaire/user-questionnaire.component';
import { LoginComponent } from './pages/home-page/components/user-login/login/login.component';
import { AppointmentsComponent } from './pages/home-page/components/appointments/appointments/appointments.component';
import { ChangePasswordComponent } from './pages/home-page/components/change-password/change-password.component';
import { ScheduledAppointmentsComponent } from './pages/home-page/components/scheduled-appointments/scheduled-appointments/scheduled-appointments.component';
import { AppointmentReportsComponent } from './pages/home-page/components/appointment-reports/appointment-reports/appointment-reports.component';

import { CreateAppointmentFormComponent } from './MedicalStaff/create-available-appointments/components/create-appointment-form/create-appointment-form.component';
import { NewAppointmentFormComponent } from './pages/schedule-new-appointment/components/new-appointment-form/new-appointment-form.component';
import { BloodcenterStatsComponent } from './MedicalStaff/business-analytics/components/bloodcenter-stats/bloodcenter-stats.component';


const routes: Routes = [
  { path: '', component: BloodCentersDisplayComponent},
  { path: 'centerRegister', component: BloodCenterRegisterFormComponent },
  { path: 'userProfile', component: ProfileViewComponent },
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'userView', component: RegisteredUsersDisplayComponent },
  { path: 'userQuestionnaire', component: UserQuestionnaireComponent },
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'myprofile', component: ProfileViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'scheduledAppointments', component: ScheduledAppointmentsComponent },
  { path: 'appointmentReports', component: AppointmentReportsComponent },
  
  { path: 'createappointment', component: CreateAppointmentFormComponent},
  { path: 'newappointment', component: NewAppointmentFormComponent},
  { path: 'stats', component: BloodcenterStatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
