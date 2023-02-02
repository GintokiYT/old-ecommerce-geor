import { Component, Injector, OnInit } from '@angular/core';
import { AppThemeService, ViewComponent } from '@geor360/ecore';
import IBanner from 'src/app/interfaces/IBanner';
import IProduct from 'src/app/interfaces/IProduct';

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

  slides: IBanner[] = [];
  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };
  productsForYou: IProduct[] = [];
  productsFeatured: IProduct[] = [];
  productSlidesOptions: any = {
    spaceBetween: 16,
    slidesPerView: 'auto',
  };
  private themeService: AppThemeService;
  logoPath = '/assets/images/logo.svg';

  constructor(_injector: Injector) {
    super(_injector);
    this.themeService = _injector.get(AppThemeService);
  }

  ngOnInit() {
    if (this.themeService.mode === 'dark') {
      this.logoPath = '/assets/images/logo-dark.svg';
    }
    this.slides = [
      { image: '/assets/home/slider-main/image1.jpg' },
      { image: '/assets/home/slider-main/image2.jpg' },
      { image: '/assets/home/slider-main/image3.jpg' }
    ];

    this.productsForYou = [
      { image: '/assets/images/cartera.jpg', price: 120, currency: 'S/' },
      { image: '/assets/images/zapatillas.jpg', price: 390, currency: 'S/' },
      { image: '/assets/images/plantas.jpg', price: 125, currency: 'S/' },
      { image: '/assets/images/cal-1.png', price: 85, currency: 'S/' },
      { image: '/assets/images/calendario.png', price: 75, currency: 'S/' },
      { image: '/assets/images/colores.png', price: 115, currency: 'S/' },
      { image: '/assets/images/romex.png', price: 120, currency: 'S/' },
      { image: '/assets/images/cal-2.png', price: 85, currency: 'S/' },
    ];

    this.productsFeatured = [
      {
        image: '/assets/images/bolso.jpg',
        isNew: true,
        price: 189,
        currency: 'S/',
        oldPrice: 259,
        inOffert: true,
        discountPercentage: 30,
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: true,
        colors: [
          { color: '#0375F8' },
          { color: '#02298F' },
          { color: '#D6D6D6' },
          { color: '#EF4152' },
        ],
      },
      {
        image: '/assets/images/taza-blanca.jpg',
        price: 120,
        isNew: false,
        inOffert: true,
        oldPrice: 150,
        discountPercentage: 25,
        currency: 'S/',
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: true,
      },
      {
        image: '/assets/images/zapatilla-negra.jpg',
        price: 115,
        isNew: false,
        currency: 'S/',
        inOffert: false,
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: false,
      },
      {
        image: '/assets/images/zapatilla-celeste.jpg',
        price: 85,
        isNew: false,
        inOffert: false,
        currency: 'S/',
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: false,
      },
      {
        image: '/assets/images/florero.jpg',
        price: 7551,
        currency: 'S/',
        inOffert: false,
        isNew: false,
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: false,
      },
      {
        image: '/assets/images/flores.jpg',
        price: 7551,
        currency: 'S/',
        inOffert: false,
        isNew: false,
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: false,
      },
      {
        image: '/assets/images/platos.jpg',
        price: 7551,
        currency: 'S/',
        inOffert: false,
        isNew: false,
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: false,
      },
      {
        image: '/assets/images/polo.jpg',
        price: 7551,
        currency: 'S/',
        inOffert: false,
        isNew: false,
        name: 'Acrílico rugoso de pol itileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: false,
      },
    ];

    const sliderContent: any = document.querySelector('ion-slides .swiper-wrapper');

    // sliderContent.styles.gap = '20px';
  }
}
