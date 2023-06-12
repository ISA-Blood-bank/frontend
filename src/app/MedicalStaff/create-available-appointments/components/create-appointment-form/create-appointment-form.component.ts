import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentService } from '../../services/appointment.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppointmentDto } from '../../interfaces/appointment-dto';
import { JwtService } from 'src/app/pages/home-page/services/jwt.service';
import { UserService } from 'src/app/pages/user-profile/services/user.service';
import { LoggedUser } from 'src/app/pages/user-profile/interfaces/logged-user';


@Component({
  selector: 'app-create-appointment-form',
  templateUrl: './create-appointment-form.component.html',
  styleUrls: ['./create-appointment-form.component.css']
})
export class CreateAppointmentFormComponent implements OnInit {

  constructor(private appointmentService : AppointmentService, private jwtService: JwtService, private userService:UserService) { }
  public loggedUser: any = {} as any;
  public tokenData: any;
  ngOnInit(): void {
    this.getUser();
  }
  getAppointment(newAppointment: any){
    const vreme = newAppointment.time.split(':');
    const date1 = new Date(newAppointment.start);
    date1.setHours(vreme[0], vreme[1], 0);
    let appointment: Appointment = {
      id: -1,
      start: date1,
      duration: newAppointment.duration,
      medicalStaffId: this.loggedUser.id,
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
  public getUser(): void{
    this.tokenData = this.jwtService.decodeToken(localStorage['jwt']) as any;
    this.userService.findByEmail(this.tokenData.sub).subscribe(
      (response: LoggedUser) => {
        this.loggedUser = response;
      }
    )
  }
}
