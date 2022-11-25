import { Component, OnInit } from '@angular/core';
import { Address } from '../../home-page/interfaces/Address';
import { MedicalStaff } from '../model/medical-staff';
import { MedicalStaffEditService } from '../services/medical-staff-edit.service';

@Component({
  selector: 'app-medical-staff-edit-form',
  templateUrl: './medical-staff-edit-form.component.html',
  styleUrls: ['./medical-staff-edit-form.component.css']
})
export class MedicalStaffEditFormComponent implements OnInit {

  constructor(private editMedicalStaffService: MedicalStaffEditService) { }
  public medicalStaff: MedicalStaff;
  public editMedicalStaff: MedicalStaff;
  public address: Address;
  public editAddress: Address;

  ngOnInit(): void {
    this.getMedicalStaff(1)
  }

  public getMedicalStaff(id: number):void{
    this.editMedicalStaffService.getMedicalStaff(1).subscribe(
      (response: MedicalStaff) => {
        this.medicalStaff = response;
        this.editMedicalStaff = response;
        this.address = response.address;
        this.editAddress = response.address;
      }
    )
  }

  public updateMedicalStaff(ms: MedicalStaff): void {
    let addressBC = {
      id: this.medicalStaff.address.id,
      street:this.medicalStaff.address.street,
      number: this.medicalStaff.address.number,
      city: this.medicalStaff.address.city,
      country: this.medicalStaff.address.country
    }

    ms.address = addressBC
    this.editMedicalStaffService.updateMedicalStaff(ms).subscribe(
      (response: MedicalStaff) => {
        this.medicalStaff = response
      }
    )
  }

}
