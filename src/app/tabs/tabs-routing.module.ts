import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cards-list',
        loadChildren: () => import('../cards-list/cards-list.module').then(m => m.CardsListModule)
      },
      {
        path: 'create-card',
        loadChildren: () => import('../create-card/create-card.module').then(m => m.CreateCardModule)
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
