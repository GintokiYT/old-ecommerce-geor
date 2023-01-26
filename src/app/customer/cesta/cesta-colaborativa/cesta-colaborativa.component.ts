import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-cesta-colaborativa',
  templateUrl: './cesta-colaborativa.component.html',
  styleUrls: ['./cesta-colaborativa.component.scss'],
})
export class CestaColaborativaComponent extends ViewComponent implements OnInit {

  /* chk01: boolean=false;
  chk02:boolean=false;
  chkmain=false; */
  constructor(_injector: Injector) {
    super(_injector);
   }

  ngOnInit() {

  }
  eliminar(){
    console.log("eliminar");
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
    },'Eliminar','Cancelar')
  }

  eliminarProducto(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
    },'Eliminar','Cancelar')
  }

/*   seleccionar(){
    if(this.chkmain){
      this.chkmain = false;
    }else{
      this.chkmain=true;
    }

    this.chk01=this.chkmain;
    this.chk02=this.chkmain;
  }
 */
  confirmarPerdido() {
    return this.navigation.root('/customer/confirmar-pedido', 'forward');
  }
}
