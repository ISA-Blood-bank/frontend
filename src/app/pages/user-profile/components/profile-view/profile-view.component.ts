import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/pages/home-page/interfaces/Address';
import { JwtService } from 'src/app/pages/home-page/services/jwt.service';
import { LoggedUser } from '../../interfaces/logged-user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {

  ngOnInit(): void {
    this.getUser();
  }
  public loggedUser: any = {} as any;
  public editUser: any = {} as any;
  public address: any = {} as any;
  public editAddress: any = {} as any;
  public tokenData: any;

  constructor(
    private userService:UserService, private jwtService: JwtService
  ) { }

  saveChanges(){
    this.updateUser(this.editUser);
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Stigao je do ovde');
    this.saveChanges();
  }

  public getUser(): void{
    this.tokenData = this.jwtService.decodeToken(localStorage['jwt']) as any;
    this.userService.findByEmail(this.tokenData.sub).subscribe(
      (response: LoggedUser) => {
        this.loggedUser = response;
        this.editUser = response;
        this.address = response.address;
        this.editAddress = response.address;
        //console.log(this.loggedUser.address.street);
      }
    )
  }

  public updateUser(user: any): void{
    let addressUser: Address = {
      id: user.addressId,
      street: user.street,
      number: user.number,
      city: user.city,
      country: user.country
    }
    user.address = addressUser;
    this.userService.updateUserInfo(user).subscribe(
      (response: LoggedUser) => {
        this.loggedUser = response;
      }
    )
  }

}
