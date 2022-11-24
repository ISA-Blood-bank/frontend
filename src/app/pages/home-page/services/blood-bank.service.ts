import { BloodCenterDto } from './../interfaces/dtos/BloodCenterDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodCenter } from '../interfaces/BloodCenter';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080"; // port proveri

  findAll(){
    return this.http.get<BloodCenter[]>(this.url + '/api/bloodCenters/all');
  }

  findAllSorted(page: number, size: number, sortList: string, sortOrder: string){
    return this.http.get<BloodCenter[]>(this.url + `/api/bloodCenters/sorted/${page}/${size}/${sortList}/${sortOrder}`);
  }
  save(newUser: BloodCenter){
    return this.http.post<BloodCenter>(this.url + '/api/bloodCenters/add', newUser);
  }
}
