import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharingProvider } from '../../providers/sharing/sharing';

//import firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';
/**
 * Generated class for the SalaAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface UserSala{
  NombreUsuario : string;
}


@IonicPage()
@Component({
  selector: 'page-sala-admin',
  templateUrl: 'sala-admin.html',
})
export class SalaAdminPage {
  SalaNum:number;

  UserCollection: AngularFirestoreCollection<UserSala>;
  UsersSala: Observable<UserSala[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sharing:SharingProvider, private asf:AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaAdminPage');
    this.UserCollection = this.asf.collection('Users'+this.SalaNum);
    this.UsersSala  = this.UserCollection.valueChanges();
  
  }
  
  ngOnInit(){
    console.log('NgONInit SalaAdminPage');
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
  }

}
