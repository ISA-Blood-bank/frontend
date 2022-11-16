import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCentersDisplayComponent } from './components/blood-centers-display/blood-centers-display.component';

import { MaterialModule } from 'src/app/material/material.module';




@NgModule({
  declarations: [
    BloodCentersDisplayComponent,
    
  ],
  imports: [
    CommonModule,

    MaterialModule

  ]
})
export class HomePageModule { }
