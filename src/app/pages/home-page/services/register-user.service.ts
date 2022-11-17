import { RegistredUser } from './../interfaces/RegistredUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistredUserDto } from '../interfaces/dtos/RegistredUserDto';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";

  save(newUser: RegistredUserDto){
    return this.http.post<RegistredUser>(this.url + '/api/registeredusers/add', newUser);
  }
}
