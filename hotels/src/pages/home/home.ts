import { Component } from '@angular/core';
import {  App, NavController, NavParams } from 'ionic-angular';
import { HotelsPage } from '../hotels/hotels';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public app:App,public navParams:NavParams) {

    }

  openHotels() {
   
    this.app.getRootNav().setRoot(HotelsPage);
   
  }

}