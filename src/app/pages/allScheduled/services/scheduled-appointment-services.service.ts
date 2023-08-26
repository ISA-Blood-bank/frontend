import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScheduledDisplay } from '../interfaces/dtos/scheduled-display';
import {Observable} from 'rxjs'
import { AdditionalInfo } from '../interfaces/dtos/additional-info';
import { RejectionReason } from '../interfaces/dtos/rejection-reason';
import { ScheduledAppointmentDto } from '../interfaces/dtos/scheduled-appointment-dto';


@Injectable({
  providedIn: 'root'
})
export class ScheduledAppointmentServicesService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";
  body = {}

  getAllScheduled(id: number){
    return this.http.get<ScheduledDisplay[]>(this.url + `/api/scheduledAppointments/allScheduledAppointments/${id}`)
  }

  getById(id: number): Observable<ScheduledDisplay>{
    return this.http.get<ScheduledDisplay>(this.url + `/api/scheduledAppointments/getScheduledAppointment/${id}`)
  }

  userHasExtractedTooth(id: number): Observable<boolean>{
    return this.http.get<boolean>(this.url + `/api/questionnaire/extractedTooth/${id}`)
  }

  userHasAllergies(id: number): Observable<boolean>{
    return this.http.get<boolean>(this.url + `/api/questionnaire/hasAllergies/${id}`)
  }

  userHasgotTattooed(id: number): Observable<boolean>{
    return this.http.get<boolean>(this.url + `/api/questionnaire/gotTattooed/${id}`)
  }

  userHasCold(id: number): Observable<boolean>{
    return this.http.get<boolean>(this.url + `/api/questionnaire/hasCold/${id}`)
  }

  userHasMenstruation(id: number): Observable<boolean>{
    return this.http.get<boolean>(this.url + `/api/questionnaire/hasMenstruation/${id}`)
  }

  userTakesMedication(id: number): Observable<boolean>{
    return this.http.get<boolean>(this.url + `/api/questionnaire/takesMedication/${id}`)
  }

  getQuestionnaireId(id: number): Observable<number>{
    return this.http.get<number>(this.url + `/api/scheduledAppointments/getQuestionaireId/${id}`)
  }

  finishAppointment(dto: AdditionalInfo): Observable<any>{
    return this.http.post<any>(this.url + `/api/scheduledAppointments/appointmentFinish`, dto)
  }

  rejectAppointment(dto: RejectionReason): Observable<any>{
    return this.http.post<any>(this.url + '/api/scheduledAppointments/rejectPatient', dto)
  }

  userNotCome(dto: ScheduledAppointmentDto): Observable<any>{
    return this.http.put<any>(this.url + `/api/scheduledAppointments/patientNotCome`, dto)
  }
}
