import { AppointmentReportService } from './../../../services/appointment-report.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentReport } from './../../../interfaces/AppointmentReport';

@Component({
  selector: 'app-appointment-reports',
  templateUrl: './appointment-reports.component.html',
  styleUrls: ['./appointment-reports.component.css']
})
export class AppointmentReportsComponent implements OnInit {

  public dataSource = new MatTableDataSource<AppointmentReport>();
  public order: string = "ASC";
  displayedColumns: string[] = ['start', 'bloodCenter', 'medicalStaff', 'content'];

  constructor(private appointmentReportService: AppointmentReportService) { }

  ngOnInit(): void {
    this.appointmentReportService.findAllSorted(0, 10, "appointment.appointment.start", this.order).subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  findSorted(column: string){

    if(this.order === "ASC"){
      this.order = "DESC";
    } else{
      this.order = "ASC";
    }
    this.appointmentReportService.findAllSorted(0, 10, column, this.order).subscribe((data) => {
      this.dataSource.data = data;
    });
  }

}
