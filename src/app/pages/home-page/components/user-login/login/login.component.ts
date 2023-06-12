import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationRequest } from '../../../interfaces/dtos/JwtAuthenticationRequest';
import { RegistredAdmin } from '../../../interfaces/RegistredAdmin';
import { RegistredUser } from '../../../interfaces/RegistredUser';
import { combineLatest } from 'rxjs';
import { TokenData } from '../../../interfaces/token-data';
import { JwtService } from '../../../services/jwt.service';
import { RegisterUserService } from '../../../services/register-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registredUserService: RegisterUserService, private jwtService: JwtService, private router: Router) { }
  tokenData: any;
  loggedUser: any;
  role: string;

  ngOnInit(): void {
  }
  navigateByRole(token: string): void {
    //console.log("token je ", token);
    if (token === 'ROLE_MEDSTAFF') {
      this.router.navigate(['userView']);
    } else if (token === 'ROLE_USER') {
      this.router.navigate(['']);
    } else if (token === 'ROLE_ADMIN') {
      if(this.tokenData.passwordChanged || this.tokenData.passwordChanged==null)
      {
        this.router.navigate(['centerRegister']);
      }
      else{
      this.router.navigate(['changePassword']);}
      
  }
  }

 
  loginUser(user: any){

    let newUser: JwtAuthenticationRequest ={
      username: user.email,
      password: user.password1
    } 


    this.registredUserService.login(newUser).subscribe(
      (data) => {
        alert("Success!");
        //console.log("ovo je sve u tokenu da znas : ", localStorage['jwt']);
        this.tokenData = this.jwtService.decodeToken(localStorage['jwt']) as any;
        //console.log("ovo je sve u dekodovanom tokenu da znas : ", this.tokenData);
        console.log(this.tokenData.role[this.tokenData.role.length - 1].name);
        this.role = this.tokenData.role[this.tokenData.role.length - 1].name;

        this.navigateByRole(this.role);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 
}
