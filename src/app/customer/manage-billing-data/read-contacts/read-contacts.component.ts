import { Component, OnInit, Injector, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { ViewComponent } from '@geor360/ecore';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-read-contacts',
  templateUrl: './read-contacts.component.html',
  styleUrls: ['./read-contacts.component.scss'],
})
export class ReadContactsComponent extends ViewComponent implements OnInit {


  contacts: any[];
  contactsResults: any[];
  showButtonPlus: boolean = false;
  headerContent: string = "normal";

  @ViewChild("searchBar") searchBar: IonSearchbar;


  constructor(private _injector: Injector, private cdr: ChangeDetectorRef) {
    super(_injector);
  }

  async ngOnInit() {
    await this.getContacts();
  }

  ngAfterViewInit(): void {
  }

  handleChange(event) {
    // const query = event.detail.value.toLowerCase();
    // this.contactsResults = this.contacts.filter(contact => contact.name.display.toLowerCase().indexOf(query) !== -1);
    const query = event.detail.value.toLowerCase();
    this.contactsResults = this.contacts.filter(contact => {
      if (contact.name && contact.name.display) {
        return contact.name.display.toLowerCase().includes(query);
      }
      return false;
    });
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
      this.showButtonPlus = true;
    } catch (e) {
      console.log(e)
    }
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

  goToSetContact() {
    this.navigation.forward("/customer/manage-billing-data/add-company/set-contact");
  }

  goBack() {
    if (this.headerContent === "search") {
      this.contactsResults = [...this.contacts];
      this.headerContent = "normal"
    } else {
      this.navigation.back("/customer/manage-billing-data/add-company");
    }

  }

  showSearch() {
    this.headerContent = "search";
  }



}
