import { BloodCentersDisplayComponent } from './pages/home-page/components/blood-centers-display/blood-centers-display.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './pages/user-profile/components/profile-view/profile-view.component';

const routes: Routes = [
  { path: '', component: BloodCentersDisplayComponent },
  { path: 'myprofile', component: ProfileViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
