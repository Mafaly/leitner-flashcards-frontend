import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs-routing.module';

import {TabsPage} from './tabs.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    FormsModule,
    TabsPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule.forRoot(),
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
