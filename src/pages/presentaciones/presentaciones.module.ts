import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentacionesPage } from './presentaciones';

@NgModule({
  declarations: [
    PresentacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(PresentacionesPage),
  ],
})
export class PresentacionesPageModule {}
