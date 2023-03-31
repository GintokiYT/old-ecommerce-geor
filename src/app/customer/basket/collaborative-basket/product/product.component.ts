import { Component, OnInit, Injector, Output, EventEmitter, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
interface Descripcions{
  detail:string,
  unit:string,

}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

  export class ProductComponent extends ViewComponent implements OnInit {
//eliminacion
@Output() myEvent = new EventEmitter();
 //Agregamos [checked]="isChecked" al input para marcar o desmar el checkbox
 @Input() isChecked = false;

    constructor(_injector: Injector) {
      super(_injector);
          /* this.themeService = _injector.get(AppThemeService); */
     }

    descripcion:Descripcions[]=[
     {
       detail:'Verde jade, 120x150 cm, 25 mm',
       unit:'7,300'
     },

     {
       detail:'Naraja limon, 120x150 cm, 25 mm',
       unit:'2'
     },

     {
       detail:'Gris claro, 120x150 cm, 25 mm',
       unit:'4'
     },

    ]



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

}
