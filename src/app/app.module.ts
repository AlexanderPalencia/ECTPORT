import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';

//Import Servicios
import { SharingProvider } from '../providers/sharing/sharing';
import { FirebaseConectionProvider } from '../providers/firebase-conection/firebase-conection';

//Import Firebase Liberies
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

//Import Paginas de la app
import { HomePage } from '../pages/home/home';
import { SalaPage } from '../pages/sala/sala';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { PresentacionesPage } from '../pages/presentaciones/presentaciones';
import { TabsPage } from '../pages/tabs/tabs';
import { PresentacionAdminPage } from '../pages/presentacion-admin/presentacion-admin';
import { PreguntasAdminPage } from '../pages/preguntas-admin/preguntas-admin';
import { SalaAdminPage } from '../pages/sala-admin/sala-admin';
import { TabsAdminPage } from '../pages/tabs-admin/tabs-admin';

export const firebaseConfig = {
  apiKey: "AIzaSyBCKqLlkrS9OB_DGDlTSi996b5ovPVbtA8",
  authDomain: "ectapp-3981d.firebaseapp.com",
  databaseURL: "https://ectapp-3981d.firebaseio.com",
  projectId: "ectapp-3981d",
  storageBucket: "ectapp-3981d.appspot.com",
  messagingSenderId: "777531248725"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SalaPage,
    PreguntasPage,
    PresentacionesPage,
    TabsPage,
    PreguntasAdminPage,
    PresentacionAdminPage,
    SalaAdminPage,
    TabsAdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SalaPage,
    PreguntasPage,
    PresentacionesPage,
    TabsPage,
    PreguntasAdminPage,
    PresentacionAdminPage,
    SalaAdminPage,
    TabsAdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharingProvider,
    FirebaseConectionProvider
  ]
})
export class AppModule {}
