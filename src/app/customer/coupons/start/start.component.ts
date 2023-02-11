import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent extends ViewComponent implements OnInit {

  constructor(private injector:Injector){
    super(injector) }

  ngOnInit() {}

  goTo(path: string){
    this.navigation.back(path)
    console.log('ff')
  }
}
