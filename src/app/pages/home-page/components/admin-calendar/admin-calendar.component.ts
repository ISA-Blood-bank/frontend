import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { CalendarEvent } from 'angular-calendar';
import { CalendarService } from '../../services/calendar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CalendarFreeAppointments } from '../../interfaces/dtos/CalendarFreeAppointments';
import * as moment from 'moment';
import 'moment-timezone';


@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.css']
})
export class AdminCalendarComponent implements OnInit {

  constructor(private calendarService : CalendarService) { }
  view: string = 'month';
  freeAppointments : CalendarFreeAppointments[]=[];
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  ngOnInit(): void {
    this.getFreeAppointments();
   
  }
  onToggleChange(event: MatButtonToggleChange) {
    this.view=event.value
    console.log(this.view)
  }
  setMonthAndYear(event: any, datepicker: any){
    console.log(event);
    this.viewDate=event;
    datepicker.close();
  }

  getFreeAppointments(){
    this.calendarService.freeAppointments(1).subscribe(
      (data) => {
        this.freeAppointments=data;
        console.log("ovo su free appointments", this.freeAppointments);
        this.createCalendarEvents();
        alert("Success!");
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }
 
  createCalendarEvents() {
    for (const appointment of this.freeAppointments) {
      console.log("ovo je format datuma", appointment.start);
      const calendarEvent: CalendarEvent = {
        title:'<span style="color: red;">Ovo je slobodan termin<br>Trajanje termina je:</span>'+" " +appointment.duration + " " + "minuta" ,
        start:  moment(appointment.start, "YYYY, MM, DD, HH, mm, ss, SSS").toDate(),
        end:  moment(appointment.end, "YYYY, MM, DD, HH, mm, ss, SSS").toDate(),
        color: {
          primary:  '#9debb7',
          secondary:  '#c2f2d2'
        }
      
        
      };
      console.log("ovo je veent", calendarEvent);
      console.log("ovo je durairon", appointment.duration);
      this.events.push(calendarEvent);
    }
   
  }

}
