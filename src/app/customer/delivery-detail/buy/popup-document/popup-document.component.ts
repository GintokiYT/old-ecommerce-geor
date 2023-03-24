import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-document',
  templateUrl: './popup-document.component.html',
  styleUrls: ['./popup-document.component.scss'],
})
export class PopupDocumentComponent implements OnInit {
  selectedOption: string = '';
  @Input('popupDocument') popupDocument: boolean;
  @Output() changeStatusPopupDocument = new EventEmitter<boolean>();
  @Output() changeDocumentForm = new EventEmitter<string>();

  constructor() {
     // Recupera la opción seleccionada del almacenamiento local (si existe)
  const storedOption = localStorage.getItem('selectedOption');
  if (storedOption) {
    this.selectedOption = storedOption;
  }
   // Agrega el evento window:beforeunload para eliminar la clave del localStorage al cerrar o actualizar la página
   window.addEventListener('beforeunload', () => {
    localStorage.removeItem('selectedOption');

  // Agrega el evento window:popstate para manejar la navegación hacia atrás o adelante en el historial del navegador
    window.addEventListener('popstate', () => {
      localStorage.removeItem('selectedOption');
      this.selectedOption = null;
    });
  });

  }

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
    this.selectedOption = option;

    if (option) {
      // Oculta todos los íconos de checkmark
      const icons = document.querySelectorAll('.ion-icon');
      icons.forEach(icon => {
        icon.classList.add('hide-icon');
      });

      // Muestra el ícono de checkmark correspondiente a la opción seleccionada
      const selectedIcon = document.querySelector(`[data-option="${option}"]`);
      selectedIcon.classList.remove('hide-icon');

      // Actualiza la opción seleccionada y la guarda en el almacenamiento local
      this.selectedOption = option;
      localStorage.setItem('selectedOption', option);
    } else {
      // Borra la opción guardada del almacenamiento local si no se selecciona ninguna opción
      localStorage.removeItem('selectedOption');
    }
  }
}
