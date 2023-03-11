import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent extends ViewComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  @ViewChild('closeInput') closeInput: ElementRef;

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
    })

  }

  goSearchGeneral() {
    this.navigation.back('/customer/search-general');
  }
}
