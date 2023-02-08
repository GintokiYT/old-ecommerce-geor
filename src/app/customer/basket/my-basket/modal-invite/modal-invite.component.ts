import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-modal-invite',
  templateUrl: './modal-invite.component.html',
  styleUrls: ['./modal-invite.component.scss'],
})
export class ModalInviteComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
    super(_injector)
  }

  ngOnInit() {}
  goContact(){
    this.navigation.root('/customer/contact-basket','forward');
    this.dialog.dismiss();
  }
}
