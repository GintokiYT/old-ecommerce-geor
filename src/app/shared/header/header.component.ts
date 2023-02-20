import { Component, Input, OnInit, Injector, ViewChild, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';
import { IonModal } from '@ionic/angular';
import { Keyboard } from '@geor360/capacitor-keyboard';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""

  @Input()
  titleModalDelete: string = "";

  @Input()
  iconLeft: string = "";

  @Input()
  iconRight: string = "";

  @Input()
  backDirection: string = "";

  @Input()
  haveSelected : boolean = true

  @Output()
  onClickDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(IonModal) modal!: IonModal;

  keyboardHeight : number;
  modalIsVisible : boolean = false;


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
    "recover-password": "/recover-password",
    "manage-user-information": "/customer/manage-user-information",
    "main-settings": "/customer/settings/main-settings",
    "about-us": "/customer/settings/about-us"
  }

  constructor(private location: Location, private _injector: Injector,public platform: Platform ) {
    super(_injector);
    this.keyboardHeight = window.innerHeight;
  }

  ngOnInit() {
  }

  goBack() {
    // if(window.innerHeight<this.keyboardHeight){
    //   setTimeout(() => {
    //     this.navigation.back(this.directions[this.backDirection]);
    //     console.log("1")
    //   }, 1000);
    // }
    // else{
    //   this.navigation.back(this.directions[this.backDirection]);
    //   console.log("2")
    // }
    // this.platform.ready().then( () => {
    //   if(this.platform.is("ios")){
    //     setTimeout(() => {
    //       this.navigation.back(this.directions[this.backDirection]);
    //       console.log("1")
    //     }, 1000);
    //   }
    //   else{
    //     this.navigation.back(this.directions[this.backDirection]);
    //   }
    // })
    this.navigation.back(this.directions[this.backDirection]);

  }

  openModal(){
    this.modalIsVisible = true
  }

  closeModal(value : any){
    this.modalIsVisible = false;
    if(value.btnEliminar===true){
      this.onClickDelete.emit(true);
    }
  }

}
