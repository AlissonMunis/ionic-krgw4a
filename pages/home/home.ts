import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GodzillaPage } from '../filmes/godzilla/godzilla' ;
import { LigaPage } from '../filmes/liga/liga' ; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

paginaGodzilla = GodzillaPage;
  constructor(public navCtrl: NavController) {


  }
paginaLiga = Liga-justicaPage;
  constructor(public navCtrl: NavController) {


  }
}
