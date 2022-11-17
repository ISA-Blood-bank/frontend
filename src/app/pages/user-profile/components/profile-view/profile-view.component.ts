import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  public userAddress: any = {} as any;
  public editUser: any = {} as any;
  public editAddress: any = {} as any;
  userForm = this.formBuilder.group({
    firstName: [this.loggedUser.name],
    surname: [this.loggedUser.surname],
    jmbg:[this.loggedUser.jmbg],
    gender:[this.loggedUser.gender],
    number:[this.userAddress.numbe],
    street: [this.userAddress.street],
    city: [this.userAddress.city],
    country: [this.userAddress.country],
    occupation:[this.loggedUser.occupation],
    jobOrSchoolInfo:[this.loggedUser.jobOrSchoolInfo],
  });

  constructor(
    private formBuilder: FormBuilder, private userService:UserService,
  ) { }

  saveChanges(){
    const name = this.userForm.get('firstName')?.value;
    var surname = this.userForm.get('surname')?.value;
    var jmbg = this.userForm.get('jmbg')?.value;
    var gender = this.userForm.get('gender')?.value;
    var number = this.userForm.get('number')?.value;
    var street = this.userForm.get('street')?.value;
    var city = this.userForm.get('city')?.value;
    var country = this.userForm.get('country')?.value;
    var occupation = this.userForm.get('occupation')?.value;
    var jobOrSchoolInfo = this.userForm.get('jobOrSchoolInfo')?.value;

    this.editUser.address = this.editAddress;

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
        this.userAddress = response.address;
        this.editAddress = response.address;
        this.editUser = response;
        //console.log(this.loggedUser.address.street);
      }
    )
  }

  public updateUser(user: LoggedUser): void{
    this.userService.updateUserInfo(user).subscribe(
      (response: LoggedUser) => {
        this.loggedUser = response;
      }
    )
  }

}
