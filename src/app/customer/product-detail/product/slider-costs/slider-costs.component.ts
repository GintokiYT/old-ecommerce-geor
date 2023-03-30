import { Component, OnInit } from '@angular/core';

interface ICost {
  price: string,
  price_cut:string,
  quantity:string,
}

@Component({
  selector: 'app-slider-costs',
  templateUrl: './slider-costs.component.html',
  styleUrls: ['./slider-costs.component.scss'],
})
export class SliderCostsComponent implements OnInit {

  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };
  costForYou: ICost[] = [];
  costSlidesOptions: any = {
    spaceBetween: 20,
    slidesPerView: 'auto',

  };
  constructor() { }

  ngOnInit() {

    this.costForYou = [
      { price:'S/ 790.00', price_cut:'S/ 189.00', quantity:'1 - 99 unidades'},
      { price:'S/ 720.00', price_cut:'S/ 189.00', quantity:'100 - 199 unidadesh'},
      { price:'S/ 600.00', price_cut:'S/ 189.00', quantity:'>= 200 unidades'},
   ];
  }

  }

