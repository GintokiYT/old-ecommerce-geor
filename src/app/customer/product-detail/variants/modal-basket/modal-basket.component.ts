import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductDetailService } from '../../../../services/productDetail.service';

@Component({
  selector: 'app-modal-basket',
  templateUrl: './modal-basket.component.html',
  styleUrls: ['./modal-basket.component.scss'],
})
export class ModalBasketComponent implements OnInit {

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

  constructor(private productoDetailService: ProductDetailService) { }

  ngOnInit() {}

}
