import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-size',
  templateUrl: './filter-size.component.html',
  styleUrls: ['./filter-size.component.scss'],
})
export class FilterSizeComponent implements OnInit {

  @ViewChild('mySize') mySize: ElementRef;

  statusArrow: boolean;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const mySize:HTMLDivElement = this.mySize.nativeElement;
    const sizeItems: NodeListOf<HTMLDivElement> = mySize.querySelectorAll('.size');

    this.statusArrow = mySize.classList.contains('close')? true : false;

    sizeItems.forEach( size => {
      size.addEventListener('click', () => {
        size.classList.toggle('active')
      })
    })
  }

  toggleInfo() {
    const mySize: HTMLDivElement = this.mySize.nativeElement;
    mySize.classList.toggle('close');
    this.statusArrow = mySize.classList.contains('close')? true : false;
  }

}
