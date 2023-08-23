import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GradeDto } from '../interfaces/dtos/grade-dto';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/api/BloodCenterGrade"; // port proveri

  canGrade(userId: number, bloodCenterId: number):Observable<boolean>{
    return this.http.get<boolean>(this.url + `/canGrade/${userId}/${bloodCenterId}`)
  }

  gradeBloodCenter(dto: GradeDto ){
    return this.http.post<any>(this.url + `/gradeBloodCenter`, dto)
  }
}
