import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/pages/home-page/services/jwt.service';
import { RegisterUserService } from 'src/app/pages/home-page/services/register-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private jwtService: JwtService, private regUserService: RegisterUserService, private router: Router) {
    this.router.events.subscribe(() => {
      if(localStorage['jwt'] != null){
        this.tokenData = this.jwtService.decodeToken(localStorage['jwt']) as any;
        console.log("Navbar je namesten za ", this.tokenData);
        console.log(this.tokenData.role[this.tokenData.role.length - 1].name);
        this.role = this.tokenData.role[this.tokenData.role.length - 1].name;
      }
    });
   }
  tokenData: any;
  loggedUser: any;
  role: string;

  ngOnInit(): void {
    this.role = 'ROLE_NOTAUTH';
    if(localStorage['jwt'] != null){
      this.tokenData = this.jwtService.decodeToken(localStorage['jwt']) as any;
      console.log("Navbar je namesten za ", this.tokenData);
      console.log(this.tokenData.role[this.tokenData.role.length - 1].name);
      this.role = this.tokenData.role[this.tokenData.role.length - 1].name;
    }
  }
  logout() {
    this.regUserService.logout();
    this.role = 'ROLE_NOTAUTH';
  }

}

