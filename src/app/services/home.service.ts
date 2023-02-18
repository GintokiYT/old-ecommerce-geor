import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import IBanner from '../interfaces/IBanner';
import IProduct from "../interfaces/IProduct";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // Slides
  private slides = new BehaviorSubject<IBanner[]>(
    [
      { image: '/assets/home/slider-main/image1.jpg' },
      { image: '/assets/home/slider-main/image2.jpg' },
      { image: '/assets/home/slider-main/image3.jpg' }
    ]
  );
  get getSlides(): Observable<IBanner[]> {
    return this.slides;
  }

  // Slides Products For You
  private productsForYou = new BehaviorSubject<IProduct[]>(
    [
      { image: '/assets/home/slider-items/item1.jpg', price: 120 },
      { image: '/assets/home/slider-items/item2.jpg', price: 309 },
      { image: '/assets/home/slider-items/item3.jpg', price: 125 },
      { image: '/assets/home/slider-items/item4.jpg', price: 230 },
      { image: '/assets/home/slider-items/item1.jpg', price: 120 },
      { image: '/assets/home/slider-items/item2.jpg', price: 120 },
      { image: '/assets/home/slider-items/item3.jpg', price: 120 },
      { image: '/assets/home/slider-items/item4.jpg', price: 120 }
    ]
  );
  get getProductsForYou(): Observable<IProduct[]> {
    return this.productsForYou;
  }

  // Products Featured
  private productsFeatured = new BehaviorSubject< IProduct[]>(
    [
      {
        image: '/assets/home/products/product1.jpg',
        isNew: true,
        price: 189,
        currency: 'S/',
        oldPrice: 259,
        inOffert: true,
        discountPercentage: 30,
        name: 'Acrílico rugoso de politileno rugoso',
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
        name: 'Acrílico rugoso de politileno rugoso',
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
        name: 'Acrílico rugoso de politileno rugoso',
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
        name: 'Acrílico rugoso de politileno rugoso',
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
        name: 'Acrílico rugoso de politileno rugoso',
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
        name: 'Acrílico rugoso de politileno rugoso',
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
        name: 'Acrílico rugoso de politileno rugoso',
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
        name: 'Acrílico rugoso de politileno rugoso',
        hasMinimumOrder: true,
        minimumOrder: 3,
        hasFreeDelivery: false,
      },
    ]
  );
  get getProductsFeatured(): Observable<IProduct[]> {
    return this.productsFeatured;
  }
}
