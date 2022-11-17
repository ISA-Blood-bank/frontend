import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalStaff } from '../interface/MedicalStaff';

@Injectable({
  providedIn: 'root'
})
export class RegistrationMedicalStaffService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080";

  save(newUser: MedicalStaff){
    return this.http.post<MedicalStaff>(this.url + '/api/medicalStaff/add', newUser);
  }
}

