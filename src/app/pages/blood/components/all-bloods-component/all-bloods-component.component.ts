import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodDto } from 'src/app/pages/allScheduled/interfaces/dtos/blood-dto';
import { BloodServiceService } from 'src/app/pages/home-page/services/blood-service.service';

@Component({
  selector: 'app-all-bloods-component',
  templateUrl: './all-bloods-component.component.html',
  styleUrls: ['./all-bloods-component.component.css']
})
export class AllBloodsComponentComponent implements OnInit {

  constructor(
    private bloodService: BloodServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

    public dataSource : BloodDto[] = [];
    bloodCenterId: number
    displayedColumns: string[] = ['bloodType', 'quantity']

  ngOnInit(): void {
    this.bloodCenterId = Number(this.route.snapshot.paramMap.get('bloodCenterId'))
    console.log(this.bloodCenterId)
    this.getBlood()
  }

  getBlood(){
    this.bloodService.findBloods(this.bloodCenterId).subscribe(
      (data) => {
        console.log(data)
        this.dataSource = data
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
