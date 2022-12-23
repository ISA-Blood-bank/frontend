import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-create-appointment-form',
  templateUrl: './create-appointment-form.component.html',
  styleUrls: ['./create-appointment-form.component.css']
})
export class CreateAppointmentFormComponent implements OnInit {

  constructor(appointmentService : AppointmentService) { }

  ngOnInit(): void {
  }
  getAppointment(newAppointment: any){
    
  }
}
