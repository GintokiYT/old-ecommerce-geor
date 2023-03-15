import { Component, OnInit, Injector, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { IonSearchbar } from '@ionic/angular';
import { ContactsService } from '../../../services/contacts.service';
import { BillingDataService } from '../../../services/billing-data.service';
import { Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';


@Component({
  selector: 'app-read-contacts',
  templateUrl: './read-contacts.component.html',
  styleUrls: ['./read-contacts.component.scss'],
})
export class ReadContactsComponent extends ViewComponent implements OnInit {


  contacts: any[];
  contactsResults: any[];
  showButtonPlus: boolean = true;
  headerContent: string = "normal";
  previousRoute: string;


  @ViewChild("searchBar") searchBar: IonSearchbar;


  constructor(private _injector: Injector, private cdr: ChangeDetectorRef,
    private cs: ContactsService, private bs: BillingDataService, private rs: RouteService,
    private router: Router) {
    super(_injector);
    this.cs.currentContacts$.subscribe((data) => {
      this.contacts = data.map( contact => {
        const nContact= {
          ...contact,
          selected: false
        }
        return nContact;
      });
      this.contactsResults = [...this.contacts];
    });
    this.previousRoute = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
  }

  ngOnInit() {
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
    
    const contactSelected = this.contactsResults.filter( c => c.contactId === contact.contactId)[0];
    contactSelected.selected = true;

    const contactTemp = {
      name: contact?.name?.display,
      number: contact?.phones[0].number
    }
    this.bs.setContactTemp(contactTemp);    

    setTimeout(() => {
      this.navigation.back(this.previousRoute);
    }, 200);

  }

  goBack() {
    if (this.headerContent === "search") {
      this.contactsResults = [...this.contacts];
      this.headerContent = "normal"
    } else {
      //this.navigation.back("/customer/manage-billing-data/add-company");
      this.navigation.back(this.previousRoute)
    }

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
