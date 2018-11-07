import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharingProvider } from '../../providers/sharing/sharing';
//import firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';

/**
 * Generated class for the PreguntasAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Preguntas{
  Pregunta : string;
}

@IonicPage()
@Component({
  selector: 'page-preguntas-admin',
  templateUrl: 'preguntas-admin.html',
})
export class PreguntasAdminPage {
  SalaNum:number;
  PreguntaCollection: AngularFirestoreCollection<Preguntas>;
  ObsPreguntas: Observable<Preguntas[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sharing:SharingProvider, private asf:AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasAdminPage');
    this.PreguntaCollection = this.asf.collection('Preguntas'+this.SalaNum);
    this.ObsPreguntas  = this.PreguntaCollection.valueChanges();
  }
  
  ngOnInit(){
    console.log('NgONInit SalaAdminPage');
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
  }
}
