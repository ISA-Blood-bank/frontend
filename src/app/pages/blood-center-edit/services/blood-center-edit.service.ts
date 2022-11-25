import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BloodCenter } from '../../home-page/interfaces/BloodCenter';

@Injectable({
  providedIn: 'root'
})
export class BloodCenterEditService {

  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getBloodCenter(id: number){
    return this.http.get<BloodCenter>(`${this.apiUrl}/api/bloodCenters/find/${id}`)
  }

  updateBloodCenter(bloodCenter: BloodCenter){
    return this.http.put<BloodCenter>(`${this.apiUrl}/api/bloodCenters/update`, bloodCenter)
  }
}
