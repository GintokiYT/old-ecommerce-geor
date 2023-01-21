import { AppNavigationService } from '@geor360/ecore';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import CountryInterface from 'src/app/interfaces/CountryInterface';
import { RouteCollection } from 'src/shared/route-collection';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
})
export class SelectCountryComponent implements OnInit {
  public countries: CountryInterface[] = [];
  public selectCountryForm!: FormGroup;
  public isEmptyForm: boolean = true;

  constructor(
    private fb: FormBuilder,
    private navigator: AppNavigationService
  ) {}

  ngOnInit() {
    this.countries = [
      { id: 'PE', name: 'Perú', flag: './assets/flags/pe.svg' },
      { id: 'AR', name: 'Argentina', flag: './assets/flags/ar.svg' },
      { id: 'CL', name: 'Chile', flag: './assets/flags/cl.svg' },
    ];
    this.selectCountryForm = this.onInitForm();

    this.selectCountryForm.valueChanges.subscribe((values) => {
      if (values.country_id) {
        this.isEmptyForm = false;
      }
    });
  }

  onInitForm(): FormGroup {
    return this.fb.group({
      country_id: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.navigator.forward(RouteCollection.account.welcome.wheAreYou);
  }
}
