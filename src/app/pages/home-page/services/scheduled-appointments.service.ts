import { ScheduledAppointment } from './../interfaces/ScheduledAppointment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduledAppointmentsService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";
  body = {}

  findAllForLoggedUser(){
    return this.http.get<ScheduledAppointment[]>(this.url + `/api/scheduledAppointments/getAllForLoggedUser`);
  }

  cancel(id: number){
    return this.http.put<ScheduledAppointment>(this.url + `/api/scheduledAppointments/cancel/${id}`, this.body);
  }
}
