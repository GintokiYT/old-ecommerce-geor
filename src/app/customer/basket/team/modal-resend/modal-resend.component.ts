import { Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';

interface Equipo {
  id?: string,
  image?:string,
  nombre?:string,
  estado?: {
    estado?:string,
    numero?:string,
  }
}

@Component({
  selector: 'app-modal-resend',
  templateUrl: './modal-resend.component.html',
  styleUrls: ['./modal-resend.component.scss'],
})
export class ModalResendComponent extends ViewComponent implements OnInit {

  @Input() selectedTeam: Equipo;

  @Output() deleteTeam = new EventEmitter<string>();

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

  constructor(_injector:Injector,private inviteService:InviteService) {
    super(_injector);
  }

  ngOnInit() {
    console.log(this.selectedTeam)
  }

  Close(){
    this.dialog.dismiss();
  }

  deleteContact(id: string){
    this.message.confirm('¿Eliminar de tu equipo?','',(confirmation) => {
      if (confirmation) {
        this.deleteTeam.emit(id);
      }
    },'Eliminar','Cancelar');
  }

  openResendInvitation(){
    this.inviteService.setStatusModalResendInvitation(true);
    this.inviteService.setStatusModalResend(false);
  }

}
