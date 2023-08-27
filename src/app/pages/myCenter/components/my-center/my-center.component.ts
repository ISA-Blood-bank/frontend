import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodCenterView } from 'src/app/pages/home-page/interfaces/dtos/blood-center-view';
import { BloodBankService } from 'src/app/pages/home-page/services/blood-bank.service';

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  constructor(private bloodCenterService: BloodBankService,
    private router: Router,
    private route: ActivatedRoute) { }

    bloodCenterId: number
    bloodCenter: BloodCenterView

  ngOnInit(): void {
    this.bloodCenterId = Number(this.route.snapshot.paramMap.get('bloodCenterId'))
    this.getCenter()
  }

  getCenter(){
    this.bloodCenterService.getForMedStaff(this.bloodCenterId).subscribe(
      data => {
        console.log(data)
        this.bloodCenter = data
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

}
