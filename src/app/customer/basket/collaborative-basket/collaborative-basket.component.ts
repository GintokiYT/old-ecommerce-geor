import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';
import { RouteService } from '../../../services/route.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-collaborative-basket',
  templateUrl: './collaborative-basket.component.html',
  styleUrls: ['./collaborative-basket.component.scss'],
})
export class CollaborativeBasketComponent extends ViewComponent implements OnInit {

  statusModal: boolean;
  allChecked = false;

  //PRODUCTOS
  products: any[];

  constructor(_injector: Injector, private inviteService: InviteService,
    private rs: RouteService,private productService: ProductService) {
    super(_injector);
    //SERVIVIO DE MODAL
    this.inviteService.getStatusModalBasketCollaborative.subscribe( status => this.statusModal = status );
  }

  ngOnInit() {
    //SERVICIO DE PRODUCTOS
    this.products = this.productService.getProducts();

    //TENER LOS CHECKBOX EN FALSO
    this.products.forEach(product => {
    product.isChecked = false;
  });

  }

  goToConfirmOrder() {
    this.rs.setMiPedidoLastBackDirection("/customer/collaborative-basket")
    this.navigation.root('/customer/confirm-order', 'forward');
  }

  modifyProducts(producto) {

    this.products = producto

    let contador = 0;

    this.products.forEach( product => {
      if(product.isChecked) {
        contador++;
      }
    })

    if(contador === this.products.length) {
      this.allChecked = true;
    } else {
      this.allChecked = false;
    }

    if(this.products.length === 0) {
      this.allChecked = false;
    }
  }

deleteProductMain(id) {
  console.log(id)
}

modifyCheckProduct() {
  const inputCheckTotal: HTMLInputElement = document.querySelector('.container-footer input[type=checkbox]')
  this.allChecked = inputCheckTotal.checked;
    if(this.allChecked) {
      this.products = this.products.map( product => {
        const newProduct = product;
        newProduct.isChecked = true;
        return newProduct
      });
    } else {
      this.products = this.products.map( product => {
        const newProduct = product;
        newProduct.isChecked = false;
        return newProduct
      })
    }
  }
}
