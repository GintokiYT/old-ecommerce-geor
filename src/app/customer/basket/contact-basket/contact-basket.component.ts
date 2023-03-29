import { Component, OnInit, Injector, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';
import { IonSearchbar } from '@ionic/angular';
import { BillingDataService } from 'src/app/services/billing-data.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contacts } from "@capacitor-community/contacts"
import { RouteService } from 'src/app/services/route.service';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import { Subscription } from 'rxjs';
interface Contacts {
  name: string,
  number: string;
}
@Component({
  selector: 'app-contact-basket',
  templateUrl: './contact-basket.component.html',
  styleUrls: ['./contact-basket.component.scss'],
})
export class ContactBasketComponent extends ViewComponent implements OnInit {

  contacts: any[];
  contactsResults: any[];
  contactsLoaded: boolean = false;
  headerContent: string = "normal";
  orderType: string;
  private currentContactSubscription: Subscription;
  oneTrue = false;
  invitationsCount = 0;

  @ViewChild("searchBar") searchBar: IonSearchbar;


  constructor(private _injector: Injector, private cdr: ChangeDetectorRef,
    private cs: ContactsService, private bs: BillingDataService, private rs: RouteService,
    private router: Router, private cos: ConfirmOrderService) {
    super(_injector);
    this.currentContactSubscription = this.cs.currentContacts$.subscribe( c => this.contacts = c);
  }

  ngOnInit() {

    if(this.contacts.length===0){
      this.getContacts();
    }else{
      this.contactsResults = [...this.contacts];
      setTimeout(() => {
        this.contactsLoaded = true;
      }, 150);
    }
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
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 500);
  }

  //Selection checkbox
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

  goCollaborativeBasket() {
    this.navigation.root('/customer/collaborative-basket', 'forward');
  }

}



