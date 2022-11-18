import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCentersDisplayComponent } from './components/blood-centers-display/blood-centers-display.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';


import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { MatSelectModule } from '@angular/material/select';
import { UserQuestionnaireComponent } from './components/user-questionnaire/user-questionnaire/user-questionnaire.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';





@NgModule({
  declarations: [
    BloodCentersDisplayComponent,
    UserRegisterComponent,
    UserQuestionnaireComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule, 
    FormsModule,

    MaterialModule,

    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSortModule

  ]
})
export class HomePageModule { }
