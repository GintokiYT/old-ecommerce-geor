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

interface SearchHistory {
  id?: string;
  search?: string;
}

@Component({
  selector: 'app-search-general',
  templateUrl: './search-general.component.html',
  styleUrls: ['./search-general.component.scss'],
})
export class SearchGeneralComponent extends ViewComponent implements OnInit {

  // @ViewChild('inputSearch') inputSearch: ElementRef;
  // @ViewChild('buttonClear') buttonClear: ElementRef;

  placeholder: string = '¿Qué estas buscando?';

  // searchHistory: SearchHistory[] = JSON.parse(localStorage.getItem('searchhistory')) || [];
  // seachHistoryFilter: SearchHistory[] = this.searchHistory.slice(-10);

  // statusFocus: boolean = false;
  // statusProductos: boolean = false;

  products: Products[];

  constructor(_injector: Injector, private searchService: SearchService) {
    super(_injector);
    this.searchService.getProducts.subscribe( products => this.products = products);
  }
  ngOnInit() {}

  // ngAfterViewInit() {
  //   const inputSearch: HTMLInputElement = this.inputSearch.nativeElement;
  //   const buttonClear: HTMLDivElement = this.buttonClear.nativeElement;

  //   inputSearch.addEventListener('input', () => {
  //     // const newSeachHistoryFilter = this.searchHistory.filter( ({search}) => search.toLowerCase().includes(inputSearch.value.toLowerCase())).slice(-10);

  //     // this.seachHistoryFilter = newSeachHistoryFilter;
  //   })

  //   inputSearch.addEventListener('search', () => {

  //     console.log(`Buscando el producto ${inputSearch.value}`);

  //     const arr: boolean = this.searchHistory.find( history => history.search === inputSearch.value) === undefined? false : true;

  //     if(arr) return;

  //     const newSearch = {
  //       id: uuid(),
  //       search: inputSearch.value
  //     }
  //     this.searchHistory.push(newSearch);
  //     localStorage.setItem('searchhistory', JSON.stringify(this.searchHistory));
  //   })

  //   inputSearch.addEventListener('focus', () => {
  //     // this.statusFocus = true;
  //   })

  //   buttonClear.addEventListener('click', () => {
  //     const inputFalse: HTMLInputElement = buttonClear.querySelector('input');
  //     inputFalse.addEventListener('input', () => inputFalse.value = '');

  //     inputSearch.focus();
  //     inputSearch.value = '';

  //     this.seachHistoryFilter = this.searchHistory.slice(-10);
  //   })
  // }

  // changeStatusFocus() {
  //   const inputSearch: HTMLInputElement = this.inputSearch.nativeElement;
  //   this.statusFocus = false;
  //   inputSearch.value = '';
  // }

  // deleteAllSearch() {
  //   this.searchHistory = [];
  //   localStorage.setItem('searchhistory', JSON.stringify(this.searchHistory));
  //   this.seachHistoryFilter = this.searchHistory;
  // }

  // deleteSearch(id: string) {
  //   const newSearchHistory = this.searchHistory.filter( search => search.id !== id);
  //   this.searchHistory = newSearchHistory;
  //   localStorage.setItem('searchhistory', JSON.stringify(this.searchHistory));
  //   this.seachHistoryFilter = this.searchHistory.slice(-10);
  // }

  // searchProduct(search: string) {
  //   console.log(`Buscando el ${search}`);
  // }

  // viewProductFilter() {
  //   this.statusProductos = true;
  // }

  // Navegacion
  goSearchFilter() {
    this.navigation.forward('/customer/search-general/filter');
  }
}
