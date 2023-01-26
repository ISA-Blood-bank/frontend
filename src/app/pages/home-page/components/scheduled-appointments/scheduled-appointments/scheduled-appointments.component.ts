import { ScheduledAppointmentsService } from './../../../services/scheduled-appointments.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduledAppointment } from '../../../interfaces/ScheduledAppointment';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-scheduled-appointments',
  templateUrl: './scheduled-appointments.component.html',
  styleUrls: ['./scheduled-appointments.component.css']
})
export class ScheduledAppointmentsComponent implements OnInit {

  public dataSource = new MatTableDataSource<ScheduledAppointment>();
  displayedColumns: string[] = ['start', 'duration', 'bloodCenter', 'medicalStaff', 'button'];

  constructor(private scheduledAppointmentsService: ScheduledAppointmentsService) { }

  ngOnInit(): void {
    this.scheduledAppointmentsService.findAllForLoggedUser().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  cancel(id: number){
    this.scheduledAppointmentsService.cancel(id).subscribe(
      (data) => {
        alert("Success!");
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  formateDate(date: Date){
    var created: string = date.toString();
    console.log(created);
    var splited:string [] = created.split(',');
    var ret = splited[2] + "." + splited[1] + "." + splited[0] + "." + "  " + splited[3] + ":" + splited[4];
    console.log(ret);
    return ret;
  }

}
