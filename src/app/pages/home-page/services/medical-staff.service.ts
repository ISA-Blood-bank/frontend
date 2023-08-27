import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalStaff } from '../../blood-center-register/interface/MedicalStaff';
import { MedicalStaffDto } from '../interfaces/dtos/medical-staff-dto';
import { RegistredUserViewDto } from '../interfaces/dtos/registred-user-view-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicalStaffService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/api/medicalStaff"

  getAllByBloodCenterId(bloodCenterId: number){
    return this.http.get<MedicalStaffDto[]>( this.url + `/all-medical-staff/${bloodCenterId}`)
  }

  getAllUsersWhoVisited(bloodCenterId: number){
    return this.http.get<RegistredUserViewDto[]>(this.url + `/allVisited/${bloodCenterId}`)
  }

  getMedicalStaff(id: number){
    return this.http.get<MedicalStaffDto>(this.url + `/myProfile/${id}`)
  }
}
