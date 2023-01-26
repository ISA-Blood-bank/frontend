import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCenterRegisterFormComponent } from './components/blood-center-register-form/blood-center-register-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    BloodCenterRegisterFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MaterialModule,
    FormsModule,
    MatInputModule
    
  ]
})
export class BloodCenterRegisterModule { }
