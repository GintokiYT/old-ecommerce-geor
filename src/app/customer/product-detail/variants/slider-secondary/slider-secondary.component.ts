import { Component, OnInit } from '@angular/core';

interface ICost {
  price: string,
  quantity:string,
}

@Component({
  selector: 'app-slider-secondary',
  templateUrl: './slider-secondary.component.html',
  styleUrls: ['./slider-secondary.component.scss'],
})
export class SliderSecondaryComponent  implements OnInit {

  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };

  costForYou: ICost[] = [];
  costSlidesOptions: any = {
    spaceBetween: 16,
    slidesPerView: 'auto',
    width: 250, // ajusta el ancho del slide a 300px
  };

  constructor() { }

  ngOnInit() {

    this.costForYou = [
      { price:'S/ 790.00', quantity:'1 - 99 unidades'},
      { price:'S/ 720.00', quantity:'100 - 199 unidadesh'},
      { price:'S/ 600.00',  quantity:'>= 200 unidades'},
   ];
  }
}
