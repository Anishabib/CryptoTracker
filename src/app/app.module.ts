import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { FavCryptoComponent } from './components/fav-crypto/fav-crypto.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SortDirective } from './directives/sort.directive';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const appRoutes: Routes = [
  { path: 'favCrypto', component: FavCryptoComponent },
  { path: 'landingPage', component: LandingPageComponent }
];

@NgModule({
  declarations: [AppComponent, AppNavbarComponent, FavCryptoComponent, LandingPageComponent, SortDirective, TopBarComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
