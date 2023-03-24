import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';
import { RouteService } from 'src/app/services/route.service';
import { OrdersService } from '../../../services/orders.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent extends ViewComponent implements OnInit {

  directionArrow = "down";
  idOrder: string = "";
  orderData: any[];
  order: any;

  modalIsVisible: boolean = false;

  contentLoaded : boolean = false;

  constructor(private _injector: Injector,
    private activatedRoute: ActivatedRoute,
    private ods: OrdersService,
    private rs: RouteService,
    private router: Router
  ) {
    super(_injector)
  }

  ngOnInit() {

    //obtener el id de los parametros
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.idOrder = id;
      })

    this.ods.currentOrdersData$.subscribe(d => this.orderData = d);
    this.order = this.orderData.filter(o => o.id === this.idOrder)[0];
    console.log(this.order.state);

    setTimeout(() => {
      this.contentLoaded = true;
    }, 1500);

  }

  onShowTextHelper() {

    if (this.directionArrow === "up") {
      this.directionArrow = "down"
    } else {
      this.directionArrow = "up";
    }

  }

  goToDirections() {
    this.rs.setSetDetailBackDirection(this.router.url);
    this.navigation.root("/customer/direction", "forward");
  }

  goToInbox() {
    this.navigation.root("customer/internal-inbox/1", "forward");
  }

  goToInstruccions() {
    this.navigation.root("/customer/manage-order/instructions", "forward");
  }

  goToPaymentMethods() {
    this.rs.setSetPaymentMethodsLastBackDirection(this.router.url);
    this.navigation.root("/customer/payment-methods", "forward");
  }

  goToVariants() {
    this.navigation.root("/customer/product", "forward")
  }

  async getOrTakePicture() {
    this.modalIsVisible = true;
    // const image = await Camera.getPhoto({
    //   // quality: 90,
    //   // allowEditing: true,
    //   // resultType: CameraResultType.Uri
    //   quality: 90,
    //   source: CameraSource.Prompt,
    //   resultType: CameraResultType.Uri
    // });
  }

  async closeModal(value: string) {
    this.modalIsVisible = false;
    if (value === "prompt-camera") {
      console.log("Hola")
      const image = await Camera.getPhoto({
        // quality: 90,
        // allowEditing: true,
        // resultType: CameraResultType.Uri
        quality: 90,
        source: CameraSource.Prompt,
        resultType: CameraResultType.Uri
      });
    }
  }

}



