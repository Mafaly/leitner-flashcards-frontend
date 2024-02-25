import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsListPage } from './cards-list.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CardsListPageRoutingModule } from './cards-list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CardsListPageRoutingModule
  ],
  declarations: [CardsListPage]
})
export class CardsListModule{}
