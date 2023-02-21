import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent extends ViewComponent implements OnInit {

  oneTrue:boolean=true;
  
  data: any[] = [
    {
      id: 1,
      selected: false,
      store: "Induacril Miraflores",
      direction: "Jr. Samaritanos 879 Miraflores, Lima, Lima, Perú"
    },
    {
      id:2,
      selected: false,
      store: "Induacril Chorrillos",
      direction: "Jr. Samaritanos 879 Miraflores, Lima, Lima, Perú"
    },
    {
      id:3,
      selected: false,
      store: "Induacril Miraflores",
      direction: "Jr. Samaritanos 879 Miraflores, Lima, Lima, Perú"
    }
  ]


  constructor(_injector: Injector,
              private cpService: ConfirmOrderService) { 
    super(_injector)
  }

  ngOnInit() {}

  goTo(path:string){
    this.navigation.forward(path)
  }
  
  establecerDireccion() {
    const selected = this.data.filter(element => element.selected === true);
    if (selected[0]) {
      const ubication = { direction: selected[0].direction, store: selected[0].store}
      this.cpService.setDirectionStore(ubication)
    }
    this.navigation.back("/customer/confirm-order");
  }

  checkBoxSelect(id: number) {
    const falses = this.data.filter( element => element.id!==id);
    const trues = this.data.filter(element => element.selected===true);
    falses.forEach( element => {
      element.selected = false;
    })
    if(trues.length>0){
      this.oneTrue = false;
    }else{
      this.oneTrue = true;
    }

    }
}

  


