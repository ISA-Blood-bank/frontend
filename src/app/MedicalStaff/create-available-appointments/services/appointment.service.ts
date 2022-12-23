import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080";

  save(newAppointment: any){
    return this.http.post<Appointment>(this.url + 'api/appointments/create', newAppointment);
  }
}
