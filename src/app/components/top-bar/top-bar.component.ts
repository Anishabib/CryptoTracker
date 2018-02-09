import { Component, OnInit } from '@angular/core';
import { Global } from '../../global';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Global>('https://api.coinmarketcap.com/v1/global/').subscribe(data => {
      console.log(data);
      this.global = data;
    });
  }

}
