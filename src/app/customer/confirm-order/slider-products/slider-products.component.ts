import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

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
export class SliderProductsComponent extends ViewComponent implements OnInit {

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

  constructor(private _injector:Injector) {
    super(_injector)
   }

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

  goToCollaborativeBasket(){
    this.navigation.root("/customer/collaborative-basket","back");
  }

}
