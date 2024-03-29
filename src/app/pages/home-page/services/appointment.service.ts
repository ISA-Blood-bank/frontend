import { Appointment } from './../interfaces/Appointment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";
  body = {}

  findAllSortedAndAvailable(page: number, size: number, sortList: string, sortOrder: string){
    return this.http.get<Appointment[]>(this.url+`/api/appointments/sorted/${page}/${size}/${sortList}/${sortOrder}`);
  }

  schedule(id: number){
    return this.http.put<Appointment>(this.url + `/api/appointments/schedule/${id}`, this.body);
  }
}
