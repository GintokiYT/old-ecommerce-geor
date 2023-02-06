import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss'],
})
export class HeaderDetailComponent implements OnInit {

  @Input()
  title: string = ""

  constructor(private location: Location) { }

  ngOnInit() {}


  goBack(){
    this.location.back();
  }
}
