import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-manage-user-information',
  templateUrl: './manage-user-information.component.html',
  styleUrls: ['./manage-user-information.component.scss'],
})
export class ManageUserInformationComponent extends ViewComponent implements OnInit {

  modalIsVisible : boolean = false;

  options : any[] = [
    {
      option: "Pedidos",
      src: "/assets/icons/icon-order.svg",
      goTo: "/customer/manage-order"
    },
    {
      option: "Cupones",
      src: "/assets/icons/icon-ticket.svg",
      goTo: "/customer/manage-coupons"
    },
    {
      option: "Favoritos",
      src: "/assets/icons/icon-heart.svg",
      goTo: "/customer/manage-favorites"
    },
    {
      option: "Equipo",
      src: "/assets/icons/icon-3user.svg",
      goTo: "/customer/manage-team"
    },
    {
      option: "Direcciones",
      src: "/assets/icons/icon-location.svg",
      goTo: "/customer/manage-addresses"
    },
    {
      option: "Métodos de pago",
      src: "/assets/icons/icon-pay.svg",
      goTo: "/customer/manage-payment-method"
    },
    {
      option: "Datos de facturación",
      src: "/assets/icons/icon-paper.svg",
      goTo: "/customer/manage-billing-data"
    },
    {
      option: "Ayuda",
      src: "/assets/icons/icon-helpDark.svg",
      goTo: "/customer/user-help"
    },
  ]


  constructor(private _injector: Injector) {
      super(_injector);
  }

  ngOnInit() {}


  onGoToConfiguration(){
    this.navigation.forward('customer/settings/main-settings');
  }

  goPaymentMehod(){
    this.navigation.root('/customer/payment-method-configuration','forward');
  }
  async getOrTakePicture(){
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

  async closeModal(value:string){
    this.modalIsVisible = false;
    if(value==="prompt-camera"){
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

  goTo(direction : string){
    this.navigation.root(direction,"forward");
  }
}
