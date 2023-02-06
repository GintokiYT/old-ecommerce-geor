import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent extends ViewComponent implements OnInit {


  @Input()
  title: string = ""

  data: any[] = [
    {
      selected: false,
      direction: "Jr. Samaritanos 879 Miraflores, Lima, Perú"
    },
    {
      selected: false,
      direction: "Jr. Enrique Segobiano 879 Miraflores, Lima, Perú"
    }
  ]

  
  constructor(private location: Location,
    private cpService: ConfirmOrderService,
    _injector: Injector) {
      super(_injector)
  }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }

  alert_message(){
    this.message.confirm('¿Seguro que quieres eliminar esta dirección?','',(confirmation)=>{
       },'Eliminar','Cancelar')
  }
    
  checkBoxSelect(direction: string) {
    const indexOtherCheck = this.data.findIndex(element => element.direction !== direction);
    this.data[indexOtherCheck].selected = false;
  }

  establecerDireccion() {
    const selected = this.data.filter(element => element.selected === true);
    if (selected[0]) {
      this.cpService.setDirectionDomicilio(selected[0].direction)
    }
    this.navigation.back("/customer/confirm-order");
  }
  handlerMessage = '';
  roleMessage = '';

  
}

