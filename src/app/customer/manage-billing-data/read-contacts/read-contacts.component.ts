import { Component, OnInit, Injector, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { IonSearchbar } from '@ionic/angular';
import { ContactsService } from '../../../services/contacts.service';
import { Contacts } from "@capacitor-community/contacts"
import { BillingDataService } from '../../../services/billing-data.service';
import { Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-read-contacts',
  templateUrl: './read-contacts.component.html',
  styleUrls: ['./read-contacts.component.scss'],
})
export class ReadContactsComponent extends ViewComponent implements OnInit {


  contacts: any[];
  contactsResults: any[];
  contactsLoaded: boolean = false;
  headerContent: string = "normal";
  previousRoute: string;
  private currentContactSubscription: Subscription;


  @ViewChild("searchBar") searchBar: IonSearchbar;


  constructor(private _injector: Injector,
    private cs: ContactsService,
    private bs: BillingDataService,
    private rs: RouteService,
    private router: Router) {
    super(_injector);
    this.previousRoute = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.currentContactSubscription = this.cs.currentContacts$.subscribe( c => this.contacts = c);
  }

  ngOnInit() {
    if(this.contacts.length===0){
      this.getContacts();
    }else{
      this.contactsResults = [...this.contacts];
      setTimeout(() => {
        this.contactsLoaded = true;
      }, 200);
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

  goToSetContact() {
    this.rs.setSetContactLastSubmitBackDirection(this.previousRoute);
    this.navigation.forward("/customer/manage-billing-data/add-company/set-contact");
  }

  goToAddCompany(contact) {
    const contactTemp = {
      name: contact?.name?.display,
      number: contact?.phones[0].number
    }
    this.bs.setContactTemp(contactTemp);
    this.navigation.back(this.previousRoute);
  }

  goBack() {
    if (this.headerContent === "search") {
      this.contactsResults = [...this.contacts];
      this.headerContent = "normal"
    } else {
      this.navigation.back(this.previousRoute)
    }

  }

  showSearch() {
    this.headerContent = "search";
  }

}
