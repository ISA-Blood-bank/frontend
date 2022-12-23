import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NewappointmentService } from '../../services/newappointment.service';
import { BloodCenter } from 'src/app/pages/home-page/interfaces/BloodCenter';

@Component({
  selector: 'app-new-appointment-form',
  templateUrl: './new-appointment-form.component.html',
  styleUrls: ['./new-appointment-form.component.css']
})
export class NewAppointmentFormComponent implements OnInit {

  constructor(appointmentService: NewappointmentService) { }
  public bloodcenters: BloodCenter[] = [];
  ngOnInit(): void {
  }
  getInfo(info: any){
    const time = info.time.split(':');
    info.start.setHours(time[0], time[1], 0);
  }
}
