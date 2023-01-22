import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) { 
    super(_injector)
  }

  ngOnInit() {}

  goTo(path:string){
    this.navigation.forward(path)
  }

}
