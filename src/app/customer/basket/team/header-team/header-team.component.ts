import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-team',
  templateUrl: './header-team.component.html',
  styleUrls: ['./header-team.component.scss'],
})
export class HeaderTeamComponent implements OnInit {
  @Input()
  title: string = ""

  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

}
