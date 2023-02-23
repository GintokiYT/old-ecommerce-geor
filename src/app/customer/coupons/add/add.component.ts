import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent extends ViewComponent implements OnInit {

  haveValueInput : boolean = false;

  constructor(private _injector: Injector) {
    super(_injector);
  }

  goToStart() {
    this.navigation.back("/customer/start")
  }

  goToProductsBar(){
    this.navigation.forward("/customer/voucher")
  }

  ngOnInit() { }

  inputChange(ev){
    this.haveValueInput = ev.target.value.length > 0 ? true : false;
  }

}
