import { Component, OnInit, Injector } from '@angular/core';
import { ModalVariantsComponent } from './modal-variants/modal-variants.component';
import { ViewComponent } from '@geor360/ecore';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ProductDetailService } from '../../../services/productDetail.service';

interface Colours {
  images: string,
  name: string,
  quantify: number
}

interface Measurements {
  sizes: string
}

interface Thickness {
  number: number
}

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.scss'],
})
export class VariantsComponent extends ViewComponent implements OnInit {

  modalVariants: boolean;
  modalAdd: boolean;
  modalBasket: boolean;

  constructor(_injector: Injector, private productDetailService: ProductDetailService) {
    super(_injector);
    this.productDetailService.getStatusModalVariants.subscribe( status => this.modalVariants = status);
    this.productDetailService.getStatusModalAdd.subscribe( status => this.modalAdd = status);
    this.productDetailService.getStatusModalBasket.subscribe( status => this.modalBasket = status);
  }

  ngOnInit() { }

  colour: Colours[] = [
    { images: '/assets/images/azul.png', name: 'Azul', quantify: 5 },
    { images: '/assets/images/morado.png', name: 'Morado', quantify: 0 },
    { images: '/assets/images/verde.png', name: 'Verde jade', quantify: 5 },
    { images: '/assets/images/azul.png', name: 'Azul', quantify: 0 },
    { images: '/assets/images/azul.png', name: 'Azul', quantify: 0 }];

  measurement: Measurements[] = [
    { sizes: '150x120' },
    { sizes: '100x110' },
    { sizes: '150x110' },
    { sizes: '200x240' }];

  thicknes: Thickness[] = [
    { number: 2 },
    { number: 4 },
    { number: 8 },
  ];

  goToConfirmOrder(){
    this.navigation.root("/customer/confirm-order","forward");
  }

  //* Abre el primer modal
  OpenModalVariants() {
    this.productDetailService.setStatusModalVariants(true);
  }

 /*  click(){
    const click=document.querySelector('.extent-cm');
    click.classList.toggle('active');
    console.log();
  } */

}
