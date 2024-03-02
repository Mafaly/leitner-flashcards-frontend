import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StartQuizComponent} from './start-quiz/start-quiz.component';
import {QuizRoutingModule} from "./quiz-routing.module";
import {SharedModule} from "../shared/shared.module";
import {QuizComponent} from "./quiz-interrogation/quiz.component";
import {QuizCardComponent} from "./quiz-interrogation/quiz-card/quiz-card.component";

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    QuizRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [StartQuizComponent, QuizComponent, QuizCardComponent],
  exports: [StartQuizComponent]
})
export class QuizModule {
}
