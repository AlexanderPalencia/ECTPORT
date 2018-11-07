import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharingProvider } from '../../providers/sharing/sharing';

/**
 * Generated class for the SalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
  SalaNum:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sharing:SharingProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaPage');
  }

  ngOnInit(){
    console.log('NgONInit SalaPage');
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
  }

}
