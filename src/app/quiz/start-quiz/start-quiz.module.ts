import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StartQuizComponent } from './start-quiz.component';
import {StartQuizRoutingModule} from "./start-quiz-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    StartQuizRoutingModule
  ],
  declarations: [StartQuizComponent],
  exports: [StartQuizComponent]
})
export class StartQuizModule { }
