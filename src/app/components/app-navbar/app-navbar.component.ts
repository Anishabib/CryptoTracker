import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { EXrate } from '../../exrate';
// import { LocalStorage } from 'angular-localstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  constructor(private router: Router, private data: DataService, private http: HttpClient) {}

  landingPage: LandingPageComponent = new LandingPageComponent(this.http, this.data);
  selectedFiat: string;
  rates: EXrate[];
  rateList: any;
  // removed: CLP, PKR, TWD
  fiats: string[] = [
    'USD',
    'AUD',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'JPY',
    'KRW',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PHP',
    'PLN',
    'RUB',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'ZAR'
  ];

  ngOnInit() {
    // this.selectedFiat = this.fiats[0];
    this.data.currentFiat.subscribe(fiat => (this.selectedFiat = fiat));
    if (localStorage.getItem('fiat')) {
      this.selectedFiat = localStorage.getItem('fiat');
    } else {
      this.data.currentFiat.subscribe(fiat => (this.selectedFiat = fiat));
      localStorage.setItem('fiat', 'USD');
    }

    this.http.get<EXrate[]>('http://localhost:5000/getRates').subscribe(data => {
      this.rates = data;
      this.rateList = this.landingPage.generateArray(this.rates);
      // this.xrate = this.getFiatEX(this.selectedFiat);
      console.log(this.rateList);
    });
  }

  changeFiat(fiat: string) {
    this.data.changeFiat(fiat);
    this.rateList = this.landingPage.getRateList();
    console.log(this.rateList);
    this.landingPage.changeFiat(fiat, this.rateList);
  }
}
