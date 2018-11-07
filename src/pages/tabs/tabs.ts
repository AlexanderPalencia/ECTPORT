import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PreguntasPage } from '../preguntas/preguntas';
import { PresentacionesPage } from '../presentaciones/presentaciones';
import { SalaPage } from '../sala/sala';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PresentacionesPage;
  tab2Root = PreguntasPage;
  tab3Root = SalaPage;

  constructor() {

  }
}
