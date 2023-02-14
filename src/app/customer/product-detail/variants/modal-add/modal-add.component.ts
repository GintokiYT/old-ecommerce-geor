import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ProductDetailService } from '../../../../services/productDetail.service';


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent extends ViewComponent implements OnInit {

  @ViewChild('ContainerModal') ContainerModal:ElementRef;
  @ViewChild('modal') modal: ElementRef;

  ngAfterViewInit() {
   const ContainerModal: HTMLDivElement = this.ContainerModal.nativeElement;

   ContainerModal.addEventListener('click', (event: Event) => {
    const modal: HTMLDivElement = this.modal.nativeElement;
    if(event.target === ContainerModal) {
      modal.classList.add('close-modal');
      setTimeout(() => {
        this.productDetailService.setStatusModalAdd(false);
      }, 250);
    }
   })
  }

  constructor(_injector: Injector, private productDetailService: ProductDetailService) {
    super(_injector);
  }

  ngOnInit() {}

  goContact(){
    this.navigation.root('customer/collaborative-basket', 'forward');
  }

  goMyBasquet() {
    this.navigation.forward('customer/collaborative-basket');
  }
}
