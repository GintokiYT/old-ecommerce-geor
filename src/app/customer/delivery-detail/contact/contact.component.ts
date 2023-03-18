import { Component, Input, OnInit, Injector, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';
import { BillingDataService } from '../../../services/billing-data.service';
import { ContactsService } from '../../../services/contacts.service';
import { RouteService } from '../../../services/route.service';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends ViewComponent implements OnInit {

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
      this.navigation.back("/customer/confirm-order");
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

    // for(let i = 0;i<=phones.length-1;i++){
    //   if(phones[i].number.includes("+51 ")){
    //     numberFormated = phones[i].number;
    //     break;
    //   }
    // }

  }

}
