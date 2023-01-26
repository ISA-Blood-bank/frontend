import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentService } from '../../services/appointment.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-create-appointment-form',
  templateUrl: './create-appointment-form.component.html',
  styleUrls: ['./create-appointment-form.component.css']
})
export class CreateAppointmentFormComponent implements OnInit {

  constructor(private appointmentService : AppointmentService) { }
  ngOnInit(): void {
  }
  getAppointment(newAppointment: any){
    const vreme = newAppointment.time.split(':');
    const date1 = new Date(newAppointment.start);
    date1.setHours(vreme[0], vreme[1], 0);
    let appointment: Appointment = {
      id: -1,
      start: date1,
      duration: newAppointment.duration,
      medicalStaffId: 2
    }
    console.log(appointment);
    this.appointmentService.save(appointment).subscribe(
      (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
