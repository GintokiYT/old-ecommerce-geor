import { Component, OnInit } from '@angular/core';

interface IBanner {
  image: string;
}

interface IProduct {
  image?: string;
  name?: string;
  price?: number;
  currency?: string;
  isNew?: boolean;
  oldPrice?: number;
  inOffert?: boolean;
  discountPercentage?: number;
  hasMinimumOrder?: boolean;
  minimumOrder?: number;
  hasFreeDelivery?: boolean;
  colors?: IProductColor[];
}

interface IProductColor {
  name?: string;
  color: string;
}

@Component({
  selector: 'app-slider-products',
  templateUrl: './slider-products.component.html',
  styleUrls: ['./slider-products.component.scss'],
})
export class SliderProductsComponent implements OnInit {

  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };
  productsForYou: IProduct[] = [];
  productSlidesOptions: any = {
    spaceBetween: 12,
    slidesPerView: 'auto',
  };

  constructor() { }

  ngOnInit() {

    this.productsForYou = [
      { image: '/assets/images/hojas.png' },
      { image: '/assets/images/llaveros.png'},
      { image: '/assets/images/crece.png'},
      { image: '/assets/images/cal-1.png'},
      { image: '/assets/images/calendario.png'},
      { image: '/assets/images/colores.png'},
      { image: '/assets/images/romex.png'},
      { image: '/assets/images/cal-2.png'},
    ];

  }

}
