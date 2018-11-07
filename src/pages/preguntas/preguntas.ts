import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharingProvider } from '../../providers/sharing/sharing';
import { AlertController } from 'ionic-angular';
//import firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';
/**
 * Generated class for the PreguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Preguntas{
  Pregunta : string;
}
@IonicPage()
@Component({
  selector: 'page-preguntas',
  templateUrl: 'preguntas.html',
})
export class PreguntasPage {
  SalaNum:number;
  PreguntaCollection: AngularFirestoreCollection<Preguntas>;
  ObsPreguntas: Observable<Preguntas[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sharing:SharingProvider, private asf:AngularFirestore, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasPage');
    this.PreguntaCollection = this.asf.collection('Preguntas'+this.SalaNum);
    this.ObsPreguntas  = this.PreguntaCollection.valueChanges();
  }

  ngOnInit(){
    console.log('NgONInit SalaAdminPage');
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
  }

  
  newItem() {
    let prompt = this.alertCtrl.create({
      title:'agregar pregunta',
      message: 'Nueva preguta',
      inputs: [{
        name: 'Pregunta',
        placeholder: 'nueva pregunta'
      }],
      buttons: [{
        text: 'Cancelar'
      }, {
        text:'Guardar',
        handler: data=>{
          this.addTask(data.Pregunta);
        }
      }]
    }).present();
  }

  addTask(Pregunta:string){
    this.PreguntaCollection.add({Pregunta}).then(newItem =>{
      console.log(`Pregunta agregada`);
    }).catch(err =>{
      console.error(err);
      
    });
  }

}
