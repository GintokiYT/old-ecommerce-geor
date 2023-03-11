import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { v4 as uudi } from 'uuid';

interface SearchHistory {
  id: string;
  search: string;
}

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent extends ViewComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('closeInput') closeInput: ElementRef;

  searchHistory: SearchHistory[] = JSON.parse(localStorage.getItem('searchhistory')) || [];
  searchHistoryFilter: SearchHistory[] = this.searchHistory.slice(-10).reverse();

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const inputSearch: HTMLInputElement = this.inputSearch.nativeElement;
    const closeInput: HTMLDivElement = this.closeInput.nativeElement;

    setTimeout(() => inputSearch.focus(), 300);

    inputSearch.addEventListener('input', () => {
      if(inputSearch.value.length > 0) {
        closeInput.style.display = 'flex';
      } else {
        closeInput.style.display = 'none';
      }

      const newSearchHistoryFilter: SearchHistory[] = this.searchHistory.filter( search => {
        return search.search.toLowerCase().includes(inputSearch.value.toLowerCase());
      }).slice(-10);

      this.searchHistoryFilter = newSearchHistoryFilter;
    })

    inputSearch.addEventListener('search', () => {

      const ifExists: boolean = this.searchHistory.find(({search}) => search === inputSearch.value)? true : false;

      if(ifExists !== true) {
        const newSearchHistory: SearchHistory = {
          id: uudi(),
          search: inputSearch.value
        }
        this.searchHistory.push(newSearchHistory);
        localStorage.setItem('searchhistory', JSON.stringify(this.searchHistory));
      }

      this.searchHistoryFilter = this.searchHistory.slice(-10).reverse();

    })

    closeInput.addEventListener('click', () => {
      inputSearch.value = '';
      inputSearch.focus();
      closeInput.style.display = 'none';
    })

  }

  goSearchGeneral() {
    this.navigation.back('/customer/search-general');
  }

  deleteAllHistory() {
    this.searchHistory = [];
    this.searchHistoryFilter = this.searchHistory;
    localStorage.setItem('searchhistory', JSON.stringify(this.searchHistory));
  }

  deleteHistory(id: string) {
    const newSearchHistory = this.searchHistory.filter(search => search.id !== id);
    this.searchHistory = newSearchHistory;
    this.searchHistoryFilter = this.searchHistory.slice(-10);
    localStorage.setItem('searchhistory', JSON.stringify(this.searchHistory));
  }

  goProduct(search: SearchHistory) {
    console.log(search);
  }
}
