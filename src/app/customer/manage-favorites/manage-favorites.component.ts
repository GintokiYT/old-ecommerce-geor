import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

interface FavoriteProducts {
  image: string;
  name: string;
  price: string;
}

@Component({
  selector: 'app-manage-favorites',
  templateUrl: './manage-favorites.component.html',
  styleUrls: ['./manage-favorites.component.scss'],
})

export class ManageFavoritesComponent extends ViewComponent implements OnInit {

  favoriteProducts: FavoriteProducts[] = [
    {
      image: '/assets/favoriteproducts/product1.jpg',
      name: 'Acrílico liso bajo rugoso de policarbonato',
      price: '48.90'
    },
    {
      image: '/assets/favoriteproducts/product2.jpg',
      name: 'Acrílico liso bajo rugoso de policarbonato',
      price: '48.90'
    },
    {
      image: '/assets/favoriteproducts/product3.jpg',
      name: 'Acrílico liso bajo rugoso de policarbonato',
      price: '48.90'
    }
  ]


  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  onToBack(route: string) {
    this.navigation.back(route);
  }

  goVariants() {
    localStorage.setItem('back', '/customer/manage-favorites');
    this.navigation.forward('/customer/variants');
  }

  goDetailProduct() {
    localStorage.setItem('back', '/customer/manage-favorites');
    this.navigation.forward('/customer/product');
  }
}
