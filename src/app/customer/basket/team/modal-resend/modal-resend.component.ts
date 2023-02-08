import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-modal-resend',
  templateUrl: './modal-resend.component.html',
  styleUrls: ['./modal-resend.component.scss'],
})
export class ModalResendComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
    super(_injector);
  }

  ngOnInit() {}
  Close(){
    this.dialog.dismiss();
  }
}
