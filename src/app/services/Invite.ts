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

   // Modal Invite
   private statusModalResend = new BehaviorSubject<boolean>(false);
   setStatusModalResend(status: boolean) {
     this.statusModalResend.next(status);
   }
   get getStatusModalResend():Observable<boolean>{
     return this.statusModalResend;
   }
   // Modal Accepted
   private statusModalAccepted= new BehaviorSubject<boolean>(false);
   setStatusModalAccepted(status: boolean) {
     this.statusModalAccepted.next(status);
   }
   get getStatusModalAccepted():Observable<boolean>{
     return this.statusModalAccepted;
   }

}
