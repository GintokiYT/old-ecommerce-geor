import { Component, OnInit } from '@angular/core';

interface Email {
  id: number;
  image: string;
  title: string;
  time: string;
  description: string;
  sender?: string;
}

@Component({
  selector: 'app-main-inbox',
  templateUrl: './main-inbox.component.html',
  styleUrls: ['./main-inbox.component.scss']
})
export class MainInboxComponent implements OnInit {

  emails: Email[] = [
    {
      id: 1,
      image: '/assets/images/inbox/Avatar.jpg',
      title: 'Bienvenida',
      time: '7:23',
      description: 'Wilfredo, estamos felices que seas parte de'
    },
    {
      id: 2,
      image: '/assets/images/inbox/Avatar.jpg',
      title: 'Pedido #2345',
      time: '7:23',
      description: 'EN PROCESO'
    },
    {
      id: 3,
      image: '/assets/images/inbox/Avatar.jpg',
      title: 'Pedido #2345',
      time: '7:23',
      description: 'EN PROCESO',
      sender: 'Gerardo Ortíz'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onActive(id: string) {
    const items = document.querySelectorAll('.inbox-footer__content--item');
    items.forEach(item => item.classList.remove('active'));

    const item = document.getElementById(id);
    item?.classList.add('active');
  }
}
