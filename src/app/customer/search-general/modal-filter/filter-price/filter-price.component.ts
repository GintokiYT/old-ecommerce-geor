import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.scss'],
})
export class FilterPriceComponent implements OnInit {

  @ViewChild('myPrice') myPrice: ElementRef;

  @ViewChild('slider') slider: ElementRef;
  @ViewChild('selector') selector: ElementRef;
  @ViewChild('selectValue') selectValue: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;

  statusArrow: boolean;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const slider: HTMLInputElement = this.slider.nativeElement;
    const selector: HTMLDivElement = this.selector.nativeElement;
    const selectValue: HTMLDivElement = this.selectValue.nativeElement;
    const progressBar: HTMLDivElement = this.progressBar.nativeElement;

    selectValue.textContent = String(Number(slider.value) === 0 ? 0 : Number(slider.value).toFixed(2));

    selector.style.left = `${slider.value}%`;

    progressBar.style.width = `${slider.value}%`;

    slider.addEventListener('input', () => {
      selector.style.left = slider.value + '%';
      selectValue.textContent = String(Number(slider.value) === 0 ? 0 : Number(slider.value).toFixed(2));
      progressBar.style.width = `${slider.value}%`;
    });
  }

  toggleInfo() {
    const myPrice: HTMLDivElement = this.myPrice.nativeElement;
    myPrice.classList.toggle('close');
    this.statusArrow = myPrice.classList.contains('close')? true : false;
  }

}
