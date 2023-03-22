import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';
import { Contacts } from "@capacitor-community/contacts";
import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';
import { InviteService } from '../../../../services/Invite.service';
import { ContactsService } from '../../../../services/contacts.service';

@Component({
  selector: 'app-modal-invite',
  templateUrl: './modal-invite.component.html',
  styleUrls: ['./modal-invite.component.scss'],
})
export class ModalInviteComponent extends ViewComponent implements OnInit {

  //Contact
  permission:string;
  contacts:any[];
  //

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

  constructor(_injector:Injector,private inviteService:InviteService,private router:Router,private cs:ContactsService) {
    super(_injector)
  }

  ngOnInit() {
    // Descomentar para contactos
   this.CheckPermission();
  }

  goContact(){
  const currentRouter = this.router.url;
  if(currentRouter === '/customer/collaborative-team/team') {
    this.inviteService.setStatusModalInvite(false);
    return this.navigation.forward('/customer/collaborative-team/contact-team')
  }
  this.inviteService.setStatusModalInvite(false);
  this.navigation.forward('/customer/contact-basket');
  }

  //Contactos
async CheckPermission() {
    try {
      const perm = await Contacts.checkPermissions();
      this.permission = perm.contacts;
    } catch (e) {
      console.log(e)
    }
  }

  async requestPermissionContact() {
    try {
      let perm;
      switch (this.permission) {
        case "prompt": // inicial
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "denied": // cuando se hace click en el background
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "granted": // se da en permitir
          try {
            const result = await Contacts.getContacts({
              projection: {
                name: true,
                phones: true
              }
            })
            this.contacts = result.contacts;
            this.cs.setContactsData(this.contacts);

            //
            const currentRouter = this.router.url;
            if(currentRouter === '/customer/collaborative-team/team') {
              this.inviteService.setStatusModalInvite(false);
              return this.navigation.forward('/customer/collaborative-team/contact-team')
            }
            this.inviteService.setStatusModalInvite(false);
            this.navigation.forward('/customer/contact-basket');

          } catch (e) {
            console.log(e)
          }
          break;

        case "prompt-with-rationale": // cuando se da en denegar

        this.inviteService.setStatusModalInvite(false);break;
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  /* case "prompt-with-rationale":
  perm = await Contacts.requestPermissions();
  this.permission = perm.contacts;
  if (this.permission === "granted") {
    try {
      const result = await Contacts.getContacts({
        projection: {
          name: true,
          phones: true
        }
      });
      this.contacts = result.contacts;
      this.cs.setContactsData(this.contacts);

      const currentRouter = this.router.url;
      if (currentRouter === '/customer/collaborative-team/team') {
        this.inviteService.setStatusModalInvite(false);
        return this.navigation.forward('/customer/collaborative-team/contact-team');
      }
      this.inviteService.setStatusModalInvite(false);
      this.navigation.forward('/customer/contact-basket');
    } catch (e) {
      console.log(e);
    }
  } else {
    this.inviteService.setStatusModalInvite(false);
  }
  break;

 */

}
