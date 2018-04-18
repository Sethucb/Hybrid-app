import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { EducationPage } from '../education/education';
// import { LifePage } from '../life/life';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navToEducation() {
  	this.navCtrl.push('EducationPage');
  }

  navToLife(){
  	this.navCtrl.push('LifePage');	
  }

}
