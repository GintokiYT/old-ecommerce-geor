import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-color',
  templateUrl: './filter-color.component.html',
  styleUrls: ['./filter-color.component.scss'],
})
export class FilterColorComponent implements OnInit {

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
      })
    })
  }

  toggleInfo() {
    const myColor: HTMLDivElement = this.myColor.nativeElement;
    myColor.classList.toggle('close');
    this.statusArrow = myColor.classList.contains('close')? true : false;
  }

}
