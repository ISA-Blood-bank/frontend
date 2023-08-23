import { RegistredUser } from './../interfaces/RegistredUser';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistredUserDto } from '../interfaces/dtos/RegistredUserDto';
import { JwtAuthenticationRequest } from '../interfaces/dtos/JwtAuthenticationRequest';
import { UserTokenState } from '../interfaces/dtos/UserTokenState';
import { map } from 'rxjs';
import { RegistredAdmin } from '../interfaces/RegistredAdmin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient, private router: Router) { }

  url = "http://localhost:8080";
  private access_token = null;
  currentUser!:any;

  save(newUser: RegistredUserDto){
    return this.http.post<RegistredUser>(this.url + '/auth/signup', newUser);
  }
  findAll(){
    return this.http.get<RegistredUser[]>(this.url + '/api/registeredusers/all');
  }
  findByEmail(email: string){
    return this.http.get<RegistredUser>(this.url + `/api/registeredusers/findByEmail/${email}`);
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
  logout() {
    localStorage.removeItem("jwt");
    this.access_token = null;
    this.router.navigate(['/login']);
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }

  getIdByEmail(email: string){
    return this.http.get<number>(this.url + `/api/registeredusers/findIdByEmail/${email}`)
  }
}
