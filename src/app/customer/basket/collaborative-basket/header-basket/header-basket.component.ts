import { Component, Injector, OnInit } from '@angular/core';
import {  ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite';
import { ModalBasketComponent } from '../modal-basket/modal-basket.component';

@Component({
  selector: 'app-header-cesta',
  templateUrl: './header-basket.component.html',
  styleUrls: ['./header-basket.component.scss'],
})
export class HeaderBasketComponent extends ViewComponent implements OnInit {


  constructor(_injector: Injector) {
    super(_injector);
  }


  ngOnInit() {}

  goTeam() {
    this.navigation.root('/customer/team', 'forward');
  }

  showModal(){
    this.dialog.show({
      showBackdrop:true,
      component: ModalBasketComponent,
      componentProps: {
        title: "Modal"
      }
    }).then((response) => {
      console.log(response);
    });
  }



}
