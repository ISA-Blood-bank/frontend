import { Component, OnInit } from '@angular/core';
import { ScheduledAppointmentServicesService } from '../../services/scheduled-appointment-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditionalInfo } from '../../interfaces/dtos/additional-info';
import { BloodType } from '../../interfaces/dtos/blood-type';
import { FormControl, FormGroup } from '@angular/forms';
import { th } from 'date-fns/locale';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-started-appointment',
  templateUrl: './started-appointment.component.html',
  styleUrls: ['./started-appointment.component.css']
})
export class StartedAppointmentComponent implements OnInit {

  constructor(
    private scheduledAppointmentService: ScheduledAppointmentServicesService,
    private router:Router,
    private route: ActivatedRoute) { }

    questionaireId: number
    medicalStaffId: number = 2
    scheduledId: number
    additionalInfo: AdditionalInfo
    copperSulfate: boolean = false
    normalLevel: boolean = false
    highLevel: boolean = false
    hemoglobinometar: string = ""
    value:string = ""
    lungs: boolean = false
    heart: boolean = false
    TA: string = ""
    TT: string = ""
    TV: string = ""
    reasonForRejection: string = ""
    reasonForAbort: string = ""
    accepted: boolean = false
    bagType: string = ""


    selectedValue: BloodType = 0

    types = [
      {value: 0, view: 'A +'},
      {value: 1, view: 'A -'},
      {value: 2, view: 'B +'},
      {value: 3, view: 'B -'},
      {value: 4, view: 'AB +'},
      {value: 5, view: 'AB -'},
      {value: 6, view: 'O +'},
      {value: 7, view: 'O -'},
    ]

  ngOnInit(): void {
    this.questionaireId = Number(this.route.snapshot.paramMap.get('qId'))
    this.scheduledId = Number(this.route.snapshot.paramMap.get('schId'))
    console.log(this.questionaireId)
    console.log('scheduled: ' + this.scheduledId)
    this.additionalInfo.medicalStaffId = this.medicalStaffId
    this.additionalInfo.questionaireId = this.questionaireId
  }

  onSubmit(){
    let now = new Date()
    let dto : AdditionalInfo =  {
      id: -1,
      bakarSulfat: this.copperSulfate,
      normalLevel : this.normalLevel,
      highLevel : this.highLevel,
      hemoglobinometar : this.hemoglobinometar,
      value : this.value,
      lungs : this.lungs,
      heart : this.heart,
      tA : this.TA,
      tT : this.TT,
      tV : this.TV,
      reasonForRejection : this.reasonForRejection,
      reasonForAbort : this.reasonForAbort,
      bagType : this.bagType,
      accepted : this.accepted,
      bloodType : this.selectedValue,
      questionaireId: this.questionaireId,
      medicalStaffId: this.medicalStaffId,
      scheduledAppointmentId: this.scheduledId
    }
    

    console.log(dto)

    this.scheduledAppointmentService.finishAppointment(dto).subscribe(
      data => {
        alert("Successfull appointment")
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
