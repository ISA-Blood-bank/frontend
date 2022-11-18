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

  filterForm = new FormGroup({
    fromRating: new FormControl(),
    toRating: new FormControl(),
});

  get fromRating() { return this.filterForm.get('fromRating').value; }
  get toRating() { return this.filterForm.get('toRating').value; }

  displayedColumns: string[] = ['name', 'street', 'number', 'city', 'country', 'description', 'averageScore'];

  constructor(private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;
  
  ngOnInit(): void {
    this.dataSource.filterPredicate = (data, filter) =>{
      let conditions = true;
      if (this.fromRating && this.toRating) {
          conditions = conditions && (data.averageScore >= this.fromRating && data.averageScore <= this.toRating);
      }
      conditions = conditions && (data.name.toLowerCase().includes(filter) || data.address.city.toLowerCase().includes(filter));
      return conditions;
    }
    this.bloodBankService.findAll().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'city': return item.address.city;
          case 'street': return item.address.street;
          case 'country': return item.address.country;
          case 'number': return item.address.number;
          case 'name': return item.name;
          case 'description': return item.description;
          case 'averageScore': return item.averageScore;
          default: return item.name;
        }
      };
      this.dataSource.sort = this.sort;
    }

    );
                                    
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
      
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  filterRate(){
    this.dataSource.filter = ''+Math.random();
  }

}
function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}

