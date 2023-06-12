import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarFreeAppointments } from '../interfaces/dtos/CalendarFreeAppointments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080";


  freeAppointments(id : number){              
    return this.http.get<CalendarFreeAppointments[]>(this.url+`/api/appointments/allCalendarFree/${id}`);
  }

  getBloodCenterIdByUserId(id : number) : Observable<number> {
    console.log("ovo je id koji saljem na bek", id);
    return this.http.get<number>(this.url + `/api/medicalStaff/findBloodCenterByUserId/${id}`);
  }

}
