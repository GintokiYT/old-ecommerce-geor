import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

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
  variantsForYou: IProduct[] = [];
  variantSlidesOptions: any = {
    spaceBetween: 12,
    slidesPerView: 'auto',
  };

  constructor(_injector:Injector, private router: Router) {
    super(_injector)
   }

  ngOnInit() {

    this.variantsForYou = [
      { image: '/assets/images/variants/variacion1.png' },
      { image: '/assets/images/variants/variacion2.png' },
      { image: '/assets/images/variants/variacion3.png' },
      { image: '/assets/images/variants/variacion4.png' },
      { image: '/assets/images/variants/variacion5.png' },
      { image: '/assets/images/variants/variacion6.png' },
      { image: '/assets/images/variants/variacion1.png' }];
  }

  goVariants(){
    const currentRouter = this.router.url;

    if(currentRouter === '/customer/search-general/product-detail') {
      return this.navigation.forward('/customer/search-general/product-detail/variants');
    }


    this.navigation.root('/customer/variants','forward');
  }
}

