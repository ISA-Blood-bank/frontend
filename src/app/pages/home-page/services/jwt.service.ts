import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { RegisterUserService } from './register-user.service';
import { RegistredUser } from '../interfaces/RegistredUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(public registeredUsersERVICE : RegisterUserService) { }
  
  public decodeToken(token: string) {
    return jwtDecode(token);
  }
  public getTokenFromStorage(): string{
    return localStorage.getItem("jwt");
  }


  
}
