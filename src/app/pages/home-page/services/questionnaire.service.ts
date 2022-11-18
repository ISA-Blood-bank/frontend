import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questionnaire } from '../interfaces/Questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080";

  save(newQuestionnaire: Questionnaire){
    return this.http.post<Questionnaire>(this.url + '/api/questionnaire/add', newQuestionnaire);
  }
}
