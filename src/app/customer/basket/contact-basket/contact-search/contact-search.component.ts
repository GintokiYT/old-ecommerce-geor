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
   public contact=['Jualiano del carmen','Anibal Cortez','Roberto Carlos de maracaná','Anibal Cortez','Roberto Carlos de maracaná','Jorge Laguna','Anibal Cortez'];
   public number=['+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234'];
   public results = [...this.contact];

   handleChange(event) {
     const query = event.target.value.toLowerCase().trim();
     this.results = this.contact.filter(d => d.toLowerCase().indexOf(query) > -1);
   }

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

  goBasket(){

    if(localStorage.getItem('back')) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '/customer/manage-user-information');
    } else {
      this.navigation.root('/customer/collaborative-basket','forward');
    }
  }



}
