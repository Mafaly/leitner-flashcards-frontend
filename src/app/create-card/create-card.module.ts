import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCardPage } from './create-card.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CreateCardRoutingModule } from './create-card-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CreateCardRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateCardPage]
})
export class CreateCardModule{}
