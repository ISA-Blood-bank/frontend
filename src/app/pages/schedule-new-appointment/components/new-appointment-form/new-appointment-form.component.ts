import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NewappointmentService } from '../../services/newappointment.service';
import { BloodCenter } from 'src/app/pages/home-page/interfaces/BloodCenter';
import { RecommendDto } from '../../interfaces/recommend-dto';
import { RetAppointment } from 'src/app/MedicalStaff/create-available-appointments/interfaces/ret-appointment';

@Component({
  selector: 'app-new-appointment-form',
  templateUrl: './new-appointment-form.component.html',
  styleUrls: ['./new-appointment-form.component.css']
})
export class NewAppointmentFormComponent implements OnInit {

  constructor(private appointmentService: NewappointmentService) { }
  public bloodCenters: BloodCenter[] = [];
  public appointments: RetAppointment[] = [];
  ngOnInit(): void {
  }
  getInfo(info: any){
    const time = info.time.split(':');
    info.start.setHours(time[0], time[1], 0);
    let recommendDto: RecommendDto = {
      start: info.start,
      time: info.time
    }
    this.appointmentService.findAvaiableAppointments(recommendDto).subscribe((res)=>{
      this.appointments = res;
      console.log(res)
    }) 
  }
  scheduleAppointment(id: number){

  }
}
