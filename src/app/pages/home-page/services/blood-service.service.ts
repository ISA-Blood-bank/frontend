import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodDto } from '../../allScheduled/interfaces/dtos/blood-dto';

@Injectable({
  providedIn: 'root'
})
export class BloodServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/api/bloods"

  findBloods(bloodCenterId: number){
    return this.http.get<BloodDto[]>(this.url + `/getForBloodCenter/${bloodCenterId}`)
  }
}
