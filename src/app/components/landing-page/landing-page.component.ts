import { Component, OnInit } from '@angular/core';
import { Coin } from '../../coin';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { SortDirective } from '../../directives/sort.directive';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  coins: Coin[];
  thisCoin: Coin;
  allCoins: Coin[];
  fiat: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get<Coin[]>('https://api.coinmarketcap.com/v1/ticker/?convert=EUR').subscribe(data => {
    //   console.log(data);
    //   this.coins = data;
    //   console.log(this.coins[0]);
    // });

    this.http.get<Coin[]>('http://localhost:3000/getAll?from=0&to=100').subscribe(data => {
      this.allCoins = data;
      console.log(this.allCoins);
      console.log(Object.keys(this.allCoins).length);
    });

    // this.http.get<Coin[]>('//localhost:3000/getAll?all=true').subscribe(data => {
    //   this.allCoins = data;
    //   console.log(this.allCoins);
    //   console.log(Object.keys(this.allCoins).length);
    // });
  }
}
