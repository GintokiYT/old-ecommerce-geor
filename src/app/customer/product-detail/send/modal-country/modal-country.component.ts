import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CountryService } from 'src/app/services/Country.service';

@Component({
  selector: 'app-modal-country',
  templateUrl: './modal-country.component.html',
  styleUrls: ['./modal-country.component.scss'],
})
export class ModalCountryComponent implements OnInit {



  @ViewChild('ContainerModal') ContainerModal: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  ngAfterViewInit() {
    const containermodal: HTMLDivElement = this.ContainerModal.nativeElement;
    containermodal.addEventListener('click', (event: Event) => {
      if(event.target === containermodal) {
        const modal: HTMLDivElement = this.modal.nativeElement;
        modal.classList.add('close-modal');
        setTimeout(() => {
          this.country.setStatusModalCountry(false);

        }, 250);
      }
    })
  }


  constructor(private country:CountryService,private cdr: ChangeDetectorRef) { }

  ngOnInit() {}

  public data = [ 'Perú ','Argentina','Chile'];
  public results = [...this.data];

  public dataCountries: any[] = [
    {
      country: "Perú",
      flag: "/assets/flags/pe.svg",

      selected: true
    },
    {
      country: "Argentina",
      flag: "/assets/flags/ar.svg",
      selected: false
    },
    {
      country: "Chile",
      flag: "/assets/flags/cl.svg",
      selected: false
    },
    // Agregar más países aquí...
  ];
  public dataCountriesResults = [...this.dataCountries];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.dataCountriesResults = this.dataCountries.filter(d => d.country.toLowerCase().indexOf(query) > -1);
  }

//
@Output() countrySelected = new EventEmitter<any>();

//selectedCountry = null;
onCountrySelected(country: any) {
 this.countrySelected.emit(country);

}

//icono

}
