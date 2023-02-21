import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';

@Component({
  selector: 'app-modal-resend',
  templateUrl: './modal-resend.component.html',
  styleUrls: ['./modal-resend.component.scss'],
})
export class ModalResendComponent extends ViewComponent implements OnInit {

  @ViewChild('ContainerModal') ContainerModal:ElementRef;
  @ViewChild('modal') modal:ElementRef;
  ngAfterViewInit(): void {
    const ContainerModal:HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click',(event: Event)=>{
      const modal:HTMLDivElement =this.modal.nativeElement;
      if(event.target===ContainerModal){
        modal.classList.add('close-modal');
        setTimeout(()=>{
          this.inviteService.setStatusModalResend(false);
        },250);
      }
    })
  }
    /* Modal Resend Invitation */


  constructor(_injector:Injector,private inviteService:InviteService) {
    super(_injector);

  }

  ngOnInit() {}

  Close(){
    this.dialog.dismiss();

  }

  deleteContact(){
    this.message.confirm('¿Eliminar de tu equipo?','',(confirmation)=>{
    },'Eliminar','Cancelar');
    /* this.inviteService.setStatusModalResend(false); */
  }
  openResendInvitation(){
    this.inviteService.setStatusModalResendInvitation(true);
    this.inviteService.setStatusModalResend(false);
  }

}
