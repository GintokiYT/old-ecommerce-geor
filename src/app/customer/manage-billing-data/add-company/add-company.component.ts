import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { IonContent, IonInput } from '@ionic/angular';
import { Contacts } from "@capacitor-community/contacts"
import { ContactsService } from '../../../services/contacts.service';
import { Router } from '@angular/router';
import { BillingDataService } from '../../../services/billing-data.service';




@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent extends ViewComponent implements OnInit {



  form!: FormGroup;
  modalIsVisible: boolean = false;
  permission: string;
  inputValue: string = "Factura";
  contacts: any[];
  number: string | null = null;
  name: string | null = null;
  contactTemp: any;
  data: any[];
  previousRoute: string;
  statusModalSpinner: boolean = false;



  @ViewChild("inputType") inputType: IonInput;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild("ionId") inputId: IonInput;

  constructor(private _injector: Injector, private cs: ContactsService,
    private router: Router, private bs: BillingDataService) {
    super(_injector);
    this.bs.currentContactTemp$.subscribe(contact => {
      this.name = contact.name;
      this.number = contact.number;
      this.contactTemp = contact;
    })
    this.previousRoute = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.bs.currentBillingData$.subscribe(dataArr => this.data = dataArr);
    this.cs.currentContacts$.subscribe(c => this.contacts = c);
    this.cs.currentPermission$.subscribe(p => this.permission = p);
  }

  ngOnInit() {

    if (this.permission.length === 0) {
      this.CheckPermission();
    }

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
    const bill = {
      type: this.form.get("type").value,
      name: this.form.get("name").value,
      id: this.form.get("id").value.toString(),
      contact: this.contactTemp
    }

    this.data = [...this.data, bill];
    this.bs.setBillingData(this.data);

    this.bs.setContactTemp({
      name: null,
      number: null
    })

    this.navigation.back(this.previousRoute);
  }

  focusType() {
    this.modalIsVisible = true;
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
      this.cs.setPersmission(this.permission);
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
          this.cs.setPersmission(this.permission);
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "denied": // cuando se hace click en el background
          perm = await Contacts.requestPermissions();
          this.permission = perm.contacts;
          this.cs.setPersmission(this.permission);
          if (this.permission !== "denied") {
            this.requestPermissionContact();
          }
          break;

        case "granted": // se da en permitir
          if (this.contacts.length === 0) {
            this.statusModalSpinner = true;
            setTimeout(() => {
              this.navigation.forward("/customer/manage-billing-data/add-company/read-contacts")
              this.statusModalSpinner = false;
            }, 300);
          }else{
            this.navigation.forward("/customer/manage-billing-data/add-company/read-contacts")
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
