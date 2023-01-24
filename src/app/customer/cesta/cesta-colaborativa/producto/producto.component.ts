import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
interface Descripcions{
  detalle:string,
  icono:string,
  unidad:string
}
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent extends ViewComponent implements OnInit {

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


  constructor(_injector: Injector) {
    super(_injector);
        /* this.themeService = _injector.get(AppThemeService); */
   }



  ngOnInit() {}
  eliminarProducto(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
    },'Cancelar','Eliminar')
  }
}
