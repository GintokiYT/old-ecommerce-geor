import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-last-step',
  templateUrl: './last-step.component.html',
  styleUrls: ['./last-step.component.scss'],
})
export class LastStepComponent extends ViewComponent implements OnInit {

  isAlertOpen = false;
  isCouponOpen= false;
  isMistakeOpen= false;

  data={
    code:'',
  }

  constructor(private _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  setOpen2(isOpen: boolean) {
    this.isCouponOpen = isOpen;
  }
  setOpen3(isOpen: boolean) {
    this.isMistakeOpen = isOpen;
  }

  goTo(path:string){
    this.navigation.forward(path)
  }
  onSubmit(formulario:NgForm){ }
}
