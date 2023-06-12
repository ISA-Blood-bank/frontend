import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarFreeAppointments } from '../interfaces/dtos/CalendarFreeAppointments';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080";


  freeAppointments(id : number){              
    return this.http.get<CalendarFreeAppointments[]>(this.url+`/api/appointments/allCalendarFree/${id}`);
  }
}
