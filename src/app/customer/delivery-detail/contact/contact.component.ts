import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

 
  @Input() 
  title: string = ""

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

}