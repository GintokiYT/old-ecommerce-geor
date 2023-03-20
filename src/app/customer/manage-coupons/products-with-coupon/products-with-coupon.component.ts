import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent, AppThemeService } from '@geor360/ecore';
import IBanner from '../../../interfaces/IBanner';
import IProduct from '../../../interfaces/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-with-coupon',
  templateUrl: './products-with-coupon.component.html',
  styleUrls: ['./products-with-coupon.component.scss'],
})
export class ProductsWithCouponComponent extends ViewComponent implements OnInit {

  contry: string = localStorage.getItem('country') || 'PE';
  image: string = this.contry === 'PE' ? './assets/flags/pe.svg' :
    this.contry === 'AR' ? './assets/flags/ar.svg' :
      './assets/flags/cl.svg';

  slides: IBanner[] = [
    { image: '/assets/home/slider-main/image1.jpg' },
    { image: '/assets/home/slider-main/image2.jpg' },
    { image: '/assets/home/slider-main/image3.jpg' }
  ];

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

  private prevUrl: string;

  logoPath = '/assets/images/logo.svg';

  constructor(_injector: Injector, private router: Router) {
    super(_injector);
    this.themeService = _injector.get(AppThemeService);
  }

  ngOnInit() {
    if (this.themeService.mode === 'dark') {
      this.logoPath = '/assets/images/logo-dark.svg';
    }
    this.prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    console.log(this.prevUrl)
  }


  goBack() {

    if (this.prevUrl.includes("internal-inbox")) {
      this.navigation.back(this.prevUrl)
    } else {
      const params = {
        showCoupons: "true"
      }

      this.navigation.back("/customer/manage-coupons", params);
    }


  }


  goToProduct() {
    localStorage.setItem('back', '/customer/manage-coupons/products-with-coupon');
    this.navigation.forward("/customer/product");
  }

}
