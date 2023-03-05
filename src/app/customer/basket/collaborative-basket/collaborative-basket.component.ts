import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';

@Component({
  selector: 'app-collaborative-basket',
  templateUrl: './collaborative-basket.component.html',
  styleUrls: ['./collaborative-basket.component.scss'],
})
export class CollaborativeBasketComponent extends ViewComponent implements OnInit {

  statusModal: boolean;
  mainProduct: boolean = true;
  Product: boolean = true;
  constructor(_injector: Injector, private inviteService: InviteService) {
    super(_injector);
    this.inviteService.getStatusModalBasketCollaborative.subscribe( status => this.statusModal = status );
  }

  ngOnInit() {}

  goToConfirmOrder() {
    this.navigation.root('/customer/confirm-order', 'forward');
  }

  onMyEvent(status: boolean) {
    this.mainProduct = status;
  }
  onProductEvent(status:boolean){
    this.Product = status;
  }

}
