import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StartQuizComponent} from './start-quiz/start-quiz.component';
import {QuizRoutingModule} from "./quiz-routing.module";
import {SharedModule} from "../shared/shared.module";
import {QuizComponent} from "./quiz-interrogation/quiz.component";

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    QuizRoutingModule,
    SharedModule,
  ],
  declarations: [StartQuizComponent, QuizComponent],
  exports: [StartQuizComponent, QuizComponent]
})
export class QuizModule {
}
