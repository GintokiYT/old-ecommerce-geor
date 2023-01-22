import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent implements OnInit {

  @Input() 
  title: string = ""

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

}
