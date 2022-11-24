import { Component, OnInit } from '@angular/core';
import { RegistredUser } from '../../../interfaces/RegistredUser';
import { RegisterUserService } from '../../../services/register-user.service';

@Component({
  selector: 'app-registered-users-display',
  templateUrl: './registered-users-display.component.html',
  styleUrls: ['./registered-users-display.component.css']
})
export class RegisteredUsersDisplayComponent implements OnInit {

  constructor(private registerUserService: RegisterUserService) { }
  public dataSource : RegistredUser[] = [];
  displayedColumns: string[] = ['name', 'surname','jmbg','email', 'address', 'country', 'points', 'category','penalties'];

  
  ngOnInit(): void {
    this.registerUserService.findAll().subscribe((data) => {
      this.dataSource = data;
    });
  }
  
  public search(key:string): void{
    const results:RegistredUser[]=[];
    for (const ru of this.dataSource)
    if((ru.name.toLowerCase()+' '+ru.surname.toLowerCase())==(key.toLowerCase())){
      results.push(ru);
    }
    this.dataSource=results;
    if(results.length===0|| !key)
    {
      this.ngOnInit();
    }
  }

  public onSubmit(searchInput: any){
    this.registerUserService.search(searchInput.key).subscribe((data) => {
      this.dataSource = data;
    });
    console.log(searchInput.key);
  }

}
