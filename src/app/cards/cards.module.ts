import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardItemComponent} from "./card-item/card-item.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [CardItemComponent],
  exports: [
    CardItemComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CardsModule {
}
