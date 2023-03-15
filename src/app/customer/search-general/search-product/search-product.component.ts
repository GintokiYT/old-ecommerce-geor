import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent extends ViewComponent implements OnInit {

  search: string;

  routeSearchProduct: string = '/customer/search-general/product-detail';

  modalStatusFilterProduct: boolean = false;

  constructor(_injector: Injector, private searchService: SearchService) {
    super(_injector);
    this.searchService.getSearch.subscribe( search => this.search = search );
  }

  ngOnInit() {}

  goBack() {
    this.navigation.back(localStorage.getItem('back'));
    localStorage.setItem('back', '');
  }

  openModalFilter() {
    this.modalStatusFilterProduct = true;
  }

  changeStatusFilter(status: boolean) {
    this.modalStatusFilterProduct = status;
  }
}
