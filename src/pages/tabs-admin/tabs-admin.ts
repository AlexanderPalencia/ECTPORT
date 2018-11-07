import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PresentacionAdminPage } from '../presentacion-admin/presentacion-admin';
import { PreguntasAdminPage } from '../preguntas-admin/preguntas-admin';
import { SalaAdminPage } from '../sala-admin/sala-admin';



@Component({
  templateUrl: 'tabs-admin.html'
})
export class TabsAdminPage {

  tab1Root = PresentacionAdminPage;
  tab2Root = PreguntasAdminPage;
  tab3Root = SalaAdminPage;

  constructor() {

  }
}
