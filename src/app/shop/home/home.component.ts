import { Component, OnInit } from '@angular/core';
import IBanner from 'src/app/interfaces/IBanner';
import IProduct from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  slides: IBanner[] = [];
  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };
  productsForYou: IProduct[] = [];
  productsBestSellers: IProduct[] = [];
  productsFeatured: IProduct[] = [];
  productSlidesOptions: any = {
    spaceBetween: 16,
    slidesPerView: 'auto',
  };

  constructor() {}

  ngOnInit() {
    this.slides = [
      { image: '/assets/images/banner.png' },
      { image: '/assets/images/banner.png' },
      { image: '/assets/images/banner.png' },
      { image: '/assets/images/banner.png' },
      { image: '/assets/images/banner.png' },
      { image: '/assets/images/banner.png' },
      { image: '/assets/images/banner.png' },
    ];

    this.productsForYou = [
      { image: '/assets/images/hojas.png', price: 7551, currency: 'S/' },
      { image: '/assets/images/llaveros.png', price: 115, currency: 'S/' },
      { image: '/assets/images/crece.png', price: 120, currency: 'S/' },
      { image: '/assets/images/cal-1.png', price: 85, currency: 'S/' },
      { image: '/assets/images/calendario.png', price: 75, currency: 'S/' },
      { image: '/assets/images/colores.png', price: 115, currency: 'S/' },
      { image: '/assets/images/romex.png', price: 120, currency: 'S/' },
      { image: '/assets/images/cal-2.png', price: 85, currency: 'S/' },
    ];

    this.productsBestSellers = [
      { image: '/assets/images/calendario.png', price: 75, currency: 'S/' },
      { image: '/assets/images/colores.png', price: 115, currency: 'S/' },
      { image: '/assets/images/romex.png', price: 120, currency: 'S/' },
      { image: '/assets/images/cal-2.png', price: 85, currency: 'S/' },
      { image: '/assets/images/hojas.png', price: 7551, currency: 'S/' },
      { image: '/assets/images/llaveros.png', price: 115, currency: 'S/' },
      { image: '/assets/images/crece.png', price: 120, currency: 'S/' },
      { image: '/assets/images/cal-1.png', price: 85, currency: 'S/' },
    ];

    this.productsFeatured = [
      {
        image: '/assets/images/producto-big-5.png',
        isNew: true,
        price: 75,
        currency: 'S/',
        oldPrice: 100,
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
        image: '/assets/images/producto-big-3.png',
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
        image: '/assets/images/producto-big-4.png',
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
        image: '/assets/images/producto-big-2.png',
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
        image: '/assets/images/producto-big-1.png',
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
  }
}
