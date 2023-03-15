import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-size',
  templateUrl: './filter-size.component.html',
  styleUrls: ['./filter-size.component.scss'],
})
export class FilterSizeComponent implements OnInit {

  @Output() changeStatusFilterSize = new EventEmitter<boolean>;

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
        size.classList.toggle('active');

        if(validarFilterActive(sizeItems)) {
          this.changeStatusFilterSize.emit(true);
        } else {
          this.changeStatusFilterSize.emit(false);
        }
      })
    })

    function validarFilterActive(items: NodeListOf<HTMLDivElement>) {
      const status = [];
      items.forEach(item => {
        const classItem: boolean =  item.classList.contains('active')? true : false;
        status.push(classItem)
      })

      const newStatus = status.filter( e => e === true ).length === 0 ? true : false;

      return newStatus;
    }
  }

  toggleInfo() {
    const mySize: HTMLDivElement = this.mySize.nativeElement;
    mySize.classList.toggle('close');
    this.statusArrow = mySize.classList.contains('close')? true : false;
  }

}
