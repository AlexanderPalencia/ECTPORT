import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntasAdminPage } from './preguntas-admin';

@NgModule({
  declarations: [
    PreguntasAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntasAdminPage),
  ],
})
export class PreguntasAdminPageModule {}
