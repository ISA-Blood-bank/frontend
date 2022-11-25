import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCenterEditFormComponent } from './blood-center-edit-form/blood-center-edit-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    BloodCenterEditFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class BloodCenterEditModule { }
