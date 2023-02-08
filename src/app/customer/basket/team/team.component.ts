import { Component, OnInit, Injector } from '@angular/core';
import { ModalResendComponent } from './modal-resend/modal-resend.component';
import { ViewComponent } from '@geor360/ecore';
interface Equipo{
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

  constructor(_injector: Injector) {
    super(_injector);
        /* this.themeService = _injector.get(AppThemeService); */
   }

  ngOnInit() {}

  equipos:Equipo[]=[

    {
      image:'assets/collaborative-basquet/Avatar3.svg',
      nombre: 'Rolando Paredes Alvarado',
      estado:[{
        estado:"",
        numero:"+51 971 945 234"
      }],

    },
    {
      image:'assets/collaborative-basquet/Avatar3.svg',
      nombre: 'Nombre y apellidos',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }],

    },
    {
      image:'assets/collaborative-basquet/Avatar2.svg',
      nombre: 'Nombre y apellidos',
      estado:[{
        estado:"",
        numero:"+51 971 945 234"
      }],

    },
    {
      image:'assets/collaborative-basquet/Avatar.svg',
      nombre: 'Juliano del Carmen Soriano',
      estado:[{
        estado:"Pendiente",
        numero:"+51 971 945 234"
      }],
    }, ]

    showModalInvite(){
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

  }


