import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { CalendarEvent } from 'angular-calendar';
import { CalendarService } from '../../services/calendar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CalendarFreeAppointments } from '../../interfaces/dtos/CalendarFreeAppointments';
import * as moment from 'moment';
import 'moment-timezone';
import { subWeeks, subMonths, addWeeks, addMonths } from 'date-fns';
import { RegisterUserService } from '../../services/register-user.service';
import { JwtService } from '../../services/jwt.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.css']
})
export class AdminCalendarComponent implements OnInit {

  constructor(private calendarService : CalendarService, private jwtService :  JwtService) { }
  view: string = 'month';
  freeAppointments : CalendarFreeAppointments[]=[];
  date: Date = new Date();
  events: CalendarEvent[] = [];
  bloodCenterId : any;

  ngOnInit(): void {
    this.getFreeAppointments();
   
  }
  change(event: MatButtonToggleChange) {
    this.view=event.value
    console.log(this.view)
  }

  previous() {
    if (this.view === 'week') {
      this.date = subWeeks(this.date, 1);
    } else if (this.view === 'month') {
      this.date = subMonths(this.date, 1);
    }
  }

  next() {
    if (this.view === 'week') {
      this.date = addWeeks(this.date, 1);
    } else if (this.view === 'month') {
      this.date = addMonths(this.date, 1);
    }
  }
  setMonthAndYear(event: any, datepicker: any){
    console.log(event);
    this.date=event;
    datepicker.close();
  }

  getUserId(): any{
    let user :any;
    user= this.jwtService.decodeToken(this.jwtService.getTokenFromStorage());
    return user.userId;
  }
  getBloodCenterId(id : number){
   
    this.calendarService.getBloodCenterIdByUserId(id).subscribe(
      (result) => {
        this.bloodCenterId = result;
        console.log("Dobijeni broj:", result);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

     
    );
    
  }

  getFreeAppointments(){
    let userid = this.getUserId();
    this.getBloodCenterId(userid);
    setTimeout(() => {
      console.log("ovo je bloodcenterid", this.bloodCenterId);
      this.calendarService.freeAppointments(this.bloodCenterId).subscribe(
        (data) => {
          this.freeAppointments = data;
          console.log("ovo su free appointments", this.freeAppointments);
          this.createEventsForCalendar();
          alert("Success!");
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }, 1000);

  }
 
  createEventsForCalendar() {
    for (const appointment of this.freeAppointments) {
      console.log("ovo je format datuma", appointment.start);
      if(appointment.name==="" && appointment.surname===""){
      const calendarEvent: CalendarEvent = {
        title:'Free appoitnemnt <br>Appointment duration is:'+" " +appointment.duration + " " + 'minutes<br>'+ 
        'Medical worker:' +" "+appointment.medStaffName +" "+appointment.medStaffSurname
         ,
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
    else {
      const calendarEvent: CalendarEvent = {
        title:'Scheduled appointment<br>Appointment duration is:'+" " +appointment.duration + " " + 'minutes<br>'+ 
        'Donor:'+" "+appointment.name + " "+appointment.surname+'<br>'+
        'Medical worker:' +" "+appointment.medStaffName +" "+appointment.medStaffSurname
         ,
        start:  moment(appointment.start, "YYYY, MM, DD, HH, mm, ss, SSS").toDate(),
        end:  moment(appointment.end, "YYYY, MM, DD, HH, mm, ss, SSS").toDate(),
        color: {
          primary:  '#f7838d',
          secondary:  '#f7838d'
        }
      };
      console.log("ovo je veent", calendarEvent);
      console.log("ovo je durairon", appointment.duration);
      this.events.push(calendarEvent);
    }
  }
}
  
}
