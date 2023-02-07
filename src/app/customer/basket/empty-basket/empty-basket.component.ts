import { Component, OnInit } from '@angular/core';
import IProduct from 'src/app/interfaces/IProduct';
@Component({
  selector: 'app-empty-basket',
  templateUrl: './empty-basket.component.html',
  styleUrls: ['./empty-basket.component.scss'],
})
export class EmptyBasketComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
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
}
