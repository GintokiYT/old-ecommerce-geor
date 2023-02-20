import { Component, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';

@Component({
  selector: 'app-modal-resend-invitation',
  templateUrl: './modal-resend-invitation.component.html',
  styleUrls: ['./modal-resend-invitation.component.scss'],
})
export class ModalResendInvitationComponent extends ViewComponent implements OnInit {

  @ViewChild('ContainerModal') ContainerModal:ElementRef;
  @ViewChild('modal') modal:ElementRef;
  ngAfterViewInit(): void {
    const ContainerModal:HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click',(event: Event)=>{
      const modal:HTMLDivElement =this.modal.nativeElement;
      if(event.target===ContainerModal){
        modal.classList.add('close-modal');
        setTimeout(()=>{
          this.inviteService.setStatusModalResendInvitation(false);
        },250);
      }
    })
  }

   constructor(_injector:Injector,private inviteService:InviteService) {
    super(_injector)

  }

  ngOnInit() {}
  goContact(){
    this.navigation.root('/customer/contact-basket','forward');
    this.dialog.dismiss();
  }
}
