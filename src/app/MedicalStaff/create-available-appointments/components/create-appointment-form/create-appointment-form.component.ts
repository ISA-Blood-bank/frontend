import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentService } from '../../services/appointment.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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
    newAppointment.start.setHours(vreme[0], vreme[1], 0);
    let appointment: Appointment = {
      id: -1,
      start: newAppointment.start,
      duration: newAppointment.duration,
      available: true,
      medicalStaffId: 1
    }
    console.log(appointment);
    this.appointmentService.save(appointment);
  }
}
