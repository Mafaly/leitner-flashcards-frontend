import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateCardPage} from './create-card.page';


import {CreateCardRoutingModule} from './create-card-routing.module';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    FormsModule,
    CreateCardRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CreateCardPage]
})
export class CreateCardModule{}
