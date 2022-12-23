import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RetAppointment } from 'src/app/MedicalStaff/create-available-appointments/interfaces/ret-appointment';
import { BloodCenter } from '../../home-page/interfaces/BloodCenter';
import { RecommendDto } from '../interfaces/recommend-dto';

@Injectable({
  providedIn: 'root'
})
export class NewappointmentService {
  url = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  
  findAvaiableBloodCenters(dto : RecommendDto){
    return this.http.post<BloodCenter[]>(`${this.url}/api/bloodCenters/getavailable`, dto);
  }
  findAvaiableAppointments(dto : RecommendDto){
    return this.http.post<RetAppointment[]>(`${this.url}/api/appointments/getavailable`, dto);
  }
}
