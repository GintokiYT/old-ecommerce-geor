import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ModalInviteComponent } from '../modal-invite/modal-invite.component';

@Component({
  selector: 'app-header-my-basket',
  templateUrl: './header-my-basket.component.html',
  styleUrls: ['./header-my-basket.component.scss'],
})

export class HeaderMyBasketComponent extends ViewComponent implements OnInit {
  @Input()
  title: string = ""

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  goGerardo(){
    if(this.title==="Mi cesta (96)"){
    this.navigation.root('/customer/collaborative-basket','back');
    }/* else{
      if(this.title==="Mi cesta"){
    this.navigation.root('/customer/my-basket','back');
    }
  } */
  }
  showModalInvite(){
    this.dialog.show({
      showBackdrop:true,
      component: ModalInviteComponent,
      componentProps: {
        title: "ModalBasket"
      }
    }).then((response) => {
      console.log(response);
    });
  }

}
