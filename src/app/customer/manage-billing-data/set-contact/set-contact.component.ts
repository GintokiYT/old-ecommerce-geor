import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-set-contact',
  templateUrl: './set-contact.component.html',
  styleUrls: ['./set-contact.component.scss'],
})
export class SetContactComponent extends ViewComponent implements OnInit {

  form!: FormGroup;
  @ViewChild(IonContent) content: IonContent;

  constructor(private _injector: Injector) {
    super(_injector);
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
    this.navigation.back("/customer/manage-billing-data/add-company")
  }

  checkFocusEmail(){
    this.content.scrollToBottom();
  }

}
