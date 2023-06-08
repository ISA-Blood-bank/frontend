import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodcenterStatsComponent } from './components/bloodcenter-stats/bloodcenter-stats.component';
import { MaterialModule } from 'src/app/material/material.module'; 



@NgModule({
  declarations: [
    BloodcenterStatsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class BusinessAnalyticsModule { }
