import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-center-register-form',
  templateUrl: './blood-center-register-form.component.html',
  styleUrls: ['./blood-center-register-form.component.css']
})
export class BloodCenterRegisterFormComponent implements OnInit {

  constructor() { }
  selected = ''
  ngOnInit(): void {
  }
  getAdmin(admin : any){
    console.log(admin)

  }
}
