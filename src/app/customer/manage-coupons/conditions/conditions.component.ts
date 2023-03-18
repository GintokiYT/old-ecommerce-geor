import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent extends ViewComponent implements OnInit {

  prevUrl: string;

  constructor(private _injector: Injector, private router: Router) {
    super(_injector);
    this.prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    console.log(this.prevUrl)
   }

  ngOnInit() {}


  goBack(){

    
    if(this.prevUrl.includes("internal-inbox")){
      this.navigation.root(this.prevUrl,"back");
    }else{
      const params = {
        showCoupons: "true"
      }
      this.navigation.root("/customer/manage-coupons","back",params)  
    }
  }

}
