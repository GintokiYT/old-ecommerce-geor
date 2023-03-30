import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';

import { ViewComponent } from '@geor360/ecore';
import { Contacts } from "@capacitor-community/contacts";
import { Router } from '@angular/router';
import { ContactsService } from '../../../services/contacts.service';
import { InviteService } from '../../../services/Invite.service';





@Component({
  selector: 'app-modal-invite-team',
  templateUrl: './modal-invite-team.component.html',
  styleUrls: ['./modal-invite-team.component.scss'],
})
export class ModalInviteTeamComponent extends ViewComponent implements OnInit {


  //Contact
  permission: string;
  contacts: any[];
  statusModalSpinner: boolean = false;


  @ViewChild('ContainerModal') ContainerModal: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  ngAfterViewInit(): void {
    const ContainerModal: HTMLDivElement = this.ContainerModal.nativeElement;
    ContainerModal.addEventListener('click', (event: Event) => {
      const modal: HTMLDivElement = this.modal.nativeElement;
      if (event.target === ContainerModal) {
        modal.classList.add('close-modal');
        setTimeout(() => {
          this.inviteService.setStatusModalInviteTeam(false);
        }, 250);
      }
    })
  }

  constructor(_injector: Injector, private inviteService: InviteService, private router: Router, private cs: ContactsService) {
    super(_injector)
    this.cs.currentContacts$.subscribe(c => this.contacts = c);
    this.cs.currentPermission$.subscribe(p => this.permission = p);
  }

  ngOnInit() {
    if (this.permission.length === 0) {
      this.CheckPermission();
    }
  }

  //Contact
  async CheckPermission() {
    try {
      const perm = await Contacts.checkPermissions();
      this.permission = perm.contacts;
      this.cs.setPersmission(this.permission);
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
          this.cs.setPersmission(this.permission);
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "denied": // cuando se hace click en el background
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          this.cs.setPersmission(this.permission);
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "granted": // se da en permitir
          // try {
          //   const result = await Contacts.getContacts({
          //     projection: {
          //       name: true,
          //       phones: true
          //     }
          //   })
          //   this.contacts = result.contacts;
          //   this.cs.setContactsData(this.contacts);

          //   //
          //   this.navigation.forward('/customer/collaborative-team/contact-team');
          //   this.inviteService.setStatusModalInviteTeam(false);

          // } catch (e) {
          //   console.log(e)
          // }
          if (this.contacts.length === 0) {
            this.statusModalSpinner = true;
            setTimeout(() => {
              this.inviteService.setStatusModalInviteTeam(false);
              this.navigation.forward('/customer/collaborative-team/contact-team');


              this.statusModalSpinner = false;
            }, 300);
          }else{
            this.inviteService.setStatusModalInviteTeam(false);
            this.navigation.forward('/customer/collaborative-team/contact-team');
          }
          break;

        case "prompt-with-rationale": // cuando se da en denegar

          this.inviteService.setStatusModalInvite(false); break;
      }
    }
    catch (e) {
      console.log(e)
    }
  }

}
