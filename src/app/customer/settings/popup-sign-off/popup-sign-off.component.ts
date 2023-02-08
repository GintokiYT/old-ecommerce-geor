import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-sign-off',
  templateUrl: './popup-sign-off.component.html',
  styleUrls: ['./popup-sign-off.component.scss'],
})
export class PopupSignOffComponent implements OnInit {

  @Output() statusEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  closeModal(event: Event) {
    const containerModal: HTMLDivElement = document.querySelector('.container-popup-sign-off');
    const modal: HTMLDivElement = document.querySelector('.popup-sign-off');
      if(event.target === containerModal) {
        modal.classList.add('animation-close');
        setTimeout(() => {
          this.statusEvent.emit(false);
        }, 250);
      }
  }

  onClick() {
    const modal: HTMLDivElement = document.querySelector('.popup-sign-off');
    modal.classList.add('animation-close');
    setTimeout(() => {
      this.statusEvent.emit(false);
    }, 250);
  }
}
