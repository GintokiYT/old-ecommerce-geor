import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends ViewComponent implements OnInit {

  constructor( _injector: Injector, private location: Location ) {
    super(_injector);
   }

  ngOnInit() {}
//Mostramos la lista de contacto
  public contact=['Wilfredo (yo)','Anibal Cortez','Roberto Carlos de maracaná','Anibal Cortez','Roberto Carlos de maracaná','Jorge Laguna','Anibal Cortez'];
  public number=['+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234'];
  public results = [...this.contact];

//Busca el nombre del contacto
  handleChange(event) {
    const query = event.target.value.toLowerCase().trim();
    this.results = this.contact.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

//Selecciona los checkbox
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
    this.navigation.back('/customer/confirm-order');
  }

  goCollaborativeBasket(){
    this.navigation.root('/customer/collaborative-basket','forward');
  }



  goBuy(){
    this.navigation.forward('/customer/buy');
  }

  }
