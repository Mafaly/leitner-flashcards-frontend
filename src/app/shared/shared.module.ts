import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsService} from "./notifications.service";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
  ],
  providers: [NotificationsService],
  exports: [IonicModule, CommonModule]
})
export class SharedModule {
}
