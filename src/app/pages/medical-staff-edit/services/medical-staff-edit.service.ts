import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MedicalStaff } from '../model/medical-staff';

@Injectable({
  providedIn: 'root'
})
export class MedicalStaffEditService {

  private apiUrl = environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  getMedicalStaff(id: number){
    return this.http.get<MedicalStaff>(`${this.apiUrl}/api/medicalStaff/find/${id}`)
  }

  updateMedicalStaff(ms: MedicalStaff){
    return this.http.put<MedicalStaff>(`${this.apiUrl}/api/medicalStaff/update`, ms)
  }
}
