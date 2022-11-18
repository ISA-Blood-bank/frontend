import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Address } from '../../interfaces/Address';
import { RegistredUserDto } from '../../interfaces/dtos/RegistredUserDto';
import { Gender } from '../../interfaces/enums/Gender';
import { RegistredUser } from '../../interfaces/RegistredUser';
import { RegisterUserService } from '../../services/register-user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private registredUserService: RegisterUserService) { }

  ngOnInit(): void {
  }

  registerUser(user: any){
    let address1: Address = {
      id: -1,
      street: user.street,
      number: user.number,
      city: user.city,
      country: user.country
    }

    let newUser: RegistredUserDto ={
      id: -1,
      name: user.name,
      surname: user.surname,
      jmbg: user.jmbg,
      gender: user.gender,
      email: user.email,
      password1: user.password1,
      password2: user.password2,
      address: address1,
      occupation: user.occupation,
      jobOrSchoolInfo: user.jobOrSchoolInfo,
      points:0,
      category:0,
      penalties:0,
      phone: user.phone
    } 
    
    console.log(user);
    console.log("-----------");
    console.log(address1);
    console.log("-----------");
    console.log(newUser);

    this.registredUserService.save(newUser).subscribe(
      (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
