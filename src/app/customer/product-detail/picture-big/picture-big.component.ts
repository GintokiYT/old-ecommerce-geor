import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-picture-big',
  templateUrl: './picture-big.component.html',
  styleUrls: ['./picture-big.component.scss'],
})
export class PictureBigComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}


  goBack(){
    this.location.back();
  }
}
