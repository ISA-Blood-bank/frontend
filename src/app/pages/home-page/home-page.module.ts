import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCentersDisplayComponent } from './components/blood-centers-display/blood-centers-display.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

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
    MatTableModule, 
    FormsModule,

    MaterialModule,
    MatSelectModule,

  ]
})
export class HomePageModule { }
