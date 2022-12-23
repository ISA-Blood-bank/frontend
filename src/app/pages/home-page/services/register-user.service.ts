import { RegistredUser } from './../interfaces/RegistredUser';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistredUserDto } from '../interfaces/dtos/RegistredUserDto';
import { JwtAuthenticationRequest } from '../interfaces/dtos/JwtAuthenticationRequest';
import { UserTokenState } from '../interfaces/dtos/UserTokenState';
import { map } from 'rxjs';
import { RegistredAdmin } from '../interfaces/RegistredAdmin';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";
  private access_token = null;

  save(newUser: RegistredUserDto){
    return this.http.post<RegistredUser>(this.url + '/api/registeredusers/add', newUser);
  }
  findAll(){
    return this.http.get<RegistredUser[]>(this.url + '/api/registeredusers/all');
  }

  search(searchInput: any){
    return this.http.get<RegistredUser[]>(this.url + `/api/registeredusers/searchRegisteredUser/${searchInput}`);
  }
  getLoggedUser(){
    return this.http.get<RegistredUser>(this.url + `/api/registeredusers/logedUser`);
  }

  login(login: JwtAuthenticationRequest){

    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const path = this.url + `/auth/login`;
    const req = new HttpRequest("POST", path, login);
    return this.http.post<UserTokenState>(this.url + `/auth/login`, login).pipe(map((res:any) => {
      console.log('Login success');
      console.log(res);
      this.access_token = res.accessToken;
      localStorage.setItem("jwt", res.accessToken)
    }));;
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }
}
