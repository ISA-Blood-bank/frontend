import { RegistredUser } from './../../../interfaces/RegistredUser';
import { Questionnaire } from './../../../interfaces/Questionnaire';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NewappointmentService } from 'src/app/pages/schedule-new-appointment/services/newappointment.service';

@Component({
  selector: 'app-user-questionnaire',
  templateUrl: './user-questionnaire.component.html',
  styleUrls: ['./user-questionnaire.component.css']
})
export class UserQuestionnaireComponent implements OnInit {

  reactiveForm: FormGroup;
  
  constructor(private questionnaireService: QuestionnaireService, private appointmentService: NewappointmentService) { }

  ngOnInit(): void {
    console.log(history.state);
    this.reactiveForm = new FormGroup({
      question1: new FormControl(null),
      question2: new FormControl(null),
      question3: new FormControl(null),
      question4: new FormControl(null),
      question5: new FormControl(null),
      question6: new FormControl(null),
      question7: new FormControl(null),
      question8: new FormControl(null),
      question9: new FormControl(null),
      question10: new FormControl(null),
      question11: new FormControl(null),
      question12: new FormControl(null),
      question13: new FormControl(null),
      question14: new FormControl(null),
      question15: new FormControl(null),
      question16: new FormControl(null),
      question17: new FormControl(null),
      question18: new FormControl(null),
      question19: new FormControl(null),
      question20: new FormControl(null),
      question21: new FormControl(null),
      question22: new FormControl(null),
      question23: new FormControl(null),
      question24: new FormControl(null),
      question25: new FormControl(null),
      question26: new FormControl(null)
    });
  }

  onSubmit(){
    let questionnaire : Questionnaire = {
    id : -1,
    question1: this.reactiveForm.value.question1,
    question2: this.reactiveForm.value.question2,
    question3: this.reactiveForm.value.question3,
    question4: this.reactiveForm.value.question4,
    question5: this.reactiveForm.value.question5,
    question6: this.reactiveForm.value.question6,
    question7: this.reactiveForm.value.question7,
    question8: this.reactiveForm.value.question8,
    question9: this.reactiveForm.value.question9,
    question10: this.reactiveForm.value.question10,
    question11: this.reactiveForm.value.question11,
    question12: this.reactiveForm.value.question12,
    question13: this.reactiveForm.value.question13,
    question14: this.reactiveForm.value.question14,
    question15: this.reactiveForm.value.question15,
    question16: this.reactiveForm.value.question16,
    question17: this.reactiveForm.value.question17,
    question18: this.reactiveForm.value.question18,
    question19: this.reactiveForm.value.question19,
    question20: this.reactiveForm.value.question20,
    question21: this.reactiveForm.value.question21,
    question22: this.reactiveForm.value.question22,
    question23: this.reactiveForm.value.question23,
    question24: this.reactiveForm.value.question24,
    question25: this.reactiveForm.value.question25,
    question26: this.reactiveForm.value.question26,
    date: new Date(),
    user: {
      id: 1,
      name: "",
      surname: "",
      jmbg: "",
      gender: 0,
      email: "",
      password: "",
      address: {
        id: 1,
        street: 'Narodnog fronta',
        number: '35',
        city: 'Novi Sad',
        country: 'Srbija',
      },
      occupation: "",
      jobOrSchoolInfo: "",
      points: 0,
      category: 0,
      penalties:0,
      phone: ""
    }
    }
    console.log(questionnaire);
    console.log(this.reactiveForm.value.question1);
    console.log(questionnaire.question1);
    this.questionnaireService.save(questionnaire).subscribe(
      (data) => {
        alert("Success!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    if(history.state.id != null){
      this.appointmentService.scheduleAppointment(history.state.id).subscribe(
        (data) => {
          alert("Your appointment is scheduled!");
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    
  }

}
