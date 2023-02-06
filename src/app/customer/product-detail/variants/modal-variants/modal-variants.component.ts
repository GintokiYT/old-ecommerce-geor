import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { ModalBasketComponent } from '../modal-basket/modal-basket.component';

@Component({
  selector: 'app-modal-variants',
  templateUrl: './modal-variants.component.html',
  styleUrls: ['./modal-variants.component.scss'],
})
export class ModalVariantsComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
      super(_injector)
  }

  ngOnInit() {}
  Close(){
    this.dialog.dismiss();
}

  showModalBasket(){
  this.dialog.show({
    showBackdrop:true,
    component: ModalBasketComponent,
    componentProps: {
      title: "ModalBasket"
    }
  }).then((response) => {
    console.log(response);
  });
}
showModalAdd(){
  this.dialog.show({
    showBackdrop:true,
    component: ModalAddComponent,
    componentProps: {
      title: "ModalAdd"
    }
  }).then((response) => {
    console.log(response);
  });
}

}
