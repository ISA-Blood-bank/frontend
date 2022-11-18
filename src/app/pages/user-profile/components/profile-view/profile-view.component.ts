import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoggedUser } from '../../interfaces/logged-user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {

  ngOnInit(): void {
    this.getUser(1);
  }
  public loggedUser: any = {} as any;
  public editUser: any = {} as any;
  public address: any = {} as any;
  public editAddress: any = {} as any;

  constructor(
    private userService:UserService,
  ) { }

  saveChanges(){
    this.updateUser(this.editUser);
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Stigao je do ovde');
    this.saveChanges();
  }

  public getUser(userId: number): void{
    this.userService.getUser(userId).subscribe(
      (response: LoggedUser) => {
        this.loggedUser = response;
        this.editUser = response;
        this.address = response.address;
        this.editAddress = response.address;
        //console.log(this.loggedUser.address.street);
      }
    )
  }

  public updateUser(user: LoggedUser): void{
    user.address = this.editAddress;
    this.userService.updateUserInfo(user).subscribe(
      (response: LoggedUser) => {
        this.loggedUser = response;
      }
    )
  }

}
