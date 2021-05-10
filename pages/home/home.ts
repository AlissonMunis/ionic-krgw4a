import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GodzillaPage } from '../filmes/godzilla/godzilla' ;
import { LigaJusticaPage } from '../filmes/liga-justica/liga-justica' ; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

paginaGodzilla = GodzillaPage;
paginaLiga = LigaJusticaPage;

  constructor(public navCtrl: NavController) {


  }
}
