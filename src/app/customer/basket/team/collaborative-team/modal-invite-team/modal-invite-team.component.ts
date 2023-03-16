import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { InviteService } from 'src/app/services/Invite.service';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-modal-invite-team',
  templateUrl: './modal-invite-team.component.html',
  styleUrls: ['./modal-invite-team.component.scss'],
})
export class ModalInviteTeamComponent extends ViewComponent implements OnInit {

  @ViewChild('ContainerModal') ContainerModal:ElementRef;
  @ViewChild('modal') modal:ElementRef;
  ngAfterViewInit(): void {
    const ContainerModal:HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click',(event: Event)=>{
      const modal:HTMLDivElement =this.modal.nativeElement;
      if(event.target===ContainerModal){
        modal.classList.add('close-modal');
        setTimeout(()=>{
          this.inviteService.setStatusModalInviteTeam(false);
        },250);
      }
    })
  }

  constructor(_injector:Injector,private inviteService:InviteService) {
    super(_injector)
  }

  ngOnInit() {}

  goContactTeam(){
    // localStorage.setItem('back', '/customer/team');
    // this.navigation.forward('/customer/contact-team');

    this.navigation.forward('/customer/collaborative-team/contact-team');
    this.inviteService.setStatusModalInviteTeam(false);
  }
}
