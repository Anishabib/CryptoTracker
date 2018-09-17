import { Component, OnInit } from '@angular/core';
import { Global } from '../../global';
import { Coin } from '../../coin';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  global: Global;
  coin: Coin[];
  currencies: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Global>('http://localhost:5000/getGlobal').subscribe(data => {
      console.log(data);
      this.global = data;
    });

    this.http.get<Coin[]>('http://localhost:5000/getAll?all=true').subscribe(data => {
      this.currencies = Object.keys(data).length;
    });
  }
}
