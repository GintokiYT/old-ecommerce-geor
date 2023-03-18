import { Component, Input, OnInit, Injector, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent extends ViewComponent implements OnInit {

  @ViewChild('deliveryRequirements') deliveryRequirements: IonTextarea;

 public isSaveButtonEnabled = false;

  constructor(private location: Location, _injector: Injector, public cpService: ConfirmOrderService) {
    super(_injector)
  }

  ngOnInit() { }


  goSaveDeliveryRequirements(){
    this.cpService.setDeliveryRequirements(this.deliveryRequirements.value);
    this.navigation.back('/customer/confirm-order');
  }

  public onTextAreaInput(event: any): void {
    const value = event.target.value.trim();
    this.isSaveButtonEnabled = value.length > 0;
  }

}
