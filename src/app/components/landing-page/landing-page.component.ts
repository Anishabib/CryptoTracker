import { Component, OnInit, Optional, Injectable } from '@angular/core';
import { Coin } from '../../coin';
import { EXrate } from '../../exrate';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { SortDirective } from '../../directives/sort.directive';
import { DecimalPipe } from '@angular/common';
import { DataService } from '../../services/data.service';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  coins: Coin[];
  thisCoin: Coin;
  allCoins: Coin[];
  fiat: String;
  // rates: any;
  rates: EXrate[];
  rates2: Object[];
  rateList: any;
  selectedFiat: string;
  navbar: AppNavbarComponent;
  xrate: number;
  constructor(private http: HttpClient, private data: DataService) {}

  ngOnInit() {
    this.data.currentFiat.subscribe(fiat => (this.selectedFiat = fiat));
    this.data.firstPage.subscribe(fiat => (this.selectedFiat = fiat));

    this.http.get<Coin[]>('http://localhost:5000/getAll?from=0&to=100').subscribe(data => {
      this.allCoins = data;
      console.log(this.allCoins);
    });

    this.http.get<EXrate[]>('http://localhost:5000/getRates').subscribe(data => {
      this.rates = data;
      console.log(this.rates);

      this.rateList = this.generateArray(this.rates);
      console.log(this.rateList);
      this.xrate = this.getFiatEX(this.selectedFiat, this.rateList);
      console.log('====');
      console.log(this.xrate);
    });

    // this.http.get<Coin[]>('//localhost:5000/getAll?all=true').subscribe(data => {
    //   this.allCoins = data;
    //   console.log(this.allCoins);
    //   console.log(Object.keys(this.allCoins).length);
    // });
  }

  getRateList() {
    this.http.get<EXrate[]>('http://localhost:5000/getRates').subscribe(data => {
      this.rates = data;
      this.rateList = this.generateArray(this.rates);
      this.xrate = this.getFiatEX(this.selectedFiat, this.rateList);
      console.log('----');
      console.log(this.rateList);
    });
  }

  getFiatEX(fiat, rateList) {
    console.log(fiat);
    console.log(rateList);
    const exRate = rateList.find(function(obj) {
      return obj.key === fiat;
    });
    return exRate.value;
  }

  changeFiat(fiat, rateList) {
    this.selectedFiat = fiat;
    this.xrate = this.getFiatEX(this.selectedFiat, rateList);
  }

  generateArray(obj) {
    return Object.keys(obj).map(key => {
      return { key: key, value: obj[key] };
      // return { key: key, value: obj['CAD'] };
    });
  }
}
