import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-color',
  templateUrl: './filter-color.component.html',
  styleUrls: ['./filter-color.component.scss'],
})
export class FilterColorComponent implements OnInit {

  @Output() changeStatusFilterColor = new EventEmitter<boolean>();

  @ViewChild('myColor') myColor: ElementRef;

  statusArrow: boolean;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const myColor:HTMLDivElement = this.myColor.nativeElement;
    const colorItems: NodeListOf<HTMLDivElement> = myColor.querySelectorAll('.color');

    this.statusArrow = myColor.classList.contains('close')? true : false;

    colorItems.forEach( color => {
      color.addEventListener('click', () => {
        color.classList.toggle('active')

        if(validarFilterActive(colorItems)) {
          this.changeStatusFilterColor.emit(true);
        } else {
          this.changeStatusFilterColor.emit(false);
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
    const myColor: HTMLDivElement = this.myColor.nativeElement;
    myColor.classList.toggle('close');
    this.statusArrow = myColor.classList.contains('close')? true : false;
  }

}
