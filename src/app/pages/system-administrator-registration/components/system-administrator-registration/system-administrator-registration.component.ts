import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/pages/home-page/interfaces/Address';
import { RegistredUserDto } from 'src/app/pages/home-page/interfaces/dtos/RegistredUserDto';
import { RegisterSysAdminService } from '../../services/register-sys-admin.service';

@Component({
  selector: 'app-system-administrator-registration',
  templateUrl: './system-administrator-registration.component.html',
  styleUrls: ['./system-administrator-registration.component.css']
})
export class SystemAdministratorRegistrationComponent implements OnInit {

  constructor(private registerSysAdminService : RegisterSysAdminService) { }

  ngOnInit(): void {
  }

submit(user: any){
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
    password1: "",
    password2: "",
    address: address1,
    occupation: "",
    jobOrSchoolInfo: "",
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

  this.registerSysAdminService.save(newUser).subscribe(
    (data) => {
      alert("Success!");
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
}
