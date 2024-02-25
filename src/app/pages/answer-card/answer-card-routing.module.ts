import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerCardPage } from './answer-card.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerCardPageRoutingModule {}
