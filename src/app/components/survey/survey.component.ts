import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";
import * as surveyQuestions from '../../../assets/survey-questions.json';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  surveyModel: Model;
  surveyQuestionModel: any = surveyQuestions;

  ngOnInit() {
    const survey = new Model(this.surveyQuestionModel);
    survey.onComplete.add(this.surveyComplete);
    this.surveyModel = survey;
  }

  surveyComplete(sender: any) {
    //let responseData = sender.getPlainData();
    console.log(sender.data);
    //API call to save survey goes here
  }

}
