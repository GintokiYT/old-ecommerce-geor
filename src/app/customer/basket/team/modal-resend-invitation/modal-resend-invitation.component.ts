import { Component, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite';

@Component({
  selector: 'app-modal-resend-invitation',
  templateUrl: './modal-resend-invitation.component.html',
  styleUrls: ['./modal-resend-invitation.component.scss'],
})
export class ModalResendInvitationComponent extends ViewComponent implements OnInit {

   constructor(_injector:Injector,private inviteService:InviteService) {
    super(_injector)

  }

  ngOnInit() {}
  goContact(){
    this.navigation.root('/customer/contact-basket','forward');
    this.dialog.dismiss();
  }
}
