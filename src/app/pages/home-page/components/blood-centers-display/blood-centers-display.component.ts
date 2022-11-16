import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
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
  averageScore: 5
}]

@Component({
  selector: 'app-blood-centers-display',
  templateUrl: './blood-centers-display.component.html',
  styleUrls: ['./blood-centers-display.component.css']
})
export class BloodCentersDisplayComponent implements AfterViewInit {

  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'street', 'number', 'city', 'country', 'description', 'averageScore'];

  constructor(private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit(): void {
    this.bloodBankService.findAll().subscribe((data) => {
      this.dataSource.data = data;
    });
    this.dataSource.sort = this.sort;
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
  
}
