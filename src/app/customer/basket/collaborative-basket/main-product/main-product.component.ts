import { Component, OnInit, Injector, Output, EventEmitter, Input } from '@angular/core';
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

  products:any[]= [
    {
      price: 'S/ 9,780.00',
      description: 'Plancha de bicarbonato pulverizado lorem ipsum',
      user: 'Gerardo Ortíz',
      measurement: 'Mostaza, 120x150 cm, 25 mm',
      quantity: 10,
      imageUrl: '/assets/collaborative-basquet/Rectangle 1600.png'
    },];

  deleteDescription(){
    this.message.confirm('¿Eliminar este producto?','',(confirmation)=>{
      if (confirmation) {
          const divEliminar = document.querySelector('#deleteDescription');
            divEliminar.remove();
      }
  },'Eliminar','Cancelar');
  }

  deleteProduct(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
      if (confirmation) {
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

  // Agregamos [checked]="isChecked" al input para marcar o desmar el checkbox
  @Input() isChecked = false;
}
