import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodCenter } from '../../home-page/interfaces/BloodCenter';

@Injectable({
  providedIn: 'root'
})
export class BloodCenterEditService {
  url = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getBloodCenter(id: number){
    return this.http.get<BloodCenter>(this.url + "api/bloodCenters/find/" + id)
  }

  updateBloodCenter(bloodCenter: BloodCenter){
    return this.http.put<BloodCenter>(this.url + "api/bloodCenters/update", bloodCenter)
  }
}
