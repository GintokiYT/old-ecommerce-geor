import { Component, OnInit, Injector, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
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

  openModalAdd() {
    this.productDetailService.setStatusModalVariants(false);
    this.productDetailService.setStatusModalAdd(true);
  }

  openModalBasket() {
    this.productDetailService.setStatusModalVariants(false);
    this.productDetailService.setStatusModalBasket(true);
  }
}
