import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-thickness',
  templateUrl: './filter-thickness.component.html',
  styleUrls: ['./filter-thickness.component.scss'],
})
export class FilterThicknessComponent implements OnInit {

  @Output() changeStatusFilterThickness = new EventEmitter<boolean>;

  @ViewChild('myThickness') myThickness: ElementRef;

  statusArrow: boolean;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const myThickness:HTMLDivElement = this.myThickness.nativeElement;
    const thicknessItems: NodeListOf<HTMLDivElement> = myThickness.querySelectorAll('.thickness');

    this.statusArrow = myThickness.classList.contains('close')? true : false;

    thicknessItems.forEach( thickness => {
      thickness.addEventListener('click', () => {
        thickness.classList.toggle('active');

        if(validarFilterActive(thicknessItems)) {
          this.changeStatusFilterThickness.emit(true);
        } else {
          this.changeStatusFilterThickness.emit(false);
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
    const myThickness: HTMLDivElement = this.myThickness.nativeElement;
    myThickness.classList.toggle('close');
    this.statusArrow = myThickness.classList.contains('close')? true : false;
  }

}
