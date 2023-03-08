import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { IonContent, IonInput } from '@ionic/angular';
import { Contacts } from "@capacitor-community/contacts"




// import { Plugins, ContactPermissionResponse } from '@capacitor/core';
import { ContactsService } from '../../../services/contacts.service';

// const { Contacts } = Plugins;

// ...

// // Función que se llama para solicitar permisos de acceso a los contactos
// async requestContactPermissions() {
//   const { results } = await Contacts.requestPermissions();
//   console.log('Permission response: ', results);
//   // Hacer algo con los resultados de la solicitud de permisos
// }


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent extends ViewComponent implements OnInit {



  form!: FormGroup;
  modalIsVisible: boolean = false;
  permission: any = "granted";
  inputValue: string = "Factura";
  contacts : any[];


  @ViewChild("inputType") inputType: IonInput;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild("ionId") inputId: IonInput;

  constructor(private _injector: Injector, private cs: ContactsService) {
    super(_injector)
  }

  ngOnInit() {

    this.CheckPermission();

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

  onSubmit() {
    this.navigation.back("/customer/manage-billing-data")
  }

  focusType() {
    this.modalIsVisible = true;
  }

  focusId() {
    this.content.scrollToBottom()
  }

  closeModal(value) {
    this.modalIsVisible = false;
  }

  setTypeBill(value) {
    this.inputType.value = value;
    this.inputValue = value;
    this.inputType.setFocus();
  }

  async CheckPermission() {
    try {
      const perm = await Contacts.checkPermissions();
      this.permission = perm.contacts;
    } catch (e) {
      console.log(e)
    }
  }

  async requestPermissionContact() {
    try {
      let perm;
      switch (this.permission) {
        case "prompt": // inicial
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "denied": // cuando se hace click en el background
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "granted": // se da en permitir
          try {
            const result = await Contacts.getContacts({
              projection: {
                name: true,
                phones: true
              }
            })
            this.contacts = result.contacts;
            this.cs.setContactsData(this.contacts);
            this.navigation.forward("/customer/manage-billing-data/add-company/read-contacts");
          } catch (e) {
            console.log(e)
          }
          break;

        case "prompt-with-rationale": // cuando se da en denegar
          this.navigation.forward("/customer/manage-billing-data/add-company/set-contact"); break;

      }
    }
    catch (e) {
      console.log(e)
    }
  }
}
