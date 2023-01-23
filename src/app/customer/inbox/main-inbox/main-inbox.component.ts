import { Component, Injector, OnInit } from '@angular/core';
import { AppThemeService, ViewComponent } from '@geor360/ecore';

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
  styleUrls: ['./main-inbox.component.scss']
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

  private themeService: AppThemeService;

  constructor(_injector: Injector) {
    super(_injector);
    this.themeService = _injector.get(AppThemeService);
  }

  ngOnInit() {
    // localStorage.setItem('mode', 'light');
  }

  openInternalBox(id: string) {
    this.navigation.root('/customer/internal-inbox/' + id, 'forward');
  }
}
