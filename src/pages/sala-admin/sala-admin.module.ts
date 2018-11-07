import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaAdminPage } from './sala-admin';

@NgModule({
  declarations: [
    SalaAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(SalaAdminPage),
  ],
})
export class SalaAdminPageModule {}
