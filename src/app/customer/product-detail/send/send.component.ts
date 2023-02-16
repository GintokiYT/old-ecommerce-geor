import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
    super(_injector)
   }

  ngOnInit() {}

  goDirection(){
    this.navigation.root('/customer/direction','forward');
  }

}
