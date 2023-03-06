import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-document-type',
  templateUrl: './popup-document-type.component.html',
  styleUrls: ['./popup-document-type.component.scss'],
})
export class PopupDocumentTypeComponent implements OnInit {

  @Input('popupDocumentType') popupDocumentType: boolean;
  @Output() changeStatusPopupDocumentType = new EventEmitter<boolean>();
  @Output() changeDocumentForm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  closePopupDocumentType(event: Event) {
    const containerpopup: HTMLDivElement = document.querySelector('.container-popup');

    if(event.target === containerpopup) {
      const popup = containerpopup.querySelector('.popup');
      popup.classList.remove('active');
      popup.classList.add('disabled');
      setTimeout(() => {
        this.changeStatusPopupDocumentType.emit(false);
      }, 300);
    }
  }

  selectOption(option: string) {
    const popup = document.querySelector('.popup');
    popup.classList.remove('active');
    popup.classList.add('disabled');
    this.changeDocumentForm.emit(option);
    setTimeout(() => {
      this.changeStatusPopupDocumentType.emit(false);
    }, 300);
  }
}
