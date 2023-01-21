import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-mi-cesta',
  templateUrl: './header-mi-cesta.component.html',
  styleUrls: ['./header-mi-cesta.component.scss'],
})
export class HeaderMiCestaComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
  }


  ngOnInit() {}

 /*  showModal(){
    this.dialog.show({
      showBackdrop:true,
      component: MiModalCestaComponent,
      componentProps: {
        title: "Algo"
      }
    }).then((response) => {
      console.log(response);
    });
  } */
  goEquipo() {
    console.log("equipos");
    this.navigation.root('/customer/equipos', 'forward');
    //this.router.navigate(['/', 'equipos']);
  }

}
