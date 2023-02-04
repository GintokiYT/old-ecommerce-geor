import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
interface Contacts{
  name:string,
  cel: string

 }

@Component({
  selector: 'app-contact-basket',
  templateUrl: './contact-basket.component.html',
  styleUrls: ['./contact-basket.component.scss'],
})
export class ContactBasketComponent extends ViewComponent implements OnInit {

  constructor( _injector: Injector ) {
    super(_injector);
   }

  ngOnInit() {}
  contact:Contacts[]=[
    { name: 'Rolando Paredes Alvarado', cel:'+51 971 945 234'},
    { name: 'Anibal Cortez', cel:'+51 971 945 234'},
    { name: 'Roberto Carlos de maracaná', cel:'+51 971 945 234'},
    { name: 'Anibal Cortez', cel:'+51 971 945 234'},
    { name: 'Rolando Paredes Alvarado', cel:'+51 971 945 234'},
    { name: 'Anibal Cortez', cel:'+51 971 945 234'},
    { name: 'Roberto Carlos de maracaná', cel:'+51 971 945 234'}]

      goBack(){
        this.navigation.root('/customer/my-basket','back');
      }



}
