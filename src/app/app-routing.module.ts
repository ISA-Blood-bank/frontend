import { BloodCentersDisplayComponent } from './pages/home-page/components/blood-centers-display/blood-centers-display.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodCenterRegisterFormComponent } from './pages/blood-center-register/components/blood-center-register-form/blood-center-register-form.component';
import { UserRegisterComponent } from './pages/home-page/components/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: BloodCentersDisplayComponent},
  { path: 'centerRegister', component: BloodCenterRegisterFormComponent },
  { path: 'userRegister', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
