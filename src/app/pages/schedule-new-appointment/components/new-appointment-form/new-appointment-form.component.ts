import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NewappointmentService } from '../../services/newappointment.service';
import { BloodCenter } from 'src/app/pages/home-page/interfaces/BloodCenter';
import { RecommendDto } from '../../interfaces/recommend-dto';
import { RetAppointment } from 'src/app/MedicalStaff/create-available-appointments/interfaces/ret-appointment';
import { ScheduleRecommendedDto } from '../../interfaces/schedule-recommended-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointment-form',
  templateUrl: './new-appointment-form.component.html',
  styleUrls: ['./new-appointment-form.component.css']
})
export class NewAppointmentFormComponent implements OnInit {

  constructor(private appointmentService: NewappointmentService, private router: Router) { }
  public bloodCenters: BloodCenter[] = [];
  public appointments: RetAppointment[] = [];
  public recommendDto: RecommendDto;
  public sortAscending: any = false;
  ngOnInit(): void {
    
  }
  getInfo(info: any){
    const time = info.time.split(':');
    info.start.setHours(time[0], time[1], 0);
    this.recommendDto = {
      start: info.start,
      time: info.time
    }
    this.appointmentService.findAvaiableBloodCenters(this.recommendDto).subscribe((res)=>{
      this.bloodCenters = res;
      this.onSortOrderChange();
      console.log(res)
    }) 
  }
  scheduleRecommended(id: number){
    let scheduleDto: ScheduleRecommendedDto ={
      start: this.recommendDto.start,
      time: this.recommendDto.time,
      bloodcenterid: id,
    }
    this.appointmentService.scheduleRecommendedAppointment(scheduleDto)
  .subscribe((poruka: any) => {
    if(poruka.message.includes("successfully")){
      alert("Successfully scheduled appointment!")
      this.router.navigate(['scheduledAppointments']);
    }
    else{
      alert("Could not schedule the appointment! You need to fill out the questionare first.")
    }
    console.log(poruka);
  }, (error) => {
    console.error(error);
    alert("Could not schedule the appointment!")
  });
  }
  onSortOrderChange(){
    this.bloodCenters.sort((a, b) => {
      if (this.sortAscending === "true") {
        return a.averageScore - b.averageScore;
      } else {
        return b.averageScore - a.averageScore;
      }
    });
  }
}
