import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MedicalStaffDto } from '../interface/MedicalStaffDto';

@Injectable({
  providedIn: 'root'
})
export class RegistrationMedicalStaffService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:8080";
 

  save(newUser: MedicalStaffDto){
    return this.http.post<any>(this.url + '/api/medicalStaff/add', newUser);
  }
}

