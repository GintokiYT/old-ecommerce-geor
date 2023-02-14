import { Component, Injector, OnInit } from '@angular/core';
import { AppThemeService, ViewComponent } from '@geor360/ecore';
import IBanner from 'src/app/interfaces/IBanner';
import IProduct from 'src/app/interfaces/IProduct';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: '<app-header-home>',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent extends ViewComponent implements OnInit {

  contry: string = localStorage.getItem('country') || 'PE';
  image: string = this.contry === 'PE' ? './assets/flags/pe.svg' :
                  this.contry === 'AR' ? './assets/flags/ar.svg' :
                  './assets/flags/cl.svg' ;

  slides:IBanner[];

  productsForYou: IProduct[];

  productsFeatured: IProduct[];

  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };

  productSlidesOptions: any = {
    spaceBetween: 16,
    slidesPerView: 'auto',
  };

  private themeService: AppThemeService;

  logoPath = '/assets/images/logo.svg';

  constructor(_injector: Injector, private homeService: HomeService) {
    super(_injector);
    this.themeService = _injector.get(AppThemeService);
    this.homeService.getSlides.subscribe( slides => this.slides = slides);
    this.homeService.getProductsForYou.subscribe( product => this.productsForYou = product);
    this.homeService.getProductsFeatured.subscribe( product => this.productsFeatured = product);
  }

  ngOnInit() {
    if (this.themeService.mode === 'dark') {
      this.logoPath = '/assets/images/logo-dark.svg';
    }
  }

  goToProduct(){
    this.navigation.root("/customer/product","forward");
  }
}
