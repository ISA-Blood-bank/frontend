import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalStaffEditFormComponent } from './medical-staff-edit-form/medical-staff-edit-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    MedicalStaffEditFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MatOptionModule
  ]
})
export class MedicalStaffEditModule { }
