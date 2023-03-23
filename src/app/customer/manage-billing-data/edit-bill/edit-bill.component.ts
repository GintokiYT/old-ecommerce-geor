import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingDataService } from '../../../services/billing-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { IonInput } from '@ionic/angular';
import { Contacts } from "@capacitor-community/contacts"
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss'],
})
export class EditBillComponent extends ViewComponent implements OnInit {

  id: string;
  bill: any;

  form!: FormGroup;
  number: string | null = null;
  name: string | null = null;
  contactTemp: any;
  modalIsVisible: boolean = false;
  inputValue: string;
  nameValue: string;
  idValue: string;
  permission: string;
  contacts: any[];
  statusModalSpinner: boolean = false;
  billingData : any[];
  previousRoute: string;

  @ViewChild("inputType") inputType: IonInput;

  constructor(private _injector: Injector,
    private activatedRoute: ActivatedRoute,
    private bds: BillingDataService, private cs: ContactsService,
    private bs: BillingDataService, private router: Router) {
    super(_injector);
    this.bs.currentContactTemp$.subscribe(contact => {
      this.contactTemp = contact;
      this.number = contact.number;
      this.name = contact.name;
    })
    this.previousRoute = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.cs.currentContacts$.subscribe( d => this.contacts = d);
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

    //obtener el id de los parametros
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.id = id;
      })

    //obtener el bill segun el id
    this.bs.currentBillingData$.subscribe( dataArr => this.billingData = dataArr);
    this.bill = this.billingData.filter( b => b.id === this.id)[0];



    this.inputValue = this.bill.type;
    this.nameValue = this.bill.name;
    this.idValue = this.bill.id;
    this.number = this.bill.contact.number;
    this.name = this.bill.contact.name;

  }


  onSubmit() {

    const newContact = (this.contactTemp.name===null) ? this.bill.contact : this.contactTemp;

    const newBill = {
      type: this.form.get("type").value,
      name: this.form.get("name").value,
      id: this.form.get("id").value.toString(),
      contact: newContact
    }

    let auxData = this.billingData.filter( d => d.id!==this.id);
    auxData = [...auxData,newBill];
    this.bds.setBillingData(auxData);


    this.bds.setContactTemp( {
      name : null,
      number: null
    } )

    console.log(this.previousRoute);
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
          // try {
          //   if(this.contacts.length===0){
          //     const result = await Contacts.getContacts({
          //       projection: {
          //         name: true,
          //         phones: true
          //       }
          //     })
          //     this.contacts = result.contacts;
          //     this.cs.setContactsData(this.contacts);
          //   }
          //   this.navigation.forward("/customer/manage-billing-data/add-company/read-contacts")
          // } catch (e) {
          //   console.log(e)
          // }
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
