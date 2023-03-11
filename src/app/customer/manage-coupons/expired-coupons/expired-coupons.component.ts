import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expired-coupons',
  templateUrl: './expired-coupons.component.html',
  styleUrls: ['./expired-coupons.component.scss'],
})
export class ExpiredCouponsComponent implements OnInit {

  showCoupons: boolean = false;

  coupons = [
    {
      id:1,
      discount: "S/ 200.00",
      ocassion: `Feliz año nuevo,<br/>que lo pases super`,
      code: "CASFG123DIC2022",
      expiration: "30 dic 2022",
    },
    {
      id:2,
      discount: "S/ 150.00",
      ocassion: "Black Friday",
      code: "SAMNL123FEB2023",
      expiration: "15 feb 2023",
    }
  ]

  constructor() { }

  ngOnInit() {}

  onShowCoupons(){
    this.showCoupons = true;
  }

}
