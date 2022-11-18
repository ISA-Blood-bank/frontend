import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCentersDisplayComponent } from './components/blood-centers-display/blood-centers-display.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
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

    MatTableModule,
    MatSelectModule,

  ]
})
export class HomePageModule { }
