import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends ViewComponent implements OnInit {

 
  @Input() 
  title: string = ""

  constructor(private location: Location, _injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

  goTo(path:string){
    this.navigation.back(path)
  }


  }
