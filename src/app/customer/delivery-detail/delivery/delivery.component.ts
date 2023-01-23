import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {

  @Input() 
  title: string = ""

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }
  }