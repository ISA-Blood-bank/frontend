import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, isDevMode, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodCenter } from '../../interfaces/BloodCenter';
import { BloodBankService } from '../../services/blood-bank.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

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
  public searched : BloodCenter[]=[];
  public filtered : BloodCenter[]=[];
  public together : BloodCenter[]=[];

  
  displayedColumns: string[] = ['name', 'street', 'number', 'city', 'country', 'description', 'averageScore'];

  constructor(
    private bloodBankService: BloodBankService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router) { }

  ngOnInit(): void {
  
    this.bloodBankService.findAll().subscribe((data) => {
      this.dataSource.data = data;}
    );
                                    
  }
  
  onSubmitSearch(inputSearch : any){
    this.together=[];
    this.bloodBankService.search(inputSearch.searchinput).subscribe((data) => {
      this.dataSource.data = data;
      this.searched=data;
    });
  }
  check(filteredList : BloodCenter[],searchedList : BloodCenter[]) 
  {
    for(let i=0;i<filteredList.length;i++)
    {
      for(let j=0;j<searchedList.length;j++)
      {
        if(filteredList[j].id===searchedList[i].id)
        {
        this.together.push(filteredList[j]);
        }
      }
      
    }
   
  };
  onSubmitFilter(inputFilter : any){
    this.together=[];
    this.bloodBankService.filterBloodCenter(inputFilter.fromRating,inputFilter.toRating).subscribe((data) => {
      this.filtered=data;
      this.check(this.filtered,this.searched);
      this.dataSource.data=this.together;
     //this.dataSource.data = this.filtered.filter(value =>this.searched.includes(value));
      console.log(this.dataSource.data);
    });
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

getRow(row){
  let id  = row.id
  console.log(id)
  this.router.navigateByUrl('/bloodCenterInfo/'+id)
}




}
function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}





