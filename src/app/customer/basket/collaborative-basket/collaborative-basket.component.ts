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

 /*  products:any[] = [
    {
      id: 1,
      image: '/assets/collaborative-basquet/Rectangle 1600.png',
      price: 9780,
      name: 'Plancha de bicarbonato <br/> pulveriza zado lorem ipsum',
      buyer: ['Gerardo Ortíz'],
      descriptions: [
        {
          id: 1,
          description: 'Mostaza, 120x150 cm, 25 mm',
          quantity: 10503
        }
      ],
      isChecked: false
    },
    {
      id: 2,
      image: '/assets/collaborative-basquet/Producto2.png',
      price: 48.90,
      name: 'Acrílico liso bajo',
      buyer: ['Gerardo Ortiz','Wilfredo','Luis'],
      descriptions: [
        {
          id: 1,
          description: 'Verde jade, 120x150 cm, 25 mm',
          quantity: 7300
        },
        {
          id: 2,
          description: 'Naraja limon, 120x150 cm, 25 mm',
          quantity: 2
        },
        {
          id: 3,
          description: 'Gris claro, 120x150 cm, 25 mm',
          quantity: 4
        }
      ],
      isChecked: false
    }
  ] */
  products: any[];
  constructor(_injector: Injector, private inviteService: InviteService,
    private rs: RouteService,private productService: ProductService) {
    super(_injector);
    this.inviteService.getStatusModalBasketCollaborative.subscribe( status => this.statusModal = status );
  }

  ngOnInit() {
    this.products = this.productService.getProducts()
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
