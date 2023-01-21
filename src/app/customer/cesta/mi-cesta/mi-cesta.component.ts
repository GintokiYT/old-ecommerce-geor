import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-mi-cesta',
  templateUrl: './mi-cesta.component.html',
  styleUrls: ['./mi-cesta.component.scss'],
})
export class MiCestaComponent extends ViewComponent implements OnInit {

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
