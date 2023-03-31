import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';
import { RouteService } from '../../../services/route.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-basquet',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.scss'],

})
export class MyBasketComponent extends ViewComponent implements OnInit {

  modalInvite: boolean;
 //Eliminar producto
 /* mainProduct: boolean = true;
 Product: boolean = true; */
 products: any[];

 //Modal Basket
 statusModal: boolean;

  constructor(_injector: Injector, private inviteService:InviteService,
      private rs : RouteService,private productService: ProductService
    ) {
    super(_injector);
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);
    this.inviteService.getStatusModalBasketCollaborative.subscribe( status => this.statusModal = status );
  }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }
  eliminarProducto(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
    },'Cancelar','Eliminar')
  }

  eliminar(){
    this.message.confirm('¿Eliminar este producto?','',(confirmation)=>{
    },'Cancelar','Eliminar')
  }

  openInvite(){
    this.inviteService.setStatusModalInvite(true);

  }

  goToConfirmOrder(){
    this.rs.setMiPedidoLastBackDirection( "/customer/my-basket")
    this.navigation.forward("/customer/confirm-order")
  }

  //Eliminar contenido
 /*  onMyEvent(status: boolean) {
    this.mainProduct = status;
  }
  onProductEvent(status:boolean){
    this.Product = status;
  } */

  //Seleccion todos los checkbox--- agregamos [isChecked]="allChecked" al componente app-main-product
  allChecked = false;

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
  }

  deleteProductMain(id) {
    console.log(id)
  }

  modifyCheckProduct() {
    const inputCheckTotal: HTMLInputElement = document.querySelector('.container-footer input[type=checkbox]')

    this.allChecked = inputCheckTotal.checked

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
