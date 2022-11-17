import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCentersDisplayComponent } from './components/blood-centers-display/blood-centers-display.component';

import { MaterialModule } from 'src/app/material/material.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { MatSelectModule } from '@angular/material/select';
import { UserQuestionnaireComponent } from './components/user-questionnaire/user-questionnaire/user-questionnaire.component';




@NgModule({
  declarations: [
    BloodCentersDisplayComponent,
    UserRegisterComponent,
    UserQuestionnaireComponent,
    
  ],
  imports: [
    CommonModule,

    MaterialModule,
    MatSelectModule,

  ]
})
export class HomePageModule { }
