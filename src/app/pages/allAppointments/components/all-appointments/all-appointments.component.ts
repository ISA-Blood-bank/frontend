import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentDto } from 'src/app/pages/home-page/interfaces/dtos/appointment-dto';
import { AppointmentService } from 'src/app/pages/home-page/services/appointment.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  constructor(private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute) { }

    public dataSource : AppointmentDto[] = [];
    bloodCenterId: number
    displayedColumns: string[] = ['start', 'duration']

  ngOnInit(): void {
    this.bloodCenterId = Number(this.route.snapshot.paramMap.get('bloodCenterId'))
    this.getAllAppointments()
  }

  getAllAppointments(){
    this.appointmentService.findAllByBloodCenterId(this.bloodCenterId).subscribe(
      data => {
        console.log(data)
        this.dataSource = data
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
        alert(error.message)
      }
    )
  }

  formatDate(date: Date){
    var created: string = date.toString();
    var splited:string [] = created.split(',');
    var ret = splited[2] + "." + splited[1] + "." + splited[0] + "." + "  " + splited[3] + ":" + splited[4];
    return ret;
  }
}
