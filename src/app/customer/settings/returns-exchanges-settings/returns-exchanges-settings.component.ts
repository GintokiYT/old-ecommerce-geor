import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-returns-exchanges-settings',
  templateUrl: './returns-exchanges-settings.component.html',
  styleUrls: ['./returns-exchanges-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class ReturnsExchangesSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector,private location:Location) {
    super(_injector)
  }

  ngOnInit() {}

  /* onToBack(route: string) {
    this.navigation.back(route);
  } */
  onToBack(){
    this.location.back();
  }

}
