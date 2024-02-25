import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnswerCardPageRoutingModule } from './answer-card-routing.module';

import { AnswerCardPage } from './answer-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswerCardPageRoutingModule
  ],
  declarations: [AnswerCardPage]
})
export class AnswerCardPageModule {}
