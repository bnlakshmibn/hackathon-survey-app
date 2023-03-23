import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyModule } from "survey-angular-ui";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    SurveyModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
