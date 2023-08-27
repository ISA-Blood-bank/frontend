import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalStaff } from '../../blood-center-register/interface/MedicalStaff';
import { MedicalStaffDto } from '../interfaces/dtos/medical-staff-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicalStaffService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/api/medicalStaff"

  getAllByBloodCenterId(bloodCenterId: number){
    return this.http.get<MedicalStaffDto[]>( this.url + `/all-medical-staff/${bloodCenterId}`)
  }
}
