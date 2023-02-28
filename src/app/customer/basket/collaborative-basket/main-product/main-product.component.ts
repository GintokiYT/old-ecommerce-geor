import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss'],
})
export class MainProductComponent extends ViewComponent implements OnInit {

  modalIsVisible: boolean = false;

  @Output() myEvent = new EventEmitter();

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
        // const divEliminarProducto = document.querySelector('#deleteProducto');
        //   divEliminarProducto.innerHTML='';
        //* Cambiar el estado del componente a falso
        const animationdelete: HTMLDivElement = document.querySelector('.animation-delete');

        animationdelete.classList.add('active');

        setTimeout(() => {
          this.myEvent.emit(false);
        }, 450);

    }
    },'Eliminar','Cancelar');


  }

  goProductDetail(){
   this.navigation.root('/customer/variants-product', 'forward');
  }
}
