import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss'],
})
export class FooterMainComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  onActive(id: string) {
    const items = document.querySelectorAll('.inbox-footer__content--item');
    items.forEach(item => item.classList.remove('active'));

    const item = document.getElementById(id);
    item?.classList.add('active');

    if(id === 'Buy') {
      return this.navigation.root('/customer/cesta-colaborativa', 'forward');
    }
  }
}
