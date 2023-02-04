import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
@Component({
  selector: 'app-way-pay',
  templateUrl: './way-pay.component.html',
  styleUrls: ['./way-pay.component.scss'],
})
export class WayPayComponent extends ViewComponent implements OnInit {

  data: any[] = [
    {
      id: 1,
      selected: false,
    },
    {
      id:2,
      selected: false,
    },
  ]
  
  constructor(private _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {}
  goTo(path:string){
    this.navigation.forward(path)
  }

  checkBoxSelect(id: number) {
    const falses = this.data.filter( element => element.id!==id);
    falses.forEach( element => {
      element.selected = false;
    })
  }

  alert_message(){
    this.message.confirm('¿Seguro que quieres eliminar la tarjeta?','',(confirmation)=>{
       },'Eliminar','Cancelar')
  }
}

