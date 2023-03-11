import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Products {
  id: string;
  image: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private products = new BehaviorSubject<Products[]>([
    { id: '1', image: '/assets/favoriteproducts/product1.jpg', title: 'Acrílico liso', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '2', image: '/assets/favoriteproducts/product2.jpg', title: 'Acrílico Rugoso', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '3', image: '/assets/favoriteproducts/product3.jpg', title: 'Acrílico liso', description: 'Lorem ipsum dolor sit amet consectetur.' }
  ]);

  setProducts(products: Products[]) {
    this.products.next(products);
  }
  get getProducts():Observable<Products[]>{
    return this.products;
  }

}
