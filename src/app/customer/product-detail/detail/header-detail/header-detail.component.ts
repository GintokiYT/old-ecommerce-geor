import { Location } from '@angular/common';
import { Component, OnInit, Input, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';
import { RouteService } from '../../../../services/route.service';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss'],
})
export class HeaderDetailComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""

  previousRoute: string;
  prevUrlSend : string;

  constructor(private location: Location, private router: Router,
    private _injector: Injector, private rs : RouteService) {
    super(_injector);
    const prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.previousRoute = prevUrl;
    this.rs.currentSetEnvioLastBackDirection.subscribe( d => this.prevUrlSend = d);
  }

  ngOnInit() {}

  goBack(){
    if(this.router.url.includes("detail")){
      this.navigation.back(this.previousRoute);
    }else{
      this.navigation.back(this.prevUrlSend);
    }
  }
}
