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
import { AllSCheduledDisplayComponent } from './pages/allScheduled/components/all-scheduled-display/all-scheduled-display.component';
import { ScheduledInfoComponent } from './pages/allScheduled/components/scheduled-info/scheduled-info.component';
import { StartedAppointmentComponent } from './pages/allScheduled/components/started-appointment/started-appointment.component';
import { BloodCenterDisplayComponent } from './pages/grades/components/blood-center-display/blood-center-display.component';
import { AllBloodsComponentComponent } from './pages/blood/components/all-bloods-component/all-bloods-component.component';
import { AllColleaguesComponent } from './pages/colleague/components/all-colleagues/all-colleagues.component';
import { AllAppointmentsComponent } from './pages/allAppointments/components/all-appointments/all-appointments.component';
import { AllVisitedComponent } from './pages/allVisited/components/all-visited/all-visited.component';
import { MyCenterComponent } from './pages/myCenter/components/my-center/my-center.component';
import { MyPrfileComponent } from './pages/myProfile/components/my-prfile/my-prfile.component';


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
  { path: 'allScheduled', component: AllSCheduledDisplayComponent},
  { path: 'scheduledInfo/:id', component:ScheduledInfoComponent},
  { path: 'appointmentStart/:id/:qId/:schId', component: StartedAppointmentComponent},
  { path: 'bloodCenterInfo/:id', component: BloodCenterDisplayComponent},
  { path: 'allBloods/:bloodCenterId', component: AllBloodsComponentComponent},
  { path: 'allColleagues/:bloodCenterId', component: AllColleaguesComponent},
  { path: 'allAppointments/:bloodCenterId', component:AllAppointmentsComponent},
  { path: 'allVisitedUsers/:bloodCenterId', component: AllVisitedComponent},
  { path: 'myBloodCenter/:bloodCenterId', component: MyCenterComponent},
  { path: 'myProfilee/:medicalStaffId', component: MyPrfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
