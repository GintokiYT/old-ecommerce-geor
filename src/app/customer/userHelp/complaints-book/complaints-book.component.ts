import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-complaints-book',
  templateUrl: './complaints-book.component.html',
  styleUrls: ['./complaints-book.component.scss'],
})
export class ComplaintsBookComponent extends ViewComponent implements OnInit {

  popupDocumentType: boolean = false;
  popupDepartments: boolean = false;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {

  }

  FormControlFormulary = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastNameMother: new FormControl('', [Validators.required, Validators.minLength(2)]),
    document: new FormControl('', [Validators.required, Validators.minLength(2)]),
    numberDocument: new FormControl('', [Validators.required]),
    email: new FormControl('',Validators.email),
    telefono: new FormControl('', [Validators.pattern("^[0-9]{7}$")]),
    celular: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")]),
    departament: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(4)]),
    asunto: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  submitFormulary() {
    this.navigation.forward('/customer/user-help/complaints-book/thanks');
  }

  //* Popup Document Type
  openPopupDocumentType() {
    this.popupDocumentType = true;
  }
  changeStatusPopupDocumentType(status: boolean) {
    this.popupDocumentType = status;
  }
  changeDocumentForm(value: string) {
    this.FormControlFormulary.get('document').setValue(value);
  }

  //* Popup Departments
  openPopupDepartments() {
    this.popupDepartments = true;
  }
  changeStatusPopupDepartments(status: boolean) {
    this.popupDepartments = status;
  }
  changeDepartmentsForm(value: string) {
    this.FormControlFormulary.get('departament').setValue(value);
  }

  //* Popup thanks


  onToBack() {
    this.navigation.back('/customer/user-help');
  }
}
