import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HomePageModule } from 'src/app/pages/home-page/home-page.module';
import { BloodCenter } from 'src/app/pages/home-page/interfaces/BloodCenter';
import { BloodBankService } from 'src/app/pages/home-page/services/blood-bank.service';



@Component({
  selector: 'app-blood-center-register-form',
  templateUrl: './blood-center-register-form.component.html',
  styleUrls: ['./blood-center-register-form.component.css']
})
export class BloodCenterRegisterFormComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService) { }
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
    
  }
  onSelected(a : any){
    this.selected=a.value;
    console.log(a)
    
  }

  

}