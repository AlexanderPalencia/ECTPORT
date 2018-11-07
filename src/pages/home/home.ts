import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import service
import { SharingProvider } from '../../providers/sharing/sharing';
//import page
import { TabsPage } from '../tabs/tabs';
import { TabsAdminPage } from '../tabs-admin/tabs-admin';
//import firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';

interface infoSala{
  NumeroSala : number;
}

interface UserSala{
  NombreUsuario : string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  SalaNum:number;
  NumeroSala:number;
  RNum:number;
  Time:Date;
  NUsuario:number = 0;
  //UserCollection: AngularFirestoreCollection<UserSala>;
  //UsersSala: Observable<UserSala[]>;
  SalaCollection: AngularFirestoreCollection<infoSala>;
  SalaInfo: Observable<infoSala[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private sharing:SharingProvider, private asf:AngularFirestore) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');  
    this.SalaCollection = this.asf.collection('Sala'+this.RNum);
  }

  ngOnInit(){
    console.log('NgOnInit Log In');
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
  }

  CrearSala() {
    this.RNum = Math.floor((Math.random() * 9999) + 1000);
    console.log(this.RNum +" Sala Nueva");
    this.showAlertSalaNueva();
  }

  showAlertSalaNueva() {
    let alert = this.alertCtrl.create({
      title: 'Sala ' + this.RNum + ' creada',
      subTitle: 'Benvinido a la sala '+this.RNum+' de ECT',
      buttons: [{
        text: 'Cancelar'
      }, {
        text:'Aceptar',
        handler: a=>{ 
          this.sharing.NewSala(this.RNum);
          this.Time = new Date();
          this.addInfo();
          this.navCtrl.push(TabsAdminPage);
        }
      }]
    });
    alert.present();
  }

  addInfo(){
    this.asf.collection('Sala'+this.RNum).doc('info').set({Sala: this.RNum,Time: this.Time}).then(newItem =>{
      console.log(`Sala creada correactamente a las ` + this.Time);
    }).catch(err =>{
      console.error(err);
      
    });
    
    this.asf.collection('Indice'+this.SalaNum).doc('ID').set({NumeroSlide:1}).then(newItem =>{
      console.log(`Siguiente Slide`);
    }).catch(err =>{
      console.error(err);

    });
  }

  addUser(Uinfo:string){
    this.NUsuario++;
    this.asf.collection('Users'+this.NumeroSala).add({NombreUsuario:Uinfo}).then(newItem =>{
      console.log(`Usuario agregado correactamente a la sala ` + this.NumeroSala);
    }).catch(err =>{
      console.error(err);
      
    });
  }

  IngresarSala() {
    let prompt = this.alertCtrl.create({
      title:'Sala '+this.NumeroSala,
      message: 'Ingrese sus datos para acceder a la sala',
      inputs: [{
        name: 'Nombre',
        placeholder: 'Nombre'
      }],
      buttons: [{
        text: 'Cancelar'
      }, {
        text:'Entar',
        handler: data=>{
          this.sharing.NewSala(this.NumeroSala);
          this.addUser(data.Nombre);
          this.navCtrl.push(TabsPage);
        }
      }]
    }).present();
  }

}
