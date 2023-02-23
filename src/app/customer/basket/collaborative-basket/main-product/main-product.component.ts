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


  openModal1(){
    this.modalIsVisible = true;
  }

  closeModal1(){
    this.modalIsVisible = false;
  }

  openModal2(){
    this.modalIsVisible = true;
  }

  closeModal2(){
    this.modalIsVisible = false;
  }

  deleteDescription(){
    this.message.confirm('¿Eliminar este producto?','',(confirmation)=>{
    },'Eliminar','Cancelar');
  }

  deleteProduct(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
    },'Eliminar','Cancelar');
  }

  goProductDetail(){
   this.navigation.root('/customer/variants-product', 'forward');
  }

  delete(){
    document.getElementById('delete').innerHTML = '';
    this.dialog.dismiss();
  }

}
