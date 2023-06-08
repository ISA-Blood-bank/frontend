import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/pages/home-page/services/jwt.service';
import { LoggedUser } from 'src/app/pages/user-profile/interfaces/logged-user';
import { UserService } from 'src/app/pages/user-profile/services/user.service';
import { StatsService } from '../../services/stats.service';
import { IMedicalStaff } from '../../interfaces/imedical-staff';
import { IBloodCenter } from '../../interfaces/iblood-center';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bloodcenter-stats',
  templateUrl: './bloodcenter-stats.component.html',
  styleUrls: ['./bloodcenter-stats.component.css']
})
export class BloodcenterStatsComponent implements OnInit {

  constructor(private jwtService: JwtService, private userService:UserService, private statsService: StatsService) { }
  public loggedUser: any = {} as any;
  medStaff: IMedicalStaff = {
    id: 0,
    registeredUser: 0,
    bloodCenter: 0
  }
  bloodCent: IBloodCenter = {
    id: 0,
    name: '',
    description: '',
    averageScore: 0
  }
  public averageScore: number
  public tokenData: any;
  chartAppointment: any;
  chartEquipment: any;
  chartBloodQuantity: any;

  ngOnInit(): void {
    this.getUser();
    this.generateAppointmentChart();
    this.generateMedicalEquipmentChart();
    this.generateBloodQuantityChart();
  }

  public getUser(): void{
    this.tokenData = this.jwtService.decodeToken(localStorage['jwt']) as any;
    console.log("ovo je token: ", this.tokenData)
    this.userService.findByEmail(this.tokenData.sub).subscribe(
      (response: LoggedUser) => {
        this.loggedUser = response;
        this.getMedicalStaff();
      }
    )
  }
  public getMedicalStaff(): void{
    this.statsService.getMedStaffByUserId(this.loggedUser.id).subscribe(
      (data) => {
        console.log(data)
        this.medStaff.id = data.id
        this.medStaff.registeredUser = data.registeredUser.id
        this.medStaff.bloodCenter = data.bloodCenter.id
        this.bloodCent.id = data.bloodCenter.id
        this.bloodCent.averageScore = data.bloodCenter.averageScore
        this.bloodCent.description = data.bloodCenter.description
        this.bloodCent.name = data.bloodCenter.name
        console.log(this.bloodCent)
      })
  }
  public generateAppointmentChart(): void{
    this.chartAppointment = new Chart('appointmentChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Held Appointments',
          data: [50, 60, 45, 70, 80, 65],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true
          }
        }
      }
    });
  }

  public generateMedicalEquipmentChart(): void{
    this.chartEquipment = new Chart('equipmentChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Equipment Spent',
          data: [60, 50, 45, 70, 43, 65],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true
          }
        }
      }
    });
  }

  public generateBloodQuantityChart(): void{
    this.chartBloodQuantity = new Chart('bloodChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Blood Donated (L)',
          data: [50, 45, 62, 44, 43, 55],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true
          }
        }
      }
    });
  }

}
