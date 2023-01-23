import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss'],
})
export class FooterMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onActive(id: string) {
    const items = document.querySelectorAll('.inbox-footer__content--item');
    items.forEach(item => item.classList.remove('active'));

    const item = document.getElementById(id);
    item?.classList.add('active');
  }
}
