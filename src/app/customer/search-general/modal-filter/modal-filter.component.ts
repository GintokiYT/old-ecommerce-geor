import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {

  @Output() changeStatusFilter = new EventEmitter<boolean>();
  @ViewChild('mySize') mySize: ElementRef;

  statusButtonClear: boolean = true;

  statusFilterSize: boolean = true;
  statusFilterThickness: boolean = true;
  statusFilterColor: boolean = true;

  constructor() {}

  ngOnInit() {
    console.log();
  }

  closeFilter() {
    const modalcontainer: HTMLDivElement = document.querySelector('.modal-container');
    modalcontainer.classList.remove('open');
    modalcontainer.classList.add('close');

    setTimeout( () => this.changeStatusFilter.emit(false), 300);
  }

  changeStatusFilterSize(status: boolean) {
    this.statusFilterSize = status;

    if(this.statusFilterSize === false || this.statusFilterThickness === false || this.statusFilterColor === false) {
      this.statusButtonClear = false;
    } else {
      this.statusButtonClear = true;
    }
  }

}
