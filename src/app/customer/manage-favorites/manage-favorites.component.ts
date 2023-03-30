import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

interface FavoriteProducts {
  id: string;
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
      id: '1',
      image: '/assets/favoriteproducts/product1.jpg',
      name: 'Acrílico liso bajo rugoso de policarbonato',
      price: '48.90'
    },
    {
      id: '2',
      image: '/assets/favoriteproducts/product2.jpg',
      name: 'Acrílico liso bajo rugoso de policarbonato',
      price: '48.90'
    },
    {
      id: '3',
      image: '/assets/favoriteproducts/product3.jpg',
      name: 'Acrílico liso bajo rugoso de policarbonato',
      price: '48.90'
    }
  ]

  statusModal = false;

  selectedId: string | undefined;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  onToBack(route: string) {
    this.navigation.back(route);
  }

  goVariants() {
    // localStorage.setItem('back', '/customer/manage-favorites');
    this.navigation.forward('/customer/manage-favorites/variants');
  }

  goDetailProduct() {
    localStorage.setItem('back', '/customer/manage-favorites');
    this.navigation.forward('/customer/product');
  }

  openModal(id: string) {
    this.selectedId = id;
    this.statusModal = true;
  }

  closeModalFromOutside(event: Event) {
    const containerModal: HTMLDivElement = document.querySelector('.container-popup-delete-product');
    if(event.target === containerModal) {
      this.closeModal();
    }
  }

  closeModalButton() {
    this.closeModal();
  }

  deleteProduct() {
    this.favoriteProducts = this.favoriteProducts.filter( favoriteProduct => {
      return favoriteProduct.id !== this.selectedId;
    })
    this.closeModal();
  }

  closeModal() {
    const modal: HTMLDivElement = document.querySelector('.popup-delete-product');
    modal.classList.remove('animation-open');
    modal.classList.add('animation-close');
    setTimeout(() => {
      this.statusModal = false;
      this.selectedId = undefined;
    }, 250);
  }
}
