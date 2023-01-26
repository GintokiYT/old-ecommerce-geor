import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent extends ViewComponent implements OnInit {

  @Input() 
  title: string = ""

  constructor(private location: Location, _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

  goTo(path: string){
    this.navigation.back(path)
  }

}
