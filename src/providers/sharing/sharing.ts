import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
  Generated class for the SharingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharingProvider {
  private SalaNum = new BehaviorSubject<number>(1000);
  cast =  this.SalaNum.asObservable();
  constructor(public http: HttpClient) {
    console.log('SharingProvider Provider');
  }

  NewSala (NumSala){
    this.SalaNum.next(NumSala);
  }

}
