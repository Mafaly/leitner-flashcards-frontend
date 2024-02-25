import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizCardsPageRoutingModule } from './quiz-cards-routing.module';

import { QuizCardsPage } from './quiz-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizCardsPageRoutingModule
  ],
  declarations: [QuizCardsPage]
})
export class QuizCardsPageModule {}
