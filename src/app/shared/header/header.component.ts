import { Component, Input, OnInit, Injector, ViewChild, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';
import { IonModal } from '@ionic/angular';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""
  
  @Input()
  iconLeft: string = "";

  @Input()
  iconRight: string = "";

  @Input()
  backDirection: string = "";

  @ViewChild(IonModal) modal!: IonModal;

  @Output()
  onClickDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
   

  icons = {
    "icon-close": "/assets/icons/icon-close.svg",
    "icon-arrow-left": "/assets/icons/icon-arrow-left.svg",
    "icon-search": "/assets/icons/icon-search.svg",
    "icon-delete": "/assets/icons/icon-delete.svg"
  }

  directions = {
    "confirm-order": "/customer/confirm-order",
    "stores": "/customer/stores",
    "collaborative-basket": "/customer/collaborative-basket",
    "way-pay":"/customer/way-pay",
    "payment-methods":"/customer/payment-methods",
    "login": "/login",
    "register": "/register",
    "recover-password": "/recover-password"
  }

  constructor(private location: Location, private _injector: Injector) {
    super(_injector);
    
  }

  ngOnInit() {
  }

  goBack() {
    this.navigation.back(this.directions[this.backDirection]);
  }

  cancelar(){
    this.modal.dismiss();
  }

  eliminar(){
    console.log("Hola")
    this.modal.dismiss();
    this.onClickDelete.emit(true);
  }

  openModal(){
    this.modal.present();
  }

}
