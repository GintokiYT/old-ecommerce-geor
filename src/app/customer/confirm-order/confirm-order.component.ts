import { Component, OnInit, Injector } from '@angular/core';
import { ConfirmOrderService } from './services/confirm-order.service';
import { ViewComponent } from '@geor360/ecore';
import IPayMethod from '../../interfaces/IPayMethod';
import ICoupon from '../../interfaces/ICoupon';
import IBill from '../../interfaces/IBill';
import { Router, NavigationEnd, RoutesRecognized, Event } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { RouteService } from '../../services/route.service';
import IOrder from 'src/app/interfaces/IOrder';

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
  myOrder: IOrder

  constructor(private cpService: ConfirmOrderService,
    private _injector: Injector, private router: Router, private rs: RouteService) {
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

    // const prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    // this.previousRoute = prevUrl;
    // console.log(this.previousRoute)
    // console.log(prevUrl)

    this.cpService.currentMyOrder$.subscribe( d => this.myOrder = d)
    console.log(this.myOrder.typeOrder)

    this.rs.currentMiPedidoLastBackDirection.subscribe( route => this.previousRoute = route);
    console.log(this.previousRoute);

    console.log("Hola mundo")
  }

  ngOnInit() {
    this.cpService.currentMyOrder$.subscribe((myOrder) => {
      this.payMethod = myOrder.payMethod;
      this.coupon = myOrder.coupon;
      this.bill = myOrder.bill;
    })
  }

  onGoToPayMethods() {

    this.rs.setSetPaymentMethodsLastBackDirection(this.router.url);
    this.navigation.root("customer/payment-methods","forward")
    //console.log(this.previousRoute)
  }

  onGoToCoupons() {

    const currentRouter = this.router.url;

    if(currentRouter === '/customer/search-general/product-detail/confirm-order') {
      return this.navigation.forward('/customer/search-general/product-detail/add-coupons');
    }

    this.navigation.root("customer/add-coupons","forward");
  }

  onGoToBillingData() {
    this.navigation.root("customer/billing-data","forward");
  }


}
