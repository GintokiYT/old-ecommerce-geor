import { Location } from '@angular/common';
import { Component, OnInit, Injector, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';
import { IonSearchbar } from '@ionic/angular';
import { BillingDataService } from 'src/app/services/billing-data.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { RouteService } from 'src/app/services/route.service';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
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
/*
  constructor( _injector: Injector, private location: Location ) {
    super(_injector);
   }

   ngOnInit() {}
//Mostramos la lista de contacto
  public contact=['Jualiano del carmen','Anibal Cortez','Roberto Carlos de maracaná','Anibal Cortez','Roberto Carlos de maracaná','Jorge Laguna','Anibal Cortez'];
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
    this.location.back();
  }

  goCollaborativeBasket(){
    this.navigation.root('/customer/collaborative-basket','forward');
  }

  goContactSeatch(){
    this.navigation.root('/customer/contact-search','forward');
  }
}*/

//contactos
  contacts: any[];
  contactsResults: any[];
  showButtonPlus: boolean = true;
  headerContent: string = "normal";
  orderType: string;

  @ViewChild("searchBar") searchBar: IonSearchbar;


  constructor(private _injector: Injector, private cdr: ChangeDetectorRef,
    private cs: ContactsService, private bs: BillingDataService, private rs: RouteService,
    private router: Router, private cos: ConfirmOrderService) {
    super(_injector);
    this.cs.currentContacts$.subscribe((data) => {
      this.contacts = data.map(contact => {
        const nContact = {
          ...contact,
          selected: false
        }
        return nContact;
      });
      this.contactsResults = [...this.contacts];
    });
  }

  ngOnInit() {

    this.cos.currentMyOrder$.subscribe(order => {
      this.orderType = order.typeOrder;
    })
  }

  handleChange(event) {
    const query = event.detail.value.toLowerCase();
    this.contactsResults = this.contacts.filter(contact => {
      if (contact.name && contact.name.display) {
        return contact.name.display.toLowerCase().includes(query);
      }
      return false;
    });
  }

  goToConfirmOrder(contact) {

    const contactSelected = this.contactsResults.filter(c => c.contactId === contact.contactId)[0];
    contactSelected.selected = true;

    if (this.orderType === "domicilio") {
      this.cos.setContactTienda(contact?.name?.display);
    } else {
      this.cos.setContactTienda(contact?.name?.display)
    }

    setTimeout(() => {
      this.navigation.back("customer/confirm-order");
    }, 150);

  }

  goBack() {
    if (this.headerContent === "search") {
      this.contactsResults = [...this.contacts];
      this.headerContent = "normal"
    } else {
      //this.navigation.back("/customer/manage-billing-data/add-company");
      this.navigation.back("/customer/empty-basket");
    }

  }

  goToBuy() {
    this.navigation.forward("/customer/buy");
  }

  showSearch() {
    this.headerContent = "search";
  }

  phoneFormated(phones: any[]) {
    var numberFormated = "";
    const formated = phones.filter((phone) => {
      if (phone.number.includes("+51 ")) {
        return phone;
      }
    })

    if (formated.length > 0) {
      numberFormated = formated[0].number;
    } else {
      const not51 = phones.filter((phone) => {
        if (!phone.number.includes("+51 ")) {

        }
      })
    }

   }

   //Selection checkbox
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

  goCollaborativeBasket(){
    this.navigation.root('/customer/collaborative-basket','forward');
  }

} 



