import { Component, OnInit, Injector } from '@angular/core';
import { AddressesService } from '../../../services/addresses.service';
import { ViewComponent } from '@geor360/ecore';
import { RouteService } from '../../../services/route.service';

@Component({
  selector: 'app-addresses-delete',
  templateUrl: './addresses-delete.component.html',
  styleUrls: ['./addresses-delete.component.scss'],
})
export class AddressesDeleteComponent extends ViewComponent implements OnInit {

  directionsData: any[];
  oneTrue: boolean = false;
  modalIsVisible: boolean = false;

  constructor(private _injector: Injector, private ads: AddressesService,
    private rs : RouteService) {
    super(_injector)
    this.ads.currentAddressesData.subscribe(data => this.directionsData = data);
    this.directionsData = this.directionsData.map( (bill,index) => {
      const i = index+1;
      const naddr = {
        indice: i,
        selected: false,
        ...bill
      }
      return naddr;
    })
  }

  ngOnInit() { }

  goToMap(){
    this.rs.setMyLocationLastBackDirection("/customer/manage-addresses/addresses-delete");
    this.navigation.root("/account/welcome/my-location","forward");
  }

  goToAddressesDelete() {
    this.navigation.forward("customer/manage-addresses/addresses-delete");
  }

  deleteBills() {
    this.modalIsVisible = true;
  }

  closeModal(value) {
    if (value.btnEliminar) {
      if (this.oneTrue) {
        const notSelected = this.directionsData.filter(bill => !bill.selected);
        const notSelectedFormated = notSelected.map(bill => {
          const { indice, selected, ...billFormated } = bill;
          return billFormated;
        })
        this.ads.setAddressesData(notSelectedFormated);
        this.oneTrue = false;
        this.modalIsVisible = false;
      }
    } else {
      this.modalIsVisible = value;
    }
  }

  checkBoxChange() {
    const trues = this.directionsData.filter(bill => bill.selected);
    this.oneTrue = trues.length > 0 ? true : false;
  }

  clickAroundTheCheckbox(i:number){
    const selected = this.directionsData.find( b => b.indice === i);
    selected.selected = !selected.selected;
    this.oneTrue = true;
  }

}
