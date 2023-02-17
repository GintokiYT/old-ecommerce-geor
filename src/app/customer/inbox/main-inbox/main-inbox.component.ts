import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { StatusBar } from '@capacitor/status-bar';

interface Email {
  id: string;
  image: string;
  title: string;
  time: string;
  description: string;
  sender?: string;
}

@Component({
  selector: 'app-main-inbox',
  templateUrl: './main-inbox.component.html',
  styleUrls: ['./main-inbox.component.scss', '../../../../theme/personalizado.scss']
})
export class MainInboxComponent extends ViewComponent implements OnInit {

  emails: Email[] = [
    {
      id: '1',
      image: '/assets/images/inbox/Avatar.jpg',
      title: 'Bienvenida',
      time: '7:23',
      description: 'Wilfredo, estamos felices que seas parte de'
    },
    {
      id: '2',
      image: '/assets/images/inbox/Avatar.jpg',
      title: 'Pedido #2345',
      time: '7:23',
      description: 'EN PROCESO'
    },
    {
      id: '3',
      image: '/assets/images/inbox/Avatar.jpg',
      title: 'Pedido #2345',
      time: '7:23',
      description: 'EN PROCESO',
      sender: 'Gerardo Ortíz'
    }
  ]

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  openInternalBox(id: string) {
    this.navigation.root('/customer/internal-inbox/' + id, 'forward');
  }

  changeMode() {
    const body = document.querySelector('body');

    if(body.classList.contains('dark')) {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('mode', 'light');
    }else {
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem('mode', 'dark');
    }

    const color = localStorage.getItem('mode') === 'dark'? '#05050f' : '#023AFF';
    StatusBar.setBackgroundColor({ color });
  }
}
