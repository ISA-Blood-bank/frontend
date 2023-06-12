import { Injectable } from '@angular/core';
import { RegistredUserDto } from '../../home-page/interfaces/dtos/RegistredUserDto';
import { RegistredUser } from '../../home-page/interfaces/RegistredUser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterSysAdminService {

  constructor(private http: HttpClient, private router: Router) { }

  url = "http://localhost:8080";
  
  save(newUser: RegistredUserDto){
    return this.http.post<RegistredUser>(this.url + '/auth/adminSignup', newUser);
  }
}
