import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinancesPage } from '../finances/finances';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navToFinance() {
  	this.navCtrl.push(FinancesPage);
  }

}
