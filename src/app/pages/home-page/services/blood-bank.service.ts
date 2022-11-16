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
}