import { Location } from '@angular/common';
import { Component, OnInit, Input, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-team',
  templateUrl: './header-team.component.html',
  styleUrls: ['./header-team.component.scss'],
})
export class HeaderTeamComponent extends ViewComponent implements OnInit {
  @Input()
  title: string = ""

  constructor(_injector: Injector, private location: Location, private router: Router) {
    super(_injector)
  }

  ngOnInit() {}

  goBack(){

    const currentRouter = this.router.url;

    if(currentRouter === '/customer/collaborative-team/team') {
      return this.navigation.back('/customer/manage-user-information');
    }


    this.navigation.back('/customer/collaborative-basket');

  }

}
