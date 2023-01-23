import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-cesta',
  templateUrl: './footer-cesta.component.html',
  styleUrls: ['./footer-cesta.component.scss'],
})
export class FooterCestaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  onActive(id: string) {
    const items = document.querySelectorAll('.inbox-footer__content--item');
    items.forEach(item => item.classList.remove('active'));

    const item = document.getElementById(id);
    item?.classList.add('active');
  }
}
