import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, isDevMode, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodCenter } from '../../interfaces/BloodCenter';
import { BloodBankService } from '../../services/blood-bank.service';
import {FormControl, FormGroup} from '@angular/forms';

const ELEMENT_DATA: BloodCenter[]=[
  {id: 1, 
  name: 'Red Cross',
  address: {
    id: 1,
    street: 'Narodnog fronta',
    number: '35',
    city: 'Beograd',
    country: 'Srbija',
  },
  description: 'super',
  averageScore: 3
},
{id: 2, 
  name: 'Centar',
  address: {
    id: 2,
    street: 'Bulevar Oslobodjenja',
    number: '35',
    city: 'Novi Sad',
    country: 'Srbija',
  },
  description: 'super',
  averageScore: 5,
}]

@Component({
  selector: 'app-blood-centers-display',
  templateUrl: './blood-centers-display.component.html',
  styleUrls: ['./blood-centers-display.component.css']
})
export class BloodCentersDisplayComponent implements OnInit {

  public dataSource = new MatTableDataSource<BloodCenter>();
  public rateMin;
  public rateMax;
  public order: string = "ASC";

  filterForm = new FormGroup({
    fromRating: new FormControl(),
    toRating: new FormControl(),
});

  get fromRating() { return this.filterForm.get('fromRating').value; }
  get toRating() { return this.filterForm.get('toRating').value; }

  displayedColumns: string[] = ['name', 'street', 'number', 'city', 'country', 'description', 'averageScore'];

  constructor(private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
  
    this.bloodBankService.findAll().subscribe((data) => {
      this.dataSource.data = data;
    }

    );
                                    
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  filterRate(){
    this.dataSource.filter = ''+Math.random();
  }

 findSorted(column: string){

  if(this.order === "ASC"){
    this.order = "DESC";
  } else{
    this.order = "ASC";
  }
  this.bloodBankService.findAllSorted(0, 10, column, this.order).subscribe((data) => {
    this.dataSource.data = data;
  });
}

}
function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}



