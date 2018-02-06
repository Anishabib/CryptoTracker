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
  thisArr: any[];
  thisID: any;
  thisObj: Object;
  coins: Coin[];
  fiat: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const volume_traded = '24h_volume_usd';
    // this.http.get('https://api.coinmarketcap.com/v1/ticker/').subscribe(data => {
    //   console.log(data);
    // });

    this.http.get<Coin[]>('https://api.coinmarketcap.com/v1/ticker/?convert=CAD').subscribe(data => {
      console.log(data);
      this.coins = data;
    });
  }
}
