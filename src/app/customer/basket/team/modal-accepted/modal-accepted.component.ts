import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite';

@Component({
  selector: 'app-modal-accepted',
  templateUrl: './modal-accepted.component.html',
  styleUrls: ['./modal-accepted.component.scss'],
})
export class ModalAcceptedComponent extends ViewComponent implements OnInit {
/*   @ViewChild('ContainerModal') ContainerModal:ElementRef;
  @ViewChild('modal') modal:ElementRef;
  ngAfterViewInit(): void {
    const ContainerModal:HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click',(event: Event)=>{
      const modal:HTMLDivElement =this.modal.nativeElement;
      if(event.target===ContainerModal){
        modal.classList.add('close-modal');
        setTimeout(()=>{
          this.inviteService.setStatusModalAccepted(false);
        },250);
      }
    })
  }
 */
  constructor(_injector:Injector,private inviteService:InviteService) {
    super(_injector);
  }

  ngOnInit() {}

  deleteContact(){
    this.message.confirm('¿Eliminar de tu equipo?','',(confirmation)=>{
    },'Eliminar','Cancelar');
  }
}
