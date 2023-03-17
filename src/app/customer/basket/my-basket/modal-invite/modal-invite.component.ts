import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from '../../../../services/Invite.service';

@Component({
  selector: 'app-modal-invite',
  templateUrl: './modal-invite.component.html',
  styleUrls: ['./modal-invite.component.scss'],
})
export class ModalInviteComponent extends ViewComponent implements OnInit {

  @ViewChild('ContainerModal') ContainerModal:ElementRef;
  @ViewChild('modal') modal:ElementRef;
  ngAfterViewInit(): void {
    const ContainerModal:HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click',(event: Event)=>{
      const modal:HTMLDivElement =this.modal.nativeElement;
      if(event.target===ContainerModal){
        modal.classList.add('close-modal');
        setTimeout(()=>{
          this.inviteService.setStatusModalInvite(false);
        },250);
      }
    })
  }

  constructor(_injector:Injector,private inviteService:InviteService,private router:Router) {
    super(_injector)
  }

  ngOnInit() {}

  goContact(){
  const currentRouter = this.router.url;
  if(currentRouter === '/customer/collaborative-team/team') {
    this.inviteService.setStatusModalInvite(false);
    return this.navigation.forward('/customer/collaborative-team/contact-team')
  }
  this.inviteService.setStatusModalInvite(false);
  this.navigation.forward('/customer/contact-basket');
  }

}
