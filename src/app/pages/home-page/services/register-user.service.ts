import { RegistredUser } from './../interfaces/RegistredUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistredUserDto } from '../interfaces/dtos/RegistredUserDto';
import { JwtAuthenticationRequest } from '../interfaces/dtos/JwtAuthenticationRequest';
import { UserTokenState } from '../interfaces/dtos/UserTokenState';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";

  save(newUser: RegistredUserDto){
    return this.http.post<RegistredUser>(this.url + '/api/registeredusers/add', newUser);
  }
  findAll(){
    return this.http.get<RegistredUser[]>(this.url + '/api/registeredusers/all');
  }

  search(searchInput: any){
    return this.http.get<RegistredUser[]>(this.url + `/api/registeredusers/searchRegisteredUser/${searchInput}`);
  }

  login(login: JwtAuthenticationRequest){
    return this.http.post<UserTokenState>(this.url + `/auth/login`, login);
  }
}
