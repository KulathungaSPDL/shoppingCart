import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MassangerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: Product){
    this.subject.next(product) //Triggaring an event
  }

  getMsg(){
    return this.subject.asObservable()
  }
}
