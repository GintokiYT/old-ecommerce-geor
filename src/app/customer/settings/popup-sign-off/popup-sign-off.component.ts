import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { LoginService } from '../../../account/services/login.service';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-popup-sign-off',
  templateUrl: './popup-sign-off.component.html',
  styleUrls: ['./popup-sign-off.component.scss'],
})
export class PopupSignOffComponent extends ViewComponent implements OnInit {

  @Output() statusEvent = new EventEmitter<boolean>();

  constructor(_injector: Injector, private loginService: LoginService) {
    super(_injector)
  }

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

  onLogout() {
    this.statusEvent.emit(false);
    setTimeout(() => {
      this.loginService.setUserLogged(false);
      this.navigation.back('/customer/home');
    }, 250)
  }
}
