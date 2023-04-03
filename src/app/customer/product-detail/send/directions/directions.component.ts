import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../../confirm-order/services/confirm-order.service';
import { Router } from '@angular/router';
import { RouteService } from '../../../../services/route.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent extends ViewComponent implements OnInit {

  oneTrue: boolean = true;

  directions: any[];


  constructor(private cpService: ConfirmOrderService,
    private _injector: Injector, private router: Router,
    private rs : RouteService) {
    super(_injector)
  }

  ngOnInit() {
    this.directions = [
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
  }

  checkBoxChange(id: number) {
    const falses = this.directions.filter(direction => direction.id !== id);
    const trues = this.directions.filter(direction => direction.selected === true);
    falses.forEach(direction => direction.selected = false);
    this.oneTrue = (trues.length > 0) ? true : false;
  }

  goSend() {
    const selected = this.directions.filter(element => element.selected === true);
    if (selected[0]) {
      this.cpService.setDirectionHome(selected[0].name)
    }
    this.navigation.forward("/customer/send");
  }

  goLocation() {
    const currentRouter = this.router.url;
    this.rs.setMyLocationLastBackDirection(currentRouter);
    this.navigation.forward('send/account/welcome/my-location');

  }

  deleteDirection(eliminar: boolean): void {
    if (eliminar) {
      console.log(eliminar)
      const trues = this.directions.filter(direction => direction.selected === true);
      if (trues.length > 0) {
        this.directions = this.directions.filter(direction => direction.id !== trues[0].id);
      }
      this.oneTrue = false;
    }
  }

}

