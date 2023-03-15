import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {

  @Output() changeStatusFilter = new EventEmitter<boolean>();
  @ViewChild('mySize') mySize: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log();
  }

  closeFilter() {
    this.changeStatusFilter.emit(false);
  }


  // toggleInfo(info: string) {
  //   const mySize: HTMLDivElement = this.mySize.nativeElement;

  //   switch(info) {
  //     case 'size':
  //       mySize.classList.toggle('close');
  //       break;
  //   }
  // }
}
