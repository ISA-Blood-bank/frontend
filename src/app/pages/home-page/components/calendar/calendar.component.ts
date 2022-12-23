import { Component, OnInit } from '@angular/core';
import {View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public setView: View='Week';
  public eventObject : EventSettingsModel ={
    dataSource :[{
      Subject: "Testing",
      StartTime: new Date(2022,12,20,4,0),
      EndTime: new Date(2022,12,20,6,0)
    }]
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
