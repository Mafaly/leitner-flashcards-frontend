import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ProfilePicturePageComponent} from "./profile-picture-page/profile-picture-page.component";


@NgModule({
    declarations: [ProfilePicturePageComponent],
    imports: [
        UserRoutingModule,
        SharedModule,
    ],
    exports: [ProfilePicturePageComponent]
})
export class UserModule {
}
