import { RegistredUser } from './../interfaces/RegistredUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";

  save(newUser: RegistredUser){
    return this.http.post<RegistredUser>(this.url + '/api/registeredusers/add', newUser);
  }
  findAll(){
    return this.http.get<RegistredUser[]>(this.url + '/api/registeredusers/all');
  }
}
