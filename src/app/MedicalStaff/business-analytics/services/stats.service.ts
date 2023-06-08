import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMedicalStaff } from '../interfaces/imedical-staff';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080";

  getMedStaffByUserId(id: number){
    return this.http.get<any>(`${this.url}/api/medicalStaff/findbyuser/${id}`)
  }
}
