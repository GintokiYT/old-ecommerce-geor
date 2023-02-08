import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent extends ViewComponent implements OnInit {
  
constructor(private injector:Injector){
  super(injector)
}


ngOnInit() {
  
}

  goTo(path: string){
    this.navigation.back(path)
    console.log('ff')
  }
}