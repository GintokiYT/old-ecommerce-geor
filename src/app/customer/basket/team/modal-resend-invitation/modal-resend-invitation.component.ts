import { Component, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
    /* const ContainerModal:HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click',(event: Event)=>{
      const modal:HTMLDivElement =this.modal.nativeElement;
      if(event.target===ContainerModal){
        modal.classList.add('close-modal');
        /* setTimeout(()=>{
          this.inviteService.setStatusModalResendInvitation(false);
        },250);
      }
    }) */
  }

   constructor(_injector:Injector,private inviteService:InviteService,private router:Router) {
    super(_injector)
  }

  ngOnInit() {}

  goContact(){
  const currentRouter = this.router.url;
  if(currentRouter === '/customer/collaborative-team/team') {
    this.inviteService.setStatusModalResendInvitation(false);
    return this.navigation.forward('/customer/collaborative-team/contact-team');
  }
  this.navigation.root('/customer/contact-basket','forward');
  this.inviteService.setStatusModalResendInvitation(false);
  }

}
