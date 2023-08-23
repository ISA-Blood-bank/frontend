import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BloodCenter } from 'src/app/pages/home-page/interfaces/BloodCenter';
import { GradeDto } from 'src/app/pages/home-page/interfaces/dtos/grade-dto';
import { BloodBankService } from 'src/app/pages/home-page/services/blood-bank.service';
import { GradeServiceService } from 'src/app/pages/home-page/services/grade-service.service';
import { JwtService } from 'src/app/pages/home-page/services/jwt.service';
import { RegisterUserService } from 'src/app/pages/home-page/services/register-user.service';

@Component({
  selector: 'app-blood-center-display',
  templateUrl: './blood-center-display.component.html',
  styleUrls: ['./blood-center-display.component.css']
})
export class BloodCenterDisplayComponent implements OnInit {

  constructor(
    private bloodBankService: BloodBankService,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private userService: RegisterUserService,
    private gradeService: GradeServiceService) { }

  id: number
  bloodCenter: BloodCenter
  tokenData: any
  userId: number
  email: string
  canGrade: boolean = false
  selectedGrade: number
  disableButton: boolean = true
  dto: GradeDto

  gradeForm = new FormGroup({
    gradeValue: new FormControl<number | undefined>(undefined)
  }) 

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.tokenData = this.jwtService.decodeToken(localStorage['jwt']) as any;
    this.email = this.tokenData.sub
    console.log(this.id)
    console.log(this.tokenData.sub)
    this.getById()
    this.getUserIdByEmail()
    console.log(this.userId)
    this.getCanGrade()
    console.log(this.canGrade)
    setTimeout(() => this.disableButton = !this.canGrade, 2000);
  }

  getById(){
    this.bloodBankService.getById(this.id).subscribe(
      data => {
        this.bloodCenter = data
      }
    )
  }

  getUserIdByEmail(){
    this.userService.getIdByEmail(this.email).subscribe(
      data => {
        this.userId = data
      }
    )
  }

  getCanGrade(){
    this.gradeService.canGrade(this.userId, this.bloodCenter.id).subscribe(
      data => {
        this.canGrade = data
      }
    )
  }

  onSubmit(){
    console.log(this.gradeForm.controls.gradeValue.value!)
    console.log(this.canGrade)
    if(this.gradeForm.controls.gradeValue.value! !== null){
      this.dto = {
        bloodCenterId: this.bloodCenter.id,
        id: -1,
        userId: this.userId,
        grade: this.gradeForm.controls.gradeValue.value!
      }

      console.log(this.dto)

      this.gradeService.gradeBloodCenter(this.dto).subscribe(
        (data) => {
          console.log(data)
        },
        (error) => {
          alert(error.message)
        }
      )
    }
    
  }

  disableSubmitButton(){

  }


}
