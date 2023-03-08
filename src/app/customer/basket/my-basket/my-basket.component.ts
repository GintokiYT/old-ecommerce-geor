import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';
import { RouteService } from '../../../services/route.service';

@Component({
  selector: 'app-my-basquet',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.scss'],

})
export class MyBasketComponent extends ViewComponent implements OnInit {

  modalInvite: boolean;
  constructor(_injector: Injector, private inviteService:InviteService,
      private rs : RouteService
    ) {
    super(_injector);
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);
  }

  ngOnInit() {}
  eliminarProducto(){
    this.message.confirm('¿Eliminar los productos seleccionados?','',(confirmation)=>{
    },'Cancelar','Eliminar')
  }

  eliminar(){
    this.message.confirm('¿Eliminar este producto?','',(confirmation)=>{
    },'Cancelar','Eliminar')
  }

  openInvite(){
    this.inviteService.setStatusModalInvite(true);

  }

  goToConfirmOrder(){
    this.rs.setMiPedidoLastBackDirection( "/customer/my-basket")
    this.navigation.forward("/customer/confirm-order")
  }
}
