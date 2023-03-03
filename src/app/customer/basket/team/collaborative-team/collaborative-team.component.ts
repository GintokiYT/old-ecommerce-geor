import { Component, OnInit, Injector } from '@angular/core';
import { InviteService } from 'src/app/services/Invite.service';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-collaborative-team',
  templateUrl: './collaborative-team.component.html',
  styleUrls: ['./collaborative-team.component.scss'],
})
export class CollaborativeTeamComponent extends ViewComponent implements OnInit {

  modalInviteTeam: boolean;
  constructor(_injector: Injector, private inviteService:InviteService) {
    super(_injector);
    this.inviteService.getStatusModalInviteTeam.subscribe(status=>this.modalInviteTeam =status);
  }

  ngOnInit() {}

  goBack(){
    this.navigation.root('customer/manage-user-information','back')
  }

  openInviteTeam(){
    this.inviteService.setStatusModalInviteTeam(true);
  }

}
