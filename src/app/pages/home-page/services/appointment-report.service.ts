import { AppointmentReport } from './../interfaces/AppointmentReport';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentReportService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";

  findAllSorted(page: number, size: number, sortList: string, sortOrder: string){
    return this.http.get<AppointmentReport[]>(this.url+`/api/appointmentReports/sorted/${page}/${size}/${sortList}/${sortOrder}`);
  }
}
