import { Component, OnInit,Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../services/confirm-order.service';
import IOrder from '../../../interfaces/IOrder';
import { Contacts } from "@capacitor-community/contacts"
import { ContactsService } from '../../../services/contacts.service';
import { RouteService } from '../../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent extends ViewComponent implements OnInit {

  modalIsVisible: boolean = false;
  permission : string;
  contacts : any[];
  deliveryRequirements: string;

  order: IOrder;

  constructor(_injector: Injector, public cpService: ConfirmOrderService,
    private cs: ContactsService,private rs : RouteService,
    private router: Router) {
    super(_injector);
    this.cpService.getDeliveryRequirements.subscribe( value => this.deliveryRequirements = value );
  }

  ngOnInit() {
    this.CheckPermission();
    this.cpService.currentMyOrder$.subscribe((myOrder) => this.order = myOrder)
  }

  goTo(p1?: string, p2?: string) {
    this.navigation.forward(p1);
  }

  goToDirection(){
    this.rs.setSetDetailBackDirection(this.router.url);
    this.navigation.forward("/customer/direction")
  }

  async CheckPermission() {
    try {
      const perm = await Contacts.checkPermissions();
      this.permission = perm.contacts;
    } catch (e) {
      console.log(e)
    }
  }

  async requestPermissionContact() {
    try {
      let perm;
      switch (this.permission) {
        case "prompt": // inicial
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "denied": // cuando se hace click en el background
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "granted": // se da en permitir
          try {
            const result = await Contacts.getContacts({
              projection: {
                name: true,
                phones: true
              }
            })
            this.contacts = result.contacts;
            this.cs.setContactsData(this.contacts);
            this.navigation.forward("/customer/contact")
          } catch (e) {
            console.log(e)
          }
          break;

        case "prompt-with-rationale": // cuando se da en denegar
          this.navigation.forward("/customer/contact/buy"); break;
      }
    }
    catch (e) {
      console.log(e)
    }
  }

}
