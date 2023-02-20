import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

    // Modal Invite
    private statusModalInvite = new BehaviorSubject<boolean>(false);
    setStatusModalInvite(status: boolean) {
      this.statusModalInvite.next(status);
    }
    get getStatusModalInvite():Observable<boolean>{
      return this.statusModalInvite;
    }

   // Modal Invite Team
   private statusModalInviteTeam = new BehaviorSubject<boolean>(false);
   setStatusModalInviteTeam(status: boolean) {
     this.statusModalInviteTeam.next(status);
   }
   get getStatusModalInviteTeam():Observable<boolean>{
     return this.statusModalInviteTeam;
   }


   // Modal Resend
   private statusModalResend = new BehaviorSubject<boolean>(false);
   setStatusModalResend(status: boolean) {
     this.statusModalResend.next(status);
   }
   get getStatusModalResend():Observable<boolean>{
     return this.statusModalResend;
   }

    // Modal Resend Invitation
    private statusModalResendInvitation = new BehaviorSubject<boolean>(false);
    setStatusModalResendInvitation(status: boolean) {
      this.statusModalResendInvitation.next(status);
    }
    get getStatusModalResendInvitation():Observable<boolean>{
      return this.statusModalResendInvitation;
    }

   // Modal Accepted
   private statusModalAccepted= new BehaviorSubject<boolean>(false);
   setStatusModalAccepted(status: boolean) {
     this.statusModalAccepted.next(status);
   }
   get getStatusModalAccepted():Observable<boolean>{
     return this.statusModalAccepted;
   }

   // Modal Basket
   private statusModalBaskets= new BehaviorSubject<boolean>(false);
   setStatusModalBaskets(status: boolean) {
   this.statusModalBaskets.next(status);
   }
   get getStatusModalBaskets():Observable<boolean>{
   return this.statusModalBaskets;
  }

}
