import { Component } from '@angular/core';
import {ViewController,NavParams } from 'ionic-angular';

@Component({
    selector: 'searcher-page',
    templateUrl: 'searcher.html'
  })
  export class Searcher {

  from:any;
   to:any;
   park:any;

   constructor(public viewCtrl: ViewController,public params: NavParams) {

    this.from=this.params.get("from");
    this.to=this.params.get("to");
    this.park= this.params.get("parking");
  
  }

   onFromChange(){

     if (typeof(this.from)=="boolean") {

     this.from=0; 
      } else {
  
     
  if (!isNaN(+this.from)) {

    this.from=+this.from;

        } else this.from=0;

      }
  
    }

  onToChange() {

    if (typeof(this.to)=="boolean")

     this.to=Infinity;

     else {
    
     if (this.to.trim()=="")
     
     this.to=Infinity;
     
      if (!isNaN(+this.to)) {
    
        this.to=+this.to;
  
        } else this.to=Infinity;
      
      } 
  
  }
   
   
  closeSearch() { 

    this.viewCtrl.dismiss(
        {
          from:this.from,
          to:this.to,
          parking:Boolean(this.park)
      }
      );

   }

   FocusSelect(event) {

    event.target.select();

   }
  
}