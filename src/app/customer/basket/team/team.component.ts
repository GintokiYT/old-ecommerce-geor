import { Component, OnInit, Injector, Input } from '@angular/core';
import { ModalResendComponent } from './modal-resend/modal-resend.component';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';

interface Equipo{
  id?: string,
  image?: string,
  nombre?: string,
  estado?: {
    estado?: string,
    numero?: string
  }
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent extends ViewComponent implements OnInit {

  modalInvite: boolean;
  modalResend: boolean;
  modalResendInvitation: boolean;
  selectedId: string | undefined; //Seleccion del Id
  selectedTeam: any;
  constructor(_injector: Injector, private inviteService:InviteService) {
    super(_injector);
    //Modal Invite
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);
    //Modal Resend
    this.inviteService.getStatusModalResend.subscribe(status=>this.modalResend =status);
    //Modal Resend Invitation
    this.inviteService.getStatusModalResendInvitation.subscribe(status=>this.modalResendInvitation =status);
  }
  equipos: Equipo[] = [];

  ngOnInit(): void {

    this.equipos= [
      {
        id: '1',
        image:'assets/collaborative-basquet/Avatar.svg',
        nombre: 'Juliano del Carmen Soriano',
        estado: {
          estado:"Pendiente",
          numero:"+51 971 945 234"
        }
      },
      {
        id: '2',
        image:'assets/collaborative-basquet/Avatar3.svg',
        nombre: 'Rolando Paredes Alvarado',
        estado: {
          estado:"",
          numero:"+51 971 945 234"
        }
      },
      {
        id: '3',
        image:'assets/collaborative-basquet/Avatar3.svg',
        nombre: 'Nombre y apellidos',
        estado:{
          estado:"Pendiente",
          numero:"+51 971 945 234"
        }
      },
      {
        id: '4',
        image:'assets/collaborative-basquet/Avatar2.svg',
        nombre: 'Nombre y apellidos',
        estado: {
          estado:"",
          numero:"+51 971 945 234"
        }
      },
      {
        id: '5',
        image:'assets/collaborative-basquet/Avatar.svg',
        nombre: 'Juliano del Carmen Soriano',
        estado: {
          estado:"Pendiente",
          numero:"+51 971 945 234"
        }
      }
    ]

  }

  openInvite(){
    this.inviteService.setStatusModalInvite(true);
  }

  openResend(id: string){
    console.log(id)
    this.inviteService.setStatusModalResend(true);
  }

  openModal(team: any) {
    this.selectedTeam = team;
    this.inviteService.setStatusModalResend(true);
  }

  deleteTeam(index: string) {
    this.equipos = this.equipos.filter( equipo => equipo.id !== index);
    this.inviteService.setStatusModalResend(false);
  }

}



