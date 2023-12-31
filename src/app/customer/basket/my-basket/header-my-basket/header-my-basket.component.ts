import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';
import { ModalInviteComponent } from '../modal-invite/modal-invite.component';

@Component({
  selector: 'app-header-my-basket',
  templateUrl: './header-my-basket.component.html',
  styleUrls: ['./header-my-basket.component.scss'],
})

export class HeaderMyBasketComponent extends ViewComponent implements OnInit {
  @Input()
  title: string = ""

  constructor(_injector: Injector, private inviteService:InviteService) {
    super(_injector);
  }

  ngOnInit() {}

  goGerardo(){
    if(this.title==="Mi cesta (96)"){
    this.navigation.root('/customer/collaborative-basket','back');
    }
  }

  openInvite(){
    this.inviteService.setStatusModalInvite(true);
  }

  openModalMyBasket(){
    this.inviteService.setStatusModalBasketCollaborative(true);
  }

}
