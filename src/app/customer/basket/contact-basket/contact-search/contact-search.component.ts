import { Location } from '@angular/common';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { IonSearchbar } from '@ionic/angular';

interface Contacts{
  name:string,
  number:string;
}
@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss'],
})
export class ContactSearchComponent extends ViewComponent implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  constructor( _injector: Injector, private location: Location ) {
    super(_injector);
   }
   public contact=['Julian','marco','luis'];
   public results = [...this.contact];

   handleChange(event) {
     const query = event.target.value.toLowerCase().trim();

     this.results = this.contact.filter(d => d.toLowerCase().indexOf(query) > -1);
   }


  /*  contact:Contacts[]=[
    {
      name: 'Jualiano del carmen',
      number:'+51 971 945 234',

    },
    {
      name: 'Roberto Carlos de maracaná',
      number:'+51 971 945 234',

    }];; */



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


  ngOnInit() {}

  goBack(){
    this.location.back();
  }

  goCollaborativeBasket(){
    this.navigation.root('/customer/collaborative-basket','forward');
  }



}
