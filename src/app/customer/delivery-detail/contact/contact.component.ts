import { Component, Input, OnInit, Injector, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { BillingDataService } from '../../../services/billing-data.service';
import { ContactsService } from '../../../services/contacts.service';
import { RouteService } from '../../../services/route.service';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import { Subscription } from 'rxjs';
import { Contacts } from "@capacitor-community/contacts"

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
  contactsLoaded: boolean = false;

  @ViewChild("searchBar") searchBar: IonSearchbar;

  private currentContactSubscription: Subscription;


  constructor(private _injector: Injector,
    private cs: ContactsService, private bs: BillingDataService, private rs: RouteService,
    private router: Router, private cos: ConfirmOrderService) {
    super(_injector);
    this.cos.currentMyOrder$.subscribe(order => {
      this.orderType = order.typeOrder;
    })
    this.currentContactSubscription = this.cs.currentContacts$.subscribe(c => this.contacts = c);
  }

  ngOnInit() {

    if (this.contacts.length === 0) {
      this.getContacts();
    } else {
      this.contactsResults = [...this.contacts];
      setTimeout(() => {
        this.contactsLoaded = true;
      }, 150);
    }
  }

  ngOnDestroy(): void {
    this.currentContactSubscription.unsubscribe();
  }

  async getContacts() {
    try {
      const result = await Contacts.getContacts({
        projection: {
          name: true,
          phones: true
        }
      })
      this.contacts = result.contacts;
      this.contactsResults = [...this.contacts];
      this.cs.setContactsData(this.contacts);
      this.contactsLoaded = true;
    } catch (err) {
      console.log(err)
    }
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

    if (this.orderType === "domicilio") {
      this.cos.setContactDomicilio(contact?.name?.display);
    } else {
      this.cos.setContactTienda(contact?.name?.display)
    }

    this.navigation.back("customer/confirm-order");
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

}
