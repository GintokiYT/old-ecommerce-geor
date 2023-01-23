import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-footer-cesta',
  templateUrl: './footer-cesta.component.html',
  styleUrls: ['./footer-cesta.component.scss'],
})
export class FooterCestaComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() { }
  onActive(id: string) {
    const items = document.querySelectorAll('.inbox-footer__content--item');
    items.forEach(item => item.classList.remove('active'));

    const item = document.getElementById(id);
    item?.classList.add('active');
    this.navigation.forward("/customer/main-inbox")
  }
}
