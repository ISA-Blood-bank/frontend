import { BloodCenterDto } from './../../../home-page/interfaces/dtos/BloodCenterDto';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HomePageModule } from 'src/app/pages/home-page/home-page.module';
import { Address } from 'src/app/pages/home-page/interfaces/Address';
import { BloodCenter } from 'src/app/pages/home-page/interfaces/BloodCenter';
import { BloodBankService } from 'src/app/pages/home-page/services/blood-bank.service';
import { MedicalStaff } from '../../interface/MedicalStaff';
import {  RegistrationMedicalStaffService } from '../../service/registration-medical-staff-service.service';



@Component({
  selector: 'app-blood-center-register-form',
  templateUrl: './blood-center-register-form.component.html',
  styleUrls: ['./blood-center-register-form.component.css']
})
export class BloodCenterRegisterFormComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService,private registrationMedicalStaffService: RegistrationMedicalStaffService) { }
  selected = '';
  public bloodCenters: BloodCenter[] =[];
  

  ngOnInit(): void {
    this.bloodBankService.findAll().subscribe((res)=>{
      this.bloodCenters = res;
      console.log(res)
     
    }) 
  }
  getAdmin(admin : any){
    console.log(admin)
    let address1: Address = {
      id: -1,
      street: admin.street,
      number: admin.number,
      city: admin.city,
      country: admin.country
    }

    let bloodCenter1: BloodCenter ={
      id: admin.bc.id,
      name: admin.bc.name,
      address: admin.bc.addres,
      description: admin.bc.description,
      averageScore: admin.bc.averageScore
    }


    let newMedicalStaff: MedicalStaff ={
      id: -1,
      name: admin.name,
      surname: admin.surname,
      jmbg: admin.jmbg,
      gender: admin.gender,
      email: admin.email,
      address: address1,
      bloodCenter :bloodCenter1
    } 
    this.registrationMedicalStaffService.save(newMedicalStaff).subscribe(
      (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }
  getbloodCenter(bc : any){
    console.log(bc)
    let address1: Address = {
      id: -1,
      street: bc.street,
      number: bc.number,
      city: bc.city,
      country: bc.country
    }

    let newBloodCenter: BloodCenter ={
      id: -1,
      name: bc.name,
      address: address1,
      description : bc.description,
      averageScore: 0
    } 

    this.bloodBankService.save(newBloodCenter).subscribe(
      (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

}