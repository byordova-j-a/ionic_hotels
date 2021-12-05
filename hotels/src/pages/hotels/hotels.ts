import { Component } from '@angular/core';
import {ModalController, NavController,App} from 'ionic-angular';
import { HotelPage } from '../hotelpage/hotelpage';
import { Searcher } from '../searcher/searcher';

interface Hotel {

  imageUrl: string,
  title: string,
  description: string,
  roomCost: number,
  hasParking: boolean,
  address: string,
  phone: string

}

interface Data{

  from:number,
  to:number,
  parking:boolean

}

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
 
})
export class HotelsPage {

  hotels:Array<Hotel>;
  params: Object;
  pushPage: any;
  finishHotels:Array<Hotel>=[];
  dataFromFilter:Data;
  
  constructor(public navCtrl: NavController, public app:App,
     public modalCtrl: ModalController) {
   
    this.dataFromFilter= {

    from:0,
    to:Infinity,
    parking:false

   };

    this.hotels = [
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13675285.jpg?k=89803e49fdc2db2daf440284bd500876af6eae3f33ca1992be995735e07c0fea&o=&hp=1',
        title: 'Аэрополис',
        description: 'Отель "Аэрополис"',
        roomCost: 2780,
        hasParking: true,
        address: 'Москва, Ленинградский пр-т., 37',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://pix8.agoda.net/hotelImages/4893004/0/ac2c8648bf5edd8727578aeb3ce64e93.jpg?s=1024x768',
        title: 'Вега Измайлово',
        description: 'Отель "Вега Измайлово"',
        roomCost: 3200,
        hasParking: false,
        address: 'Москва, Измайловское шоссе 71',
        phone: '8 (800) 600-68-53'
      },
      
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/225530882.jpg?k=8cfdbb765051e759f06c4a63a9db9b01ea9965a7d23866ad7fd4d593731742b4&o=&hp=1',
        title: 'Де Пари',
        description: 'Отель "Де Пари"',
        roomCost: 6044,
        hasParking: true,
        address: 'Москва, ул. Блюхера, 58',
        phone: '8 (932) 614-50-62'
      },
      {
        imageUrl: 'https://cdn.101hotels.com/uploads/image/hotel_image/2755/51121.jpg',
        title: 'Джентэльон',
        description: 'Отель "Джентэльон"',
        roomCost: 4450,
        hasParking: true,
        address: 'Москва, ул. 1-я Брестская, д. 38',
        phone: '8 (495) 134-29-342'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27290520.jpg?k=985b61ae44b1ba18b8866d36bc564adef96c302f437288860c106ccc908bf4ae&o=&hp=1',
        title: 'Измайлово Гамма',
        description: 'Гостиница "Измайлово Гамма"',
        roomCost: 1949,
        hasParking: true,
        address: 'Москва, Измайловское шоссе 71',
        phone: '8 (499) 653-77-62'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/123947119.jpg?k=ab0ec494378583d5b8748c194a2ce08e42236b48a52c4e039969b7a6732796db&o=&hp=1',
        title: 'Империя',
        description: 'Отель "Империя"',
        roomCost: 3910,
        hasParking: false,
        address: 'Москва, 1-й Боткинский проезд, д. 6',
        phone: '8 (985) 561-99-11'
      },
      
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/get-altay/4043748/2a000001768edeedae751ccb6afaf469a52c/XXXL',
        title: 'Лемар',
        description: 'Отель "Лемар"',
        roomCost: 3690,
        hasParking: true,
        address: 'Москва, пер. Расторгуевский, д. 4',
        phone: '8 (495) 134-29-34'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/256536456.jpg?k=4e1643ba033b25d67aef873dc68b402d5e04e80cbabbf200175e4afab7f60b9e&o=&hp=1',
        title: 'Мандарин',
        description: 'Отель "Мандарин"',
        roomCost: 3818,
        hasParking: true,
        address: 'Москва, ул. Ольховская 23',
        phone: '8 (499) 653-77-62'
      },
      {
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/08/b5/9c/2.jpg?w=1200&h=-1&s=1',
        title: 'Маросейка',
        description: 'Отель "Маросейка"',
        roomCost: 4420,
        hasParking: false,
        address: 'Москва, ул. Маросейка, д. 2/15',
        phone: '8 (495) 624-06-10'
      },
      {
        imageUrl: 'https://турист.рф/images/hotelavatar/4646/4646.jpg',
        title: 'Маяк',
        description: 'Отель "Маяк"',
        roomCost: 3500,
        hasParking: true,
        address: 'Москва, ул. Гашека, д. 12',
        phone: '8 (929) 380-30-58'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/158311436.jpg?k=f3fa5035a0008712cab7d0ac64faf45ae0315133e2faf4faebfc58cc58792069&o=&hp=1',
        title: 'Славянка Москва',
        description: 'Гостиница "Славянка Москва"',
        roomCost: 3750,
        hasParking: true,
        address: 'Москва, Суворовская пл., д. 2',
        phone: '8 (800) 555-33-75'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/317729492.jpg?k=40a3a8bec9fec9fe4ab30468308796b8fd961499cce022b4c811efe37f398633&o=&hp=1',
        title: 'Сити',
        description: 'Отель "Сити"',
        roomCost: 4147,
        hasParking: false,
        address: 'Москва, Волгоградский проспект 42/16',
        phone: '8 (495) 973-80-00'
      },
      {
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7c/c5/ee/exterior.jpg?w=1100&h=-1&s=1',
        title: 'Hampton by Hilton Moscow Strogino',
        description: 'Отель "Hampton by Hilton Moscow Strogino"',
        roomCost: 4165,
        hasParking: false,
        address: 'Москва, ул. Кулакова, 20/12',
        phone: '8 (499) 745-06-00'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/1024x768/content/8a/16/8a1657b067b64603e6d6f88eb11ab6a4008c3f4f.jpeg',
        title: 'AZIMUT Moscow Tulskaya',
        description: 'Отель "AZIMUT Moscow Tulskaya"',
        roomCost: 2885,
        hasParking: false,
        address: 'Москва, Варшавское шоссе, 9',
        phone: '8 (495) 987-22-22'
      },
      
      {
        imageUrl: 'https://турист.рф/images/hotelavatar/5502/5502.jpg',
        title: 'The Rooms Boutique',
        description: 'Отель "The Rooms Boutique"',
        roomCost: 4982,
        hasParking: true,
        address: 'Москва, Таганский, Николоямская Улица 38',
        phone: '8 (927) 514-11-68'
      }
    ];

   this.hotels.forEach((item)=> {

      this.finishHotels.push(item);

    }
    );
  
    this.pushPage=HotelPage;
 
  }

  filter(data:Data) {

    this.finishHotels=[];
  
    this.hotels.forEach(item=> {
  
    this.dataFromFilter.from=data.from;
    this.dataFromFilter.to=data.to;
    this.dataFromFilter.parking=data.parking;
    
  if ((item.roomCost>=data.from)&&(item.roomCost<=data.to)) {
  
    if ( ( (item.hasParking===true)&&(data.parking===true) )
  
    ||(data.parking===false) ) {
  
      this.finishHotels.push(item);
  
        }
      }
    }
  );
  
  }
  
  butclick() {
   
    let profileModal = this.modalCtrl.create(Searcher, this.dataFromFilter);
  
    profileModal.onDidDismiss(data => {
  
      this.filter(data);
  
    }
    );
  
    profileModal.present();
  
  }
 
}
