import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodCenter } from '../../home-page/interfaces/BloodCenter';

@Injectable({
  providedIn: 'root'
})
export class NewappointmentService {
  url = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  
  findAvaiableBloodCenters(date : any){
    return this.http.get<BloodCenter[]>(this.url + `/api/bloodCenters/getavailable/${date}`);
  }
}
