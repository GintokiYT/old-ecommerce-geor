import { Location } from '@angular/common';
import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
interface Contacts{
  name:string,
  number:string;
}
@Component({
  selector: 'app-contact-basket',
  templateUrl: './contact-basket.component.html',
  styleUrls: ['./contact-basket.component.scss'],
})
export class ContactBasketComponent extends ViewComponent implements OnInit {

  constructor( _injector: Injector, private location: Location ) {
    super(_injector);
   }

  ngOnInit() {}

  contact:Contacts[]=[
    {
      name: 'Jualiano del carmen',
      number:'+51 971 945 234',

    },
    {
      name: 'Roberto Carlos de maracaná',
      number:'+51 971 945 234',

    }];;

  oneTrue = false;
  invitationsCount = 0;

  checkBoxSelect(event: any) {
    if (event.detail.checked) {
     // console.log(event.detail.checked);
      this.invitationsCount++;
      this.oneTrue = true;
    } else {
      this.invitationsCount--;
      this.oneTrue = this.invitationsCount > 0;
    }
  }

  goBack(){
    this.location.back();
  }

  goCollaborativeBasket(){
    this.navigation.root('/customer/collaborative-basket','forward');
  }

  goContactSeatch(){
    this.navigation.root('/customer/contact-search','forward');
  }

}



