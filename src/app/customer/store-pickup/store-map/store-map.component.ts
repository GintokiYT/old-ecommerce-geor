import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.scss'],
})
export class StoreMapComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }


}
