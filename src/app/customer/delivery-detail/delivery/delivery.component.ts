import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent extends ViewComponent implements OnInit {

 public isSaveButtonEnabled = false;

  constructor(private location: Location, _injector: Injector) {
    super(_injector)
  }

  ngOnInit() { }


  goTo(path:string){
    this.navigation.back(path);
  }

  public onTextAreaInput(event: any): void {
    const value = event.target.value;
    this.isSaveButtonEnabled = value.length > 0;
  }

}
