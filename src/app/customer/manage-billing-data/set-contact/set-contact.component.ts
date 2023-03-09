import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { IonContent } from '@ionic/angular';
import { BillingDataService } from '../../../services/billing-data.service';
import { RouteService } from '../../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-contact',
  templateUrl: './set-contact.component.html',
  styleUrls: ['./set-contact.component.scss'],
})
export class SetContactComponent extends ViewComponent implements OnInit {

  form!: FormGroup;
  contact : any;
  backSubmitDirection : string;
  previousRoute: string;
  @ViewChild(IonContent) content: IonContent;


  constructor(private _injector: Injector, private bds: BillingDataService,
    private rs: RouteService, private router: Router) {
    super(_injector);
    this.rs.currentSetContactLastSubmitBackDirection.subscribe( d => this.backSubmitDirection=d)
    this.previousRoute = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
   }

  ngOnInit() {

    this.form = new FormGroup({

      name: new FormControl('', [
        Validators.required,
      ]),
      surnames: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ])
    });

  }

  onSubmit() {
    const contact = {
      name: this.form.get("name").value,
      number: this.form.get("phone").value.toString()
    }
    this.bds.setContactTemp(contact);

    console.log("Previous route: "+ this.previousRoute)
    console.log("BackSubmitDirection: "+ this.backSubmitDirection)

    if(this.previousRoute.includes("read-contacts")){
      this.navigation.back(this.backSubmitDirection);
    }else{
      this.navigation.back(this.previousRoute);
    }

  }

  checkFocusEmail(){
    this.content.scrollToBottom();
  }

}
