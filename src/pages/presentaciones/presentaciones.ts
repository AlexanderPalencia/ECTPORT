import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharingProvider } from '../../providers/sharing/sharing';
import { FirebaseConectionProvider } from '../../providers/firebase-conection/firebase-conection';
//import models
import { index } from '../../models/index'


//import firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-presentaciones',
  templateUrl: 'presentaciones.html',
})
export class PresentacionesPage {
  SalaNum:number;
  slider:any; 
  RData: index[];
  ArrayData:any;
  NIndex:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sharing:SharingProvider, public fbconection: FirebaseConectionProvider) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentacionesPage');
  }

  ShowSlide(NSlide:number){
    this.slider = [
      {
        title: "",
        description:"",
        image:"assets/imgs/Slide"+NSlide+".jpg"
      }
    ];
  }

  ngOnInit(){
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
    this.fbconection.getIndex().subscribe(index => {
      this.RData = index;
      this.ArrayData = this.RData[0];
      this.NIndex = this.ArrayData.NumeroSlide;
      console.log('Slide Numero ' + this.NIndex);
      this.ShowSlide(this.NIndex);
    });
  }
}
