import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/user-profile/services/user.service';
import { RegisterUserService } from '../../services/register-user.service';
import { JwtService } from '../../services/jwt.service';
import { PasswordDto } from '../../interfaces/dtos/PasswordDto';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService : UserService,private registrationService: RegisterUserService,
    private jwtservice : JwtService) { }
  public loggedUser : any
  ngOnInit(): void {
  }

 

  changePassword(p : any)
  {
    console.log("usao sam");
    let userEmail :string;
    let userEmail2 :any;
    userEmail= this.jwtservice.getTokenFromStorage();
    userEmail2 = this.jwtservice.decodeToken(userEmail);
    console.log("ovo je email od logovanog usera",userEmail2);
    let passwordDto: PasswordDto = {
      email:userEmail2.sub,
      password : p.password
    }
    console.log("dto koji se salje",passwordDto);
    this.registrationService.changePassword(passwordDto).subscribe(
      (data) => {
        alert("Success!");
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
   }
}
