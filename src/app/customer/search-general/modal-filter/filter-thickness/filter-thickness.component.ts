import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-thickness',
  templateUrl: './filter-thickness.component.html',
  styleUrls: ['./filter-thickness.component.scss'],
})
export class FilterThicknessComponent implements OnInit {

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
        thickness.classList.toggle('active')
      })
    })
  }

  toggleInfo() {
    const myThickness: HTMLDivElement = this.myThickness.nativeElement;
    myThickness.classList.toggle('close');
    this.statusArrow = myThickness.classList.contains('close')? true : false;
  }

}
