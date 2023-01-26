import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/user-profile/services/user.service';
import { RegisterUserService } from '../../services/register-user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService : UserService,private registrationService: RegisterUserService) { }
  public loggedUser : any
  ngOnInit(): void {
  }
  changePassword(p : any)
  {
    
    this.registrationService.getLoggedUser().subscribe((data)=>{
      this.loggedUser=data;
    });
   
    this.loggedUser.password=p;
   
    this.userService.updateUserInfo(this.loggedUser).subscribe(
     /* (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
 */
    )}
}
