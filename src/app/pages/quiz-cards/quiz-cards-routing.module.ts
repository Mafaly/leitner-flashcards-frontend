import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizCardsPage } from './quiz-cards.page';

const routes: Routes = [
  {
    path: '',
    component: QuizCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizCardsPageRoutingModule {}
