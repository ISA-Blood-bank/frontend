import { Component, OnInit } from '@angular/core';
import { ScheduledAppointmentServicesService } from '../../services/scheduled-appointment-services.service';
import { ScheduledDisplay } from '../../interfaces/dtos/scheduled-display';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scheduled-info',
  templateUrl: './scheduled-info.component.html',
  styleUrls: ['./scheduled-info.component.css']
})
export class ScheduledInfoComponent implements OnInit {

  constructor(
    private scheduledAppointmentService: ScheduledAppointmentServicesService,
    private router:Router,
    private route: ActivatedRoute) { }

  scheduled: ScheduledDisplay
  sub:any
  id:number

  extractedTooth: boolean
  hasAllergies: boolean
  gotTattooed: boolean
  hasCold: boolean
  hasMensturation:boolean
  takesMedication:boolean

  hasSymptoms:boolean
  questionaireId: number

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)
    this.getById()
    this.getExtracted()
    this.getAllergies()
    this.getTattooed()
    this.getCold()
    this.getMensruation()
    this.getMedication()
    this.getQuestionnaireId()
    this.disable()
    console.log(this.questionaireId)
  }

  getById(){
    this.scheduledAppointmentService.getById(this.id).subscribe(
      data => {this.scheduled = data}
    )
  }

  formatDate(date: Date){
    var created: string = date.toString();
    var splited:string [] = created.split(',');
    var ret = splited[2] + "." + splited[1] + "." + splited[0] + "." + "  " + splited[3] + ":" + splited[4];
    return ret;
  }

  getExtracted(){
    this.scheduledAppointmentService.userHasExtractedTooth(this.id).subscribe(
      data => {
        this.extractedTooth = data
      }
    )
  }

  getAllergies(){
    this.scheduledAppointmentService.userHasAllergies(this.id).subscribe(
      data => {
        this.hasAllergies = data
      }
    )
  }

  getTattooed(){
    this.scheduledAppointmentService.userHasgotTattooed(this.id).subscribe(
      data => {
        this.gotTattooed = data
      }
    )
  }

  getCold(){
    this.scheduledAppointmentService.userHasCold(this.id).subscribe(
      data => {
        this.hasCold = data
      }
    )
  }

  getMensruation(){
    this.scheduledAppointmentService.userHasMenstruation(this.id).subscribe(
      data => {
        this.hasMensturation = data
      }
    )
  }

  getMedication(){
    this.scheduledAppointmentService.userTakesMedication(this.id).subscribe(
      data => {
        this.takesMedication = data
      }
    )
  }

  disable(){
    if(this.extractedTooth || this.hasAllergies || this.gotTattooed || this.hasCold || this.hasMensturation || this.takesMedication){
      this.hasSymptoms = true
    } else {
      this.hasSymptoms = false
    }
  }

  getQuestionnaireId(){
    this.scheduledAppointmentService.getQuestionnaireId(this.id).subscribe(
      data => {
        this.questionaireId = data
      }
    )
  }

  startAppointment(){
    this.router.navigateByUrl('/appointmentStart/' + this.id + '/' + this.questionaireId + '/' + this.scheduled.id)
  }

}
