import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartQuizComponent} from "./start-quiz/start-quiz.component";
import {QuizComponent} from "./quiz-interrogation/quiz.component";


const routes: Routes = [
  {
    path: '',
    component: StartQuizComponent,
  },
  {
    path: 'interogation',
    component: QuizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {
}
