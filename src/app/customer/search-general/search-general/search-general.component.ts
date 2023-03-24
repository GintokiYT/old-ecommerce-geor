import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ViewComponent } from '@geor360/ecore';
import { SearchService } from '../../../services/search.service';

interface Products {
  id: string;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-search-general',
  templateUrl: './search-general.component.html',
  styleUrls: ['./search-general.component.scss'],
})
export class SearchGeneralComponent extends ViewComponent implements OnInit {

  placeholder: string = '¿Qué estas buscando?';

  products: Products[];

  constructor(_injector: Injector, private searchService: SearchService) {
    super(_injector);
    this.searchService.getProducts.subscribe( products => this.products = products);
  }
  ngOnInit() {}

  goSearchFilter() {
    this.navigation.forward('/customer/search-general/filter');
  }

  goProduct(product: Products) {
    this.navigation.root('/customer/search-general/product', 'forward');
    this.searchService.setSearch(product.title);
    localStorage.setItem('back', '/customer/search-general');
  }
}
