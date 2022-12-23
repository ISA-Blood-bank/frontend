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






@NgModule({
  declarations: [
    BloodCentersDisplayComponent,
    UserRegisterComponent,
    RegisteredUsersDisplayComponent,
    UserQuestionnaireComponent,
    LoginComponent,

    
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

  ],
  /*providers:[
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ]*/
})
export class HomePageModule { }
