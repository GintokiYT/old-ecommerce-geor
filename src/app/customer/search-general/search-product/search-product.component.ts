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

  constructor(_injector: Injector, private searchService: SearchService) {
    super(_injector);
    this.searchService.getSearch.subscribe( search => this.search = search );
  }

  ngOnInit() {}

  goBack() {

    if(localStorage.getItem('back')) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
      this.navigation.back('/customer/search-general/filter');
    }
    this.searchService.setSearch('');
  }
}
