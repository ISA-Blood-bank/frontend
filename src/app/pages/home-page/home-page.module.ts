import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCentersDisplayComponent } from './components/blood-centers-display/blood-centers-display.component';

import { MaterialModule } from 'src/app/material/material.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    BloodCentersDisplayComponent,
    UserRegisterComponent,
    
  ],
  imports: [
    CommonModule,

    MaterialModule,
    MatSelectModule,

  ]
})
export class HomePageModule { }
