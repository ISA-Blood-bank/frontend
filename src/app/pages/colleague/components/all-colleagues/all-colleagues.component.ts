import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalStaffDto } from 'src/app/pages/home-page/interfaces/dtos/medical-staff-dto';
import { MedicalStaffService } from 'src/app/pages/home-page/services/medical-staff.service';

@Component({
  selector: 'app-all-colleagues',
  templateUrl: './all-colleagues.component.html',
  styleUrls: ['./all-colleagues.component.css']
})
export class AllColleaguesComponent implements OnInit {

  constructor(
    private medicalStaffService: MedicalStaffService,
    private router: Router,
    private route: ActivatedRoute) { }

    public dataSource: MedicalStaffDto[] = [];
    bloodCenterId: number
    displayedColumns: string[] = ['name', 'surname', 'jmbg', 'gender', 'email']

  ngOnInit(): void {
    this.bloodCenterId = Number(this.route.snapshot.paramMap.get('bloodCenterId'))
    this.getStaffs()
  }

  getStaffs(){
    this.medicalStaffService.getAllByBloodCenterId(this.bloodCenterId).subscribe(
      data => {
        console.log(data)
        this.dataSource = data
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
      )
    
  }

}
