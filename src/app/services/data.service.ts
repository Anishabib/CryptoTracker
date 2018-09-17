import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private fiatCode = new BehaviorSubject('USD');
  currentFiat = this.fiatCode.asObservable();


  firstPage = new BehaviorSubject(null);
  currentPage = this.fiatCode.asObservable();

  constructor() { }

  changeFiat(fiat: string) {
    this.fiatCode.next(fiat);
    localStorage.setItem('fiat', fiat);
  }

  changePage(as: string) {
    this.firstPage.next(as);
  }
}
