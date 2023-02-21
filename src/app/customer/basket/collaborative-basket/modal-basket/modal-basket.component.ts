import { Component, Input, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';


@Component({
  selector: 'app-modal-basket',
  templateUrl: './modal-basket.component.html',
  styleUrls: ['./modal-basket.component.scss'],
})
export class ModalBasketComponent extends ViewComponent implements OnInit {

  @Input() title: string;
  constructor(_injector:Injector, private inviteService: InviteService) {
    super(_injector);
  }

  ngOnInit() {}

  goBasket(){
    this.inviteService.setStatusModalBasketCollaborative(false);
    console.log(this.inviteService.getStatusModalBasketCollaborative)
    this.navigation.root('/customer/my-basket', 'forward');
      // this.dialog.dismiss();
  }

}
