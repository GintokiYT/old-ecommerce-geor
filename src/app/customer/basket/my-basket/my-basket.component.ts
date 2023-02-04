import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-my-basquet',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.scss'],

})
export class MyBasketComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
        /* this.themeService = _injector.get(AppThemeService); */
   }

  ngOnInit() {}
  eliminarProducto(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
    },'Cancelar','Eliminar')
  }

  eliminar(){
    this.message.confirm('¿Eliminar este producto?','',(confirmation)=>{
    },'Cancelar','Eliminar')
  }

}
