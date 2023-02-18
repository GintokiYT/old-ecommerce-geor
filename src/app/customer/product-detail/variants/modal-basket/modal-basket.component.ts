import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { ProductDetailService } from '../../../../services/productDetail.service';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-modal-basket',
  templateUrl: './modal-basket.component.html',
  styleUrls: ['./modal-basket.component.scss'],
})
export class ModalBasketComponent extends ViewComponent implements OnInit {

  @ViewChild('ContainerModal') ContainerModal: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  ngAfterViewInit() {
    const ContainerModal: HTMLDivElement = this.ContainerModal.nativeElement;

    ContainerModal.addEventListener('click', (event: Event) => {
      const modal: HTMLDivElement = this.modal.nativeElement;
      if(event.target === ContainerModal) {
        modal.classList.add('close-modal');
        setTimeout(() => {
          this.productoDetailService.setStatusModalBasket(false);
        }, 250);
      }
    })
  }

  constructor(private productoDetailService: ProductDetailService,_injector:Injector) {
      super(_injector);
  }

  ngOnInit() {}

  goMybasket(){
   this.navigation.forward('customer/my-basket');
  }
}
