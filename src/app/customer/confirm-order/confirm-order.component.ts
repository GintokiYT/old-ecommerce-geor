import { Component, OnInit, Injector } from '@angular/core';
import { ConfirmOrderService } from './services/confirm-order.service';
import { ViewComponent } from '@geor360/ecore';
import IPayMethod from '../../interfaces/IPayMethod';
import ICoupon from '../../interfaces/ICoupon';
import IBill from '../../interfaces/IBill';
import { Router, NavigationEnd, RoutesRecognized, Event } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent extends ViewComponent implements OnInit {

  payMethod: IPayMethod;
  coupon: ICoupon;
  bill: IBill;
  previousRoute: string;

  constructor(private cpService: ConfirmOrderService,
    private _injector: Injector, private router: Router) {
    super(_injector)
    // router.events
    // .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    // .subscribe((events: RoutesRecognized[]) => {
    //   console.log('previous url', events[0].urlAfterRedirects);
    //   this.previousRoute = events[0].urlAfterRedirects;
    //   console.log('current url', events[1].urlAfterRedirects);
    // });

    // router.events
    //   .pipe(filter((evt: Event): evt is RoutesRecognized => evt instanceof RoutesRecognized), pairwise())
    //   .subscribe((events: RoutesRecognized[]) => {
    //     this.previousRoute = events[0].urlAfterRedirects;
    //   });

    const prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.previousRoute = prevUrl;
    console.log(this.previousRoute)
    console.log(prevUrl)
  }

  ngOnInit() {
    this.cpService.currentMyOrder$.subscribe((myOrder) => {
      this.payMethod = myOrder.payMethod;
      this.coupon = myOrder.coupon;
      this.bill = myOrder.bill;
    })
  }

  onGoToPayMethods() {
    this.navigation.forward("customer/payment-methods")
    //console.log(this.previousRoute)
  }

  onGoToCoupons() {
    this.navigation.forward("customer/add-coupons");
  }

  onGoToBillingData() {
    this.navigation.forward("customer/billing-data");
  }


}
