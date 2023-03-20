import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import { Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent extends ViewComponent implements OnInit {

  oneTrue: boolean = true;


  bills: any[] = [
    {
      id: 1,
      name: "Jr. Samaritanos 879 Miraflores, Lima, Perú",
      selected: true
    },
    {
      id: 2,
      name: "Jr. Enrique Segobiano 879 Miraflores, Lima, Perú",
      selected: false
    },

  ]

  constructor(private cpService: ConfirmOrderService,
    private _injector: Injector, private router: Router,
    private rs : RouteService) {
    super(_injector)
  }

  ngOnInit() { }

  checkBoxChange(id: number) {
    const falses = this.bills.filter(bill => bill.id !== id);
    const trues = this.bills.filter(bill => bill.selected === true);
    falses.forEach(bill => bill.selected = false);
    this.oneTrue = (trues.length > 0) ? true : false;
  }

  establecerDirection() {
    const selected = this.bills.filter(element => element.selected === true);
    if (selected[0]) {
      this.cpService.setDirectionHome(selected[0].name)
    }
    this.navigation.back("/customer/confirm-order");
  }

  goLocation() {
    const currentRouter = this.router.url;
    this.rs.setMyLocationLastBackDirection(currentRouter);
    this.navigation.forward('/account/welcome/my-location');
    /* this.navigation.forward('/customer/contact-search'); */
  }
  /* handlerMessage = '';
    roleMessage = ''; */




  deleteBill(eliminar: boolean): void {
    if (eliminar) {
      console.log(eliminar)
      const trues = this.bills.filter(bill => bill.selected === true);
      if (trues.length > 0) {
        this.bills = this.bills.filter(bill => bill.id !== trues[0].id);
      }
      this.oneTrue = false;
    }
  }

}

