import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent extends ViewComponent implements OnInit {
  constructor(private injector: Injector) {
    super(injector)
  }

  ngOnInit() { }


  goTo(path: string) {
    this.navigation.forward(path)
    console.log('ff')
  }
  back(){
    this.navigation.root('/customer/catalogue','back');
  }
}


