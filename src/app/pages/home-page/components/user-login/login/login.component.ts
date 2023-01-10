import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationRequest } from '../../../interfaces/dtos/JwtAuthenticationRequest';
import { RegistredAdmin } from '../../../interfaces/RegistredAdmin';
import { RegistredUser } from '../../../interfaces/RegistredUser';
import { RegisterUserService } from '../../../services/register-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedUser: any;
  constructor(private registredUserService: RegisterUserService,private router : Router) { }

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
       this.registredUserService.getLoggedUser().subscribe((data)=>{
          this.loggedUser=data;
            console.log("ovo je logovaniuser",this.loggedUser);
            if(this.loggedUser.changePassword==false){
                  this.router.navigate(['changePassword']);
            }
            else{ this.router.navigate(['']);}
        })
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
