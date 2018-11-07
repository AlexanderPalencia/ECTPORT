import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentacionAdminPage } from './presentacion-admin';

@NgModule({
  declarations: [
    PresentacionAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PresentacionAdminPage),
  ],
})
export class PresentacionAdminPageModule {}
