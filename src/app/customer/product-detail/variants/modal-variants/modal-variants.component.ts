import { Component, OnInit, Injector, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { ModalBasketComponent } from '../modal-basket/modal-basket.component';
import { ProductDetailService } from '../../../../services/productDetail.service';

@Component({
  selector: 'app-modal-variants',
  templateUrl: './modal-variants.component.html',
  styleUrls: ['./modal-variants.component.scss'],
})
export class ModalVariantsComponent extends ViewComponent implements OnInit {

  @ViewChild('ContainerModal') ContainerModal: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  ngAfterViewInit() {
    const containermodal: HTMLDivElement = this.ContainerModal.nativeElement;
    containermodal.addEventListener('click', (event: Event) => {
      if(event.target === containermodal) {
        const modal: HTMLDivElement = this.modal.nativeElement;
        modal.classList.add('close-modal');
        setTimeout(() => {
          this.productDetailService.setStatusModalVariants(false);
        }, 250);
      }
    })
  }

  constructor(_injector:Injector, private productDetailService: ProductDetailService) {
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

  openModalAdd() {
    this.productDetailService.setStatusModalVariants(false);
    this.productDetailService.setStatusModalAdd(true);
  }

  openModalBasket() {
    this.productDetailService.setStatusModalVariants(false);
    this.productDetailService.setStatusModalBasket(true);
  }
}
