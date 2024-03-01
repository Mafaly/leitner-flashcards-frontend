import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CardsListPage} from './cards-list.page';


import {CardsListPageRoutingModule} from './cards-list-routing.module';
import {CardsModule} from "../cards.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardsListPageRoutingModule,
    CardsModule,
  ],
  declarations: [CardsListPage]
})
export class CardsListModule{}
