import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-complaints-book',
  templateUrl: './complaints-book.component.html',
  styleUrls: ['./complaints-book.component.scss'],
})
export class ComplaintsBookComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {

  }

  FormControlFormulary = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName:new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastNameMother:new FormControl('', [Validators.required, Validators.minLength(2)]),
    document:new FormControl('', [Validators.required, Validators.minLength(2)]),
    numberDocument:new FormControl('', [Validators.required]),
    email:new FormControl('',Validators.email),
    telefono:new FormControl('', [Validators.pattern("^[0-9]{6}$")]),
    celular:new FormControl('', [Validators.required, Validators.pattern("^[0-9]{9}$")]),
    departament:new FormControl('', [Validators.required]),
    direccion:new FormControl('', [Validators.required, Validators.minLength(4)]),
    asunto:new FormControl('', [Validators.required]),
    description:new FormControl('', [Validators.required]),
  });

  submitFormulary(){

  }

  onToBack() {
    this.navigation.back('/customer/user-help');
  }
}
