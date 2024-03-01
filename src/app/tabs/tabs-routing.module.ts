import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {QuizComponent} from "../quiz/quiz.component";

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cards-list',
        loadChildren: () => import('../cards/cards-list/cards-list.module').then(m => m.CardsListModule)
      },
      {
        path: 'create-card',
        loadChildren: () => import('../cards/create-card/create-card.module').then(m => m.CreateCardModule)
      },
      {
        path: 'quiz-card',
        component: QuizComponent
      },
      {
        path: 'start-quiz',
        loadChildren: () => import('../quiz/start-quiz/start-quiz.module').then(m => m.StartQuizModule)
      },
      {
        path: '',
        redirectTo: '/cards-list',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
