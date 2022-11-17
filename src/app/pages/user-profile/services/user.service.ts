import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedUser } from '../interfaces/logged-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser(userId: number):Observable<LoggedUser>{
    return this.http.get<LoggedUser>(`${this.apiServerUrl}/api/registeredusers/find/${userId}`);
  }
  public updateUserInfo(user: LoggedUser):Observable<LoggedUser>{
    return this.http.put<LoggedUser>(`${this.apiServerUrl}/api/registeredusers/update`, user);
  }
}
