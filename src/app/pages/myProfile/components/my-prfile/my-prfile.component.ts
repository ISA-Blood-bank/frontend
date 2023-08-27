import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalStaffDto } from 'src/app/pages/home-page/interfaces/dtos/medical-staff-dto';
import { MedicalStaffService } from 'src/app/pages/home-page/services/medical-staff.service';

@Component({
  selector: 'app-my-prfile',
  templateUrl: './my-prfile.component.html',
  styleUrls: ['./my-prfile.component.css']
})
export class MyPrfileComponent implements OnInit {

  constructor(private medicalStaffService: MedicalStaffService,
    private router: Router,
    private route: ActivatedRoute) { }

    medicalStaffId: number
    medStaff: MedicalStaffDto

  ngOnInit(): void {
    this.medicalStaffId = Number(this.route.snapshot.paramMap.get('medicalStaffId'))
    this.getMedical()
  }

  getMedical(){
    this.medicalStaffService.getMedicalStaff(this.medicalStaffId).subscribe(
      data => {
        console.log(data)
        this.medStaff = data
      }
    )
  }

}
