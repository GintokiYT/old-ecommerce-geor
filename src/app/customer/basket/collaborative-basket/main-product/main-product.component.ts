import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss'],
})
export class MainProductComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}
  alert_message(){
    this.message.confirm('¿Eliminar este producto?','',(confirmation)=>{
       },'Eliminar','Cancelar')
   }

  alert_message2(){
   this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
      },'Eliminar','Cancelar')
  }

}
