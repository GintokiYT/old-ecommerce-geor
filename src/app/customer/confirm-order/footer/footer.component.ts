import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {}

  goToInbox(){
    this.navigation.root("customer/internal-inbox/1","back");
  }

  goToLastStep(){
    this.navigation.root("customer/last-step","forward");
  }

}
