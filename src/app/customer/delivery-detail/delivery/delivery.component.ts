import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""

  constructor(private location: Location, _injector: Injector) {
    super(_injector)
  }

  ngOnInit() { }


  goTo(path:string){
    this.navigation.back(path);
  }
}
