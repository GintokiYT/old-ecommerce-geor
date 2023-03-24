import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { NgForm } from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-last-step',
  templateUrl: './last-step.component.html',
  styleUrls: ['./last-step.component.scss'],
})
export class LastStepComponent extends ViewComponent implements OnInit {

  @ViewChild('securityCode') securityCode: IonInput;

  isAlertOpen = false;
  isCouponOpen= false;
  isMistakeOpen= false;

  statusModalSpinner: boolean = false;

  data={
    code:'',
  }
  data1={
    code:'',
  }
  constructor(private _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isMistakeOpen = isOpen;
  }
  
  goTo(path:string){
    this.navigation.forward(path)
  }

  // goTo(path:string) {

  //   if(this.securityCode.value !== '789') {

  //     return this.isMistakeOpen = true;

  //   } else {
  //     this.statusModalSpinner = true;

  //     setTimeout(() => {
  //       this.statusModalSpinner = false;
  //       this.navigation.forward('/customer/last-step/internal-inbox/1');
  //     }, 1500);

  //     return null;
  //   }
  // }

  tryAgain() {
    this.isMistakeOpen = false;
    this.securityCode.value = '';
  }

  onSubmit(formulario:NgForm){ }
}