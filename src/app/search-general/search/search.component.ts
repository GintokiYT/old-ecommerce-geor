import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Location } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent extends ViewComponent implements OnInit {

  
  constructor(private location: Location, _injector: Injector) { 
    super(_injector);
  }

  goBack() {
    this.location.back();
  }


  goTo(path: string){
    this.navigation.back(path)
    console.log('ff')
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public data = ['acrilicos', 'planchas', 'acrilissdds', 'ropa'];
  public results = [...this.data];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

}