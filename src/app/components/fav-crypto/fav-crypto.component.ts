import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fav-crypto',
  templateUrl: 'fav-crypto.component.html',
  styleUrls: ['fav-crypto.component.css']
})
export class FavCryptoComponent implements OnInit {
  favCryptoObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.favCryptoObservable = this.getFavCryptos('/favCrypto');
  }
  getFavCryptos(listPath): Observable<any[]> {
    console.log(listPath);
    return this.db.list(listPath).valueChanges();
  }
}
