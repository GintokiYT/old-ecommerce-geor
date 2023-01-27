import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""

  constructor(private location: Location, private _injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}

  goBack(){
    this.navigation.back("/customer/cesta-colaborativa");
  }

}
