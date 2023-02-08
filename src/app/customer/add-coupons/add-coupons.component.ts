import { Component, OnInit, Injector } from '@angular/core';;
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../confirm-order/services/confirm-order.service';

@Component({
  selector: 'app-add-coupons',
  templateUrl: './add-coupons.component.html',
  styleUrls: ['./add-coupons.component.scss'],
})
export class AddCouponsComponent extends ViewComponent implements OnInit {

  inputPassword: string = "";
  haveCode: boolean = false;

  coupons = [
    {
      id:1,
      discount: "S/200",
      ocassion: `Feliz día de la madre,<br/>que lo pases super`,
      code: "CASFG123NOV2022",
      expiration: "30 nov 2022",
      conditions: "condiciones"
    },
    {
      id:2,
      discount: "S/150",
      ocassion: "Black Friday",
      code: "SAMNL123NOV2022",
      expiration: "30 nov 2022",
      conditions: "condiciones"
    },
    {
      id:3,
      discount: "-30%",
      ocassion: `Compras mayores a<br/> 500 soles`,
      code: "PLMBQ23NOV2022",
      expiration: "30 nov 2022",
      conditions: "condiciones"
    }
  ]

  constructor(private _injector:Injector,private cpService: ConfirmOrderService ) {
    super(_injector)
   }

  ngOnInit() {}

  inputChange(value){
    this.haveCode = (this.inputPassword.length>0) ? true : false;
  }

  validarCupon(){
    const coupon  = {
      id: this.coupons.length+1,
      discount: "S/150",
      ocassion: "Black Friday",
      code: "SODIM123NOV2022",
      expiration: "30 nov 2022",
      conditions: "condiciones"
    }
    this.coupons = [...this.coupons,coupon];
    this.inputPassword = "";
  }

  useCoupon(idC:number){
    this.navigation.back("/customer/confirm-order");
    const coupon = this.coupons.filter( couponArr => couponArr.id===idC);
    const {id,...couponChoosed} = coupon[0];
    this.cpService.setCoupon(couponChoosed);
  }

}
