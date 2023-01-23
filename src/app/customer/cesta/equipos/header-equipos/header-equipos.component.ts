import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-equipos',
  templateUrl: './header-equipos.component.html',
  styleUrls: ['./header-equipos.component.scss'],
})
export class HeaderEquiposComponent implements OnInit {
  @Input()
  title: string = ""

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

}
