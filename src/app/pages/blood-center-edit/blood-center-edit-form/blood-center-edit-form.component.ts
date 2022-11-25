import { Component, OnInit } from '@angular/core';
import { Address } from '../../home-page/interfaces/Address';
import { BloodCenter } from '../../home-page/interfaces/BloodCenter';
import { BloodCenterEditService } from '../services/blood-center-edit.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blood-center-edit-form',
  templateUrl: './blood-center-edit-form.component.html',
  styleUrls: ['./blood-center-edit-form.component.css']
})
export class BloodCenterEditFormComponent implements OnInit {

  constructor(private editBloodCenterService: BloodCenterEditService) { }
  public bloodCenter: BloodCenter
  public editBloodCenter: BloodCenter
  public address: Address
  public editAddress: Address

  ngOnInit(): void {
    this.getBloodCenter(1);
  }

  public getBloodCenter(id: number): void{
    this.editBloodCenterService.getBloodCenter(id).subscribe(
      (response: BloodCenter) => {
        this.bloodCenter = response;
        this.editBloodCenter = response;
        this.address = response.address;
        this.editAddress = response.address;
      }
    )
  }

  public updateBloodCenter(bc: BloodCenter): void{
    let addressBC = {
      id: this.bloodCenter.address.id,
      street:this.bloodCenter.address.street,
      number: this.bloodCenter.address.number,
      city: this.bloodCenter.address.city,
      country: this.bloodCenter.address.country
    }
    bc.address = addressBC

    this.editBloodCenterService.updateBloodCenter(bc).subscribe(
      (response: BloodCenter) =>{
        this.bloodCenter = response
      }
    )
  }

}
