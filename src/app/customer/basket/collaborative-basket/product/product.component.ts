import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
interface Descripcions{
  detalle:string,
  icono:string,
  unidad:string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

  export class ProductComponent extends ViewComponent implements OnInit {

    constructor(_injector: Injector) {
      super(_injector);
          /* this.themeService = _injector.get(AppThemeService); */
     }

    descripcion:Descripcions[]=[
     {
       detalle:'Verde jade, 120x150 cm, 25 mm',
       icono:'assets/collaborative-basquet/Delete 02.svg',
       unidad:'7,300'
     },

     {
       detalle:'Naraja limon, 120x150 cm, 25 mm',
       icono:'assets/collaborative-basquet/Delete 02.svg',
       unidad:'2'
     },

     {
       detalle:'Gris claro, 120x150 cm, 25 mm',
       icono:'assets/collaborative-basquet/Delete 02.svg',
       unidad:'4'
     },

    ]
  ngOnInit() {}

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
}
