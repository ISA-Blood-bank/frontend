import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RetAppointment } from 'src/app/MedicalStaff/create-available-appointments/interfaces/ret-appointment';
import { BloodCenter } from '../../home-page/interfaces/BloodCenter';
import { RecommendDto } from '../interfaces/recommend-dto';
import { Appointment } from 'src/app/MedicalStaff/create-available-appointments/interfaces/appointment';

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
  public scheduleAppointment(
    appointmentId: number
  ): Observable<RetAppointment> {
    return this.http.put<RetAppointment>(`${this.url}`, appointmentId);
  }

  scheduleRecommendedAppointment(dto: any): Observable<string> {
    return this.http.post<string>(`${this.url}/api/appointments/schedule-recommended-appointment`, dto);
}
}
