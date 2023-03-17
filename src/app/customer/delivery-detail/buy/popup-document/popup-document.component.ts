import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-document',
  templateUrl: './popup-document.component.html',
  styleUrls: ['./popup-document.component.scss'],
})
export class PopupDocumentComponent implements OnInit {

  @Input('popupDocument') popupDocument: boolean;
  @Output() changeStatusPopupDocument = new EventEmitter<boolean>();
  @Output() changeDocumentForm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  closePopupDocument(event: Event) {
    const containerpopup: HTMLDivElement = document.querySelector('.container-popup');

    if(event.target === containerpopup) {
      const popup = containerpopup.querySelector('.popup');
      popup.classList.remove('active');
      popup.classList.add('disabled');
      setTimeout(() => {
        this.changeStatusPopupDocument.emit(false);
      }, 300);
    }
  }

  selectOption(option: string) {
    const popup = document.querySelector('.popup');
    popup.classList.remove('active');
    popup.classList.add('disabled');
    this.changeDocumentForm.emit(option);
    setTimeout(() => {
      this.changeStatusPopupDocument.emit(false);
    }, 300);
  }
}
