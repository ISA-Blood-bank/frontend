import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  public decodeToken(token: string) {
    return jwtDecode(token);
  }
}
