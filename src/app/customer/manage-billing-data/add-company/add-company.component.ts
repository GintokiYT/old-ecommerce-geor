import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { IonContent, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent extends ViewComponent implements OnInit {

  form!: FormGroup;
  modalIsVisible : boolean = false;

  @ViewChild("inputType") inputType : IonInput;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild("ionId") inputId: IonInput;

  constructor(private _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {
    this.form = new FormGroup({

      type: new FormControl('', [
        Validators.required,
      ]),
      name: new FormControl('', [
        Validators.required,
      ]),
      id: new FormControl('', [
        Validators.required,
      ])
    });

  }


  onSubmit(){
    this.navigation.back("/customer/manage-billing-data")
  }


  focusType(){
    console.log("Hola")
    this.modalIsVisible = true;
  }
  
  focusId(){
    this.content.scrollToBottom()
  }

  closeModal(value){
    this.modalIsVisible = false;
  }

  setTypeBill(value){
    console.log(value)
    this.inputType.value = value;
    this.inputType.setFocus();
  }
}
