import { Component, Injector, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-picture-big',
  templateUrl: './picture-big.component.html',
  styleUrls: ['./picture-big.component.scss'],
})
export class PictureBigComponent extends ViewComponent implements OnInit {

  constructor(private location: Location, private _injector:Injector) { 
    super(_injector);
  }

  ngOnInit() {}

  goBack(){
   this.navigation.back('/customer/product');
  }

}
