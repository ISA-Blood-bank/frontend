import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistredUserViewDto } from 'src/app/pages/home-page/interfaces/dtos/registred-user-view-dto';
import { MedicalStaffService } from 'src/app/pages/home-page/services/medical-staff.service';

@Component({
  selector: 'app-all-visited',
  templateUrl: './all-visited.component.html',
  styleUrls: ['./all-visited.component.css']
})
export class AllVisitedComponent implements OnInit {

  constructor(private medicalSTaffService: MedicalStaffService,
    private router: Router,
    private route: ActivatedRoute) { }

    public dataSource : RegistredUserViewDto[] = [];
    bloodCenterId: number
    displayedColumns: string[] = ['name', 'surname', 'jmbg', 'gender', 'email', 'occupation', 'jobOrSchoolInfo', 'weight', 'phone']

  ngOnInit(): void {
    this.bloodCenterId = Number(this.route.snapshot.paramMap.get('bloodCenterId'))
    this.getAllVisited()
  }

  getAllVisited(){
    this.medicalSTaffService.getAllUsersWhoVisited(this.bloodCenterId).subscribe(
      data => {
        console.log(data)
        this.dataSource = data
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

}
