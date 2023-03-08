import { Component, OnInit, Injector, Output, EventEmitter, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
interface Descripcions{
  detalle:string,
  icono:string,
  unidad:string,

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

//eliminacion
    @Output() myEvent = new EventEmitter();

  ngOnInit() {}

  deleteDescription(event: any): void {
    this.message.confirm('¿Eliminar este producto?','',(confirmation) => {
      if (confirmation) {
        const productDiv = event.target.closest('.product-info');
         const productId = productDiv.id;
        if (productDiv) {
          productDiv.remove();
        }
      }
    },'Eliminar','Cancelar');
  }

  deleteProduct(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
      if (confirmation) {
       const animationdelete: HTMLDivElement = document.querySelector('.animation-deletes');
        animationdelete.classList.add('actives');
        setTimeout(() => {
          this.myEvent.emit(false);
        }, 450);
    }
    },'Eliminar','Cancelar');
  }
  goProductDetail(){
   this.navigation.root('/customer/variants-product', 'forward');
  }
  //Agregamos [checked]="isChecked" al input para marcar o desmar el checkbox
  @Input() isChecked = false;
}
