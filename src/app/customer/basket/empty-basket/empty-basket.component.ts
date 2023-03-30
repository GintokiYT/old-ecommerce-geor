import { Component, OnInit, Injector } from '@angular/core';
import {  ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';

@Component({
  selector: 'app-empty-basket',
  templateUrl: './empty-basket.component.html',
  styleUrls: ['./empty-basket.component.scss'],
})

export class EmptyBasketComponent extends ViewComponent implements OnInit {

    /* Variable de modal-invite */
  modalInvite: boolean;

  constructor(_injector: Injector, private inviteService:InviteService,) {
    super(_injector);

    //Modal Invite
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);
  }

  ngOnInit() {}

  goToProduct(){
    this.navigation.root("/customer/product","forward");
  }

  openInvite(){
    this.inviteService.setStatusModalInvite(true);
  }

}
