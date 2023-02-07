import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-manage-user-information',
  templateUrl: './manage-user-information.component.html',
  styleUrls: ['./manage-user-information.component.scss'],
})
export class ManageUserInformationComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector) {
      super(_injector);
   }

  ngOnInit() {}


  onGoToConfiguration(){
    
  }

}
