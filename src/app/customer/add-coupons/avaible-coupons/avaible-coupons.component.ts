import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';

@Component({
  selector: 'app-avaible-coupons',
  templateUrl: './avaible-coupons.component.html',
  styleUrls: ['./avaible-coupons.component.scss'],
})
export class AvaibleCouponsComponent extends ViewComponent implements OnInit {

  @Input("couponsC")
  coupons : any[];

  // coupons = [
  //   {
  //     id:1,
  //     discount: "S/200.00",
  //     ocassion: `Feliz día de la madre,<br/>que lo pases super`,
  //     code: "CASFG123MAY2023",
  //     expiration: "15 may 2023",
  //     conditions: "condiciones"
  //   },
  //   {
  //     id:2,
  //     discount: "S/150.00",
  //     ocassion: "Black Friday",
  //     code: "SAMNL123OCT2023",
  //     expiration: "20 oct 2023",
  //     conditions: "condiciones"
  //   },
  //   {
  //     id:3,
  //     discount: "-30%",
  //     ocassion: `Compras mayores a<br/> 500 soles`,
  //     code: "PLMBQ23MAR2023",
  //     expiration: "15 mar 2023",
  //     conditions: "condiciones"
  //   }
  // ]

  constructor(private _injector: Injector,
              private cpService: ConfirmOrderService) { 
    super(_injector);
  }

  ngOnInit() {}


  useCoupon(idC:number){
    this.navigation.back("/customer/confirm-order");
    const coupon = this.coupons.filter( couponArr => couponArr.id===idC);
    const {id,...couponChoosed} = coupon[0];
    this.cpService.setCoupon(couponChoosed);
  }

  goToConditions(){
    this.navigation.forward("/customer/add-coupons/conditions")
  }

}
