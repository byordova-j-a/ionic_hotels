import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

interface Hotel {
    imageUrl: string,
    title: string,
    description: string,
    roomCost: number,
    hasParking: string,
    address: string,
    phone: string
  }

@Component({
    selector: 'page-hotel',
    templateUrl: 'hotelpage.html',
    styles: ['hotelpage.scss']
   
  })
  export class HotelPage implements Hotel {

    imageUrl: string;
    title: string;
    description: string;
    roomCost: number;
    hasParking: string;
    address: string;
    phone: string;

    constructor(public navCtrl: NavController,public navParams: NavParams) {

   this.imageUrl=this.navParams.get('imageUrl');
   this.title=this.navParams.get('title');
   this.description=this.navParams.get('description');
   this.roomCost=this.navParams.get('roomCost');

   if(this.navParams.get('hasParking')==true) {

       this.hasParking="Есть";

      } else {
     
    this.hasParking="Нет";
    
      }
 
   this.address=this.navParams.get('address');
   this.phone=this.navParams.get('phone');
   
    }
  }
    