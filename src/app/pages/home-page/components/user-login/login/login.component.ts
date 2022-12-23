import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationRequest } from '../../../interfaces/dtos/JwtAuthenticationRequest';
import { RegisterUserService } from '../../../services/register-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registredUserService: RegisterUserService) { }

  ngOnInit(): void {
  }

  loginUser(user: any){

    let newUser: JwtAuthenticationRequest ={
      username: user.email,
      password: user.password1
    } 

    this.registredUserService.login(newUser).subscribe(
      (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
