import { Component, OnInit,Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-other-forms-pay',
  templateUrl: './other-forms-pay.component.html',
  styleUrls: ['./other-forms-pay.component.scss'],
})
export class OtherFormsPayComponent extends ViewComponent implements OnInit {

  oneTrue:boolean=true;

  isCashOpen = false;
  isTransferOpen=false;
  isCreditOpen=false;

  options: any[] = [
    {
      id: 0,
      selected: false,

    },
    {
      id:1,
      selected: false,

    },
    {
      id:2,
      selected: false,

    },
  ]
  
  constructor(private _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {}

  goTo(path:string){
    this.navigation.forward(path)
  }

  checkbox(id: number) {
    const falses = this.options.filter( element => element.id!==id);
    const trues = this.options.filter(element => element.selected===true);
    falses.forEach( element => {
      element.selected = false;
    })
    if(trues.length>0){
      this.oneTrue = false;
    }else{
      this.oneTrue = true;
    }
  }

  setOpen1(isOpen: boolean) {
    this.isCashOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isTransferOpen = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isCreditOpen = isOpen;
  }
}
