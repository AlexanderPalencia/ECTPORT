import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';
//import service
import { SharingProvider } from '../../providers/sharing/sharing';
//import models
import { index } from '../../models/index'

@Injectable()
export class FirebaseConectionProvider {

  SalaNum:number;
  indexCollection: AngularFirestoreCollection<index>;
  obsIndex: Observable<index[]>;

  constructor(public http: HttpClient, public asf:AngularFirestore, private sharing:SharingProvider) {
    console.log('Hello FirebaseConectionProvider Provider');  
    this.sharing.cast.subscribe(SalaNum=>this.SalaNum = SalaNum);
    console.log('Hello FirebaseConectionProvider Provider numero ' + this.SalaNum);  
    this.indexCollection = this.asf.collection('Indice'+this.SalaNum);
    this.obsIndex  = this.indexCollection.valueChanges();
  }

  getIndex() {
    return this.obsIndex;
  }
}
