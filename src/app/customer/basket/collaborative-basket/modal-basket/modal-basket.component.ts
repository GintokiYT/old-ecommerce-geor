import { Component, Input, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';


@Component({
  selector: 'app-modal-basket',
  templateUrl: './modal-basket.component.html',
  styleUrls: ['./modal-basket.component.scss'],
})
export class ModalBasketComponent extends ViewComponent implements OnInit {

  @Input() title: string;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  goCesta(){
      this.navigation.root('/customer/my-basquet', 'forward');
      this.dialog.dismiss();
  }

}
