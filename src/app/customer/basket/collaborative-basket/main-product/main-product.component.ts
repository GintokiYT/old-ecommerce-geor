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

  @Input() products: Array<any>;
  @Input() allChecked: any;

  @Output() modifyProducts = new EventEmitter<any>();

  constructor(_injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}

  updateChangeCheckBox(idProduct) {
    const productElement: HTMLDivElement = document.querySelector(`.product${idProduct}`)
    const inputCheck: HTMLInputElement = productElement.querySelector('input[type=checkbox]')
    const newProducts = this.products.map( product => {
      const newProduct = product;
      if(product.id === idProduct){
        newProduct.isChecked = inputCheck.checked;
        return newProduct
      }
      return newProduct
    });
    this.modifyProducts.emit(newProducts);
  }

  convertCurrency(price: number) {
    return price.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
  }

  returnNombres(nombres: any) {
    let salida = '';

    nombres.forEach((nombre, index) => {
      if(index + 1 >= nombres.length) {
        salida += `${nombre}.`;
      } else {
        salida += `${nombre}, `
      }
    })

    return salida;
  }

  convertQuantity(quantity: number) {
    return quantity.toLocaleString('es-PE', {useGrouping: true, maximumFractionDigits: 0});
  }

  deleteDescription(idProduct, idDescription){
    this.message.confirm('¿Eliminar este producto?','',(confirmation)=>{
      if (confirmation) {
        const newProducts = this.products.map( product => {
          if(product.id === idProduct) {
            const newDescription = product.descriptions.filter( description => description.id !== idDescription);
            product.descriptions = newDescription;
            return product;
          } else {
            return product;
          }
        })
        this.modifyProducts.emit(newProducts)
      }
  },'Eliminar','Cancelar');
  }

  deleteProduct(idProduct) {
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
      if (confirmation) {
        const product: HTMLDivElement = document.querySelector(`.product${idProduct}`)
        const animationdelete: HTMLDivElement = product.querySelector('.animation-delete');
        animationdelete.classList.add('active');
        setTimeout(() => {
          const newProducts = this.products.filter( product => product.id !== idProduct)
          this.modifyProducts.emit(newProducts)
        }, 450)
    }
    },'Eliminar','Cancelar');

  }

  goProductDetail(){
    this.navigation.root('/customer/variants-product', 'forward');
  }
}
