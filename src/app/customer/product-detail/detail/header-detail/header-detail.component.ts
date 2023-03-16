import { Location } from '@angular/common';
import { Component, OnInit, Input, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss'],
})
export class HeaderDetailComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""

  previousRoute: string;

  constructor(private location: Location, private router: Router,
    private _injector: Injector) { 
    super(_injector);
    const prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.previousRoute = prevUrl;
  }

  ngOnInit() {}


  goBack(){
    this.navigation.back(this.previousRoute);
  }
}
