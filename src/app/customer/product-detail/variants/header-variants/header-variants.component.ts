import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-variants',
  templateUrl: './header-variants.component.html',
  styleUrls: ['./header-variants.component.scss'],
})
export class HeaderVariantsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}


  goBack(){
    this.location.back();
  }
}
