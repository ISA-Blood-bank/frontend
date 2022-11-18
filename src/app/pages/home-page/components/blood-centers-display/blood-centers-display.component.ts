import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BloodCenter } from '../../interfaces/BloodCenter';
import { BloodBankService } from '../../services/blood-bank.service';

const ELEMENT_DATA: BloodCenter[]=[
  {id: 1, 
  name: 'Red Cross',
  address: {
    id: 1,
    street: 'Narodnog fronta',
    number: '35',
    city: 'Novi Sad',
    country: 'Srbija',
  },
  description: 'super',
  averageScore: 0
},
{id: 2, 
  name: 'Centar za transplantaciju',
  address: {
    id: 2,
    street: 'Bulevar Oslobodjenja',
    number: '35',
    city: 'Novi Sad',
    country: 'Srbija',
  },
  description: 'super',
  averageScore: 0
}]

@Component({
  selector: 'app-blood-centers-display',
  templateUrl: './blood-centers-display.component.html',
  styleUrls: ['./blood-centers-display.component.css']
})
export class BloodCentersDisplayComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService) { }

  public dataSource = new MatTableDataSource<BloodCenter>();
  public banks: BloodCenter[] = [];
  displayedColumns: string[] = ['name', 'street', 'number', 'city', 'country', 'description', 'averageScore'];

  ngOnInit(): void {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.address.city.toLowerCase().includes(filter);
    };
    this.bloodBankService.findAll().subscribe((data) => {
      this.banks = data;
      this.dataSource.data = this.banks;
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
