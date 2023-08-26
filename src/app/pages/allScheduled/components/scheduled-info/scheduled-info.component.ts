import { Component, OnInit } from '@angular/core';
import { ScheduledAppointmentServicesService } from '../../services/scheduled-appointment-services.service';
import { ScheduledDisplay } from '../../interfaces/dtos/scheduled-display';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AdditionalInfo } from '../../interfaces/dtos/additional-info';
import { RejectionReason } from '../../interfaces/dtos/rejection-reason';
import { HttpErrorResponse } from '@angular/common/http';
import { ScheduledAppointment } from 'src/app/pages/home-page/interfaces/ScheduledAppointment';
import { ScheduledAppointmentDto } from '../../interfaces/dtos/scheduled-appointment-dto';

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
  failedScheduled: ScheduledAppointmentDto

  extractedTooth: boolean
  hasAllergies: boolean
  gotTattooed: boolean
  hasCold: boolean
  hasMensturation:boolean
  takesMedication:boolean

  hasSymptoms:boolean
  questionaireId: number

  rejectionInfo: RejectionReason

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)
    this.nested()
    
    console.log(this.questionaireId)
  }

  getById(){
    this.scheduledAppointmentService.getById(this.id).subscribe(
      data => {
        console.log(data)
        this.scheduled = data
      }
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

  rejectPatient(){
    let reasonOutput: string = ""

    if (this.extractedTooth) {
      reasonOutput = reasonOutput + "Patient had extracted a tooth in past 7 days\n"
    }

    if(this.hasAllergies){
      reasonOutput = reasonOutput + "Patient has allergies\n"
    }

    if(this.gotTattooed) {
      reasonOutput = reasonOutput + "Patient got tattooed in past 6 months"
    }

    if(this.hasCold){
      reasonOutput = reasonOutput + "Patient has cold"
    }

    if(this.takesMedication){
      reasonOutput = reasonOutput + "Patient takes medication"
    }

    if(this.hasMensturation){
      reasonOutput = reasonOutput + "Patient has menstruation or is pregnant"
    }

    this.rejectionInfo = {
      id: -1,
      medicalStaffId: 2,
      scheduledAppointmentId: this.id,
      rejectionReason: reasonOutput
    }

    console.log(this.rejectionInfo)

    this.scheduledAppointmentService.rejectAppointment(this.rejectionInfo).subscribe(
      data => {
        alert("Rejection successful!")
        this.router.navigateByUrl('/userView')
      },
      (error) => {
        console.log(error)
      }
    )
  }

  patientNotCome(){
    this.failedScheduled = {
      id: this.scheduled.id,
      appointmentId: this.scheduled.appointmentId,
      canceled: true,
      passed:true,
      registredUserId: this.scheduled.userId
      
    }

    console.log(this.failedScheduled)

    this.scheduledAppointmentService.userNotCome(this.failedScheduled).subscribe(
      data => {
        alert("Patient didn't come successfull!")
        this.router.navigateByUrl('/userView')
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
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
    this.scheduledAppointmentService.getQuestionnaireId(this.scheduled.userId).subscribe(
      data => {
        console.log('Questionaire data:')
        console.log(data)
        this.questionaireId = data
      }
    )
  }

  startAppointment(){
    this.router.navigateByUrl('/appointmentStart/' + this.id + '/' + this.questionaireId + '/' + this.scheduled.id)
  }


  // NE DIRAJ OVO!!!!!! POKVARICESSSSSSS!!!!!!
  nested(){
    this.scheduledAppointmentService.getById(this.id).subscribe(scheduledData => {
      console.log(scheduledData)
      this.scheduled = scheduledData
      //get questionaire id
      this.scheduledAppointmentService.getQuestionnaireId(this.scheduled.userId).subscribe( quesId => {
        console.log("qest id:")
        console.log(quesId)
        this.questionaireId = quesId

        //get extracted tooth
        this.scheduledAppointmentService.userHasExtractedTooth(this.scheduled.userId).subscribe( extr => {
          console.log('extr: ')
          console.log(extr)
          this.extractedTooth = extr

          //allergies
          this.scheduledAppointmentService.userHasAllergies(this.scheduled.userId).subscribe(all => {
            console.log('all: ')
            console.log(all)
            this.hasAllergies = all

            //tattoo
            this.scheduledAppointmentService.userHasgotTattooed(this.scheduled.userId).subscribe( tatt => {
              console.log('tatt: ')
              console.log(tatt)
              this.gotTattooed = tatt

              //cold
              this.scheduledAppointmentService.userHasCold(this.scheduled.userId).subscribe( cold => {
                console.log('cold')
                console.log(cold)
                this.hasCold = cold

                //menstruation
                this.scheduledAppointmentService.userHasMenstruation(this.scheduled.userId).subscribe(mens => {
                  console.log('mens: ')
                  console.log(mens)
                  this.hasMensturation = mens

                  //medication
                  this.scheduledAppointmentService.userTakesMedication(this.scheduled.userId).subscribe(meds => {
                    console.log('meds')
                    console.log(meds)
                    this.takesMedication = meds

                    this.disable()
                  });
                });
              });
            });
          });
        });
      });
    });
  }

}
