import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {

  @ViewChild('mySize') mySize: ElementRef;

  constructor() { }

  ngOnInit() {}

  toggleInfo(info: string) {
    const mySize: HTMLDivElement = this.mySize.nativeElement;

    switch(info) {
      case 'size':
        mySize.classList.toggle('close');
        break;
    }


  }
}
