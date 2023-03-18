import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-team',
  templateUrl: './contact-team.component.html',
  styleUrls: ['./contact-team.component.scss'],
})
export class ContactTeamComponent extends ViewComponent implements OnInit {


  constructor( _injector: Injector, private location: Location, private router: Router ) {
    super(_injector);
   }

  ngOnInit() {}
//Mostramos la lista de contacto
public contact=['Jualiano del carmen','Anibal Cortez','Roberto Carlos de maracaná','Anibal Cortez','Roberto Carlos de maracaná','Jorge Laguna','Anibal Cortez'];
public number=['+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234','+51 971 945 234'];
public results = [...this.contact];

//Busca el nombre del contacto
handleChange(event) {
  const query = event.target.value.toLowerCase().trim();
  this.results = this.contact.filter(d => d.toLowerCase().indexOf(query) > -1);
}

//Selecciona los checkbox
oneTrue = false;
invitationsCount = 0;

checkBoxSelect(event: any) {
  if (event.detail.checked) {
   // console.log(event.detail.checked);
    this.invitationsCount++;
    this.oneTrue = true;
  } else {
    this.invitationsCount--;
    this.oneTrue = this.invitationsCount > 0;
  }
}

goBack(){
  this.navigation.back('/customer/collaborative-team');
}

goTeam(){

  const currentRouter = this.router.url;

  if(currentRouter === '/customer/collaborative-team/contact-team') {
    return this.navigation.forward('/customer/collaborative-team/team')
  }

  this.navigation.forward('/customer/team');
}

goContactSeatch(){

  const currentRouter = this.router.url;
  if(currentRouter === '/customer/collaborative-team/contact-team') {
    return this.navigation.forward('/customer/collaborative-team/contact-search')
  }

  this.navigation.forward('/customer/contact-search');
  }


}
