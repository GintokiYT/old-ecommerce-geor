import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-contact-team',
  templateUrl: './contact-team.component.html',
  styleUrls: ['./contact-team.component.scss'],
})
export class ContactTeamComponent extends ViewComponent implements OnInit {

  oneTrue:boolean=true;
  constructor( _injector: Injector, private location: Location ) {
    super(_injector);
   }

  ngOnInit() {}

  data: any[] = [
    {
      id: 0,
      selected: false,
    },
    {
      id:1,
      selected: false,
    },
    {
      id:2,
      selected: false,
    },
    {
      id:3,
      selected: false,
    },
    {
      id:4,
      selected: false,
    },
    {
      id:5,
      selected: false,
    },
    {
      id:6,
      selected: false,
    },
  ]

  goBack(){
    this.location.back();
  }
  goTeam(){
    this.navigation.root('/customer/team','forward');

  }
  goContactSeatch(){
    this.navigation.root('/customer/contact-search','forward');
  }

  checkBoxSelect(id: number) {
    const falses = this.data.filter( element => element.id!==id);
    const trues = this.data.filter(element => element.selected===true);
    falses.forEach( element => {
    element.selected = false;
    })
    if(trues.length>0){
      this.oneTrue = false;
    }else{
      this.oneTrue = true;
    }
  }
}
