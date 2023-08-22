import { Component, OnInit } from '@angular/core';
import { ScheduledAppointmentServicesService } from '../../services/scheduled-appointment-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduledDisplay } from '../../interfaces/dtos/scheduled-display';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-scheduled-display',
  templateUrl: './all-scheduled-display.component.html',
  styleUrls: ['./all-scheduled-display.component.css']
})
export class AllSCheduledDisplayComponent implements OnInit {

  constructor(
    private scheduledAppointmentService: ScheduledAppointmentServicesService,
    private router: Router
    ) { }

  public dataSource = new MatTableDataSource<ScheduledDisplay>();

  displayedColumns: string[] = ['name', 'surname', 'email', 'start', 'duration']

  ngOnInit(): void {
    this.getAllScheduled()
  }

  getAllScheduled(){
    this.scheduledAppointmentService.getAllScheduled(1).subscribe(
      (data) => {
        this.dataSource.data = data;
      }
    );
  }

  formatDate(date: Date){
    var created: string = date.toString();
    var splited:string [] = created.split(',');
    var ret = splited[2] + "." + splited[1] + "." + splited[0] + "." + "  " + splited[3] + ":" + splited[4];
    return ret;
  }

  getRow(row){
    let id  = row.id
    console.log(id)
    this.router.navigateByUrl('/scheduledInfo/'+id)
  }

}
