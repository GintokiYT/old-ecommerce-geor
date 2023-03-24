import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { RouteService } from 'src/app/services/route.service';
import { BillingDataService } from 'src/app/services/billing-data.service';
import { ConfirmOrderService } from 'src/app/customer/confirm-order/services/confirm-order.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { Subscription } from 'rxjs';
import { Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-contact-team',
  templateUrl: './contact-team.component.html',
  styleUrls: ['./contact-team.component.scss'],
})
export class ContactTeamComponent extends ViewComponent implements OnInit {


  /*   constructor( _injector: Injector, private location: Location, private router: Router ) {
      super(_injector);
     }
  
    ngOnInit() {}*/
  //Mostramos la lista de contacto
  /* public contact=['Jualiano del carmen','Anibal Cortez','Roberto Carlos de maracaná','Anibal Cortez','Roberto Carlos de maracaná','Jorge Laguna','Anibal Cortez'];
  public number=['+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234'];
  public results = [...this.contact]; */

  //Busca el nombre del contacto
  /* handleChange(event) {
    const query = event.target.value.toLowerCase().trim();
    this.results = this.contact.filter(d => d.toLowerCase().indexOf(query) > -1);
  } */

  //Selecciona los checkbox
  /* oneTrue = false;
  invitationsCount = 0; */

  /* checkBoxSelect(event: any) {
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
    this.navigation.back('/customer/collaborative-team');
  
  }
  
  goContactSeatch(){
  
    const currentRouter = this.router.url;
    if(currentRouter === '/customer/collaborative-team/contact-team') {
      return this.navigation.forward('/customer/collaborative-team/contact-search')
    }
  
    this.navigation.forward('/customer/contact-search');
    }
  
    goTeam(){
  
    const currentRouter = this.router.url;
  
    if(currentRouter === '/customer/collaborative-team/contact-team') {
      return this.navigation.forward('/customer/collaborative-team/team')
    }
  
    this.navigation.forward('/customer/team');
  }
    */

  //Contactos
  contacts: any[];
  contactsResults: any[];
  contactsLoaded: boolean = false;
  showButtonPlus: boolean = true;
  headerContent: string = "normal";
  orderType: string;

  private currentContactSubscription: Subscription;
  @ViewChild("searchBar") searchBar: IonSearchbar;


  constructor(private _injector: Injector, private cdr: ChangeDetectorRef,
    private cs: ContactsService, private bs: BillingDataService, private rs: RouteService,
    private router: Router, private cos: ConfirmOrderService) {
    super(_injector);
    this.currentContactSubscription = this.cs.currentContacts$.subscribe(c => this.contacts = c);
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

    this.cos.currentMyOrder$.subscribe(order => {
      this.orderType = order.typeOrder;
    })
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
      this.navigation.back('/customer/collaborative-team');
    }

  }

  goTeam() {

    const currentRouter = this.router.url;

    if (currentRouter === '/customer/collaborative-team/contact-team') {
      return this.navigation.root('/customer/collaborative-team/team', 'forward')
    }

    this.navigation.root('/customer/team', 'forward');
  }

  goToBuy() {
    this.navigation.forward("/customer/buy");
  }

  showSearch() {
    this.headerContent = "search";
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

}
