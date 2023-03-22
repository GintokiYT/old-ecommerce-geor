import { Component, Injector, OnInit } from '@angular/core';
import {  ViewComponent } from '@geor360/ecore';
import { ModalBasketComponent } from '../modal-basket/modal-basket.component';
import { InviteService } from '../../../../services/Invite.service';

@Component({
  selector: 'app-header-cesta',
  templateUrl: './header-basket.component.html',
  styleUrls: ['./header-basket.component.scss'],
})
export class HeaderBasketComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector, private inviteService: InviteService) {
    super(_injector);
  }

  ngOnInit() {}

  goTeam() {
    localStorage.setItem('back', '/customer/collaborative-basket');
    this.navigation.forward('/customer/team');
  }

  /*  goBasketCollaborative(){
    this.inviteService.setStatusModalBasketCollaborative(true);
    console.log("no salio");
  } */

  openModal() {
    this.inviteService.setStatusModalBasketCollaborative(true);
  }


}
