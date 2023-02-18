import { Component, OnInit } from '@angular/core';
import { InviteService } from 'src/app/services/Invite';

@Component({
  selector: 'app-collaborative-team',
  templateUrl: './collaborative-team.component.html',
  styleUrls: ['./collaborative-team.component.scss'],
})
export class CollaborativeTeamComponent implements OnInit {

  modalInvite: boolean;
  constructor( private inviteService:InviteService) {
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);
  }
  ngOnInit() {}

  openInvite(){
    this.inviteService.setStatusModalInvite(true);
  }

}
