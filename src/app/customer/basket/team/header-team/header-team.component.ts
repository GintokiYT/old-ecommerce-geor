import { Location } from '@angular/common';
import { Component, OnInit, Input, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-team',
  templateUrl: './header-team.component.html',
  styleUrls: ['./header-team.component.scss'],
})
export class HeaderTeamComponent extends ViewComponent implements OnInit {
  @Input()
  title: string = ""

  constructor(_injector: Injector, private location: Location) {
    super(_injector)
  }

  ngOnInit() {}

  goBack(){
    const back = localStorage.getItem('back') ?? '';

    if(back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
      this.location.back();
    }
  }

}
