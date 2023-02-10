import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent extends ViewComponent implements OnInit {

    constructor(_injector: Injector) {
      super(_injector);
     }

    ngOnInit() {}

    goContact(){
      this.navigation.root('customer/collaborative-basket', 'forward');
      console.log("aqui");
    }

}
