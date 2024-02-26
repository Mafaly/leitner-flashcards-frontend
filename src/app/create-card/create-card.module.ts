import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCardPage } from './create-card.page';


import { CreateCardRoutingModule } from './create-card-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CreateCardRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateCardPage]
})
export class CreateCardModule{}
