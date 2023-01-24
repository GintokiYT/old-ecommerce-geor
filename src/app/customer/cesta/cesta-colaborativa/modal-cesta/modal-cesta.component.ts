import { Component, Input, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';


@Component({
  selector: 'app-modal-cesta',
  templateUrl: './modal-cesta.component.html',
  styleUrls: ['./modal-cesta.component.scss'],
})
export class ModalCestaComponent extends ViewComponent implements OnInit {

  @Input() title: string;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  goCesta(){
      console.log("Mi cesta")
      this.navigation.root('/customer/mi-cesta', 'forward');

      this.dialog.dismiss();
           //this.router.navigate(['/', 'equipos']);

  }

}
