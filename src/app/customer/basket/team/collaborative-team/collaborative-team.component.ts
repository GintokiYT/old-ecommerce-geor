import { Component, OnInit, Injector } from '@angular/core';
import { InviteService } from 'src/app/services/Invite';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-collaborative-team',
  templateUrl: './collaborative-team.component.html',
  styleUrls: ['./collaborative-team.component.scss'],
})
export class CollaborativeTeamComponent extends ViewComponent implements OnInit {

  modalInvite: boolean;
  constructor( private inviteService:InviteService, _injector:Injector) {
    super(_injector);
    this.inviteService.getStatusModalInvite.subscribe(status=>this.modalInvite =status);
  }
  ngOnInit() {}

  openInvite(){
    this.inviteService.setStatusModalInvite(true);
  }

}
