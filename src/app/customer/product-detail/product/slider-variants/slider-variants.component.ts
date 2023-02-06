import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

interface IProduct {
  image?: string;
}
@Component({
  selector: 'app-slider-variants',
  templateUrl: './slider-variants.component.html',
  styleUrls: ['./slider-variants.component.scss'],
})
export class SliderVariantsComponent extends ViewComponent implements OnInit {

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

  constructor(_injector:Injector) {
    super(_injector)
   }

  ngOnInit() {

    this.productsForYou = [
      { image: '/assets/images/variants/variacion1.png' },
      { image: '/assets/images/variants/variacion2.png' },
      { image: '/assets/images/variants/variacion3.png' },
      { image: '/assets/images/variants/variacion4.png' },
      { image: '/assets/images/variants/variacion5.png' },
      { image: '/assets/images/variants/variacion6.png' },
      { image: '/assets/images/variants/variacion1.png' }];
  }

  goVariants(){
    this.navigation.root('/customer/variants','forward');
  }
}

