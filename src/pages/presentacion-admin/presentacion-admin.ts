import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SharingProvider } from '../../providers/sharing/sharing';
//import firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-presentacion-admin',
  templateUrl: 'presentacion-admin.html',
})
export class PresentacionAdminPage {
  SalaNum:number;
  NSlide:number = 1;
  slider:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sharing:SharingProvider, private toastctrl:ToastController, private asf:AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentacionAdminPage');
    this.ShowSlide();
  }

  ngOnInit(){
    console.log('NgONInit SalaAdminPage');
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
  }

  ShowSlide(){
    this.slider = [
      {
        title: "",
        description:"",
        image:"assets/imgs/Slide"+this.NSlide+".jpg"
      }
    ];
  }
  
  
  sigueiteSlide(){
    
    this.NSlide++;
    
    this.asf.collection('Indice'+this.SalaNum).doc('ID').set({NumeroSlide:this.NSlide}).then(newItem =>{
      console.log(`Siguiente Slide`);
    }).catch(err =>{
      console.error(err);

    });
    this.ShowSlide();
  }

  AnteriorSlide(){
    
    this.NSlide--;
    
    this.asf.collection('Indice'+this.SalaNum).doc('ID').set({NumeroSlide:this.NSlide}).then(newItem =>{
      console.log(`Siguiente Slide`);
    }).catch(err =>{
      console.error(err);
      
    });
    this.ShowSlide();
  }
}
