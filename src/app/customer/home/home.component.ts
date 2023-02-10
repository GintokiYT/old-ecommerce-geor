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

  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };

  productsForYou: IProduct[] = [
    { image: '/assets/home/slider-items/item1.jpg', price: 120 },
    { image: '/assets/home/slider-items/item2.jpg', price: 309 },
    { image: '/assets/home/slider-items/item3.jpg', price: 125 },
    { image: '/assets/home/slider-items/item4.jpg', price: 230 },
    { image: '/assets/home/slider-items/item1.jpg', price: 120 },
    { image: '/assets/home/slider-items/item2.jpg', price: 120 },
    { image: '/assets/home/slider-items/item3.jpg', price: 120 },
    { image: '/assets/home/slider-items/item4.jpg', price: 120 },
  ];

  productsFeatured: IProduct[] = [
    {
      image: '/assets/home/products/product1.jpg',
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
      image: '/assets/home/products/product2.jpg',
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
      image: '/assets/home/products/product3.jpg',
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
      image: '/assets/home/products/product4.jpg',
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
      image: '/assets/home/products/product5.jpg',
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
      image: '/assets/home/products/product6.jpg',
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
      image: '/assets/home/products/product7.jpg',
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
      image: '/assets/home/products/product8.jpg',
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
  }

  ngOnInit() {
    if (this.themeService.mode === 'dark') {
      this.logoPath = '/assets/images/logo-dark.svg';
    }
    console.log(this.slides)
  }

  goToProduct(){
    this.navigation.root("/customer/product","forward");
  }
}
