import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemAdministratorRegistrationComponent } from './components/system-administrator-registration/system-administrator-registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    SystemAdministratorRegistrationComponent
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
export class SystemAdministratorRegistrationModule { }
