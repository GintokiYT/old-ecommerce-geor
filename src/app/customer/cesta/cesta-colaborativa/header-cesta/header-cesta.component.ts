import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppThemeService, ViewComponent } from '@geor360/ecore';
import { ModalCestaComponent } from '../modal-cesta/modal-cesta.component';

@Component({
  selector: 'app-header-cesta',
  templateUrl: './header-cesta.component.html',
  styleUrls: ['./header-cesta.component.scss'],
})
export class HeaderCestaComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  goEquipo() {
    console.log("equipos");
    this.navigation.root('/customer/equipos', 'forward');
   /*  this.navigation.forward('/customer/equipos', 'back'); */
    //this.router.navigate(['/', 'equipos']);
  }

  showModal(){
    this.dialog.show({
      showBackdrop:true,
      component: ModalCestaComponent,
      componentProps: {
        title: "Modal"
      }
    }).then((response) => {
      console.log(response);
    });
  }

}
