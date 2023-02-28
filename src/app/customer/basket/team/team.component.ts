import { Component, OnInit, Injector } from '@angular/core';
import { ModalResendComponent } from './modal-resend/modal-resend.component';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';
interface Equipo{
  id: string,
  image:string,
  nombre:string,
  estado:[{
    estado:string,
    numero:string,
  }],

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
  modalAccepted:boolean;

  constructor(_injector: Injector, private inviteService:InviteService) {
    super(_injector);
    //Modal Invite
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);
    //Modal Resend
    this.inviteService.getStatusModalResend.subscribe(status=>this.modalResend =status);
    //Modal Resend Invitation
    this.inviteService.getStatusModalResendInvitation.subscribe(status=>this.modalResendInvitation =status);
    //Modal Accepted
    this.inviteService.getStatusModalAccepted.subscribe(status=>this.modalAccepted =status);
  }

  ngOnInit() {
    console.log(this.equipos);
    console.log(this.equipos.filter( equipo => equipo.id === 'cod002'))
  }

  equipos:Equipo[]=[
    {
      id: '1',
      image:'assets/collaborative-basquet/Avatar.svg',
      nombre: 'Juliano del Carmen Soriano',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }]
    },

    {
      id: '2',
      image:'assets/collaborative-basquet/Avatar3.svg',
      nombre: 'Rolando Paredes Alvarado',
      estado:[{
        estado:"",
        numero:"+51 971 945 234"
      }],

    },
    {
      id: '3',
      image:'assets/collaborative-basquet/Avatar3.svg',
      nombre: 'Nombre y apellidos',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }],

    },
    {
      id: '4',
      image:'assets/collaborative-basquet/Avatar2.svg',
      nombre: 'Nombre y apellidos',
      estado:[{
        estado:"",
        numero:"+51 971 945 234"
      }],

    },
    {
      id: '5',
      image:'assets/collaborative-basquet/Avatar.svg',
      nombre: 'Juliano del Carmen Soriano',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }],
    } ]

   /*  showModalInvite(){
      this.dialog.show({
        showBackdrop:true,
        component: ModalResendComponent,
        componentProps: {
          title: "ModalResend"
        }
      }).then((response) => {
        console.log(response);
      });
    }
 */
    showModalAccepted(){
      this.dialog.show({
        showBackdrop:true,
        component: ModalResendComponent,
        componentProps: {
          title: "ModalAccepted"
        }
      }).then((response) => {
        console.log(response);
      });
    }

    openInvite(){
      this.inviteService.setStatusModalInvite(true);
    }

    openResend(){
      this.inviteService.setStatusModalResend(true);
    }

    openAccepted(){
      this.inviteService.setStatusModalAccepted(true);
    }


  }



