import { Component, Input, OnInit, Injector, ElementRef, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from 'src/app/services/Invite.service';


@Component({
  selector: 'app-modal-Mybasket',
  templateUrl: './modal-Mybasket.component.html',
  styleUrls: ['./modal-Mybasket.component.scss'],
})
export class ModalMyBasketComponent extends ViewComponent implements OnInit {

  @Input() title: string;
  @ViewChild('ContainerModal') ContainerModal:ElementRef;
  @ViewChild('modal') modal:ElementRef;
  ngAfterViewInit(): void {
    const ContainerModal:HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click',(event: Event)=>{
      const modal:HTMLDivElement =this.modal.nativeElement;
      if(event.target===ContainerModal){
        modal.classList.add('close-modal');
        setTimeout(()=>{
          this.inviteService.setStatusModalBasketCollaborative(false);
        },250);
      }
    })
  }

  constructor(_injector:Injector,private inviteService:InviteService) {
    super(_injector)
  }

  ngOnInit() {}

  goBasket(){
    this.inviteService.setStatusModalBasketCollaborative(false);
    console.log(this.inviteService.getStatusModalBasketCollaborative);
    this.navigation.root('/customer/collaborative-basket', 'forward');
  }

}
