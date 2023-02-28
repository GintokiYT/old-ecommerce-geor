import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss'],
})
export class MainProductComponent extends ViewComponent implements OnInit {

  modalIsVisible: boolean = false;

  constructor(_injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}

  deleteDescription(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
      if (confirmation) {
          const divEliminar = document.querySelector('#deleteDescription');
            divEliminar.remove();
      }
  },'Eliminar','Cancelar');
  }


  deleteProduct(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
      if (confirmation) {
        const divEliminarProducto = document.querySelector('#deleteProducto');
          divEliminarProducto.innerHTML='';
    }
    },'Eliminar','Cancelar');
  }

  goProductDetail(){
   this.navigation.root('/customer/variants-product', 'forward');
  }
}
