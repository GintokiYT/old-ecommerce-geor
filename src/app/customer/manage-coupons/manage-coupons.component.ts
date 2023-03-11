import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-coupons',
  templateUrl: './manage-coupons.component.html',
  styleUrls: ['./manage-coupons.component.scss'],
})
export class ManageCouponsComponent extends ViewComponent implements OnInit {


  showCoupons: boolean = false;

  inputPassword: string = "";
  haveCode: boolean = false;
  couponType : string = "avaible";

  coupons = [
    {
      id:1,
      discount: "S/ 200.00",
      ocassion: `Feliz día de la madre,<br/>que lo pases super`,
      code: "CASFG123MAY2023",
      expiration: "15 may 2023",
      conditions: "condiciones"
    },
    {
      id:2,
      discount: "S/ 150.00",
      ocassion: "Black Friday",
      code: "SAMNL123OCT2023",
      expiration: "20 oct 2023",
      conditions: "condiciones"
    },
    {
      id:3,
      discount: "-30%",
      ocassion: `Compras mayores a<br/> 500 soles`,
      code: "PLMBQ23MAR2023",
      expiration: "15 mar 2023",
      conditions: "condiciones"
    }
  ]


  constructor(private _injector: Injector, private route : ActivatedRoute) {
    super(_injector);

  }

  ngOnInit() { 
    console.log("Hola")
    if(this.route.snapshot.queryParamMap.get('showCoupons')){
      this.showCoupons = (this.route.snapshot.queryParamMap.get('showCoupons') === "true") ? true : false;
    }
    console.log(this.route.snapshot.queryParamMap.get('showCoupons'))
  }

  goToAddCoupon(){
    this.navigation.root("/customer/manage-coupons/add-coupon","forward")
  }

  inputChange(value){
    this.haveCode = (this.inputPassword.length>0) ? true : false;
  }

  validarCupon(){
    const coupon  = {
      id: this.coupons.length+1,
      discount: "S/ 150.00",
      ocassion: "Black Friday",
      code: "SODIM123JUN2023",
      expiration: "15 JUN 2023",
      conditions: "condiciones"
    }
    this.coupons = [...this.coupons,coupon];
    this.inputPassword = "";
    this.haveCode = false
  }

  useCoupon(idC:number){
    //this.navigation.back("/customer/confirm-order");
    const coupon = this.coupons.filter( couponArr => couponArr.id===idC);
    const {id,...couponChoosed} = coupon[0];
  }

  onSelect(id: string) {
    const opciones = document.querySelectorAll(".selected");
    const opcion = document.getElementById(id);
    opciones.forEach(opc => opc.classList.remove("selected"));
    opcion?.classList.add("selected")
    this.couponType = id;
  }

  onShowCoupons(){
    this.showCoupons = true;
  }


}
