import { Appointment } from './../../../interfaces/Appointment';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../../../services/appointment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Appointment>();
  public order: string = "ASC";
  displayedColumns: string[] = ['start', 'duration', 'bloodCenter', 'medicalStaff', 'button'];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.findAllSortedAndAvailable(0, 10, "start", this.order).subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  findSorted(column: string){

    if(this.order === "ASC"){
      this.order = "DESC";
    } else{
      this.order = "ASC";
    }
    this.appointmentService.findAllSortedAndAvailable(0, 10, column, this.order).subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  schedule(id: number){
    this.appointmentService.schedule(id).subscribe(
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
