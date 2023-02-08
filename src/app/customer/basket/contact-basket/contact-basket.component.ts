import { Location } from '@angular/common';
import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-contact-basket',
  templateUrl: './contact-basket.component.html',
  styleUrls: ['./contact-basket.component.scss'],
})
export class ContactBasketComponent extends ViewComponent implements OnInit {

  oneTrue:boolean=true;
  constructor( _injector: Injector, private location: Location ) {
    super(_injector);
   }


  ngOnInit() {}

  data: any[] = [
    {
      id: 0,
      selected: false,
    },
    {
      id:1,
      selected: false,
    },
    {
      id:2,
      selected: false,
    },
    {
      id:3,
      selected: false,
    },
    {
      id:4,
      selected: false,
    },
    {
      id:5,
      selected: false,
    },
    {
      id:6,
      selected: false,
    },
  ]

  goBack(){
    this.location.back();
  }
  goCollaborativeBasket(){
    this.navigation.root('/customer/collaborative-basket','forward');
  }
  goContactSeatch(){
    this.navigation.root('/customer/contact-search','forward');
  }

  checkBoxSelect(id: number) {
    const falses = this.data.filter( element => element.id!==id);
    const trues = this.data.filter(element => element.selected===true);
    falses.forEach( element => {
    element.selected = false;
    })
    if(trues.length>0){
      this.oneTrue = false;
    }else{
      this.oneTrue = true;
    }
  }
}
